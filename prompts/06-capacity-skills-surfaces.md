# Stage 06 — Capacity planning, skill registry and controlled UI preview

Apply master contract. Read docs/08 capacity rules, docs/09 S6/S8 and docs/12. Implement advisory capacity planning and versioned skills using synthetic information only.

Capacity screen compares Sara, Nima and Elena using relevant recent fixture contributions, coarse available hours, current allocation, approved leave and task effort bands. Sara has Nov 5–6 leave; Nima has lower daily hours and relevant context; Elena has onboarding overhead. Do not show private calendar event titles or employee performance scores. Use visible assumptions and a human assignment action rather than automatic allocation.

Provide start-date, effort-range, available-hours and overhead controls. Implement deterministic working-day math with chosen timezone, weekdays, allocation and leave. Show earliest/latest forecast plus caveats; no guarantee. Zero capacity or missing permission returns “Forecast unavailable” with reason. Date-only working-day calculations must avoid accidental UTC date shifts. When changing controls, recompute the displayed range or label an explicit scenario preset; do not fake recalculation.

Build skill registry with tenant/team/project/private filters, owner, version, reviewed status, required capabilities and input/output schema preview. Shared and private skills are distinct. Compare versions; local publish creates immutable version; project pins one version. Upgrading shows capability changes. Another person's private skill cannot be selected or read through the UI. Unsafe tool names in skill text do not grant any capability.

Build optional approved-surface preview with the internal `demo.surface.v1` envelope: evidence-card, clarification-form, approval-card and capacity-table. Map only validated props/actions to known local components. Reject unknown types/actions, oversized collections and raw HTML. Show a safe fallback preset. Clearly label it “Declarative UI fixture preview”; do not claim A2UI wire conformance or install a live model renderer. AHP/MCP/AG-UI concepts may appear in an admin architecture help panel, never as fake active integrations.

Exit checks: S6 what-if changes predictably and handles leave/zero/unknown capacity; assignment stays human-confirmed; S8 ownership/version permissions work; unknown surface component is safely rejected; no injected HTML or code executes. Run meaningful workday and catalog validation tests and build. Report actual results and remaining uncertainty.
