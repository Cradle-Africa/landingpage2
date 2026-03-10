# BigCradle Landing Page

> Company Landing Page — Next.js 15+ frontend with TypeScript, Tailwind v4, shadcn/ui, and Framer Motion.

---

## Quick Start

### Prerequisites

- **Node.js** 18.x or 20.x (LTS)
- **npm** 9+

### Run the project

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

The app will be available at **http://localhost:3000**.

### Other commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build for production |
| `npm start` | Start production server (run after build) |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

---

## Table of Contents

1. [Overview](#1-overview)
2. [Tech Stack](#2-tech-stack)
3. [Folder Structure](#3-folder-structure)
4. [Styling & Theming](#4-styling--theming)
5. [Animations](#5-animations)
6. [Component Architecture](#6-component-architecture)
7. [State Management](#7-state-management)
8. [Data Fetching & API](#8-data-fetching--api)
9. [Forms & Validation](#9-forms--validation)
10. [Testing](#10-testing)
11. [Additional Conventions](#11-additional-conventions)

---

## 1. Overview

Frontend architecture for the company landing page. Built with **Next.js**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**. Designed for a small team (~3 developers) with a **feature-based structure** and shared design tokens.

The structure prioritizes **discoverability** and **scalability**: you can find any piece of code by its role (layout vs sections vs shared) or by feature, and new sections or features fit naturally into the existing layout without refactors.

---

## 2. Tech Stack

| Category | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 15+ (App Router) | SSR/SSG, file-based routing, strong DX |
| Language | TypeScript | Type safety and maintainability |
| Package Manager | npm | Standard, widely supported |
| Rendering | App Router, static/SSG | Good performance and SEO |
| Styling | Tailwind CSS v4 | Utility-first, fast iteration |
| Components | shadcn/ui | Accessible primitives, full control |
| Animations | Framer Motion | Declarative animations, scroll effects |
| Client State | Zustand | Lightweight, simple API |
| Forms | React Hook Form | Performant form handling |
| Validation | Zod | Schema-based validation |
| HTTP Client | axios | Predictable API calls |
| Toasts | sonner | Toast notifications |

---

## 3. Folder Structure

Feature-based structure with shared code at both global and feature level:

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                 # shadcn primitives (Button, Card, Input)
│   ├── layout/             # Header, Footer — page shell
│   ├── sections/           # Hero, Features, Contact — landing sections
│   └── shared/             # Reusable across sections/features
├── features/               # Feature modules (e.g. newsletter, auth)
│   └── [feature-name]/
│       ├── components/
│       └── shared/         # Per-feature shared code
├── lib/                    # api.ts, utils.ts, constants.ts
├── stores/                 # Zustand stores (useModalStore, etc.)
├── hooks/                  # Shared hooks
├── styles/                 # Global styles
├── types/                  # Shared TypeScript types
└── docs/                   # Architecture docs
```

### Why This Structure

- **`app/`** — Next.js App Router entry. Keeps routing and root layout in one place.
- **`components/ui/`** — Low-level building blocks from shadcn. Styled primitives that don’t contain business logic.
- **`components/layout/`** — Page shell (Header, Footer). Shared across routes.
- **`components/sections/`** — Full-page sections (Hero, Features, Contact). Each section is self-contained.
- **`components/shared/`** — Reusable components used by multiple sections or features.
- **`features/`** — Feature modules. Each feature owns its components and shared logic so it can grow or be removed cleanly.
- **`lib/`** — Shared utilities, API client, constants. No UI, only logic and config.
- **`stores/`** — Zustand stores for global UI state (modals, nav, etc.).
- **`hooks/`** — Shared React hooks.
- **`types/`** — Shared TypeScript types and interfaces.

### Principles

- **Feature-based:** Organize by feature/section, not by file type.
- **Separation:** Components, styles, and tests stay in dedicated folders.
- **Shared code:** Global in `components/shared/` and `lib/`; per-feature in `features/[feature]/shared/`.

---

## 4. Styling & Theming

| Choice | Details |
|--------|---------|
| Utility CSS | Tailwind v4 |
| Components | shadcn/ui |
| Design tokens | In `globals.css` via CSS variables and `@theme inline` |
| Theme | Supports light/dark via `prefers-color-scheme` |

Design tokens (colors, spacing, typography) are defined in `globals.css` and should align with the Figma design system.

---

## 5. Animations

| Choice | Details |
|--------|---------|
| Library | Framer Motion |
| Use cases | Page transitions, section reveals, micro-interactions, layout changes |

### Guidelines

- Use `motion.div`, `motion.section`, etc. where animations are needed
- Use `whileInView` for scroll-triggered reveals
- Use Framer Motion for complex sequences; use CSS for simple hover/transition effects
- Keep animations subtle (around 300–500ms)

### Example

```tsx
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.5 }}
>
  {/* Section content */}
</motion.section>
```

---

## 6. Component Architecture

| Convention | Rule |
|------------|------|
| Naming | PascalCase (e.g. `HeroSection`, `ContactForm`) |
| Hierarchy | `ui/` → `layout/` → `sections/` → `shared/` |
| **ui/** | shadcn primitives — no business logic |
| **layout/** | Page layout (Header, Footer) |
| **sections/** | Landing sections |
| **shared/** | Reusable across sections and features |

---

## 7. State Management

| Type | Library | Use case |
|------|---------|----------|
| Client | Zustand | UI state (modals, nav, toggles) |
| Forms | React Hook Form | Form state |

Stores live in `stores/` (e.g. `useModalStore`, `useNavStore`).

---

## 8. Data Fetching & API

- **Client:** axios instance in `lib/api.ts`, baseURL from `NEXT_PUBLIC_API_URL`
- **Errors:** sonner toasts
- **Validation:** Zod where needed

---

## 9. Forms & Validation

- **Forms:** React Hook Form
- **Validation:** Zod with `@hookform/resolvers/zod`
- **Errors:** Toasts plus inline field errors where appropriate

---

## 10. Testing

- **Unit:** Vitest
- **Component:** React Testing Library
- **E2E:** Optional for critical flows

---

## 11. Additional Conventions

| Area | Convention |
|------|------------|
| Auth | Not used for v1 |
| i18n | Single language |
| Deployment | Vercel |
| CI/CD | GitHub Actions |
| Linting | ESLint |
| Formatting | Prettier |

---

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` for API calls.

---

## References

- [Next.js](https://nextjs.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://zustand-demo.pmnd.rs)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
