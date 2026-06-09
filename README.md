# Tanya Das — Portfolio

A minimal, animated design portfolio. Projects are displayed as interactive "tag folder" cards with a filterable tab bar, smooth Framer Motion transitions, and per-project detail pages.

## Overview

This is a single-page application (SPA) built with React and Vite. The landing page presents a filterable grid of project folders (All / Product / Visual / Frontend), each opening a dedicated detail route. A fixed bottom dock provides a résumé link and social links (LinkedIn, X, Behance).

- **Folder cards** with hover-to-open animation revealing the project cover.
- **Tab/segmented filter** that animates the active indicator between categories.
- **Client-side routing** for project detail pages (`/projects/:slug`).
- **Responsive grid** (2 → 3 → 4 columns).

## Tech Stack

| Layer       | Technology |
| ----------- | ---------- |
| Framework   | [React 18](https://react.dev/) |
| Build tool  | [Vite 5](https://vitejs.dev/) |
| Styling     | [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) |
| Animation   | [Framer Motion 11](https://www.framer.com/motion/) |
| Routing     | [React Router 6](https://reactrouter.com/) |
| Font        | [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts) |
| Language    | JavaScript (JSX) |

> Note: this project is written in plain JavaScript (`.jsx`), not TypeScript.

## Local Setup

Requires **Node.js 18+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production (outputs to ./dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project Structure

```
.
├── index.html                 # App entry HTML (loads Manrope + the React bundle)
├── vite.config.js             # Vite + React + Tailwind plugins
├── vercel.json                # SPA rewrite so deep links don't 404
├── src/
│   ├── main.jsx               # React entry + router
│   ├── App.jsx                # Landing page
│   ├── index.css              # Tailwind import + theme tokens
│   ├── components/
│   │   ├── BottomDock.jsx     # Fixed bottom name + social links
│   │   └── projects/          # Filters, grid, folder card, section
│   ├── pages/
│   │   └── ProjectDetail.jsx  # /projects/:slug
│   └── data/
│       └── projects.js        # Project + category data
```

## Deployment

This app deploys to [Vercel](https://vercel.com/) as a static SPA.

| Setting          | Value           |
| ---------------- | --------------- |
| Framework Preset | Vite            |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |
| Install Command  | `npm install`   |
| Environment Vars | _none required_ |

The included [`vercel.json`](./vercel.json) rewrites all routes to `index.html` so that direct navigation to a project detail page (e.g. `/projects/atlas-analytics`) is handled by the client-side router instead of returning a 404.

See the deployment walkthrough below for step-by-step instructions.
