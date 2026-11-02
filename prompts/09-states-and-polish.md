# Stage 09 — Complete interaction states and visual/accessibility polish

Apply master contract. Read docs/07 and interaction matrix in docs/08. Complete the realistic UI rather than adding new operational capabilities.

Audit every route and primary action. Each action must navigate, edit local state, open a preview, simulate a transition or be disabled with a reason. Replace misleading labels (“Send,” “Deploy,” “Connected”) with precise simulated labels where necessary. Keep demo badge visible even in drawers and focused designer views. Remove hardcoded dashboard totals that disagree with fixtures.

Add accessible demo controls to reach loading, empty, partial, denied, stale, expired, rate-limit, failed, cancelled and recovery states without developer tools. Distinguish source absence from permission denial and incomplete research. Preserve user input after validation errors. Add useful skeletons, inline retry and persistent blocker messages instead of transient error-only toasts.

Review 1440×900, 1024px and 390px layouts. Designer becomes list-first on small screens; palette/inspector remain available via controls. Tables scroll deliberately with headers visible, not through accidental page-wide overflow. Keep long ticket titles, repo paths, timestamps and badges readable. Ensure consistent spacing/type hierarchy and restrained stage/status colors.

Perform keyboard journey: tenant chooser → create project → bind resources → configure workflow in list view → intake → evidence → answer → approve → review → release. Fix focus traps, dialog labels/Escape/focus return, error focus, disabled explanations, semantic table sorting and polite status announcements. Keep React Flow accessibility defaults and add meaningful node labels. Honor reduced motion; status meaning never depends on animation/color.

Check Persian mixed-language outcome text with dir=auto, Latin IDs/code preserved LTR, and long-text wrapping. No need to invent full translations. Use locally available fonts only. Check contrast with tools where available; record unverified items honestly.

Exit checks: screenshot review of all key screens and one error/modal state; A27/A28 pass or explicitly documented gaps; scenario presets do not leak across tenants; no new network integration; no dead controls. Run build and relevant smoke tests. Report concrete UI fixes and any remaining accessibility limitations.
