# Stage 10 — Acceptance, network audit and final handoff

Apply master contract. Use docs/11 as the release checklist for the prototype. Complete verification and fix failures; do not simply generate a checklist marked passed.

Run clean install using lockfile, type checks and production build using the actual project scripts. Test domain graph invariants, scoped selectors, artifact-version approvals, deterministic scheduling/cancellation and capacity workday math. Browser-test S1 complete journey, S2 source failure, S3 tenant isolation, S4 graph repair, S5 failed-CI gate and S7 onboarding. Confirm deep-link reload behavior in the intended hosting setup.

Audit runtime network using browser request logging/interception. Only same-origin static assets are allowed in the built prototype; dev HMR is allowed only in development. Fail on model/provider/backend/OAuth requests, analytics beacons and live EventSource/WebSocket integrations. Scan for fetch/axios/EventSource/WebSocket/sendBeacon as a secondary check and explain legitimate exceptions. No production credentials or source data may be present in fixtures, storage or outputs.

Execute acceptance A01–A32 and record pass/fail/not-tested with actual observations. Fix blockers to inertness, tenant presentation, graph gates, evidence provenance and reset determinism. Re-run only affected tests after fixes. Do not claim actual CI, repository analysis or deployment happened because fixture playback succeeded.

Capture screenshots at required viewport sizes: overview, source matrix, workflow canvas/list, evidence/citation/spec, capacity, review/failed CI and release gate. Review for overflow, clipped labels, contradictory counts and missing simulated status. Keep screenshots local and synthetic.

Create final README with exact install/dev/build/preview commands, actual runtime/package versions, route overview, demo role/scenario guide, persistence/reset behavior and known limitations. Include IMPLEMENTATION_NOTES and acceptance results. If a ZIP is requested in the implementation environment, package source/lockfile/docs/screenshots without node_modules, credentials or build caches.

Exit deliverable: runnable frontend source, lockfile, coherent fixtures, complete scenario controls, actual test/build/network results and clear limits. Final message states that the prototype is interactive but has no backend, real authentication, live AI or external effects. If any acceptance remains untested, name it; never fabricate a pass.
