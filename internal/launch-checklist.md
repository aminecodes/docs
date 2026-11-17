# Launch evidence and remaining gates

Prepared 18 November 2026. This is operational evidence, not public policy text. Statuses below distinguish owner statements, source inspection and verified production behavior.

## Confirmed inputs

- Owner: Essal LLC, QFC 02195; brands Essal and Essal Work; five specified domains; worldwide B2B; Paddle and direct contracts; 14-day first-payment guarantee; QFC law/court; 12-month ordinary liability cap.
- Licence PDF inspected: issued 15 December 2025, expiry 31 December 2026. Software programming activities and restrictions on B2C/hardware appear in the supplied certificate. Current public-register validation was blocked by the register's access controls. Do not upload the certificate into this public repository.
- Office address supplied by owner: 9th floor, QFC Tower 1, Westbay, Doha, Qatar. Verify against the current CRO record.
- Owner identified legal@essal.it.com, support@essal.it.com, billing@essal.it.com, contact@essal.it.com and contact@essal.qa. Delivery/routing/ownership have not been tested by sending messages.
- Owner confirmed Cloudflare, Railway, Resend, Better Auth self-hosted on Railway, PostHog and Google Analytics. Optional PostHog/GA are consent-gated according to the owner.
- Owner confirmed six-month retention **from collection**, deletion requests available in-app including backups, and proximity-based placement in Doha or Germany. This is not independent verification of deployment settings, physical facilities or backup-erasure behavior.
- Marketing-site source is aminecodes/Essal-Cloud; it contains a Netlify site binding. Source defines language/market cookies at 180 days and persistent local-storage theme/language preferences. Product marketing contains inaccurate rejection and risk-profiling claims per the owner.
- aminecodes/docs contains only Mintlify starter pages on main and is the owner-designated essallegal source. Preserve cloudlegal and all unrelated deployments.

## Requirement-to-evidence matrix

| Requirement | Implementation | Acceptance evidence still required |
| --- | --- | --- |
| Company identity | / and /terms include Essal LLC, 02195 and supplied office | Current CRO address and licence check |
| Public required policies | /terms, /privacy, /refunds | Effective reviewed versions, visible sales-site links |
| Product/pricing clarity | Companion website copy fixes; current pricing pages retained | Product-owner signoff, bundle scope and Paddle catalogue comparison, enterprise price sheet |
| Paddle reseller distinction | /terms and /refunds | Checkout/receipt buyer entity, support and sandbox lifecycle |
| Refund handling | 14-day first-payment guarantee, renewals distinguished | Billing runbook and sandbox approved-refund evidence |
| Privacy disclosures | /privacy and /cookies | Actual provider legal entities, destinations, consent scan, legal bases and exceptions |
| QFC written processor contract | /data-processing | Executed customer agreement and completed processing/security/transfer schedules |
| Subprocessors | /subprocessors separates software/providers/controllers | Actual per-product recipients, written authorisation and change process |
| Retention | Six months from collection in drafts | Job/config evidence, active-data treatment, legal exceptions, backup deletion/restore test |
| Rights and incidents | Public contacts and internal procedure | Monitored queues, named owners, request/incident exercise |
| HTTPS and redirects | Custom-domain work and mapping below | DNS/TLS, direct-route HTTP status and browser evidence |
| Versioned acceptance | Integration contract below | Real backend implementation and acceptance records |

## Operational conflicts to resolve

The inspected Essal-Hire source has upstream retention documentation describing a 24-month configurable candidate period, a 30-day quarantine, backups on their own rotation and cleanup disabled by default. It does not prove the production configuration, but it does not substantiate the six-month rule or requested backup erasure. Obtain current deployment evidence and align implementation before making the policy effective. Do not modify live data or run erasure jobs for verification.

Doha/Germany proximity placement must be checked separately for application, database, object storage, replicas, backups, support access, Resend, analytics and Cloudflare. Do not claim Railway has a Doha region solely from the owner's description. Identify the actual facility/provider for any Doha storage. Complete QFC transfer assessments and agreements; GDPR provider documents alone do not resolve QFC transfer requirements.

