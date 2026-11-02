# 10 — Implementation plan and roadmap

## Prototype delivery sequence

Effort ranges are planning suggestions for one experienced frontend developer using a generator, not commitments. Validate against actual environment and scope. Each stage ends with a working browser increment and a concise implementation note. Later stages preserve prior fixtures, routes and demo boundaries.

| Stage / prompt | Work | Exit dependency | Indicative effort |
|---|---|---|---|
| 01 | Compatibility spike, scaffold, tokens, shell, domain contracts | Production build; graph/dialog/router smoke | 0.5–1 day |
| 02 | Deterministic normalized fixtures, scoped selectors, persistence/reset | Foreign keys and tenant-switch checks | 0.5–1 day |
| 03 | Team/project admin and connector setup/source matrix | Empty onboarding journey works | 1–2 days |
| 04 | Controlled workflow designer, inspector, graph validation/versioning | Invalid graph cannot publish; local edits work | 1–2 days |
| 05 | Business intake, evidence workbench, clarification/spec/tickets | S1 reaches scope approval with citations | 1–2 days |
| 06 | Capacity model, skill registry, approved UI preview | S6 and S8 work | 0.5–1 day |
| 07 | Deterministic scheduler, run timeline, gates/event inspector | Cancel/retry/replay and gate pausing work | 1–2 days |
| 08 | Fake diff/review, CI/release/rollback and audit views | S5 completes without bypass | 1–2 days |
| 09 | State presets, responsive/accessibility/RTL polish | 390/1024/1440px journeys usable | 0.5–1 day |
| 10 | Acceptance suite, network audit, demo guide and handoff | Full acceptance matrix and clean build | 0.5–1 day |

Total is approximately 8–15 focused days depending on visual quality, generator output and review. Reduce optional comparisons before weakening isolation, provenance or inertness. Critical path: contracts → scoped data → admin bindings → graph → evidence/spec → simulation → review/release → verification. Capacity/skills can be implemented after contracts, but this kit's prompts remain sequential for one generator session.

## Work breakdown

Frontend foundation: app shell, theme tokens, primitives, route resolver, permission presentation and demo controls.

Domain: typed records, fixtures, ID references, scoped selectors, local command reducer, schema-versioned persistence and deterministic reset.

Admin: membership, project wizard, connector presets, capability/resource selectors, stage mapping, policy inheritance and environment forms.

Workflow: node catalog, edge mapping, inspector, validation, draft/version comparison, undo/redo and list alternative.

Product workbench: request form, research timeline, source drawer, clarification, spec editor/version diff, ticket decomposition and approval.

Delivery: capacity what-if, implementation diff, independent review findings, CI fixture, release readiness and rollback preview.

Verification: meaningful behavior tests, route/scoped data audit, keyboard journey, screenshot review, network interception and final setup instructions.

## Future product roadmap — separate authorization and discovery

P0 discovery: clarify Nova vendor/API, organization identity model, tenant boundaries, data residency, provider permissions, source volume, retention, source ownership and allowed external writes. Decide customer-hosted versus SaaS deployment and required audit properties. Build a threat model and protocol compatibility matrix with actual runner versions.

P1 read-only pilot: one tenant/team, Jira + Confluence + GitHub, narrow authorized resources; incremental ingestion, source ACL propagation and deletion; evidence-backed recommendations with human review. Evaluate retrieval recall, citation correctness, stale/conflicting evidence and cost/latency on a curated question set.

P2 planning pilot: versioned specs/ticket proposals, editable estimates, capacity with coarse availability, explicit approval. Measure edit distance from approved human artifacts, missed dependencies and decision usefulness. Do not measure employee quality via agent scores.

P3 isolated implementation pilot: one supported coding harness, temporary workspaces, allowlisted tools, resource budgets, independent review and test execution. Verify cancellation, idempotency and capability revocation before permitting external writes.

P4 controlled delivery: provider-specific PR creation, CI observation, approved deployment with reconciliation, audit receipts and rollback procedures. Start in staging. Expand adapters only after capability and policy tests.

P5 organization scale: multiple tenants, 133+ repositories, per-source ACL changes, search latency, incident response, recovery, billing/quota and operability. Validate with load tests and tenant-escape tests; no scale claim follows from the demo's catalog count.

## Open decisions register

Nova identity; actual coding runners; target issue/deploy providers; source freshness SLAs; real calendar/HR privacy model; team-level versus tenant-level shared skills; event retention; hosting and SSO; exact AHP implementation/version; whether A2UI adds value beyond static approved components. None blocks the inert prototype because each has a documented fixture assumption.
