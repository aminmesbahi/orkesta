# Persistent master prompt — paste first

You are building **Orkesta**, a polished React/TypeScript prototype of an AI-native multi-tenant SDLC platform. Read this package's README, docs, fixtures and contracts before implementing. The requested deliverable from you is a locally runnable frontend source project, not a production platform. Follow numbered stage prompts cumulatively. If the environment already contains a frontend, inspect it and adapt instead of overwriting unrelated work.

## Non-negotiable boundary

Create an interactive, visually realistic, **operationally inert** prototype. Use bundled synthetic fixtures and deterministic local state only. No live authentication/OAuth, API keys, credential fields, model calls, MCP clients/servers, provider HTTP requests, GitHub/Jira writes, messages, shell-running agents, CI execution or deployments. No backend, database server, analytics or external fonts. Dependency installation/build is development work, not product behavior. At runtime the app requests only its own assets; development HMR is the only allowed dev connection.

Keep a persistent “Demo · synthetic data · no external actions” badge. Use action labels such as “Simulate connection,” “Preview tickets” and “Simulate deployment.” Local forms, workflow editing, filters, simulated approvals, fixture playback and reset must work. Do not create dead buttons or imply operational success. Browser role controls illustrate policy and are not real security.

## Product contract

Cover tenants, teams, project administration, stage-specific connector resource bindings, six-stage workflow designer, evidence-backed business intake, normalized specs/ticket drafts, human-reviewed capacity suggestions, skill registry, fake implementation/review/CI/release and audit. Read docs/04 for exact routes and hierarchy. Use Atlas Commerce and Meridian Labs, with 133 synthetic Atlas repository catalog entries and only four detailed code contexts. Nova is a generic custom business adapter; do not invent a vendor API.

## Technical contract

Use React with TypeScript and Vite, React Router declarative routing, Tailwind v4 Vite integration, shadcn-style owned UI primitives and `@xyflow/react` for actual local graph editing. Resolve stable compatible packages using current official docs, match React/react-dom and commit a lockfile. Do not guess patch versions or copy deprecated `react-flow-renderer` examples. Keep state lean: normalized domain records, scoped selectors and reducer/context are enough. Add optional libraries only after verifying need and compatibility.

Separate `domain/`, `demo/`, shared components and route features. Scope every record lookup by tenant/project; clear transient state/timers on switch. Persist only namespaced local drafts/preferences with schema version and reset. Use deterministic fixed timestamps/IDs; no runtime random data. Protocol-inspired event and surface previews must be labeled internal demo contracts rather than AHP/AG-UI/A2UI/MCP conformance. Do not install live protocol SDKs merely to display their names.

## Visual contract

Follow docs/07: calm enterprise workbench, dark nav, light surfaces, strong typography, meaningful density and clear statuses. No generic marketing landing page as the core product. Desktop target 1440×900, usable at 1024 and 390px. Show provenance, version, scope, freshness and uncertainty beside recommendations. Preserve keyboard access, dialog focus, reduced motion and mixed Persian text. Canvas has a full list alternative.

## Working method

Implement the stage requested, run relevant checks, report changes and actual results, then list unresolved limitations. Preserve prior stage behavior. Ask only when truly blocked by a missing external requirement; ordinary layout/data choices are specified or can be resolved conservatively. Do not silently replace real interactions with static images. Do not claim tests or integrations ran unless they did. At every stage update `IMPLEMENTATION_NOTES.md` with versions, decisions, checks and remaining scope.

Acceptance source of truth: docs/11. If a visual improvement conflicts with inertness, tenancy, source provenance or gate semantics, preserve those constraints. A fully local polished simulation is the intended product of this exercise.
