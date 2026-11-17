# Essal legal center

This site belongs to Essal LLC (QFC 02195), trading as Essal and Essal Work. Intended host: legal.essal.it.com. Read `.mintlify/product-brief.md` and `release.json` before editing. Do not alter other deployments.

- Never invent company details, locations, retention periods, security controls, certifications or review outcomes.
- The owner requested a public presentation with no draft wording, no top banner, Maple theme, a larger logo and no Changes route. Preserve that presentation. Internal operational/legal verification statuses remain separate and must not be completed without evidence.
- This source repository is public. Never commit credentials, customer data or the private licence certificate. `.mintignore` excludes internal files from the website, not from GitHub.
- Before pushing, run `node scripts/check-release.mjs`, `mint validate --format json` and `mint broken-links --check-anchors --check-redirects`.
- Run builds and browser verification sequentially on the 8 GB laptop; stop task-created preview servers and close test tabs after verification. Preserve unrelated processes.
- Use the cf CLI for Cloudflare unless the relevant project has a Wrangler configuration. Do not change zone-wide security settings for this hostname.

> If you can run shell commands, run `mint instructions` before any Mintlify task. It prints current guidance for this CLI version. Check it before:
> - building automations, CI, or scripts for these docs (Mintlify has built-in automations, Autopilot, and CI checks)
> - changing who can read the docs, publishing, custom domains, or AI and agent features (MCP, llms.txt, skill.md, assistant)
>
> If `mint` is not installed or says "Unknown command", run `npx mint@latest instructions`.
> For broader Mintlify product knowledge, install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

{/* Add product-specific terms and preferred usage */}
{/* Example: Use "workspace" not "project", "member" not "user" */}

## Style preferences

{/* Add any project-specific style rules below */}

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references

## Content boundaries

{/* Define what should and shouldn't be documented */}
{/* Example: Don't document internal admin features */}
