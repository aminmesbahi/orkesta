# 04 — Route map, screens and component tree

## Navigation

Root `/` opens a demo workspace chooser. Canonical tenant prefix is `/t/:tenantId`. Canonical project prefix is `/t/:tenantId/p/:projectId`. Selected project/team must resolve inside the active tenant. Unknown IDs show a scoped not-found screen, never the first matching record from another tenant. Use a hash router only if hosting cannot supply SPA fallbacks; record the choice.

| Suffix | Screen | Primary layout and action |
|---|---|---|
| `/t/:tenantId/overview` | Tenant overview | Team/project summary, pending gates, recent activity |
| `/t/:tenantId/admin/teams` | Teams | Searchable team table; create drawer |
| `/t/:tenantId/admin/teams/:teamId` | Team settings | Members, working hours, roles, project grants |
| `/t/:tenantId/admin/projects/new` | Project setup | Five-step wizard: identity, team, sources, workflow, policy |
| `/t/:tenantId/connectors` | Connector catalog | Cards; health, capability and scope badges |
| `/t/:tenantId/connectors/:connectorId` | Connector detail | Simulated setup, resources, health log, usages |
| `/t/:tenantId/skills` | Skill registry | Shared/private filters, owner, version, scope, review status |
| `/t/:tenantId/audit` | Audit explorer | Local changes/events, actor, target, outcome filters |
| `/t/:tenantId/p/:projectId/overview` | Project home | Stage pipeline, active runs, source coverage and warnings |
| `/t/:tenantId/p/:projectId/settings` | Project settings | Source matrix, stage policy, templates, environments |
| `/t/:tenantId/p/:projectId/intake` | Business intake | Form beside examples and scope summary |
| `/t/:tenantId/p/:projectId/workbench/:requestId` | Evidence workbench | Request, research summary, evidence list, citation drawer |
| `/t/:tenantId/p/:projectId/specs/:specId` | Spec review | Sections, versions, diff, questions, ticket preview |
| `/t/:tenantId/p/:projectId/capacity` | Capacity planning | Candidates, availability bands, what-if panel |
| `/t/:tenantId/p/:projectId/workflows` | Workflow library | Templates and versioned definitions |
| `/t/:tenantId/p/:projectId/workflows/:workflowId/edit` | Visual designer | Palette left, six-lane canvas center, inspector right |
| `/t/:tenantId/p/:projectId/runs/:runId` | Run detail | Timeline and graph; evidence/artifact/event tabs |
| `/t/:tenantId/p/:projectId/reviews/:reviewId` | Review center | Fake diff, findings, severity, disposition, gate |
| `/t/:tenantId/p/:projectId/releases/:releaseId` | Release readiness | CI matrix, environment gate, rollout/rollback preview |
| `/demo` | Demo controls | Scenario, role, latency, state preset and reset |
| `*` | Not found | Return to selected tenant with no leaked details |

Keep global tenant switcher, team/project switcher, breadcrumb, command search, help and demo badge in the shell. Left navigation groups: Work, Automate, Organization. Tenant-level screens preserve tenant context without inventing a selected project. Deep links must reload correctly.

## Screen composition

Business workbench: left 360px request/clarification column; center evidence-backed narrative; right optional 400px citation drawer. Show source type, ID, revision, freshness and confidence on every claim. “No accessible evidence” is distinct from “Feature absent.”

Spec screen: pinned version/status header, section navigation, editable draft, source references, unresolved questions rail. Tabs: Brief, Implementation plan, Ticket preview, Dependencies, Versions. Approval footer states exact artifact version and effects on downstream demo stages.

Designer: stage lanes Business, Product, Code, Review, CI, Deploy. Bottom validation panel is collapsible and reachable by keyboard. Canvas toolbar includes fit, zoom, list view, validate, save draft, publish demo version and simulate. The inspector has Config, Inputs, Outputs, Policy and History tabs.

Review screen: file tree, fake diff, contextual finding comments, severity filters, addressed/unresolved state. Do not imply a real source checkout. CI screen uses test rows and fake log excerpts with “Fixture output” labels.

## Component hierarchy

```text
App
├─ DemoProvider (scenario seed, clock, role)
├─ DomainProvider (tenant-scoped records, commands, selectors)
├─ Router
│  ├─ WorkspaceChooser
│  └─ TenantBoundary
│     └─ AppShell
│        ├─ NavigationRail / MobileNavigation
│        ├─ ContextBar / DemoBadge / CommandPalette
│        ├─ PermissionBoundary
│        └─ RouteOutlet
│           ├─ Admin: TeamTable, MemberEditor, ProjectWizard
│           ├─ Connectors: ConnectorCard, ResourcePicker, BindingMatrix
│           ├─ Workbench: IntakeForm, ResearchSummary, EvidenceList
│           ├─ Spec: SectionEditor, CitationChip, TicketPreview, VersionDiff
│           ├─ Capacity: CandidateTable, CapacityBands, AssumptionEditor
│           ├─ Workflow: Palette, WorkflowCanvas, NodeInspector, ValidationPanel
│           ├─ Run: Timeline, StageGraph, EventInspector, ArtifactTabs
│           ├─ Review: FileTree, DiffViewer, FindingCard, GateDecision
│           └─ Release: CIMatrix, EnvironmentGate, RolloutPreview
├─ EvidenceDrawer / ConfirmationDialog / ToastRegion
└─ DemoControlPanel / ResetDialog
```

Shared primitives: Button, Badge, Input, Label, Textarea, Select, Checkbox, Tabs, Table, Dialog, Sheet, Tooltip, Skeleton, EmptyState, ErrorState and StatusPill. Shared business components: SourceBadge, FreshnessIndicator, CapabilityBadge, ScopeBreadcrumb, VersionTag, ConfidenceRange, ApprovalCard and AuditRow.

## Proposed source tree

```text
src/
  app/{router,providers,shell}/
  components/{ui,domain}/
  features/{admin,connectors,intake,evidence,specs,capacity,workflows,runs,reviews,releases,skills,audit}/
  domain/{types,selectors,commands,validation,permissions}/
  demo/{fixtures,scenarios,scheduler,reducer,persistence}/
  styles/{tokens.css,globals.css}/
  test/{scenarios,fixtures}/
```

Features import domain contracts and shared components; shared components must not import route pages. Only the demo repository layer reads fixture files/localStorage. Pages cannot call external services or independently create random records.
