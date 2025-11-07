# Project Log

## Summary
**App**: FinRisk AI – Financial Risk Analysis Dashboard
**State**: Front-end demo app is functional with tabs for Dashboard, Loan Application, Model Comparison, and Compliance Monitor. Static/demo data; no backend integration required for demo.
**Tech Stack**: React 18, TypeScript 5, Vite 7, Tailwind CSS 3, ESLint 9 (flat)
**Key Dependencies**: react, react-dom, @vitejs/plugin-react, tailwindcss, postcss, autoprefixer, @supabase/supabase-js (planned/optional), lucide-react (icons)
**Goals (near-term)**:
- Stabilize UI/UX across all tabs and refine demo data
- Add optional real API integration layer (feature-flagged)
- Document compliance views (audit trail/data governance) and model metrics

---

## Change History

### Conventions
- **Timestamp format**: YYYY-MM-DD HH:mm (local time)
- **Scope tags**: [UI], [Build], [Docs], [Types], [State], [Infra]
- **Impact**: low | medium | high

### Entry Template
#### [Timestamp] — [Scope] [Impact]
**File(s):** <paths or modules>
**Change:** <what changed>
**Purpose:** <why>
**Linked Components:** <components/modules touched>
**Next Step Context:** <follow-ups or pre-reqs>
**Ticket/Ref:** <optional issue/PR link or ID>

---

### Example
#### 2025-11-03 10:00 — [UI] [low]
**File(s):** `src/App.tsx`, `src/components/Navigation.tsx`
**Change:** Standardized tab labels; removed deprecated RiskAnalysis reference
**Purpose:** Align navigation with finalized scope (Dashboard, Application, Models, Compliance)
**Linked Components:** `Dashboard`, `LoanApplication`, `ModelComparison`, `ComplianceMonitor`
**Next Step Context:** Review accessibility for keyboard navigation on tabs
**Ticket/Ref:** DOC-INIT

---

### 2025-11-07 10:05 — [Build] [low]
**File(s):** `package.json`
**Change:** Updated `homepage` to GitHub Pages URL `https://nerli-ishan-25.github.io/AI-Finance-Tracker/`
**Purpose:** Align deployment metadata with GitHub Pages hosting location
**Linked Components:** Build metadata; GitHub Pages deployment
**Next Step Context:** Run `npm run deploy` to publish latest build to `gh-pages`
**Ticket/Ref:** GH-PAGES-CONFIG

### 2025-11-07 10:40 — [Infra] [medium]
**File(s):** `.github/workflows/pages.yml`
**Change:** Added GitHub Actions workflow to build and deploy Vite app to GitHub Pages
**Purpose:** Ensure Pages receives compiled assets instead of raw Vite source when publishing from `main`
**Linked Components:** GitHub Actions; Vite build pipeline; Pages hosting
**Next Step Context:** Set Pages source to "GitHub Actions" and rerun deployment to publish live site
**Ticket/Ref:** GH-PAGES-ACTION

### 2025-11-07 09:45 — [Build] [low]
**File(s):** `vite.config.ts`
**Change:** Added inline comment documenting previous `base` setting reference
**Purpose:** Record alternate deployment path used during earlier experiments
**Linked Components:** `Vite` configuration
**Next Step Context:** Confirm comment is purely informational; no action required
**Ticket/Ref:** GH-PAGES-NOTE

### 2025-11-07 09:15 — [Build] [medium]
**File(s):** `vite.config.ts`
**Change:** Set `base` path to `/AI-Finance-Tracker/` for GitHub Pages builds
**Purpose:** Ensure static assets resolve correctly when served from project subdirectory on GitHub Pages
**Linked Components:** `Vite` build pipeline; GitHub Pages deployment
**Next Step Context:** Rebuild and redeploy to GitHub Pages to verify site loads
**Ticket/Ref:** GH-PAGES-BASE

### 2025-11-06 00:05 — [Infra] [medium]
**File(s):** Git remote `origin`, repository: `Nerli-Ishan-25/AI-Finance-Tracker`
**Change:** Configured remote to GitHub and pushed `main` (initial publish)
**Purpose:** Make project available on GitHub for collaboration and CI
**Linked Components:** Entire project (front-end app, docs, resources)
**Next Step Context:** Add repo description, enable issues, protect `main`, and set branch rules
**Ticket/Ref:** GH-PUBLISH

### 2025-11-06 00:00 — [Infra] [low]
**File(s):** `.cursorrules`
**Change:** Added auto-update directive referencing `Project_log.md`
**Purpose:** Ensure consistent context loading and logging within Cursor
**Linked Components:** Tooling/automation
**Next Step Context:** Confirm rule honored on future edits/commits
**Ticket/Ref:** RULES-AUTOLOG

### 2025-11-06 00:00 — [Docs] [low]
**File(s):** `Project_log.md`
**Change:** Added Change History entries and clarified templates/tasks
**Purpose:** Establish robust logging and execution plan
**Linked Components:** Documentation; applies across UI modules
**Next Step Context:** Commit and push to GitHub
**Ticket/Ref:** LOG-SETUP

### 2025-11-03 10:15 — [Docs] [low]
**File(s):** `Project_log.md`
**Change:** Created project log with filled Summary, conventions, entry template, example, and task checklist
**Purpose:** Establish single source of truth for status, decisions, and next steps
**Linked Components:** Documentation; applies to all UI tabs
**Next Step Context:** Begin appending entries for subsequent edits/commits
**Ticket/Ref:** LOG-SETUP

### 2025-11-03 10:20 — [Infra] [low]
**File(s):** `.cursorrules`
**Change:** Added system-level auto-update directive pointing to `Project_log.md`
**Purpose:** Ensure Cursor agents/readers load context and append log entries consistently
**Linked Components:** Tooling/automation
**Next Step Context:** No action; rule operates passively when edits/commits occur
**Ticket/Ref:** RULES-AUTOLOG

---

## Active Tasks
Use the checklist to track in-flight work. Mark with priority (P1–P3) and owner.

- [ ] P1: Finalize dashboard KPIs and demo data mapping — Owner: TBD
- [ ] P2: Add API client scaffold (`src/lib/api.ts`) with mock adapters — Owner: TBD
- [ ] P2: Document compliance views: audit trail and data governance — Owner: TBD
- [ ] P2: Introduce icons via `lucide-react` where helpful — Owner: TBD
- [ ] P3: Add dark mode support (Tailwind `dark:` variants) — Owner: TBD

Notes:
- When implementing real APIs, add `.env` keys prefixed with `VITE_` and wire via `import.meta.env`.
- Keep changes small and log them using the template above.


