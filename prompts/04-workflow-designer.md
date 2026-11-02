# Stage 04 — Real local visual workflow designer

Apply master contract. Read docs/06 and fixtures/workflow.json. Use `@xyflow/react` as a controlled editor, not a workflow executor. Implement the workflow library and designer route.

Create six stage lanes, palette, canvas, inspector and validation panel. Seed the ordered business investigation: similar Jira tickets → Confluence decisions → targeted code → clarification; then spec/scope approval/capacity/implementation/independent review/CI/release approval/rollout. Use provided stable node IDs and meaningful deterministic positions. Every node shows source scope, type, output and configuration state.

Support add by drag and button/keyboard, selection, move, connect typed handles, edit configuration, delete, duplicate, undo/redo, fit/zoom/minimap and accessible list view. List view must allow equivalent configuration and connection edits. Node configuration references connector resource IDs and stage-compatible capabilities from admin bindings. Include condition and notification-preview node types; never evaluate code expressions or send notifications.

Implement domain validation: one trigger, reachable terminal, acyclic graph, no dangling/duplicate edges, required inputs, unique output keys, compatible input mapping, valid bindings, bounded retry/timeout, no required gate bypass, existing independent approver and production CI/release requirements. Errors include code and target ID; clicking focuses target. Invalid drafts can save but cannot publish/simulate. Do not disable validation just to make a screenshot green.

Separate mutable drafts from immutable published versions. Publish creates vN with local audit. Compare versions shows nodes/edges/config changes. Restore makes a new draft. Runs will snapshot a version; expose a snapshot API for stage 07. Editing canvas must not mutate a published record.

Use memoized node types and stable handlers; import stylesheet; fixed-height canvas; avoid whole-domain-store rerenders while dragging. Dirty navigation guard should preserve or discard local draft explicitly. Small-screen view defaults to list; keep inspector reachable.

Exit checks: S4 broken graph catches cycle/output/binding errors; repair allows publication; v1/v2 comparison works; undo/redo restores IDs and edges correctly; no graph edit crosses tenant scope; keyboard add/configure/connect is possible. Run graph invariant tests and build. Report actual behavior and any remaining node configuration limitations.
