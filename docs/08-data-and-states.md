# 08 — Mock data contract and state behavior

Canonical machine-readable inputs: [seed](../fixtures/seed.json), [workflow](../fixtures/workflow.json), [events](../fixtures/events.json), [types](../contracts/domain.ts). The fixtures are synthetic examples, not complete production schemas. The prototype generator must expand them to the quantities below while retaining IDs and relationships. A generated catalog entry is not retrieved evidence.

## Cardinality and coherence

| Entity | Required demo quantity | Referential rule |
|---|---|---|
| Tenant | 2: Atlas Commerce and Meridian Labs | No shared record IDs with tenant content |
| Team | 2 Atlas, 1 Meridian | Team references tenant |
| Project | Refund Modernization and Seller Portal in Atlas, one Meridian project | Project belongs to team in same tenant |
| Member | 6 Atlas, 2 Meridian | Calendar capacity and leave reference member |
| Connector | 10 Atlas catalog instances, 2 Meridian | Bindings never cross tenants |
| Repository | 133 Atlas, 3 Meridian | Stable catalog IDs; only 4 Atlas repos have detailed evidence |
| Jira ticket | 12 Atlas, 2 Meridian | At least 3 historical, 3 current, 4 proposed draft tasks |
| Document | 8 Atlas, 2 Meridian | One stale ADR, one updated decision, one denied placeholder |
| Workflow | 3 templates, main workflow v1 and v2 | Runs pin published version |
| Request/spec | 3 requests, 2 versioned specs | Citations resolve to same-tenant permitted evidence |
| Review/CI/release | 2 each | Reference run/artifact versions |
| Skill | 6 shared/team/private examples | Private skills not available to other personas |
| Audit | ≥20 meaningful local events | Actor, target, tenant, timestamp and outcome |

Generate catalog metadata deterministically: `repo-atlas-001` through `repo-atlas-133`, stable domain/owner distribution, fixed `2026-11-02T08:00:00Z` baseline. Four named repositories are payment-api, order-service, seller-web and ledger-worker. Do not fabricate file excerpts for the other 129; display “Catalog metadata only.”

## Core record fields

Every scoped record has id, tenantId, createdAt and updatedAt when mutable. Evidence additionally has connectorId, externalId, resourceId, sourceType, title, locator, revision, observedAt, freshness, visibility, excerpt, claimRelation and confidenceLabel. ConfidenceLabel is a qualitative assessment, not a calibrated probability.

Artifact has kind, version, contentHash placeholder, status, inputRefs, evidenceIds, unresolvedQuestions and authorId. A demo hash may be a stable local checksum explicitly labeled “demo checksum”; do not imply cryptographic signing. Approval references artifact ID and version. Run includes workflow/version, scenario seed, status, attempts, events and current blockers.

Project bindings specify stage, connectorId, resourceIds and allowedOperations. Skill has scope, owner, version, schemas, capability requirements and reviewed status. Capacity includes timezone, weekly hours, current allocation, approved leave blocks and estimated task ranges. Never include real HR or performance information.

## Store design

Normalize by entity ID; versioned artifacts/workflows use tenant/id/version composite identity with separate current-version pointers. Selectors require `{tenantId, projectId?, personaId}`; missing tenant is an error. Route params are resolved through scoped selectors. UI state stores selected IDs, never duplicated source records. Preserve drafts in `orkesta-demo:v1:<tenantId>:<projectId>:<entityType>:<id>`. Tenant-level drafts use an explicit `_tenant` scope. Store schemaVersion and fixtureRevision; reject/migrate incompatible storage with a clear reset option.

Local persistence whitelist: drafts, workflow layout, user display preferences and demo scenario choice. Do not persist tokens, fake credentials, active timers or approval authority. On reload, active simulations become paused with a “Restart scenario” action. Reset selected scope restores seed deterministically; reset all requires a dialog naming both tenants.

## Interaction matrix

| Area | Ready | Pending | Empty | Error / restriction | Recovery |
|---|---|---|---|---|---|
| Teams | Member list | Creating local team | No teams | Duplicate slug/role denied | Edit field/switch demo role |
| Connectors | Connected (simulated) | Checking fixture | Not configured | Expired/denied/rate limited | Change preset/retry |
| Evidence | Cited cards | Research progress | No accessible result | Partial sources/stale conflict | Broaden scoped query/review caveat |
| Spec | Draft sections | Generating fixture | No spec yet | Required questions open/version mismatch | Answer/rebase draft |
| Capacity | Candidate comparison | Recomputing locally | No eligible member | Leave conflict/missing hours | Edit assumption/unassign |
| Graph | Valid draft | Validating | Blank template | Cycle/missing binding/bypass gate | Focus error and repair |
| Run | Timeline | Scripted active stage | Not started | Waiting/failed/cancelled | Answer/approve/retry/replay |
| Review | Findings and diff | Fixture loading | No findings in fixture | High severity unresolved | Choose remediation scenario |
| Release | Ready preview | Rollout animation | No release candidate | CI failed/approval absent | Fix fixture path and reapprove |
| Audit | Event rows | Filtering | No matching events | Local storage unavailable | Continue in-memory with notice |

Every primary button has an explicit local outcome or a disabled state with explanation. Fake actions must not silently succeed. A “Preview Jira tickets” action opens draft issue cards, not a toast claiming tickets were created.

## Fixture timing and estimates

Use 250–900ms scripted delays for local UI realism; fast mode uses 0ms but preserves ordering. The main research run pauses for clarification and approval regardless of speed. Capacity example: task effort 24–40 hours; Sara available 6h/day but on leave Nov 5–6; Nima available 4h/day with domain context; Elena available 5h/day but onboarding overhead. Show forecast as a range derived from chosen start date, workdays, allocation and leave, with assumptions visible. Fixture default forecast is illustrative; a what-if control must recompute local displayed dates or clearly say “scenario preset,” never pretend an unchanged number was recalculated.
