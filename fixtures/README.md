# Fixture usage and relationships

All data is invented. `seed.json` contains canonical identity, resources, evidence, planning and audit records. `workflow.json` is the main published v1 graph. `workflow-versions.json` includes its v2 comparison and unconfigured seller/labs templates. `events.json` scripts the main playback and error variants. `delivery.json` provides fake diffs, findings, CI reports, releases, approved-surface preview and scenario IDs.

This is a reference data specification, not an executable simulator. The generator must implement the scheduler and local domain commands. Events after a pause are not emitted until the corresponding valid action; relative offsets exclude time spent waiting. A review finding requires the remediation branch before the review gate can pass. CI failure variants replace the success event and block downstream nodes. Fixtures never authorize an external action.

Versioned artifacts/workflows use composite identity `(tenantId, id, version)`. Normalize current pointers separately from immutable version records. Do not index versions by id alone and silently overwrite earlier versions. Source evidence references stable resource IDs and pinned source revisions. Missing/denied resources must not reveal content.

Some entities intentionally reference future workflow outputs (for example release readiness is awaiting approval). They are selectable presets, not assertions that an approval was already issued. Project seller/labs workflow templates have no resource bindings and must validate as unconfigured until admin setup. Graph input mappings name upstream output keys; strict schema compatibility needs implementation against the node catalog in docs/06.

The repository catalog has 133 Atlas and 3 Meridian entries. Only the first four Atlas entries are detailed contexts. Synthetic source excerpts are concise; expand presentation copy consistently without asserting that unseen production files exist. Do not put real people, production URLs or credentials into these fixtures.
