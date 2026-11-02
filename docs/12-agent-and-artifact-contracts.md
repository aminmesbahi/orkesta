# 12 — Skills, agents and output contracts

## Agent responsibilities for the future product

Business analyst retrieves historical context and asks about outcomes; product planner creates consistent scope and acceptance; architecture analyst maps affected services and dependencies; capacity advisor proposes editable staffing scenarios; coding worker implements only an approved plan; independent reviewer evaluates artifact/checklist; release coordinator gathers test/environment readiness. These are roles/capability profiles, not mandatory separate model instances.

The prototype shows these identities and their outputs through fixtures. It does not invoke them. A shared harness must manage context budgets, allowed tools, artifact versions, policies, checkpoints and evidence consistently across tools; it cannot infer interoperability from all tools being called “agents.”

## Skill contract

Fields: id, name, ownerId, tenantId, scope (tenant/team/project/private), version, description, inputSchemaVersion, outputSchemaVersion, instructions, requiredCapabilities, permittedStages, reviewedBy, reviewedAt and status. Publishing produces immutable version. A project pins the version; upgrading shows changed capabilities and requires local review. Private skills do not become team-shared merely because a project uses the same name.

Suggested synthetic skill catalog:

| Skill | Scope | Output | Restrictions |
|---|---|---|---|
| Evidence-first specification | Tenant | SpecDraft v1 | Citations required; no unsupported facts |
| Commerce impact map | Team | ServiceImpact v1 | Read selected repo metadata only |
| Payment safety review | Team | Findings v1 | Idempotency/concurrency/ledger checklist |
| Ticket normalization | Tenant | TicketDraft[] v1 | Same structure for every task |
| Release readiness | Project | ReleaseReadiness v1 | Current CI and gate evidence |
| Personal investigation notes | Private | Note v1 | Owner-only; not selectable by others |

## Normalized specification template

```text
Title / artifact ID / version / status
Business outcome and success metric
Problem, affected users and current behavior
Evidence-backed existing capabilities and historical decisions
Contradictions, freshness caveats and unresolved questions
In scope / out of scope
Proposed behavior and business rules
Affected repositories, services, files and data contracts
Dependencies and backward compatibility
Security, privacy, observability and operational impact
Acceptance criteria (Given / When / Then)
Implementation tasks and dependency order
Test plan and release/rollback proposal
Effort range, assumptions, uncertainty and human owner
Evidence manifest and approvers
```

Every factual statement has evidence IDs or is marked assumption. A code locator is pinned to a revision; ticket/doc citations include historical date and version. If evidence conflicts, show both and describe the unresolved decision. A scope approval does not certify every generated technical statement.

## Ticket draft template

Title, parent spec/version, task type, problem/outcome, current/proposed behavior, repository/file hints, bounded scope, dependencies, acceptance cases, test obligations, observability, risks, effort range, candidate owner and source references. Ticket drafts retain `draft-*` IDs so they cannot be mistaken for real Jira issue IDs.

Four partial-refund drafts: payment API amount validation/idempotency; order-service cumulative cap with concurrency protection; ledger-worker partial reversal entries; seller-web amount form and permission/error states. Link backend prerequisites before UI rollout. Include gateway compatibility as a discovery dependency rather than assuming provider semantics.

## Review finding contract

id, artifactId/version, file/path/line locator, severity, category, description, evidence, impact, suggested remediation, disposition, reviewerId and verificationState. A finding can be open, accepted-risk, fixed-pending-verification or verified-fixed. “Addressed” does not equal “verified.” Independent reviewer must approve the new diff version. Show synthetic test failures as artifacts, not proof that real tests ran.

## Capacity proposal contract

Candidate, relevant recent contributions (fixture evidence), coarse capacity, leave overlap, current commitments, estimated effort band, onboarding/dependency overhead, forecast band and assumptions. Rank by transparent suitability factors only if labeled advisory; no single performance score. Manager chooses assignment. Calendar data alone does not establish availability or willingness.

## Approved-surface preview contract

Internal fixture envelope: schemaVersion `demo.surface.v1`, surfaceId, catalogVersion, components[{id,type,props}], data and allowedActions. Supported types: evidence-card, clarification-form, approval-card, capacity-table. Actions map to known local commands; unknown action/component is rejected. Max 50 components, bounded text lengths, validated URLs and no HTML props. This is a demo contract inspired by declarative UI; it is not an A2UI wire schema. A future adapter must convert validated A2UI messages for a pinned renderer/catalog into controlled application components.
