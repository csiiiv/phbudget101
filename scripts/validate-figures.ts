import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { moduleDataSchema } from '../src/data/schemas/figure';

const contentDir = path.resolve(process.cwd(), 'src/content/modules');
const dataDir = path.resolve(process.cwd(), 'src/data/modules');

/** Matches <Figure module="mod-04" id="mao-ask" /> in lesson TSX. */
const FIGURE_RE =
  /<Figure\s+[^>]*?module\s*=\s*(['"])(.+?)\1[^>]*?id\s*=\s*(['"])(.+?)\3[^>]*?>/g;

// Resolve the figure registry directly from the JSON files (same source of
// truth as src/data/figures.ts, but without its Vite-only import.meta.glob).
const known = new Set<string>();
for (const file of readdirSync(dataDir)) {
  if (!file.endsWith('.json')) continue;
  const parsed = moduleDataSchema.parse(
    JSON.parse(readFileSync(path.join(dataDir, file), 'utf-8'))
  );
  for (const fig of parsed.figures) known.add(`${parsed.moduleId}/${fig.id}`);
}

let failures = 0;
let checked = 0;

for (const moduleDir of readdirSync(contentDir, { withFileTypes: true })) {
  if (!moduleDir.isDirectory()) continue;
  for (const file of readdirSync(path.join(contentDir, moduleDir.name))) {
    if (!file.endsWith('.tsx')) continue;
    const filePath = path.join(contentDir, moduleDir.name, file);
    const src = readFileSync(filePath, 'utf-8');
    for (const match of src.matchAll(FIGURE_RE)) {
      const key = `${match[2]}/${match[4]}`;
      checked++;
      if (!known.has(key)) {
        failures++;
        console.error(
          `FAIL ${path.relative(process.cwd(), filePath)}: <Figure module="${match[2]}" id="${match[4]}" /> does not resolve`
        );
      }
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} Figure reference(s) failed to resolve.`);
  process.exit(1);
}
console.log(`All ${checked} Figure references resolve.`);
