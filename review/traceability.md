# Requirement traceability

| User requirement | Specification | Prompt | Acceptance |
|---|---|---|---|
| Multi-tenant platform | 01, 02, 08 | 01, 02 | A01–A03 |
| Team/project admin setup | 04, 05 | 03 | A04–A05 |
| Jira/Confluence/GitHub/Nova etc. | 03, 05 | 03 | A06–A07 |
| Stage-specific source access | 02, 05, 06 | 03, 04 | A07, A09 |
| Visual workflow, all six stages | 06 | 04, 07, 08 | A08–A10, A19–A23 |
| Forms and interaction states | 05, 08 | 03, 05, 09 | A04–A07, A13, A26 |
| Dummy scenarios and data | 08, 09, fixtures | 02, 07 | A11–A12, A19, A25, A32 |
| Component hierarchy/routes | 04 | 01, 09 | A01, A28 |
| Design system/realistic UI | 07 | 01, 09 | A27–A28 |
| Business context/history/code | 02, 12 | 05 | A11–A15 |
| Capacity and leave | 08, 12 | 06 | A16–A17 |
| Shared/private skills | 01, 12 | 06 | A18 |
| Review/CI/deploy precision | 06, 12 | 08 | A21–A23 |
| AHP/AG-UI/A2UI/MCP/React Flow | 03, research | 01, 04, 06, 07 | A08, A19, A24 |
| Roadmap/implementation plan | 10 | 01–10 | A31 |
| Entirely nonfunctional operations | README, 01, 02 | master, all | A15, A23, A30 |
| ZIP and Markdown/Mermaid | README, diagrams | Not an app stage | Package validation |

## Review decisions

- Prototype code is intentionally not generated in this ZIP: the requested artifact is the complete architecture/implementation/prompt kit for generating it.
- Interactions are explicitly local, allowing a useful demonstrator without operational effects.
- Architecture distinguishes production services from demo code to prevent generators from quietly adding live integrations.
- AHP scope and Nova ambiguity are disclosed rather than assumed solved.
- Research validates primary documentation, not runtime compatibility; scaffold prompt includes the real compatibility spike.
