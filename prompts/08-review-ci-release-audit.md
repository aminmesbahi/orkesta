# Stage 08 — Implementation preview, independent review, CI and release

Apply master contract. Read docs/09 S1/S5 and docs/12 finding contract. Build realistic fake delivery screens and connect them to local gate commands, never to code execution.

Implementation preview shows synthetic file tree and diff across payment-api/order-service/ledger-worker/seller-web. Use consistent paths/revision labels and visible “Fixture diff” text. First diff deliberately misses an aggregate concurrency guard. Independent review produces a high-severity finding with location, impact, evidence and suggested remediation. Findings filter by severity/category/status. An “addressed” checkbox does not count as verified-fixed.

Provide scripted remediation to diff v2, invalidating prior review approvals. A different reviewer persona can inspect and approve the new version. Attempts to approve as author or approve stale artifact are blocked. Accepted-risk disposition needs a reason and cannot bypass configured blocking severity policy.

CI screen displays fake suites: amount validation, aggregate cap, duplicate request/idempotency, ledger reconciliation and UI permissions. Include running/passed/failed/skipped states, duration, log excerpts and artifact version. Logs say “Fixture output.” Failed CI keeps release blocked even under release-approver persona; selecting remediation and rerun changes the scripted attempt, not real tests.

Release readiness shows environment, current spec/diff/review/CI versions, open blockers, rollout steps, health fixture and rollback plan. Staging/production are separate. Production needs current passing CI and independent explicit release gate. Action is “Simulate deployment.” Rollout is a local timeline with success/failure preset and “Preview rollback” plan. No outbound requests or real deployment state claims.

Add audit explorer with meaningful tenant-scoped events from admin edits, graph publish, evidence/spec decisions, role-based blocked actions and release simulation. Filters include actor/entity/action/outcome/date; detail excludes sensitive/raw hidden reasoning. Export is local JSON download labeled synthetic, if implemented; do not send data anywhere.

Exit checks: S5 cannot bypass failed CI/self-review/stale approvals; remediation requires new current-version review; full S1 reaches inert final state; audit matches actions with coherent IDs/timestamps; fixture logs/diffs cannot be mistaken for real execution. Capture review/CI failure/release gate screenshots, run gate tests and build, and report actual results.
