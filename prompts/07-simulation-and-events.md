# Stage 07 — Deterministic runs, events and approval gates

Apply master contract. Read docs/06 state machines and fixtures/events.json. Integrate the graph snapshot and artifact commands into a local deterministic scheduler and run detail page.

The scheduler accepts scenario ID, fixed seed/clock, immutable workflow version and fixture revision. Emit ordered internal events with stable IDs, run token, sequence number, node ID and attempt. Support normal and instant playback without changing semantic ordering. Deduplicate event IDs and reject/buffer out-of-order events explicitly. This is AG-UI-inspired playback, not a live AG-UI connection.

Implement queued/running/waiting-input/waiting-approval/succeeded/failed/blocked/skipped/cancelled node states and docs/06 run states. Pause at business clarification and approvals until valid local action; do not let a timer skip gates. Retry only scripted retryable errors, increment attempt and honor configured budget. Cancellation/reset/tenant-switch/unmount dispose pending timers and invalidate the run token so late callbacks cannot mutate new state.

Run detail has stage graph, timeline, evidence/artifact tabs, safe activity summaries, current blockers, attempt counts and event inspector. Display timestamps derived from fixed clock. Do not show fabricated hidden chain-of-thought. Event inspector offers lifecycle/text/tool-like/state/domain-gate filters labeled internal fixtures. A tool activity row is a simulated event, not proof a provider was called.

Approvals bind current artifact ID/version and run gate. Wrong persona, author self-approval at independent gate, expired version or changed artifact blocks resume. Request-changes ends that attempt in needs-changes; revision starts a new attempt/run as specified rather than creating a backward DAG cycle. Persist drafts but not timer authority; reload an active run into paused/restart state with clear copy.

Add /demo scenario selector, speed, role, reduced motion and failure presets. Scenario reset confirmation names its scope. A completed run ends with “Simulation complete. No tickets, PRs or deployments were created.” Expose stage-08 fixtures as timeline milestones but do not prematurely mark required review/CI as passed.

Exit checks: S1 pauses correctly; S2 retry does not duplicate rows; A19 cancellation/replay has no late events; published version remains pinned; approval/version checks hold; repeated replay is deterministic; tenant switch disposes timers. Test scheduler with fake clock and duplicate events. Report actual outcomes and any incomplete run paths.
