# Essal legal center

Mintlify source for Essal LLC (QFC 02195), operating as Essal and Essal Work. Connected project: `essallegal`. Intended custom domain: `legal.essal.it.com`.

## Status

Version `2026-11-18.1` publishes nine visible pages. At the owner's request the site uses Maple theme, a larger logo and ordinary policy text without a top banner or draft labels. The Changes route is excluded with `.mintignore`. Publication does not certify legal compliance or Paddle approval; the actual operational and legal review statuses remain in `release.json` and `internal/launch-checklist.md`.

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

Complete the evidence and reviews in `internal/launch-checklist.md`; record genuine approvals in `release.json`. Verify the processing and transfer schedules, retention/deletion operation, company disclosures and customer transition. The current published text is archived in `internal/policy-versions/2026-11-18.1/`. Customer contracts take effect through their applicable acceptance process; website publication must not silently amend existing signed agreements. Do not check approval boxes merely to make validation pass.

The public site excludes `internal/`, scripts and release metadata through `.mintignore`. The Git repository itself is public: never commit customer data, credentials, private licence certificates or security secrets.

## Marketing and application integration

Product-copy corrections are merged through Essal-Cloud PR 12. Policy-navigation changes are prepared separately in Essal-Cloud PR 13 and Essal-Admin PR 1. Before completing the customer migration, verify clickable Terms, Privacy and Refunds links on every sales hostname, signup and billing screen; record versioned acceptance in the authoritative backend; and test the payment lifecycle in Paddle sandbox. Neither this repository nor a public DPA page records customer acceptance by itself.
