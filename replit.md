# Lago Bravo Integrated Resorts Website

## Overview

This is a luxury resort website for Lago Bravo Integrated Resorts, built as a modern full-stack web application. The application features a React frontend with a luxury resort theme, an Express.js backend API, and uses Drizzle ORM for database operations with PostgreSQL. The site includes sections for championship golf, exclusive marina with full moon boat gatherings, crystal lagoon villas and luxury condominiums for sale, accommodations, weddings, casino, dining, nightlife, events, and contact forms. The website prominently features the authentic Lago Bravo logo throughout the design and is now connected to a fully functional PostgreSQL database for persistent data storage.

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
- **Database Provider**: PostgreSQL with connection pooling
- **Database Storage**: DatabaseStorage class replacing MemStorage for persistent data
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

## Recent Changes (January 2025)

- **Database Migration**: Successfully migrated from in-memory storage to PostgreSQL database
- **Logo Integration**: Updated all components to display the authentic Lago Bravo logo (PNG format)
- **Database Schema**: Created and deployed tables for reservations, wedding inquiries, and newsletter subscriptions
- **Storage Layer**: Implemented DatabaseStorage class with full CRUD operations using Drizzle ORM
- **Championship Golf Course**: Added 18-hole championship course as star activity with booking packages
- **Exclusive Marina**: Added private marina with yacht charters and signature Full Moon boat gatherings (2027 schedule)
- **Real Estate Section**: Added exclusive crystal lagoon villas and luxury condominiums with 24/7 concierge service
- **Branding Update**: Changed from "WORLD RESORT" to "INTEGRATED RESORTS" across all sections
- **GoDaddy Deployment**: Prepared production build files optimized for GoDaddy hosting

The application is designed as a luxury resort booking platform with a focus on user experience, type safety, and maintainable architecture. The monorepo structure keeps frontend, backend, and shared schemas in sync while allowing for independent scaling of different components. All data is now persisted in PostgreSQL for production-ready operations.