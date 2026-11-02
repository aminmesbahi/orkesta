# Orkesta — AI-native SDLC architecture and prototype kit

Research baseline: **2026-11-02**. Deliverable: a specification and prompt kit, not a running application. All organizations, people, code, tickets, availability and metrics are invented.

## راهنمای سریع

این بسته معماری محصول واقعی آینده را از نمونهٔ نمایشی جدا می‌کند. نمونه با React ساخته خواهد شد؛ همهٔ اتصال‌ها، پاسخ‌های ایجنت، بررسی کد، تاییدها و دیپلوی صرفاً شبیه‌سازی محلی‌اند. فرم‌ها، جابه‌جایی نودها، فیلترها و تغییر وضعیت در مرورگر کار می‌کنند؛ هیچ عملیات واقعی سازمانی اجرا نمی‌شود.

ابتدا `docs/01-product-and-boundaries.md` و `docs/02-architecture.md` را بخوانید. سپس محتوای `prompts/00-master.md` را به ابزار تولید کد بدهید و پرامپت‌های 01 تا 10 را به‌ترتیب اجرا کنید. هر مرحله باید معیار خروج خودش را پاس کند. مستندات و پرامپت‌ها انگلیسی نوشته شده‌اند تا در ابزارهای مختلف قابل استفاده باشند. زبان پیش‌فرض UI انگلیسی است؛ نمایش متن فارسی و RTL جزو نیازمندی‌هاست.

## Reading order

1. [Product, scope and roles](docs/01-product-and-boundaries.md)
2. [Future architecture and isolation](docs/02-architecture.md)
3. [Protocols and current library research](docs/03-research-and-decisions.md)
4. [Routes, screens and component hierarchy](docs/04-routes-and-components.md)
5. [Admin forms and connector contracts](docs/05-forms-and-connectors.md)
6. [Workflow designer and simulation](docs/06-workflow.md)
7. [Visual design system](docs/07-design-system.md)
8. [Mock data and interaction states](docs/08-data-and-states.md)
9. [Demo scenarios](docs/09-scenarios.md)
10. [Implementation roadmap](docs/10-roadmap.md)
11. [Acceptance and verification](docs/11-acceptance.md)
12. [Agent skill and artifact contracts](docs/12-agent-and-artifact-contracts.md)

## Package contents and usage

`prompts/00-master.md` is the persistent contract. The ten numbered prompts are cumulative implementation tasks. `fixtures/seed.json` supplies canonical related records, `fixtures/workflow.json` a default six-lane workflow, and `fixtures/events.json` a deterministic run script. `contracts/domain.ts` supplies portable domain types. `diagrams/` contains standalone Mermaid sources. `research/sources.md` records authoritative sources, observations and uncertainty. `review/traceability.md` links requirements to prompts and acceptance cases.

Use the supplied files as inputs to Cursor, Claude Code, OpenCode or another React-capable generator. These tools are delivery environments, not assumed interoperable agents. Do not paste production credentials or organization exports. No connector installation, login, code execution or publish action is requested by this kit.

## Meaning of entirely nonfunctional

The prototype is **interactive but operationally inert**. It can edit local drafts, animate fixture events and download a local JSON draft. It cannot authenticate, call a model, fetch a repository, create a Jira issue, send a message, run CI or deploy. Buttons say “Simulate connection,” “Preview tickets” and “Simulate deployment.” A persistent “Demo · synthetic data · no external actions” badge remains visible. Permission controls demonstrate intended policy; browser state is not a security boundary.

## Definition of complete

The resulting prototype must cover two tenants, two teams, two projects, six SDLC stages, resource-scoped connector setup, a visual designer, evidence-backed business intake, normalized spec and ticket previews, capacity suggestions, code/review/CI/deploy simulations, recovery states, audit views and resettable guided demos. See the acceptance matrix for observable checks.

## Repository

Canonical repository: [aminmesbahi/orkesta](https://github.com/aminmesbahi/orkesta). This repository currently contains the architecture, fixtures and staged implementation prompts; it does not yet contain a running frontend.
