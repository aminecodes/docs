# Essal legal center

Mintlify source for Essal LLC (QFC 02195), operating as Essal and Essal Work. Connected project: `essallegal`. Intended custom domain: `legal.essal.it.com`.

## Status

Version `2026-11-18-draft.1` is a review candidate, not an effective policy release or a claim of Paddle approval. The site must retain its draft banner and noindex while `release.json` is in draft mode. All ten planned routes are authored.

## Verification

Use Node.js 22.22 or newer and Mintlify CLI 4.3.51:

```sh
node scripts/check-release.mjs
mint validate --format json
mint broken-links --check-anchors --check-redirects
mint dev --no-open
```

Run builds and browser verification sequentially on an 8 GB machine. Stop task-created preview servers and close test tabs after verification. Do not stop unrelated services.

## Effective release

Complete the evidence and reviews in `internal/launch-checklist.md`; record genuine approvals in `release.json`. Replace draft-only passages with verified operational facts, set the actual effective date, archive the exact published policies in `versions/<version>/`, remove the draft banner/noindex, run the release check and full validation, and then publish. Do not check approval boxes merely to make validation pass.

The public site excludes `internal/`, scripts and release metadata through `.mintignore`. The Git repository itself is public: never commit customer data, credentials, private licence certificates or security secrets.

## Marketing and application integration

Companion changes are prepared separately in the Essal-Cloud and Essal-Admin repositories. Do not activate links that describe these drafts as effective customer policies. Before launch, verify clickable Terms, Privacy and Refunds links on every sales hostname, signup and billing screen; record versioned acceptance in the authoritative backend; and test the payment lifecycle in Paddle sandbox. Neither this repository nor a public DPA page records customer acceptance by itself.
