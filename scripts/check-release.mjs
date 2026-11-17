import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const release = JSON.parse(fs.readFileSync(path.join(root, 'release.json'), 'utf8'));
const config = JSON.parse(fs.readFileSync(path.join(root, 'docs.json'), 'utf8'));
const slugs = ['index', 'terms', 'privacy', 'refunds', 'cookies', 'data-processing', 'subprocessors', 'acceptable-use', 'complaints', 'changes'];
const pages = slugs.map(slug => fs.readFileSync(path.join(root, `${slug}.mdx`), 'utf8'));
assert.equal(new Set(slugs).size, 10);
for (const [i, page] of pages.entries()) {
  assert.match(page, /^---\r?\n/, `${slugs[i]}: missing frontmatter`);
  assert.match(page, /\ntitle: /, `${slugs[i]}: missing title`);
  assert.match(page, /\ndescription: /, `${slugs[i]}: missing description`);
  assert(!/TODO|\[INSERT|\[YOUR |lorem ipsum|Welcome to Mintlify/i.test(page), `${slugs[i]}: unresolved placeholder`);
}
assert.match(pages[1], /02195/);
assert.match(pages[1], /Merchant of Record/);
assert.match(pages[3], /14 calendar days/);
assert.match(pages[2], /six months from collection/);
assert.match(pages[2], /30 days/);
assert.match(pages[2], /legal@essal\.it\.com/);
assert.equal(config.integrations.telemetry.enabled, false);
assert.equal(config.contextual.options.includes('assistant'), false);
if (release.mode === 'draft') {
  assert.equal(release.effectiveDate, null, 'A draft cannot have an effective date');
  assert.match(config.banner?.content ?? '', /draft.*not yet effective/i);
  assert.match(config.seo?.metatags?.robots ?? '', /noindex/);
} else {
  assert.equal(release.mode, 'effective');
  assert.match(release.effectiveDate ?? '', /^\d{4}-\d{2}-\d{2}$/);
  const pending = Object.entries(release.approvals).filter(([, value]) => value !== true).map(([key]) => key);
  assert.deepEqual(pending, [], `Release blocked: ${pending.join(', ')}`);
  for (const [i, page] of pages.entries()) {
    assert(!/review draft|not yet effective|must be completed|must be disclosed|before this policy is made effective/i.test(page), `${slugs[i]} still contains draft-only language`);
  }
  assert(!/draft/i.test(config.banner?.content ?? ''), 'Remove the draft banner at effective release');
  assert(fs.existsSync(path.join(root, 'versions', release.version, 'terms.mdx')), 'Archive the effective policy version');
}
console.log(JSON.stringify({ passed: true, mode: release.mode, version: release.version, pages: slugs.length, pendingApprovals: Object.entries(release.approvals).filter(([, v]) => !v).map(([k]) => k) }, null, 2));
