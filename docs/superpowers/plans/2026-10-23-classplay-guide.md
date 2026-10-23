# ClassPlay Guide Implementation Plan

> **For agentic workers:** Execute inline using executing-plans. The user has authorized implementation of the existing requirements; no additional design decision or separate approval is required.

**Goal:** Deliver the English student guide and four-branch help assistant specified in `docs/blooket-project-requirements.md`, ready for later Vercel deployment.

**Architecture:** Six static HTML pages share one stylesheet. Help suggestions live in HTML so they remain available without JavaScript; a small progressive enhancement controls selection, result visibility and keyboard focus. Only `site/` is published. Development checks and preview helpers stay outside that folder.

**Tech Stack:** HTML, CSS, plain JavaScript. Optional local verification uses the installed Node.js runtime and its built-in test and HTTP modules; the deployed site has no runtime dependencies.

## Files and responsibilities

- `site/index.html`: three immediate student entry points and short common questions.
- `site/join.html`, `site/solo.html`: original student instructions linked to official sources, checked 2026-10-23.
- `site/help.html`: four problem buttons, four useful fallback result sections, live feedback region.
- `site/about.html`, `site/privacy.html`, `site/404.html`: purpose, actual privacy behavior and missing-page recovery.
- `site/assets/styles.css`: shared responsive visual design and visible keyboard focus.
- `site/assets/help.js`: select one result, reset, focus result title and return selection focus; no network or storage access.
- `site/favicon.svg`, `site/robots.txt`, `site/sitemap.xml`: identity and search discovery; temporary origin explicitly `https://example.com`.
- `tests/site.test.mjs`: link integrity, public-page metadata, fallback content and sitemap coverage.
- `scripts/preview.mjs`: loopback-only static preview with real HTTP 404 responses, excluding docs and scripts.
- `README.md`, `docs/implementation-verification.md`: preview, verification results, deployment settings and pending domain replacement.

## Task 1: Establish verification

- [ ] Write dependency-free tests that load every required page, resolve local links, check unique metadata and compare the six sitemap entries with canonical addresses.
- [ ] Run `node --test tests/site.test.mjs`. Expect failures stating website files are missing, before implementation.

## Task 2: Implement the site

- [ ] Create the six normal pages and custom 404, with simple original English, shared navigation and independent-guide disclosure.
- [ ] Use an airy blue and cream visual style, large readable headings, three homepage cards and mobile single-column layouts.
- [ ] Put all four help result sections directly in HTML; make them readable without scripts.
- [ ] Enhance the help page so one selection shows one result; reset returns focus to the selected problem; reload clears selection.
- [ ] Add the favicon, permissive robots and six-entry sitemap. Keep `example.com` isolated to canonical and discovery information for later replacement.
- [ ] Run `node --test tests/site.test.mjs` and `node --check site/assets/help.js`; expect all checks to pass.

## Task 3: Preview and verify actual behavior

- [ ] Launch `node scripts/preview.mjs` in a retained session. Verify HTTP 200 for pages/assets and HTTP 404 for an unknown path and paths outside `site`.
- [ ] Open the local URL in the Codex browser. Exercise each homepage entry and all four help branches, reset and reload.
- [ ] Check keyboard operation and the no-script fallback using supported browser tools where available.
- [ ] Inspect desktop and approximately 360px mobile layouts, including document overflow and button visibility.
- [ ] Record actual successful checks and any verification limitations; do not claim live Vercel/domain/Google completion.

## Task 4: Handoff

- [ ] Add Chinese quick-start instructions to README; keep original domain deployment steps consistent with the implementation.
- [ ] Re-run only checks affected by fixes, then provide the local result and remaining domain replacement locations.
- [ ] No domain purchase, external publication or GitHub push in this implementation step. This checkout is not currently a Git repository, so do not invent commit or branch operations.
