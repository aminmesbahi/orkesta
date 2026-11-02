# Primary-source research ledger

Checked 2026-11-02. Sources support technology descriptions; architecture choices and estimates in this kit are recommendations. No dependencies were installed or protocol integration tested while preparing this kit.

| ID | Source | Observed claim / interpretation and limit |
|---|---|---|
| R01 | [AHP repository](https://github.com/A3S-Lab/AgentHarnessProtocol) | README reports protocol 2.4 and crate 2.4.0, JSON-RPC handshake/event/decision model. Project-specific option; adoption across requested coding products unverified. |
| R02 | [AG-UI overview](https://docs.ag-ui.com/introduction) | Interaction protocol between frontend and agent backend; distinct from generative UI descriptions. |
| R03 | [AG-UI architecture](https://github.com/ag-ui-protocol/ag-ui/blob/main/docs/concepts/architecture.mdx) | HTTP client/event categories, including lifecycle, text, tool and state events. Demo event layer is illustrative, not wire conformance. |
| R04 | [A2UI official site](https://a2ui.org/) | Site labels v0.9.1 current and v1.0 candidate. Version-specific compatibility must be pinned before integration. |
| R05 | [A2UI project docs](https://github.com/a2ui-project/a2ui/blob/main/docs/public/index.md) | Declarative UI with approved components and multiple renderers. Repository/default branch may change. |
| R06 | [Google A2UI v0.9 announcement](https://developers.googleblog.com/en/a2ui-v0-9-generative-ui/) | April 17, 2026 announcement reports React renderer. Does not establish any exact renderer/package combination used here. |
| R07 | [Google A2UI update](https://developers.googleblog.com/fast-reliable-a2ui/) | October 27, 2026 update describes swappable inference formats. Performance claims are vendor-reported and not adopted as platform guarantees. |
| R08 | [MCP latest specification](https://modelcontextprotocol.io/specification/latest) | Redirect resolved to [2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28). Standard context/tool boundary, not a scheduler. |
| R09 | [MCP security guidance](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices) | Provider integration requires explicit authorization/security handling. A protocol does not provide application tenancy automatically. |
| R10 | [React Flow quick start](https://reactflow.dev/learn) | Current package is `@xyflow/react`; canvas library for nodes/edges. |
| R11 | [React Flow computing flows](https://reactflow.dev/learn/advanced-use/computing-flows) | Demonstrates local graph computation patterns; backend orchestration remains a separate architectural concern. |
| R12 | [React Flow accessibility](https://reactflow.dev/learn/advanced-use/accessibility) | Built-in keyboard and labeling features should be retained; app needs additional accessible alternatives. |
| R13 | [React versions](https://react.dev/versions) | Official page showed latest 19.3. Recommendation: match react/react-dom versions and lock actual dependencies. |
| R14 | [Vite guide](https://vite.dev/guide/) | Current SPA scaffolding/build guidance. Verify runtime requirements when implementing. |
| R15 | [shadcn Vite setup](https://ui.shadcn.com/docs/installation/vite) | Official integration instructions exist; generated components become app-owned source. |
| R16 | [React Router declarative installation](https://reactrouter.com/start/declarative/installation) | Docs showed current 8.5.1; choose declarative mode and lock compatible actual version. |
| R17 | [Tailwind Vite integration](https://tailwindcss.com/docs/installation/using-vite) | Docs showed v4.3 and Vite plugin path. Do not mix old v3 setup snippets. |

## Validation limits and recheck procedure

The AHP acronym was interpreted as Agent Harness Protocol, specifically the linked repository. It was not assumed to mean every possible “agent harness protocol.” Nova has no identified vendor reference; its adapter is explicitly a custom fixture. Neither ambiguity is hidden behind invented API documentation.

Search found multiple third-party summaries; only primary project/vendor sources inform the claims above. One attempted AG-UI events page could not be fetched, so event semantics were checked against the primary repository architecture page instead. Exact package versions other than the observed official version labels are intentionally not fabricated.

Before implementation, revisit R01/R04/R08/R13–R17; record the retrieval date, actual resolved versions and breaking changes. Run the compatibility spike in docs/03. Before production, test protocol handshakes, renderer schemas, ACL propagation and real coding-runner capabilities independently.
