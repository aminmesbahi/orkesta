# Stage 05 — Business intake, evidence and specification workbench

Apply master contract. Read docs/09 S1/S2 and docs/12 artifact templates. Build business intake, research workbench and versioned spec review routes. All outputs come from coherent fixtures and user choices, never a model or remote search.

Intake form collects outcome, problem, affected users, metric, urgency/date, constraints and excluded scope. Use Persian mixed-text example support (`dir=auto`) and English default UI. Validate essential outcome fields while allowing unknown nonessential information. Submitting creates a local request and opens its research workbench.

Show the scripted investigation in its configured order, with activities and source coverage. For partial refunds, cite PAY-217, ADR-014, newer payment-api evidence and missing order-service aggregate behavior. Make conflict, stale evidence and uncertainty explicit. Results say four relevant repos selected from 133 synthetic catalog entries. Do not claim all repos were read. Evidence cards/drawer include source ID, revision, locator, freshness, observation time and supporting/conflicting relation. URLs are internal fixture navigation.

Present the required clarification: per-line-item or order-level refund amount? Persist the answer and show its effect on proposed scope. Restricted-source preset hides resource content; outage preset leaves research partial. No accessible results must not become a claim that the feature does not exist.

Generate the canonical spec template with outcome, current/proposed behavior, evidence, scope/exclusions, affected services/contracts, dependencies, risks, acceptance, implementation tasks, test/release plan, effort uncertainty and approvers. Every fact cites evidence or says assumption. Show v1/v2 comparison and editable draft sections. Approval requires correct persona, current version and no blocking questions. Scope edit creates a new version and invalidates downstream approval state.

Ticket preview uses four coherent drafts: payment validation/idempotency, cumulative order cap/concurrency, ledger reversal and seller UI. Each has parent spec/version, repo hints, dependencies, Given/When/Then acceptance, tests, risk, estimate range and citations. Use draft IDs and “Preview tickets”; never simulate a toast saying real Jira tickets were created. Add notification draft preview without sending.

Exit checks: S1 reaches scope approval with consistent evidence and questions; S2 cannot claim complete coverage; citations resolve internally; version editing invalidates approval; denied evidence does not leak; draft tasks share the canonical structure. Capture workbench/citation/spec/ticket states and report actual checks. Leave run orchestration to stage 07 while exposing local domain commands.