Optional analytics: verify a fresh visitor sends no PostHog/GA events before consent; rejection persists; acceptance enables only disclosed events; withdrawal stops optional collection. Check scripts injected by hosting settings, not just repository code. Do not assume a dataLayer event proves an external analytics request.

Review the actual recruitment assessment and training features. Correct only inaccurate claims. Candidate AI assessment/ranking or other categorisation can still require Paddle review even after removing automatic-rejection text. Do not certify AUP eligibility from copy changes.

## Integration contract

Before creating a subscription, record in the authoritative server-side system: customer/organisation identifier, authorised actor identifier, accepted terms version, DPA version when applicable, UTC acceptance timestamp, purchase channel and order/checkout reference. Treat a browser flag as presentation state only. Keep optional analytics/marketing consent separate from contractual acceptance and permit withdrawal. Store only evidence necessary for the applicable legal purpose with a reviewed retention basis.

Link /terms, /privacy and /refunds in the sales-site footer and immediately before checkout, with clear recurring charges/trial conversion/cancellation details. Preserve public access from unauthenticated admin screens. No new payment integration is silently introduced by this legal-center task.

## Version migration and redirect map

Archive exact legacy terms, privacy and refund pages before redirecting legal.essal.cloud. Preserve which contracts used which versions. Old policies dated 2024 must not be rewritten or labelled as current QFC/Paddle compliance.

| Legacy path | New path |
| --- | --- |
| / | / |
| /terms | /terms |
| /privacy | /privacy |
| /refund-policy | /refunds |
| /cookie-policy | /cookies |
| /complaints-handling-policy | /complaints |
| /takedown-policy | /acceptable-use |
| /third-party-data-sharing-policy | /subprocessors |
| /data-collection-and-storage-policy | /privacy |

Read the actual legacy sitemap before activating aliases; add mappings for real alternative spellings. Redirect at the old hostname only after the effective center is ready. Leave legacy pages live while the new center is a draft.

## Request and incident runbook

- Legal owns privacy/contract complaints; support owns technical issues; billing owns cancellation/refund triage. Verify mailbox routing and appoint named deputies internally.
- Log the request time, verify identity proportionately, identify the controller and relevant data, assess exceptions, execute authorised action and respond. QFC responses are ordinarily due within 30 days; any permitted extension must be explained in the initial period.
- Escalate suspected breaches immediately. Processor notices to customers are without undue delay. Controllers assess QFC notification without undue delay and, where feasible, within 72 hours, subject to the applicable risk exception. Record every breach; assess individual notification and any authority direction under the actual rule. Do not import GDPR notification wording without checking QFC Article 31.
- Paddle refunds go through Paddle. Do not send direct bank transfers for a Paddle charge or take a live payment merely to test.

## Final gate

Obtain QFC-qualified legal review, factual product/operations signoff and owner's effective-release approval. Recheck the licence before its stated expiry. Submit actual checkout hostnames to Paddle with pricing, features, live policy links and enterprise pricing evidence. Domain acceptance is not guaranteed and this draft package is not a verification submission.

## Build and domain evidence

- Full Mintlify validation passed with zero errors/warnings. Internal-link, anchor and redirect validation passed. Accessibility CLI checks passed required color thresholds after palette correction; mobile Terms rendered at 390px without document overflow.
- The owner-designated source is aminecodes/docs. Original starter commit: 90cd143. The replacement is a visibly labelled, noindex **review draft**, not an effective policy transition.
- Cloudflare zone: essal.it.com, Essal account. Only hostname-scoped TXT verification and a DNS-only CNAME to cname.mintlify.builders were added. Mintlify reported hostname status active and SSL status active after TXT validation. No zone-wide security settings were changed.
- The first deployment built its snapshot but failed final domain revalidation during DNS cutover. Retry and verify public content before reporting the draft site live.
- Assistant must be disabled in the essallegal dashboard and verified on the public page. Removing the assistant from contextual.options is not sufficient to disable the platform assistant.
