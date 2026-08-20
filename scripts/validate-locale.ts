import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

/** Pilot scope: Module 00 lessons must have Filipino peer files. */
const PILOT_LESSONS = [
  '00-start-here/00.1',
  '00-start-here/00.2',
  '00-start-here/00.3',
] as const;

const PILOT_MODULE_ID = 'mod-00';

let failures = 0;

function fail(message: string): void {
  failures++;
  console.error(`FAIL ${message}`);
}

function ok(message: string): void {
  console.log(`OK  ${message}`);
}

function collectKeys(value: unknown, prefix = ''): string[] {
  if (typeof value === 'function') {
    return prefix ? [prefix] : [];
  }
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return prefix ? [prefix] : [];
  }
  return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
    collectKeys(child, prefix ? `${prefix}.${key}` : key)
  );
}

function parseLessonPath(filePath: string): { lessonId: string } | null {
  const match = filePath.match(/modules\/([^/]+)\/([^/]+)\.(tsx|mdx)$/);
  if (!match) return null;
  const fileBase = match[2];
  const localeMatch = fileBase.match(/^(.+)\.(fil|en)$/);
  return { lessonId: localeMatch ? localeMatch[1] : fileBase };
}

async function main(): Promise<void> {
  const { ui: enUi } = await import('../src/i18n/en/ui');
  const { ui: filUi } = await import('../src/i18n/fil/ui');

  const enKeys = new Set(collectKeys(enUi));
  const filKeys = new Set(collectKeys(filUi));

  for (const key of enKeys) {
    if (!filKeys.has(key)) fail(`Missing Filipino UI key: ${key}`);
  }
  for (const key of filKeys) {
    if (!enKeys.has(key)) fail(`Extra Filipino UI key (not in English): ${key}`);
  }
  if (failures === 0) {
    ok(`UI dictionaries aligned (${enKeys.size} keys)`);
  }

  const { courseFil } = await import('../src/i18n/fil/course');
  const pilotMeta = courseFil.modules[PILOT_MODULE_ID];
  if (!pilotMeta) {
    fail(`Missing Filipino course metadata for ${PILOT_MODULE_ID}`);
  } else {
    ok(`Filipino metadata present for ${PILOT_MODULE_ID}`);
    for (const lessonKey of ['00.1', '00.2', '00.3']) {
      if (!pilotMeta.lessons[lessonKey]) {
        fail(`Missing Filipino lesson title for ${PILOT_MODULE_ID}/${lessonKey}`);
      }
    }
  }

  const contentDir = path.resolve('src/content/modules');
  for (const lessonKey of PILOT_LESSONS) {
    const [moduleSlug, lessonId] = lessonKey.split('/');
    const filFile = path.join(contentDir, moduleSlug, `${lessonId}.fil.tsx`);
    if (!existsSync(filFile)) {
      fail(`Missing Filipino lesson file: ${filFile}`);
    } else {
      ok(`Filipino lesson file ${lessonKey}.fil.tsx`);
    }
  }

  for (const moduleDir of readdirSync(contentDir)) {
    const dirPath = path.join(contentDir, moduleDir);
    if (!existsSync(dirPath)) continue;
    for (const file of readdirSync(dirPath)) {
      if (!file.endsWith('.tsx') && !file.endsWith('.mdx')) continue;
      const parsed = parseLessonPath(`./modules/${moduleDir}/${file}`);
      if (!parsed) {
        fail(`Unparseable lesson path: ${moduleDir}/${file}`);
      }
    }
  }

  if (failures > 0) {
    console.error(`\n${failures} locale validation issue(s).`);
    process.exit(1);
  }
  console.log('\nLocale validation passed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
