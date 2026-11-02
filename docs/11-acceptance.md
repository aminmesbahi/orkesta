# 11 — Acceptance criteria and verification

These criteria apply to the generated prototype, not claims that this specification kit has already implemented/tested a React application. Package validation checks are recorded separately in `review/package-validation.md`.

| ID | Given / action | Required observable result |
|---|---|---|
| A01 | Load each route and reload a deep link | Correct tenant/project screen; unknown IDs scoped not-found |
| A02 | Switch Atlas → Meridian during running research | Timers stop; drawers/search/selection clear; no Atlas content |
| A03 | Put Atlas project ID under Meridian URL | No record/count/title leakage |
| A04 | Create team/project with invalid/duplicate fields | Inline errors, preserved input, first error focus |
| A05 | Complete five-step wizard and go back/reload | Values persist; local project exists; no real connection |
| A06 | Configure Jira denied/expired/rate-limit presets | Distinct messages and working local recovery |
| A07 | Try unsupported connector operation | Not selectable; capability explanation visible |
| A08 | Add/move/connect/delete graph nodes and undo | Controlled graph and inspector remain consistent |
| A09 | Create cycle/dangling input/gate bypass | Validation identifies targets; publish/simulate blocked |
| A10 | Publish v2, start run, edit draft | Existing run unchanged; comparison shows changes |
| A11 | Run partial-refund research | Cited historical ticket, stale doc and pinned code conflict shown |
| A12 | Open evidence drawer | Revision, freshness, locator and relation visible; internal fixture |
| A13 | Required clarification unanswered | Scope approval blocked with actionable question |
| A14 | Approve spec then edit scope | New version; previous downstream approvals invalidated |
| A15 | Preview tickets | Same structure, acceptance cases and citations; no Jira creation |
| A16 | Change capacity/start date/leave | Deterministic forecast change or clearly named fixture preset |
| A17 | Hide calendar capability | Availability unknown; no full-capacity assumption |
| A18 | Use private skill as another persona | Permission presentation prevents use; no private contents |
| A19 | Play run, cancel/reset/replay | No late events, duplicate rows or leaked timers |
| A20 | Retry scripted error | Attempt increments within budget; completed work not duplicated |
| A21 | Self-approve independent review | Blocked; valid separate reviewer can approve current version |
| A22 | CI fails | Release remains blocked even for release approver |
| A23 | Pass remediation and CI then release gate | Simulated rollout only; final no-external-action message |
| A24 | Unknown approved-surface component | Safe fallback; no arbitrary script/HTML evaluation |
| A25 | Reset selected/all demo data | Scope stated; confirmation; identical seed restored |
| A26 | Browser storage unavailable/corrupt/old schema | In-memory mode or reset/migrate notice; no crash |
| A27 | Use keyboard for main journey and designer list | No trap; labels, focus order and return are correct |
| A28 | View 390/1024/1440px, reduced motion, Persian text | Usable controls, deliberate table scroll, readable mixed text |
| A29 | Audit filter and action previews | Actor, version, target, outcome; no sensitive payload |
| A30 | Observe runtime network requests | No model/provider/backend/OAuth requests; only app assets/dev tooling |
| A31 | Build and inspect console | No unresolved imports/type errors/runtime errors |
| A32 | Source results show 133 catalog entries | Only 4 detailed repos presented as examined evidence |

## Meaningful tests

Unit tests target graph invariants, scoped selectors, version-bound approvals, capacity workday math and scheduler cancellation/deduplication. Avoid tests that merely repeat constant strings. Integration/browser checks cover S1, S2, S3, S4 and S5, plus empty onboarding. Inject fixed clock and scenario seed.

Network verification: use browser request logging/interception against the built app. Allow same-origin static assets and the dev server's HMR only in development. Fail on provider hosts, model endpoints, OAuth redirects, EventSource/WebSocket integration attempts, beacons and backend writes. Keep fonts/icons bundled; no external analytics. Scan code for fetch/axios/EventSource/WebSocket/sendBeacon and explain any legitimate local-only exception. Static search alone is not sufficient.

Visual review: screenshots at 1440×900 for overview, source matrix, workflow, evidence/spec and review/release; 390px for intake and workflow list; at least one modal/error state. Check clipped labels, overflow, contrast and timeline chronology. Record actual observations and limitations; do not label untested checks as passed.

## Final handoff from generator

Provide source, lockfile, exact run/build commands, actual versions, state/persistence explanation, demo script and test results. Include known limitations. Explicitly state that there is no server, no real authentication, no live AI and no external effect. Product UI should communicate demo status succinctly without displaying implementation jargon on every screen.
