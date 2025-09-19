# FinRisk AI – Financial Risk Analysis Dashboard (Vite + React + TypeScript + Tailwind)

A modern, demo-friendly front-end for loan risk assessment, model analysis, and regulatory compliance monitoring. Built with Vite, React 18, TypeScript, and Tailwind CSS.

---

## Contents
- Overview
- Live Preview (local)
- Features
- Screenshots (where to add)
- Tech Stack
- Requirements
- Getting Started
- Project Structure
- Available Scripts
- Styling & UI Conventions
- Data & API Integration (mocks → real APIs)
- Configuration & Environment
- Accessibility, Performance, and Security Notes
- Testing (suggested setup)
- Troubleshooting
- FAQ
- License

---

## Overview
This project renders four primary experiences:
- Risk Dashboard: KPI cards, recent assessments, and model performance metrics.
- Loan Assessment: A multi-section form for assessing credit risk inputs.
- Model Analysis & Comparison: Per-model metrics with training/prediction time visuals.
- Compliance Monitor: Regulation cards, status list, audit trail, and data governance.

Navigation lives in a simple header with tabs. State is local to the page components; no backend connection is required for the demo.

Note: The “Risk Analysis” page was intentionally removed per requirements.

---

## Live Preview (local)
1) Install dependencies
```bash
npm ci
```
2) Run the dev server
```bash
npm run dev
```
Vite will print the local URL, typically `http://localhost:5173`.

3) Production build (optional)
```bash
npm run build
npm run preview
```

---

## Features
- TypeScript-first React app with Vite for fast HMR
- Tailwind CSS for utility-first styling
- Clean component architecture with small, focused components
- Rich demo data for dashboard, models, and compliance
- Inline SVG favicon (no extra files required)
- Minimal, portable setup that works well on Windows/macOS/Linux

---

## Screenshots
Drop your screenshots into a `docs/` folder and reference them here, for example:
- docs/dashboard.png
- docs/loan-assessment.png
- docs/model-analysis.png
- docs/compliance-monitor.png

---

## Tech Stack
- React 18 + TypeScript
- Vite 7
- Tailwind CSS 3
- ESLint 9 (flat config)

---

## Requirements
- Node.js ≥ 18 (Node 22+ fully supported)
- npm ≥ 9
- Git (optional, for versioning)

Check your versions:
```powershell
node -v
npm -v
```

---

## Getting Started
Clone or copy the repository, then:
```bash
npm ci          # install exact dependencies
npm run dev     # start dev server
```
Open the URL printed by Vite.

To create an optimized build:
```bash
npm run build
npm run preview # serves the dist/ build
```

---

## Project Structure
```
root
├─ index.html                # App shell + favicon
├─ src
│  ├─ main.tsx              # React/Vite entry
│  ├─ App.tsx               # Tab navigation + routes
│  ├─ index.css             # Tailwind entry + base styles
│  └─ components
│     ├─ Navigation.tsx
│     ├─ Dashboard.tsx
│     ├─ LoanApplication.tsx
│     ├─ ModelComparison.tsx
│     └─ ComplianceMonitor.tsx
├─ vite.config.ts
├─ tailwind.config.js
├─ eslint.config.js
├─ tsconfig*.json
└─ package.json
```

---

## Available Scripts
All scripts are defined in `package.json`.

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview the built app from `dist/`
- `npm run lint` — Run ESLint (flat config) on the project

Useful maintenance (optional):
```bash
npx update-browserslist-db@latest
```
This silences the Browserslist warning during builds.

---

## Styling & UI Conventions
- Tailwind utility classes drive most styling
- Layout uses responsive grids and `container mx-auto`
- Components avoid deep nesting and prioritize readability
- Icons: lightweight inline elements (e.g., small shapes) are used directly; you can expand with `lucide-react` if desired

Dark mode (optional):
- Add a `dark` class on the root and Tailwind dark variants to components

---

## Data & API Integration
The app currently uses static/demo values. To integrate real data:
1) Create an API client (e.g., `src/lib/api.ts`) using `fetch` or a library.
2) Replace demo arrays with `useEffect` + `useState` or React Query to fetch and cache data.
3) Map API DTOs to view models in a separate adapter function for type safety.
4) Handle loading and error states (skeletons + toasts).

Mock-first approach:
- Start with a `src/mocks` folder containing JSON fixtures and a small service that returns Promises to mimic latency.

---

## Configuration & Environment
No environment variables are required for the demo. For real APIs, add a `.env` file and reference via Vite’s `import.meta.env` (prefix keys with `VITE_`). Example:
```
VITE_API_BASE_URL=https://api.example.com
```
Read in code:
```ts
const apiBase = import.meta.env.VITE_API_BASE_URL;
```

---

## Accessibility, Performance, and Security Notes
- Accessibility: semantic headings, labeled inputs; consider ARIA roles for complex widgets; ensure keyboard navigation
- Performance: Vite’s build is optimized; consider route-level `lazy()` imports for code splitting
- Security: avoid injecting unsanitized HTML; redact PII in logs; consider a strict Content Security Policy in `index.html`

Example CSP meta (tighten for production):
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self';" />
```

---

## Testing (suggested)
- Unit tests: Vitest + React Testing Library
- Integration: exercise form validation and tab navigation
- Visual: Storybook or Chromatic for critical UI states

---

## Troubleshooting
- Browserslist warning during build
  - Run: `npx update-browserslist-db@latest`
- Port already in use (5173)
  - Use: `npm run dev -- --port=5174`
- Windows PowerShell shows pager issues
  - Avoid piping to `cat`; on Windows just run the command directly
- Esbuild “Unexpected character” (BOM) errors
  - Recreate the file with UTF-8 (no BOM) or paste fresh content

---

## FAQ
- Can I add routing with URLs?
  - Yes, add `react-router-dom` and convert the tab state to routes.
- Can I connect to a backend?
  - Yes. Introduce an API client and move demo data into responses.
- Where are the icons?
  - A small inline SVG is used for the favicon. You can extend UI icons with `lucide-react`.

---

## License
This project is provided as-is for educational/demo purposes. You may adapt it freely for your own projects.


