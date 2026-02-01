# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on port 8080)
- **Build**: `npm run build` (production build)
- **Development build**: `npm run build:dev` (development mode build)
- **Lint**: `npm run lint` (ESLint with TypeScript support)
- **Preview**: `npm run preview` (preview production build)

## Project Architecture

This is a React 18 + TypeScript portfolio website built with Vite, using a modern component-based architecture.

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: TailwindCSS with custom color palette and animations
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state

### Project Structure
- `src/pages/` - Route components (Index.tsx for main page, NotFound.tsx for 404)
- `src/components/` - Reusable UI components organized by feature
  - Main sections: HeroSection, AboutSection, SkillsSection, ExperienceSection, ProjectsSection, WhyWorkWithMeSection, ContactSection, FooterSection
  - `ui/` - shadcn/ui component library
  - `experience/` - Experience-specific components
  - `skills/` - Skills-specific components with data definitions
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and configurations
- `public/` - Static assets including images, favicon, and CV

### Key Configuration Files
- `vite.config.ts` - Vite configuration with path aliases (`@` → `src/`)
- `tailwind.config.ts` - TailwindCSS with custom colors (electric-blue, plasma-violet, neon-green, deep-black, dark-gray) and animations
- `components.json` - shadcn/ui configuration

### Architecture Patterns
- Single-page application with component-based sections
- All UI state is local React state or handled by TanStack Query
- Uses TypeScript strict mode for type safety
- Implements responsive design with TailwindCSS breakpoints
- Custom animation system using both Framer Motion and CSS animations
- Path alias system (`@/` points to `src/`) for clean imports

### Custom Features
- Interactive particle effects and floating orbs
- Custom skill visualization with animated progress bars
- Parallax tilt effects on project cards
- Typewriter cursor animations
- Custom neon glow effects and color transitions