import { copyFileSync, existsSync } from 'node:fs';
import path from 'node:path';

/**
 * GitHub Pages SPA fallback: serve index.html for unknown paths by
 * duplicating it as 404.html. Combined with basename routing, deep links
 * then hydrate client-side.
 */
const dist = path.resolve(process.cwd(), 'dist');
const index = path.join(dist, 'index.html');
const notFound = path.join(dist, '404.html');

if (!existsSync(index)) {
  console.error('dist/index.html not found — build first.');
  process.exit(1);
}

copyFileSync(index, notFound);
console.log('Copied index.html -> 404.html');
