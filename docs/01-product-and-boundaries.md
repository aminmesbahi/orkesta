# 01 — Product, scope and boundaries

## Product thesis

Working name: **Orkesta**. An organization-level coordination layer takes a business outcome, assembles permission-filtered evidence from work history, documentation and code, proposes a consistent implementation specification, and carries the approved artifact through development, independent review, CI and release gates. It augments product and engineering judgment. Reading code does not establish business value, eliminate uncertainty or guarantee a delivery date.

The primary demo begins with “Enable partial refunds for marketplace orders.” The system finds an old Jira ticket, a superseded Confluence decision, a newer code implementation and an ownership map across an organization with 133 synthetic repositories. It highlights a conflict, asks a business question, proposes a versioned specification, and offers capacity-aware assignments with ranges and assumptions. A human accepts the scope before the simulated development handoff.

## Entities and ownership

Tenant → teams → projects → workflow definitions → immutable versions → simulation runs. Membership is tenant-scoped. Project access is a separate grant; team membership alone does not grant every connector. Connectors belong to a tenant, while project bindings select allowed resources, stages and operations. Skills have tenant/team/project ownership and immutable versions. Projects reference versions rather than mutable global defaults.

| Role | Main jobs | Prototype permissions |
|---|---|---|
| Tenant owner | Tenant settings, teams, policy defaults | All simulated administration in selected tenant |
| Team admin | Members, project setup, connector bindings | Team/project changes; cannot weaken tenant constraints |
| Business requester | Outcomes, constraints, questions | Create intake; comment; see permitted evidence summaries |
| Product lead | Scope, value, acceptance | Approve business/spec scope; request clarification |
| Engineering lead | Architecture, dependency and estimate review | Approve plan, choose assignee, review risks |
| Developer | Plan, source context, implementation preview | Simulated code activity; no release approval |
| Reviewer | Independent findings and dispositions | Review gate; no automatic self-approval |
| Release approver | Environment and release decision | Simulated production gate |
| Viewer | Observe demos | Read allowed screens; editing disabled with explanation |

Role switching is explicitly a demo control, not an authentication flow. No user management emails are sent. If multiple roles are combined, separation-of-duty rules still prohibit an artifact author from approving their own review/release gate.

## Core journeys

1. Owner creates a team, adds synthetic members, selects calendars and working hours.
2. Admin creates a project, selects resource scopes per stage, sets output templates and approval policy.
3. Admin configures an ordered business research workflow and previews its graph.
4. Business requester submits an outcome and constraints; simulated research presents evidence, gaps and questions.
5. Product/engineering leads review a normalized spec and ticket decomposition with citations and impact map.
6. Lead compares capacity suggestions, edits assumptions and selects an assignee.
7. Developer/reviewer inspect a fake diff, test plan, findings and remediations.
8. Release approver sees CI results, environment gates and a simulated rollout/rollback timeline.

## Feature priorities

P0: tenant/team/project shell; admin wizard; connector resource scoping; workflow designer; seeded business-to-spec-to-release demo; evidence provenance; local state transitions; all error and permission states; reset.

P1: workflow version comparison; skill version registry; capacity what-if controls; activity export; A2UI component-catalog preview; protocol event inspector. All are still specified and prompted in this package.

Explicit exclusions: real SSO, real OAuth, credential capture, real MCP servers, production authorization, live search, real LLM orchestration, source indexing, shell access, PR creation, messaging, CI and deployment. Future architecture describes these without implementing them in the prototype.

## Success signals

In a ten-minute guided demo, an admin can show where each stage gets context, business can inspect why a recommendation was made, engineering can identify affected repositories and uncertainty, and reviewers can explain why a blocked gate cannot advance. “133 repositories” means a seeded searchable catalog, never a claim that 133 repositories were actually read.

Time/cost savings charts are labeled illustrative. Estimate ranges are human-editable planning hypotheses, not employee performance scores or commitments. Availability is synthetic coarse capacity, not private calendar event titles.
