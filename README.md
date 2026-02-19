# METALLOID — Mining Resources Investment Platform

> A modern, responsive landing page for **METALLOID**, a mining resources investment company.

---

🌐 **Live Demo:** [metalloid-landing-page.vercel.app](https://metalloid-landing-page.vercel.app)


## Overview

METALLOID's landing page is built with **Angular 19**, leveraging standalone components, Angular Signals for reactive state management, and a clean global CSS architecture. The project is designed for performance, maintainability, and strict adherence to modern Angular best practices.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 19 (standalone components, signals, built-in control flow) |
| Styling | Global CSS with CSS custom properties — no preprocessor |
| Forms | Angular Reactive Forms |
| Build Tool | Angular CLI 19.2.13 |

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **Angular CLI** 19

```bash
npm install -g @angular/cli@19
```

### Installation

```bash
npm install
```

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app hot-reloads on file changes.

### Production Build

```bash
ng build
```

Build artifacts are output to the `dist/` directory.

---

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── layout/
│   │       ├── navbar/
│   │       └── footer/
│   ├── features/
│   │   └── landing/
│   │       └── sections/
│   │           ├── hero-section/
│   │           ├── content-section/
│   │           ├── competencies-section/
│   │           ├── responsible-section/
│   │           ├── partners-section/
│   │           ├── map-section/
│   │           ├── blog-section/
│   │           └── contact-section/
│   └── shared/
│       └── components/
│           ├── button/
│           ├── card/
│           └── section-header/
├── assets/
└── styles.css
```

---

## Key Features

**Interactive World Map**
Tabbed region selector with animated SVG pin markers and location tooltips.

**Contact Form**
Reactive form with a country code selector, dynamic phone placeholder, and full validation.

**Responsible & Sustainable Operations**
Full-bleed image/text split layout matching Figma specs — 1280px container, 64px vertical padding, 32px column gap.

**Partners & Investments**
Logo showcase section highlighting strategic partners and investment relationships.

**Fully Responsive**
Breakpoints at 1280px, 1024px, 768px, and 480px for a seamless experience across all devices.

---

## Development Guidelines

- **Signals over RxJS** — Use Angular Signals for reactive state; reach for RxJS only when necessary.
- **Standalone components only** — No NgModules.
- **Built-in control flow** — Use `@if`, `@for`, and `@switch` directives; avoid importing `CommonModule`.
- **BEM naming** — All styles live in `src/styles.css` using BEM convention.
- **CSS custom properties** — Colors, spacing, typography, and shadows are defined as variables in `:root`.

---

## Scripts

| Command | Description |
|---|---|
| `ng serve` | Start the development server at `localhost:4200` |
| `ng build` | Compile and bundle the app for production |
| `ng test` | Run unit tests via Karma |

---

## Deployment

The app is deployed on **Vercel** and available at:

```
https://metalloid-landing-page.vercel.app
```

To deploy your own instance:

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Set the **Framework Preset** to `Angular` (or configure manually):
   - **Build Command:** `ng build`
   - **Output Directory:** `dist/your-project-name/browser`
4. Click **Deploy**.

Vercel will automatically redeploy on every push to the main branch.

---

## Additional Resources

- [Angular 19 Documentation](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Angular Signals Guide](https://angular.dev/guide/signals)
