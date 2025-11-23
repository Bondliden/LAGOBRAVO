# Lago Bravo Integrated Resorts - Código Completo del Proyecto

## Información del Proyecto
- **Nombre:** Lago Bravo Integrated Resorts Website
- **Stack:** React + Express + PostgreSQL
- **Framework Frontend:** React con TypeScript, Tailwind CSS, Shadcn UI
- **Framework Backend:** Express.js con TypeScript
- **Base de Datos:** PostgreSQL con Drizzle ORM

---

## 📁 Estructura del Proyecto

```
lago-bravo-integrated-resorts/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes UI
│   │   ├── lib/          # Utilidades y configuración
│   │   ├── pages/        # Páginas de la aplicación
│   │   └── styles/       # Estilos CSS
│   └── public/           # Archivos estáticos
├── server/                # Backend Express
│   ├── index.ts          # Punto de entrada del servidor
│   ├── routes.ts         # Rutas API
│   ├── storage.ts        # Capa de almacenamiento
│   └── db.ts            # Conexión a base de datos
├── shared/               # Código compartido
│   └── schema.ts        # Esquemas de base de datos
└── dist/                # Build de producción
```

---

## 🎯 Frontend - Cliente React

### `client/src/main.tsx`
```typescript
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### `client/src/App.tsx`
```typescript
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
```

### `client/src/pages/home.tsx`
```typescript
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Golf from "@/components/sections/golf";
import Marina from "@/components/sections/marina";
import RealEstate from "@/components/sections/real-estate";
import Accommodations from "@/components/sections/accommodations";
import Weddings from "@/components/sections/weddings";
import Casino from "@/components/sections/casino";
import Events from "@/components/sections/events";
import Dining from "@/components/sections/dining";
import Nightlife from "@/components/sections/nightlife";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Golf />
      <Marina />
      <RealEstate />
      <Accommodations />
      <Weddings />
      <Casino />
      <Events />
      <Dining />
      <Nightlife />
      <Contact />
      <Footer />
    </div>
  );
}
```

---

## 🔧 Backend - Servidor Express

### `server/index.ts`
```typescript
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
```

### `server/routes.ts`
```typescript
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema, insertWeddingInquirySchema, insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import { fileURLToPath } from "url";

