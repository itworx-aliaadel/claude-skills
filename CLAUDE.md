# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
npm run start    # Serve production build
```

No test suite is configured.

## Architecture

This is a **Next.js 16** app using the App Router, React 19, TypeScript (strict), and Tailwind CSS v4.

**Routing** lives entirely in `app/` via file-based routing:
- `app/layout.tsx` — root layout, mounts `<Nav>` and wraps all pages in a max-w-4xl container
- `app/page.tsx` — home (`/`)
- `app/news/page.tsx` — news listing (`/news`)
- `app/articles/page.tsx` — articles listing (`/articles`)

Pages are **server components** by default. Only `components/Nav.tsx` is a client component (`"use client"`), because it uses `usePathname()` for active-link highlighting.

**Styling**: Tailwind CSS v4 is imported via `@import "tailwindcss"` in `app/globals.css`. Theming uses CSS custom properties (`--background`, `--foreground`) defined with `@theme inline`. The font variable is `--font-geist-sans`.

**Path alias**: `@/*` resolves to the repo root (e.g., `import Nav from "@/components/Nav"`).

**Content** is currently static arrays hardcoded in the page files — no database, no API routes, no auth.
