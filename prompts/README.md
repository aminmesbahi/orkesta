# How to run the staged prompts

1. Make this entire folder available to the coding tool as reference material. Keep generated application source in a sibling `orkesta-prototype/` directory so specifications remain intact.
2. Start a session by pasting `00-master.md`. Ask the tool to read the referenced files from disk; if it cannot access files, attach the master plus the current stage's listed docs/fixtures. Do not assume a previous chat's files are available.
3. Paste stage 01. Review its actual browser output, build result and IMPLEMENTATION_NOTES before stage 02. Continue sequentially through stage 10. Each prompt is a concrete implementation task, not a request to propose another plan.
4. At a context reset, paste the master again, then actual IMPLEMENTATION_NOTES, current source tree and the next unfinished stage prompt. The package alone does not prove prior implementation stages were completed.
5. Keep requests narrowly scoped to this inert prototype. A generator proposing API keys, a backend, real OAuth or live models is violating the master contract; use the correction prompt below.

## Stage input map

| Stage | Required reference inputs |
|---|---|
| 01 | docs/03, docs/04, docs/07, contracts/domain.ts |
| 02 | docs/08, all fixtures and contracts |
| 03 | docs/05, docs/04, seed.json |
| 04 | docs/06, workflow.json, workflow-versions.json |
| 05 | docs/09 S1/S2, docs/12, seed.json |
| 06 | docs/08, docs/12, delivery.json surface |
| 07 | docs/06, events.json, workflow versions |
| 08 | docs/09 S5, docs/12, delivery.json |
| 09 | docs/07, docs/08 state matrix |
| 10 | docs/11, all actual implementation notes/results |

## Correction prompt

Re-read prompts/00-master.md and the current stage. Your implementation must remain a local, synthetic, operationally inert frontend. Remove live integrations/credential fields/backend calls and replace them with deterministic fixtures and explicit simulation labels. Preserve useful local forms, graph editing, filters, gate checks and recovery states. Identify the violated requirement, fix the concrete code, run relevant checks and report actual results. Do not claim a provider connection or external operation succeeded.

## Stage review prompt

Review the current implementation against this stage's exit criteria and docs/11. Run available checks and inspect the actual browser UI. List each unmet criterion with the affected route/action and implement the fix. Verify tenant scope, source provenance, current-version approvals and absence of external effects. Update IMPLEMENTATION_NOTES with observed results and unresolved limits. Do not advance merely because the screen looks complete.
