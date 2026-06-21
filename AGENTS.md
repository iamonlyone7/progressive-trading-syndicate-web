# AGENTS.md

## Project Overview

React-based Progressive Trade Syndicate application with financial services focus.

## Architecture

**Entry Points:**
- `src/App.tsx` - Main application component with React Router setup
- `src/main.tsx` - React root (not shown but standard)
- `src/lib/vdom.ts` - Custom virtual DOM implementation for optimized rendering

**Structure:**
- `src/components/` - UI components (About, Hero, Nav, etc.)
- `src/components/core/` - Core component variants
- `src/components/ui/` - shadcn/ui components
- `src/data/` - Constants and data
- `src/lib/` - Utility functions and VDOM implementation
- `src/pages/` - React pages (Home, About, Contact, etc.)

**Framework:**
- React 19 with TypeScript
- Vite for development and builds
- Tailwind CSS with shadcn/ui
- Custom VDOM implementation in `src/lib/vdom.ts`

## Development Commands

**Start Development Server:**
```bash
npm run dev
```

**Build for Production:**
```bash
npm run build
```

**Preview Build:**
```bash
npm run preview
```

**Type Check Only:**
```bash
npm run lint
```

**Clean Build Artifacts:**
```bash
npm run clean
```

## Environment Setup

**Required Environment Variables:**
- `GEMINI_API_KEY` - Required for Gemini AI API calls (set in .env.local)
- `APP_URL` - Cloud Run service URL (automatically injected in production)

**Setup Steps:**
1. `npm install` - Install all dependencies
2. Create `.env.local` file based on `.env.example`
3. Set `GEMINI_API_KEY` to your Gemini API key

## Build & Deployment Quirks

**Vite Configuration:**
- Port 3000 on all interfaces (`--host=0.0.0.0`)
- HMR can be disabled via `DISABLE_HMR=true` environment variable
- File watching disabled when `DISABLE_HMR=true` to save CPU

**TypeScript:**
- Configured with `noEmit: true` (lint script only checks types)
- Paths alias: `@/*` maps to `./src/*`
- Experimental decorators enabled

## Design System

**Palette (src/index.css:9-22):**
- Navy (`--navy: #0D1F4F`) + Gold (`--accent: #B8944E`)
- Warm neutral surfaces (`--bg-warm: #F8F7F4`, `--bg-cool: #F0F2F6`)
- CSS variables in `:root` for all colors, mapped to old names via second `:root` block at bottom

**Typography:** Syne (headings/body) + Geist Variable (UI) + JetBrains Mono (details)

**Icons:** `lucide-react` via `src/components/icons.tsx` Icon mapper component. Reference icons by string name from data files - do NOT import lucide directly in section components.

**Rules applied (from design-taste-frontend + ui-ux-pro-max skills):**
- No emojis as icons (use `Icon` component with lucide-react)
- No em-dashes in copy
- No custom cursor (`cursor: none` removed)
- No `window.addEventListener('scroll')` without RAF throttling
- `min-h-[100dvh]` not `h-screen` on hero
- `grid` not flex percentage math
- Max 1 section eyebrow per 3 sections
- Single accent color lock across all sections

## Component System

**shadcn/ui Integration:**
- Configured via `components.json`
- Component aliases: `@/components`, `@/lib/utils`, `@/components/ui`
- Tailwind CSS with `tw-animate-css`

**Custom VDOM:**
- Implemented in `src/lib/vdom.ts`
- Provides `h()`, `createElement()`, `updateElement()` functions
- Used for optimized React rendering

## Key Files

- `src/lib/vdom.ts:7` - Custom VDOM implementation
- `vite.config.ts:14-20` - HMR and file watching configuration
- `package.json:6-11` - Available npm scripts
- `.env.example:1-9` - Environment variable templates
- `src/index.css:9-22` - Design system CSS variables (navy + gold palette)
- `src/components/icons.tsx` - Icon mapper (maps string names to lucide-react)

## Testing & Verification

**Type Checking:**
- Run `npm run lint` to verify TypeScript types
- No actual test framework configured in package.json

**Build Verification:**
- Run `npm run build` then `npm run preview` to test locally
- Check `dist/` directory for output

## Common Issues

1. **HMR Issues:** Set `DISABLE_HMR=true` to disable file watching
2. **Type Errors:** Run `npm run lint` to identify TypeScript issues
3. **Missing API Key:** Ensure `GEMINI_API_KEY` is set in `.env.local`
4. **Port Conflicts:** Default port is 3000

## Dependencies

**Core Dependencies:**
- React ecosystem: React, React-DOM, React-Router-Dom
- UI: shadcn, class-variance-authority, clsx, tailwind-merge
- Animation: framer-motion, gsap, lenis
- AI: @google/genai
- Build: Vite, TypeScript

**Dev Dependencies:**
- @types/express, @types/node
- Tailwind CSS tooling
- esbuild, tsx, autoprefixer