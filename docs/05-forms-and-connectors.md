# 05 — Forms and connectors

All writes update local demo state. Validation occurs on blur and submit; field errors use text and `aria-describedby`, preserve input and focus the first invalid field. Required fields show labels; no placeholder-only fields. Pending operations disable duplicate submission, support cancellation and announce success/failure.

## Admin forms

| Form | Fields and rules | Submission/result |
|---|---|---|
| Team | Name 2–80 chars, slug `[a-z0-9-]` unique per tenant, timezone IANA, workweek, daily hours 1–12 | Creates local team; success link to settings |
| Membership | Existing synthetic member, role, team, optional project grants, weekly capacity 0–40h | Duplicate member prevented; owner role requires owner persona |
| Project identity | Name 2–100, key 2–10 uppercase, description ≤2000, team, owner, timezone | Unique tenant key; owner must be active member |
| Connector setup | Provider, display name, fake workspace URL ending `.example`, fixture identity preset, simulated scope preset | No credential/password/token inputs; “Simulate connection” only |
| Resource binding | Connector instance, resource checkboxes, stage set, operation allowlist, freshness threshold | Cannot select unsupported capability or denied resource |
| Stage configuration | Enabled, ordered node list, context budget, output template, skill version, approver role | Validates required inputs and role compatibility |
| Gate policy | Stage, actor role, independent approval, expiration hours 1–168, blocked severities | Cannot disable tenant production gate |
| Environment | Name, type dev/staging/production, release approver, rollback fixture, CI requirements | Production requires explicit simulated approval gate |
| Skill editor | Name, ownership, visibility, version, input/output schema, tool capability list, instructions | Validates schema fields; publishes local immutable version |
| Intake | Outcome 20–2000 chars, problem, users, success metric, urgency, target date, constraints, excluded scope | Missing outcome blocked; uncertain fields may say “unknown” |
| Clarification | Question, single/multi choice or free text answer, rationale, reviewer | Mandatory unanswered questions block scope approval |
| Node inspector | Name, stage, node type, connector/resource binding, input mapping, output key, timeout, retries | Errors attach to node and validation panel |
| Approval | Artifact version, decision approve/request-changes/reject, reason required for non-approve | Version mismatch or wrong role blocked |

## Five-step project wizard

1. Identity/team: choose existing or locally create team; role/scope summary.
2. Source mapping: six rows for business/product/code/review/CI/deploy; each row picks connector resources and read/propose permissions. Expand rows to inspect denied operations.
3. Workflow: choose “Evidence-first delivery,” “Bug investigation” or “Security hotfix”; preview stages and gates.
4. Policy: choose approvers, freshness, budget and simulated deployment environments; inherited restrictions appear locked with source label.
5. Review: explicit diff of project, scopes, workflow version and policy. “Create demo project” creates local records only. Back navigation preserves values; closing a dirty wizard asks whether to discard.

## Connector catalog

| Provider | Synthetic resources | Capabilities represented | Demo edge cases |
|---|---|---|---|
| Jira | ORKESTA project, tickets PAY-217/PAY-684 | Search/read issues, history, owner/workload; propose issue | Rate limited, inaccessible project, stale ticket |
| Confluence | Commerce space, ADR pages | Search/read docs and versions | Superseded decision, restricted page |
| GitHub | orkesta-demo organization, 133 repository catalog | Search metadata, read files/PRs, owners, CI summary; propose PR | Missing permission, stale revision, ambiguous ownership |
| Nova | Custom business-system adapter; needs, customer segments, initiatives | Read synthetic business records; propose update | Provider meaning unknown; configurable schema/capabilities |
| Calendar | Synthetic working windows | Coarse availability read | Leave conflict, missing timezone |
| HR/leave | Synthetic leave blocks | Approved leave windows, coarse hours | Restricted personal details; show capacity only |
| Text files | Bundled architecture notes | Local fixture document read | Unsupported format, outdated content |
| Slack/Teams | Dummy project channel | Preview notification draft | Sending unavailable; no real messages |
| CI/CD | Fixture GitHub Actions-style pipeline and deployment environment | Read fake runs, preview release/rollback | Failed tests, pending approval |
| Database catalog | Synthetic schema and aggregate samples | Read metadata/curated aggregates | No SQL execution, sensitive column redaction |

Nova is deliberately not mapped to a vendor API or protocol. Display “Nova · custom adapter (demo)” and let admins map business record fields. MCP is an integration option, not evidence that every provider supplies an MCP server or supports every operation.

## Connector setup states

`not_configured → configuring → testing → connected_demo`. Alternative outcomes: `permission_denied`, `expired_demo`, `rate_limited`, `unavailable`, `partial`, `schema_mismatch`. Each has status text, last checked timestamp, affected capabilities and a local retry or change-preset action. “Connected (simulated)” must not be shortened to an unlabeled real connection indicator.

Resource picker supports search, source-specific path, checkbox selection, permission badges and selected count. A select-all control selects only visible allowed records, stating its scope. Revoking a selected resource marks bindings invalid and pauses dependent simulations. A stale resource remains selectable only with an explicit stale-data warning; denied resources never reveal hidden titles or excerpts.

## Canonical adapter concept — future only

```text
describeCapabilities(context) -> capability names, schemas, limits
listResources(context, cursor) -> resources, ACL/freshness metadata, nextCursor
search(context, query, filters) -> evidence candidates
read(context, resourceRef, revision) -> content, provenance, visibility
proposeAction(context, action) -> reviewable proposal; no effect
executeApprovedAction(context, proposal, approval, idempotencyKey) -> receipt
```

Context includes server identity, tenant, project and effective resource grants. Errors are typed: code, safeMessage, retryable, retryAfter, affectedCapability, correlationId. Prototype implements only local selectors and proposal previews; it does not create these network endpoints. Future credential handling, webhook verification, pagination, provider rate limits and incremental ingestion require adapter-specific implementation and tests.

## Project source matrix example

Business reads Jira history, Nova initiatives and Confluence decisions; Product reads approved evidence and curated competitor fixture notes; Code reads four allowed repositories plus architecture docs; Review reads pinned diff and security checklist; CI reads synthetic run reports; Deploy reads environment metadata and rollout policy. Product can propose a ticket; Code can propose a PR; Deploy can propose a release. No binding authorizes a real write in the prototype.
