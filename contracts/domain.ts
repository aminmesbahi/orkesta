/** Specification contracts, not a compiled application SDK. All content is synthetic. */
export type ID = string;
export type Stage = 'business' | 'product' | 'code' | 'review' | 'ci' | 'deploy';
export type Role = 'owner' | 'team_admin' | 'business' | 'product_lead' | 'engineering_lead' | 'developer' | 'reviewer' | 'release_approver' | 'viewer';
export interface Scoped { id: ID; tenantId: ID }
export interface Tenant { id: ID; name: string; slug: string }
export interface Team extends Scoped { name: string; timezone: string; memberIds: ID[] }
export interface Member extends Scoped { name: string; roles: Role[]; timezone: string; availableHoursPerDay: number; teamIds: ID[] }
export interface Project extends Scoped { teamId: ID; name: string; key: string; ownerId: ID; workflowId: ID; bindingIds: ID[] }
export type ConnectorState = 'not_configured' | 'configuring' | 'testing' | 'connected_demo' | 'permission_denied' | 'expired_demo' | 'rate_limited' | 'unavailable' | 'partial' | 'schema_mismatch';
export interface Connector extends Scoped { provider: string; name: string; status: ConnectorState; capabilityNames: string[]; workspaceUrl: string }
export interface Resource extends Scoped { connectorId: ID; externalId: string; kind: string; title: string; visibility: 'allowed' | 'restricted'; revision: string; observedAt: string }
export interface Binding extends Scoped { projectId: ID; connectorId: ID; stages: Stage[]; resourceIds: ID[]; allowedOperations: string[] }
export interface Evidence extends Scoped { projectId: ID; connectorId: ID; resourceId: ID; externalId: string; sourceType: string; title: string; locator: string; revision: string; observedAt: string; freshness: 'current' | 'stale' | 'unknown'; visibility: 'allowed' | 'restricted'; excerpt: string; claimRelation: 'supports' | 'conflicts' | 'uncertain'; confidenceLabel: 'strong' | 'moderate' | 'weak' }
export interface BusinessRequest extends Scoped { projectId: ID; outcome: string; constraints: string[]; excludedScope: string[]; status: 'draft' | 'researching' | 'clarification' | 'ready' }
export interface Artifact extends Scoped { projectId: ID; kind: 'spec' | 'plan' | 'diff' | 'review' | 'ci' | 'release'; version: number; contentHash: string; status: 'draft' | 'review' | 'approved' | 'superseded'; authorId: ID; evidenceIds: ID[]; inputRefs: {id: ID; version: number}[]; unresolvedQuestions: string[] }
export interface Approval extends Scoped { projectId: ID; runId: ID; gateId: ID; artifactId: ID; artifactVersion: number; actorId: ID; decision: 'approve' | 'request_changes' | 'reject'; reason: string; decidedAt: string; expiresAt: string }
export interface WorkflowNode { id: ID; type: string; stage: Stage; position: {x: number; y: number}; data: { label: string; outputKey: string; bindingIds: ID[]; inputMappings: Record<string,string>; config: Record<string,unknown>; timeoutSeconds: number; maxRetries: number } }
export interface WorkflowEdge { id: ID; source: ID; target: ID; sourceHandle?: string; targetHandle?: string; label?: string }
export interface Workflow extends Scoped { projectId: ID; name: string; version: number; status: 'draft' | 'published'; nodes: WorkflowNode[]; edges: WorkflowEdge[] }
export type NodeState = 'queued' | 'running' | 'waiting_input' | 'waiting_approval' | 'succeeded' | 'failed' | 'blocked' | 'skipped' | 'cancelled';
export type RunState = 'idle' | 'running' | 'waiting_input' | 'waiting_approval' | 'needs_changes' | 'failed' | 'cancelled' | 'completed';
export interface DemoEvent { id: ID; seq: number; runId: ID; runToken: string; nodeId: ID; attempt: number; offsetMs: number; type: 'run_started' | 'node_started' | 'node_succeeded' | 'clarification_required' | 'approval_required' | 'node_failed' | 'artifact_available' | 'run_completed'; summary: string; payload: Record<string,unknown> }
export interface Run extends Scoped { projectId: ID; workflowId: ID; workflowVersion: number; fixtureRevision: string; scenarioId: string; status: RunState; nodeStates: Record<ID,NodeState>; events: DemoEvent[] }
export interface Skill extends Scoped { name: string; scope: 'tenant' | 'team' | 'project' | 'private'; ownerId: ID; version: number; permittedStages: Stage[]; requiredCapabilities: string[]; inputSchemaVersion: string; outputSchemaVersion: string; status: 'draft' | 'reviewed' | 'published' }
export interface Finding extends Scoped { projectId: ID; artifactId: ID; artifactVersion: number; path: string; line: number; severity: 'critical' | 'high' | 'medium' | 'low'; description: string; disposition: 'open' | 'accepted_risk' | 'fixed_pending_verification' | 'verified_fixed'; reviewerId: ID }
export interface CapacityInput { memberId: ID; timezone: string; startDate: string; workdays: number[]; availableHoursPerDay: number; effortHours: [number,number]; overheadHours: number; leaveDates: string[] }
export interface ApprovedSurface { schemaVersion: 'demo.surface.v1'; surfaceId: ID; catalogVersion: string; components: {id: ID; type: 'evidence-card' | 'clarification-form' | 'approval-card' | 'capacity-table'; props: Record<string,unknown>}[]; allowedActions: string[] }
