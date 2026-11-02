# 07 — Design system and visual specification

## Direction

An information-dense enterprise workbench with a quiet light theme, dark navigation rail, legible tables and a focused workflow canvas. Use structured content rather than decorative gradients. A realistic product requires coherent records, timestamps, status transitions and provenance, not just attractive cards.

## Tokens

| Token | Value / use |
|---|---|
| canvas | `#F7F8FA` page background |
| surface | `#FFFFFF` cards, tables, dialogs |
| nav | `#142033` navigation rail |
| text | `#172033` main text |
| muted text | `#536174` secondary text |
| border | `#D6DDE7` default separator |
| accent | `#3730A3` primary buttons and selected state |
| success | `#166534` text on `#F0FDF4` |
| warning | `#854D0E` text on `#FEFCE8` |
| error | `#991B1B` text on `#FEF2F2` |
| focus | 2px `#4338CA`, 2px offset |
| spacing | 4, 8, 12, 16, 24, 32, 48px |
| radius | 6px inputs; 10px cards/dialogs; pill only for badges |
| shadow | Subtle border-led elevation; drawers above sticky headers |

Use bundled/system fonts: Segoe UI/Inter fallback, with a Persian-capable system fallback for `lang=fa`; monospace for IDs, code and events. Base text 14px/1.5; page title 24px/32; section title 18px/26; metadata minimum 12px/18. Table rows 44–48px. Controls minimum 36px desktop and 44px touch target. Truncate long labels only with accessible full-text reveal.

Status always includes an icon and label; color is supplemental. Stage palette uses understated violet/blue/teal/amber/green/slate bands, distinct from success/error semantics. “Simulated” is a neutral badge paired with success/failure, not implied by a color alone.

## Layout

Desktop target: 1440×900. Sidebar 224px; top bar 64px; page padding 24px; content max width 1600px. Designer: palette 240px, inspector 336px, canvas minimum width 480px and height 640px. On 1024px hide palette behind a button; inspector becomes a sheet. At 768px navigation collapses, tables use deliberate horizontal scroll and designer defaults to list view. At 390px use one-column forms and bottom/side sheets; no inaccessible offscreen controls.

Stacking order: base 0, sticky table header 10, shell 20, drawer 40, modal 50, toast 60. One modal at a time; nested editors use an in-dialog step rather than stacked dialogs. Focus returns to the triggering control after dismissal.

## Reusable patterns

- Page header: breadcrumb, title, description, primary action, optional status/version.
- Empty state: precise reason, available next action, no fabricated metric.
- Error state: affected scope, safe message, retry/change configuration, correlation ID if relevant.
- Evidence card: source type + stable ID, title, excerpt, revision, freshness, visibility, supporting/conflicting/uncertain badge.
- Approval card: artifact/version, what changes, blockers, actor role, decision buttons, demo consequence.
- Forms: labels above controls, help below, inline errors; compact grouped sections.
- Toast: completion feedback with useful navigation; persistent failures remain on screen.
- Confirmation: names affected object and local consequence; destructive local reset requires explicit confirmation.

## Representative screen text

Hero in project overview: “From business intent to an evidence-backed delivery plan.” Primary CTA: “Start demo request.” Source panel: “4 relevant repositories selected from 133 synthetic catalog entries.” Estimate note: “Planning range: 5–8 working days. Depends on payment-provider behavior; lead review required.” Release CTA: “Simulate deployment.” Permanent header: “Demo · synthetic data · no external actions.”

Do not show fake “Connected to GitHub” claims, unqualified savings percentages, secret-looking credentials, real customer identities or hidden chain-of-thought. External provider URLs use `.example` fixture paths; evidence opens an internal drawer.

## Accessibility and international text

Target WCAG 2.2 AA as a design goal; verify contrast rather than assume token compliance. All dialogs have names, focus trap, Escape and focus return. Tables have semantic headers, sort buttons and empty states. Announce asynchronous status through a polite live region without announcing every token. Motion durations 120–180ms; honor reduced motion and provide instant scenario playback.

React Flow keyboard support is retained and configured with useful labels. Offer list view for all graph operations. Never make drag the only way to add or connect a node. Destructive Delete is scoped to focused canvas, not typing in an input. Persian request text uses `dir=auto`; code, identifiers and graph coordinates remain LTR. Application-wide RTL is optional, but mixed Persian/English content must render correctly.