export async function registerRoutes(app: Express): Promise<Server> {
  // Reservation endpoints
  app.post("/api/reservations", async (req, res) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      res.json({ success: true, reservation });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to create reservation" 
        });
      }
    }
  });

  app.get("/api/reservations", async (req, res) => {
    try {
      const reservations = await storage.getReservations();
      res.json({ success: true, reservations });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch reservations" 
      });
    }
  });

  // Wedding inquiry endpoints
  app.post("/api/wedding-inquiries", async (req, res) => {
    try {
      const validatedData = insertWeddingInquirySchema.parse(req.body);
      const inquiry = await storage.createWeddingInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to create wedding inquiry" 
        });
      }
    }
  });

  app.get("/api/wedding-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getWeddingInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch wedding inquiries" 
      });
    }
  });

  // Newsletter subscription endpoints
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscription = await storage.subscribeNewsletter(validatedData);
      res.json({ success: true, subscription });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else if (error instanceof Error && error.message === "Email already subscribed to newsletter") {
        res.status(409).json({ 
          success: false, 
          message: "Email already subscribed to newsletter" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to subscribe to newsletter" 
        });
      }
    }
  });

  // Download endpoint for Hostinger ZIP
  app.get("/download-hostinger", (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const zipPath = path.join(__dirname, '..', 'hostinger-upload.zip');
    
    res.download(zipPath, 'hostinger-upload.zip', (err) => {
      if (err) {
        console.error('Download error:', err);
        res.status(404).send('File not found');
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
```

### `server/storage.ts`
```typescript
import { 
  users, 
  reservations,
  weddingInquiries,
  newsletterSubscriptions,
  type User, 
  type InsertUser,
  type Reservation,
  type InsertReservation,
  type WeddingInquiry,
  type InsertWeddingInquiry,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Reservation methods
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservations(): Promise<Reservation[]>;
  getReservation(id: number): Promise<Reservation | undefined>;
  
  // Wedding inquiry methods
  createWeddingInquiry(inquiry: InsertWeddingInquiry): Promise<WeddingInquiry>;
  getWeddingInquiries(): Promise<WeddingInquiry[]>;
  
  // Newsletter subscription methods
  subscribeNewsletter(subscription: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
}

// DatabaseStorage implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const [reservation] = await db
      .insert(reservations)
      .values(insertReservation)
      .returning();
    return reservation;
  }

  async getReservations(): Promise<Reservation[]> {
    return await db.select().from(reservations);
  }

  async getReservation(id: number): Promise<Reservation | undefined> {
    const [reservation] = await db.select().from(reservations).where(eq(reservations.id, id));
    return reservation || undefined;
  }

  async createWeddingInquiry(insertWeddingInquiry: InsertWeddingInquiry): Promise<WeddingInquiry> {
    const [inquiry] = await db
      .insert(weddingInquiries)
      .values(insertWeddingInquiry)
      .returning();
    return inquiry;
  }

  async getWeddingInquiries(): Promise<WeddingInquiry[]> {
    return await db.select().from(weddingInquiries);
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    try {
      const [subscription] = await db
        .insert(newsletterSubscriptions)
        .values(insertNewsletter)
        .returning();
      return subscription;
    } catch (error: any) {
      if (error.code === '23505') { // Unique constraint violation
        throw new Error("Email already subscribed to newsletter");
      }
      throw error;
    }
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return await db.select().from(newsletterSubscriptions);
  }
}

export const storage = new DatabaseStorage();
```

---

## 🗄️ Base de Datos - Esquemas

### `shared/schema.ts`
```typescript
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  checkIn: text("check_in").notNull(),
  checkOut: text("check_out").notNull(),
  specialRequests: text("special_requests"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const weddingInquiries = pgTable("wedding_inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  eventDate: text("event_date").notNull(),
  guestCount: integer("guest_count").notNull(),
  packageType: text("package_type").notNull(),
  specialRequests: text("special_requests"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull(),
});

export const insertReservationSchema = createInsertSchema(reservations).omit({
  id: true,
  createdAt: true,
});

export const insertWeddingInquirySchema = createInsertSchema(weddingInquiries).omit({
  id: true,
  createdAt: true,
});

export const insertNewsletterSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  subscribedAt: true,
});

export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type Reservation = typeof reservations.$inferSelect;

export type InsertWeddingInquiry = z.infer<typeof insertWeddingInquirySchema>;
export type WeddingInquiry = typeof weddingInquiries.$inferSelect;

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletterSubscriptions.$inferSelect;

// Keep existing user schema for compatibility
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
```

---

## 📦 Package.json

```json
{
  "name": "rest-express",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "check": "tsc",
    "db:push": "drizzle-kit push"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@neondatabase/serverless": "^0.10.4",
    "@radix-ui/react-*": "latest",
    "@tanstack/react-query": "^5.60.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "drizzle-orm": "^0.39.1",
    "drizzle-zod": "^0.7.0",
    "express": "^4.21.2",
    "lucide-react": "^0.453.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.55.0",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "wouter": "^3.3.5",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/express": "4.17.21",
    "@types/node": "20.16.11",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "drizzle-kit": "^0.30.4",
    "esbuild": "^0.25.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "tsx": "^4.19.1",
    "typescript": "5.6.3",
    "vite": "^5.4.19"
  }
}
```

---

## ⚙️ Configuración

### `vite.config.ts`
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: "client",
  resolve: {
    alias: {
      "@": path.resolve("client/src"),
      "@assets": path.resolve("attached_assets"),
      "@shared": path.resolve("shared")
    }
  },
  build: {
    outDir: "../dist/public",
    emptyOutDir: true
  }
});
```

### `tailwind.config.ts`
```typescript
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./client/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["'Playfair Display'", ...fontFamily.serif],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### `drizzle.config.ts`
```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  casing: "snake_case",
  verbose: true,
  strict: true,
});
```

---

## 🚀 Comandos para Ejecutar

### Desarrollo
```bash
npm run dev
```

### Build de Producción
```bash
npm run build
```

### Iniciar Producción
```bash
npm run start
```

### Migración de Base de Datos
```bash
npm run db:push
```

---

## 🌐 Endpoints API

### Reservaciones
- `POST /api/reservations` - Crear nueva reservación
- `GET /api/reservations` - Obtener todas las reservaciones

### Bodas
- `POST /api/wedding-inquiries` - Crear consulta de boda
- `GET /api/wedding-inquiries` - Obtener todas las consultas

### Newsletter
- `POST /api/newsletter` - Suscribir al newsletter

### Descarga
- `GET /download-hostinger` - Descargar archivo ZIP para Hostinger

---

## 📁 Variables de Entorno

```env
DATABASE_URL=postgresql://...
NODE_ENV=development|production
PORT=5000
```

---

## 🏗️ Arquitectura

### Frontend
- React 18 con TypeScript
- Tailwind CSS para estilos
- Shadcn/UI para componentes
- Wouter para routing
- TanStack Query para manejo de estado del servidor

### Backend
- Express.js con TypeScript
- Drizzle ORM para base de datos
- PostgreSQL como base de datos
- Zod para validación

### Características
- ✅ Formularios de reservación funcionales
- ✅ Sistema de consultas de bodas
- ✅ Suscripción a newsletter
- ✅ Diseño responsivo
- ✅ Base de datos PostgreSQL integrada
- ✅ Validación de datos con Zod
- ✅ Manejo de errores completo

---

## 📝 Notas de Implementación

1. **Almacenamiento**: El proyecto usa `DatabaseStorage` con PostgreSQL para persistencia
2. **Validación**: Todos los endpoints usan Zod para validación de datos
3. **Estilos**: Tailwind CSS con configuración personalizada para el tema del resort
4. **Build**: Vite para frontend, ESBuild para backend
5. **Deployment**: Preparado para Hostinger (frontend estático) y Replit (backend + DB)

---

## 🔗 Enlaces Importantes

- **Sitio Web**: www.lagobravo.com
- **Backend API**: Hospedado en Replit
- **Frontend**: Puede ser hospedado en Hostinger como sitio estático

---

*Este documento contiene el código completo del proyecto Lago Bravo Integrated Resorts.*