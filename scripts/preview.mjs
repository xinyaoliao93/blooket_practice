import http from 'node:http';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../site/', import.meta.url));
const port = Number(process.env.CLASSPLAY_PREVIEW_PORT || 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const server = http.createServer(async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end('Method not allowed');
    return;
  }

  let requested;
  try {
    requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (requested.includes('\0')) throw new Error('Invalid path');
  } catch {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }

  const filename = path.resolve(root, `.${requested === '/' ? '/index.html' : requested}`);
  const relative = path.relative(root, filename);
  let data;
  let status = 200;
  let type = types[path.extname(filename)] || 'application/octet-stream';
  try {
    if (relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Outside site');
    data = await readFile(filename);
  } catch {
    status = 404;
    type = types['.html'];
    try {
      data = await readFile(path.join(root, '404.html'));
    } catch {
      data = Buffer.from('Page not found');
    }
  }
  res.writeHead(status, { 'Content-Type': type, 'Content-Length': data.length });
  res.end(req.method === 'HEAD' ? undefined : data);
});

server.on('error', (error) => {
  console.error(`Preview could not start: ${error.message}`);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log(`Local: http://127.0.0.1:${port}`);
  console.log('Serving only site/. Press Ctrl+C to stop.');
});
process.on('SIGINT', () => server.close());
process.on('SIGTERM', () => server.close());
