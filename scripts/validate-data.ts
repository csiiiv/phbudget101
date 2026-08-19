import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { moduleDataSchema } from '../src/data/schemas/figure';

const dataDir = path.resolve(process.cwd(), 'src/data/modules');
let failures = 0;

for (const file of readdirSync(dataDir)) {
  if (!file.endsWith('.json')) continue;
  const raw = JSON.parse(readFileSync(path.join(dataDir, file), 'utf-8'));
  const result = moduleDataSchema.safeParse(raw);
  if (result.success) {
    console.log(`OK  ${file} (${result.data.figures.length} figures)`);
  } else {
    failures++;
    console.error(`FAIL ${file}`);
    for (const issue of result.error.issues) {
      console.error(`  - ${issue.path.join('.')}: ${issue.message}`);
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} data file(s) failed schema validation.`);
  process.exit(1);
}
console.log('\nAll module data files valid.');
