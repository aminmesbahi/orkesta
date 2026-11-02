# Stage 01 — Foundation and compatibility spike

Apply the persistent master contract. Read docs/03, docs/04 and docs/07. Deliver the actual local React project foundation before any feature breadth.

1. Inspect the workspace and runtime/package manager. Use a separate project directory if needed to preserve this specification kit. Resolve stable compatible React/react-dom, TypeScript, Vite, React Router, Tailwind Vite plugin and `@xyflow/react`. Record actual versions and runtime in IMPLEMENTATION_NOTES; lock dependencies. Check current runtime and peer requirements rather than inventing package versions.
2. Create a minimal compatibility page rendering one custom React Flow node and edge in a fixed-height container with stylesheet imported. Render a dialog, a select and a labeled form using the chosen UI primitives. Verify route navigation and a production build. Fix import/peer issues now; do not paper over them with ignored type errors.
3. Implement design tokens, typography, buttons, badges, inputs, tabs, tables, dialogs, drawers, skeleton/error/empty primitives, focus style and reduced motion. Use system/bundled fonts and local icons.
4. Build AppShell with dark 224px nav, 64px context bar, tenant/team/project switchers, breadcrumb, command-search overlay and persistent demo badge. Navigation groups are Work, Automate and Organization. Use docs/04 routes; placeholder pages at this stage have meaningful titles and “Available in stage X” content rather than broken actions.
5. Create TenantBoundary and PermissionBoundary presentation components and typed domain interfaces from contracts/domain.ts. Unknown tenant/project IDs show scoped not-found. Role switching is a clearly marked demo selector.
6. Add /demo with seed/scenario controls placeholders, and a root workspace chooser for two tenants. Do not create fake login or OAuth pages.

Visual checkpoints: overview shell at 1440×900 and 390px; open dialog with keyboard focus; basic canvas with controls. At mobile collapse nav into a drawer and retain all navigation destinations.

Exit checks: production build succeeds; no console errors; dialog opens/closes/Escape/focus-return works; nested route navigation and reload work; React Flow node/edge render and drag locally; no integration network requests. Report actual resolved dependency versions, checks and stage-02 handoff. Do not add a backend or implement live connectors.
