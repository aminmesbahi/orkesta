# Stage 03 — Team/project setup and simulated connectors

Apply master contract. Read docs/05 completely. Implement tenant/team/project admin screens and connector catalog/details using local commands and scoped data from stage 02.

Create searchable team list and team detail with members, roles, hours/timezone and project grants. Team create/edit forms enforce name/slug constraints and tenant uniqueness. Member edits select existing synthetic identities; no invitations/emails. Owner-only actions are unavailable under other demo personas with a reason.

Build the five-step project wizard: identity/team → stage source bindings → workflow template → policy/environment → review. Preserve inputs when moving backward, support dirty-draft dismissal, validate per step and summarize scope/policy before “Create demo project.” Duplicate project keys and invalid owners show inline errors. Tenant-inherited production gate is locked and explained.

Build connector catalog for Jira, Confluence, GitHub, Nova custom business adapter, calendar, leave, files, Slack/Teams, CI/CD and database catalog. Setup uses provider/display name/fake .example URL/fixture preset and simulated capabilities only. Never ask for token, password, client secret or real sign-in. CTA is “Simulate connection.”

Implement not-configured/configuring/testing/connected-demo plus denied, expired, rate-limited, unavailable, partial and schema-mismatch states. Each error identifies affected capabilities and offers a functioning local remedy. Connector detail shows capability list, resource picker, scoped usage and synthetic health history.

Build a six-stage binding matrix. Each stage selects connector instance, allowed resource IDs and operations. Search/select-all applies only to visible permitted resources with a clear count. Denied resources reveal no title/excerpt. Unsupported capabilities cannot be chosen. Bindings must remain in the same tenant/project; revoking a resource marks dependent nodes invalid. Use Nova field mappings without assuming a real vendor schema.

Project settings lets admins reopen source matrix, template/version, stage policy and environments. Viewer sees read-only presentation. Store meaningful local audit events with actor and scope.

Exit checks: empty Meridian onboarding (S7) completes locally; duplicate/invalid fields preserve input and focus errors; wizard back/reload preserves drafts; all connector recovery presets work; unsupported and denied scope choices are prevented; no OAuth or provider request appears. Capture wizard review/source matrix/connector-error screenshots and report actual results.
