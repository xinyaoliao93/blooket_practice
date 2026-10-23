import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../site/', import.meta.url));
const pages = ['index.html', 'join.html', 'help.html', 'solo.html', 'about.html', 'privacy.html'];
const load = (file) => readFile(path.join(root, file), 'utf8');

test('all public pages have distinct titles, descriptions and usable navigation', async () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const page of pages) {
    const html = await load(page);
    assert.match(html, /<html lang="en">/);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, page);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
    assert.ok(title && description, `Missing metadata: ${page}`);
    titles.add(title);
    descriptions.add(description);
    assert.match(html, /name="viewport"/);
    assert.match(html, /href="index.html"/);
    assert.match(html, /href="join.html"/);
    assert.match(html, /href="help.html"/);
    assert.match(html, /href="solo.html"/);
    assert.match(html, /Not affiliated with or endorsed by Blooket/);
    assert.doesNotMatch(html, /<input\b|<form\b|<iframe\b|<script[^>]+src="https?:/i);
    assert.doesNotMatch(html, /<meta[^>]+(?:noindex|content="[^\"]*zh)/i);
  }
  assert.equal(titles.size, 6);
  assert.equal(descriptions.size, 6);
});

test('every relative page, asset and fragment link resolves inside the published folder', async () => {
  for (const page of [...pages, '404.html']) {
    const html = await load(page);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `Duplicate ID in ${page}`);
    for (const [, reference] of html.matchAll(/(?:href|src)="([^"]*)"/g)) {
      assert.ok(reference, `Empty link in ${page}`);
      if (/^(https?:|mailto:|data:)/.test(reference)) continue;
      const [file, fragment] = reference.split('#');
      const resolved = path.resolve(root, file.startsWith('/') ? `.${file}` : (file || page));
      assert.ok(resolved.startsWith(root), `Escaping link: ${reference}`);
      await access(resolved);
      if (fragment) {
        const target = await readFile(resolved, 'utf8');
        assert.ok(target.includes(`id="${fragment}"`), `Missing fragment: ${reference}`);
      }
    }
  }
});

test('sitemap lists exactly the six canonical page addresses and robots points to it', async () => {
  const sitemap = await load('sitemap.xml');
  const addresses = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const canonicals = [];
  for (const page of pages) {
    const html = await load(page);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    assert.ok(canonical, page);
    const url = new URL(canonical);
    assert.equal(url.protocol, 'https:');
    assert.equal(url.pathname, page === 'index.html' ? '/' : `/${page}`);
    canonicals.push(canonical);
  }
  assert.equal(new Set(addresses).size, 6);
  assert.deepEqual(addresses.sort(), canonicals.sort());
  const origin = new URL(canonicals[0]).origin;
  const robots = await load('robots.txt');
  assert.match(robots, /User-agent: \*/);
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/m);
});

test('all four help choices have readable HTML advice and appropriate destinations without JavaScript', async () => {
  const html = await load('help.html');
  const expected = [
    ['no-code', 'join.html'],
    ['invalid-code', 'https://play.blooket.com/'],
    ['loading', 'https://debug.blooket.com/'],
    ['homework', 'https://help.blooket.com/hc/en-us/articles/16015848585879-Blooket-Quick-Start-Guide-for-Students'],
  ];
  for (const [id, href] of expected) {
    assert.ok(html.includes(`data-problem="${id}"`), id);
    const result = html.match(new RegExp(`<section[^>]+id="answer-${id}"[\\s\\S]*?<\\/section>`))?.[0];
    assert.ok(result, `Missing answer ${id}`);
    assert.doesNotMatch(result.match(/^<section[^>]*>/)?.[0] || '', /\bhidden\b/);
    assert.ok((result.match(/<li>/g) || []).length >= 2, id);
    assert.ok(result.includes(`href="${href}"`), id);
  }
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /Choose another problem/);
});

test('custom missing-page screen offers recovery and does not appear in sitemap', async () => {
  const html = await load('404.html');
  assert.match(html, /href="\/index.html"/);
  for (const [, reference] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|#)/.test(reference)) continue;
    assert.ok(reference.startsWith('/'), `404 links must work at nested missing paths: ${reference}`);
  }
  assert.doesNotMatch(await load('sitemap.xml'), /404\.html/);
});
