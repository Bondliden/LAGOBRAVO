# Lago Bravo World Resort Website

## Overview

This is a luxury resort website for Lago Bravo World Resort, built as a modern full-stack web application. The application features a React frontend with a luxury resort theme, an Express.js backend API, and uses Drizzle ORM for database operations with PostgreSQL. The site includes sections for accommodations, weddings, casino, dining, nightlife, events, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod for request/response validation
- **Development**: Hot reload with Vite integration

## Key Components

### Database Schema
The application uses three main database tables:
- **reservations**: Stores guest reservation requests with personal info, dates, and special requests
- **wedding_inquiries**: Handles wedding booking inquiries with event details and guest counts
- **newsletter_subscriptions**: Manages email newsletter subscriptions

### API Endpoints
- `POST /api/reservations` - Create new reservation requests
- `GET /api/reservations` - Fetch all reservations
- `POST /api/wedding-inquiries` - Submit wedding inquiry forms
- `GET /api/wedding-inquiries` - Retrieve wedding inquiries
- `POST /api/newsletter` - Newsletter subscription management

### UI Components
- Custom section components for each resort area (Hero, Accommodations, Weddings, Casino, etc.)
- Reusable UI components from shadcn/ui library
- Custom SectionHeading component for consistent typography
- Form components with validation and toast notifications

## Data Flow

1. **User Interactions**: Users interact with forms on the frontend (reservations, wedding inquiries, newsletter)
2. **Form Validation**: Client-side validation using React Hook Form and Zod schemas
3. **API Requests**: Data is sent to Express.js backend via TanStack Query mutations
4. **Server Validation**: Backend validates requests using shared Zod schemas
5. **Database Operations**: Drizzle ORM handles database insertions and queries
6. **Response Handling**: Success/error responses are handled with toast notifications

## External Dependencies

### Development & Build Tools
- Vite with React plugin for fast development and building
- TypeScript for type safety across the stack
- ESBuild for server-side bundling
- PostCSS with Tailwind CSS for styling

### Database & ORM
- Drizzle ORM for type-safe database operations
- Drizzle Kit for database migrations and schema management
- Neon Database as the PostgreSQL provider
- Connection pooling with `@neondatabase/serverless`

### UI & Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Font Awesome icons for visual elements
- Google Fonts (Playfair Display, Inter) for typography

## Deployment Strategy

### Production Build
- Frontend: Vite builds static assets to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Database: Drizzle migrations are applied via `db:push` command

### Environment Configuration
- `NODE_ENV` determines development vs production mode
- `DATABASE_URL` required for PostgreSQL connection
- Vite handles environment-specific configurations

### Development Workflow
- `npm run dev` starts development server with hot reload
- Database schema changes are pushed using `drizzle-kit push`
- TypeScript checking available via `npm run check`

The application is designed as a luxury resort booking platform with a focus on user experience, type safety, and maintainable architecture. The monorepo structure keeps frontend, backend, and shared schemas in sync while allowing for independent scaling of different components.