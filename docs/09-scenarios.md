# 09 — Dummy scenarios and demo scripts

## S1: Partial refunds, evidence-first delivery — 8 minutes

Start as Atlas team admin in Refund Modernization. Open project settings and show the source matrix: Jira and Confluence for research, GitHub repositories for code, coarse calendars for capacity, fake CI/environment for release. Open the designer and show the explicit tickets → docs → code order.

Switch demo persona to business requester and submit: “Allow sellers to issue partial refunds on marketplace orders while preventing total refunds from exceeding the captured amount.” Success metric: fewer support-assisted refunds; target is a planning preference, not a promise. Constraint: preserve idempotency and ledger correctness. Exclusion: tax recalculation redesign.

Simulated research discovers PAY-217 (2024 full-refund-only behavior), ADR-014 (outdated restriction), payment-api code at fixture revision `demo-c7a91` with a partially implemented amount field, and order-service aggregate enforcement missing. Show four detailed repository hits out of 133 catalog entries. The assistant asks whether partial refunds apply per line item or order amount. Choose order amount for initial release.

Generate spec v1, inspect citations, review conflict resolution, inspect four draft tasks and approve scope as product lead. Switch to engineering lead, inspect capacity. Sara knows payments but has leave Nov 5–6; Nima has lower daily capacity and recent relevant work; choose Nima with an explicit uncertainty note about gateway behavior. Do not auto-assign based on a ranking score.

Advance to fake implementation. Show a deliberately incomplete aggregate refund guard; independent review flags the race condition. Choose the scripted remediation; fake diff v2 fixes it and invalidates the prior review. Review again, run passing CI fixture, approve release as release approver and simulate staging/production rollout. Final screen says “Simulation complete. No tickets, PRs or deployments were created.”

## S2: Restricted evidence and source outage — 3 minutes

Choose the restricted-source preset. Confluence contains one inaccessible record, displayed only as “Restricted resource” without title/excerpt. Jira returns rate_limited. Research remains partial, with exact unavailable source classes and reduced evidence coverage. Try to approve a scope requiring the missing gateway decision; blocking question remains. Retry Jira after switching to recovered preset; the new evidence appears once, with no duplicated timeline rows. This verifies incomplete context cannot masquerade as complete research.

## S3: Cross-tenant isolation — 2 minutes

From an Atlas spec drawer, switch to Meridian. Drawer closes, timers cancel, project resets and no Atlas names, counts, search results or draft text remain. Open an Atlas deep-link ID under the Meridian tenant prefix: show scoped not-found. Switch back: local Atlas drafts are still available under their scoped storage key. Explain that this demonstrates UI behavior; production server isolation is future work.

## S4: Broken workflow repair — 3 minutes

Duplicate a node, create a cycle and remove a required repo binding. Validate: list cycle, duplicate output key and missing binding errors with focus links. Publish and simulate remain blocked. Remove the cycle, rename output and restore binding. Publish v2; compare with v1. Start a run, edit v2 draft and show the run remains pinned to published v2.

## S5: CI failure and production gate — 3 minutes

Run the failed-CI preset. A contract test fails on duplicate refund requests. Deployment stays blocked even when a release approver clicks approval. Attempt self-approval as author: rejected with independent-approval explanation. Select the remediation scenario, rerun CI, request a new artifact-bound review and finally simulate release. Show local rollback preview; label it a plan, not an actual rollback.

## S6: Capacity what-if and uncertain estimates — 2 minutes

Compare three candidates with current allocation, working timezone, leave and relevant contributions. Change available hours and start date. Forecast bands change deterministically. Remove calendar permission: show “Availability unknown”; do not assume full availability. Switch a ticket from 24–40h to 40–64h and show the range widens. Human selects owner; no employee productivity score is computed.

## S7: Setup from empty tenant — 4 minutes

Reset Meridian to onboarding-empty state. Create a team, add existing synthetic members, create a project through all five wizard steps, simulate connector setup and bind allowed resources. Attempt duplicate key and invalid role to see inline errors. Choose workflow template, inspect inherited production gate, review and create. Navigate away and reload; local draft survives with its tenant scope. No invitation, OAuth popup or external connection occurs.

## S8: Declarative UI and skill controls — 2 minutes

Open skill registry. Compare shared “Evidence-first spec” v1/v2, team “Payment review” v1 and private “Personal notes.” A viewer cannot use another person's private skill. Open approved-surface preview: evidence card, clarification form, approval card. Inject an unknown component through the demo preset: show “Unsupported component” fallback. No arbitrary HTML or script runs.

## Demo reset contract

Scenario selector describes expected duration, roles, prerequisites and outcome. “Reset this scenario” clears associated run attempts, pending timers and drafts only after confirmation; “Restore all demo data” clears all namespaced local state. Both restore identical IDs and timestamps. Controls include fast playback, reduced motion and per-area empty/loading/error presets. Do not rely on developer tools to demonstrate failure states.
