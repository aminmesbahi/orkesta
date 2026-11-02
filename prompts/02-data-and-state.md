# Stage 02 — Canonical fixtures, scoped data and reset

Apply master contract and preserve stage 01. Read docs/08 and fixture files. Build a coherent data layer before filling screens.

Import canonical seed IDs and expand to required cardinalities: two tenants, Atlas two teams/two projects, Meridian one team/project, six Atlas members/two Meridian, ten Atlas connector catalog entries, 133 Atlas repositories/three Meridian, twelve Atlas tickets, eight documents, versioned specs/workflows, skills, review/CI/release fixtures and meaningful audit records. Retain supplied record references. Four Atlas repos have detailed code evidence; remaining entries say catalog metadata only. Use deterministic generation at build/import time with stable IDs and fixed dates, never Math.random during render.

Normalize entities and expose selectors requiring tenant identity and optional project/persona. Validate foreign keys, same-tenant relations and resource-binding ownership. Build local commands for creating/editing drafts, simulated connection presets, approvals and audit entries. Do not let pages mutate fixture arrays directly. UI selected IDs live separately from records.

Implement schema-versioned localStorage for whitelisted drafts/preferences only, namespaced by tenant/project/entity. Handle malformed JSON, incompatible schema and unavailable storage with an in-memory fallback and visible recovery message. Do not persist active timers, simulated identity authority or secrets. Add scope-specific reset and reset-all confirmation, restoring the exact seed.

Tenant switch must close evidence drawers/dialogs, clear search and route selection, dispose running scheduler hooks and navigate to the target tenant overview. Preserve only that tenant's own saved drafts. Deep linking with another tenant's record ID returns scoped not-found without names/counts. Add a second tenant with clearly different branding/records so leakage is easy to spot.

Build useful read-only overview tables backed by selectors: project counts, source coverage and pending gates. Counts derive from records, not hardcoded disconnected dashboard values. Label all metric examples illustrative.

Exit checks: fixture integrity validates; cross-tenant selector tests pass; switch and deep-link cases A02/A03 work; local draft reload/reset works; corrupt/unavailable storage is handled; repeated reset yields identical IDs/timestamps. Report actual tests and any fixtures still to expand. Do not claim production tenant security from client-side filtering.
