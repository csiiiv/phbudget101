import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const contentDir = path.resolve(process.cwd(), 'src/content/modules');

/**
 * JSX strips newlines adjacent to tags, so
 *
 *   some text
 *   <Term id="nep" />
 *
 * renders as "some text" glued to the term with no space. The fix is an
 * explicit `{' '}` on one side of the break. This validator flags every
 * place where a Term and surrounding prose are separated only by a newline.
 */

/** Line ends with prose characters that would glue to a following Term. */
const ENDS_WITH_TEXT = /[)\]}"”’.,;:!?\u2014a-zA-Z0-9]$/;
const OPENS_TERM = /^<Term[\s>]/;
/** Line ends with a Term (self-closing or closed), wherever it starts. */
const ENDS_WITH_TERM = /(<Term[^>]*\/>|<\/Term>)\s*$/;
/** Next line starts with prose (not a tag, not an explicit space). */
const STARTS_TEXT = /^[a-zA-Z0-9(“"'\u2018\u201C]/;

let failures = 0;
let checked = 0;

function scan(filePath: string) {
  const rel = path.relative(process.cwd(), filePath);
  const lines = readFileSync(filePath, 'utf-8').split(/\r?\n/);
  for (let i = 0; i < lines.length - 1; i++) {
    const here = lines[i].trimEnd();
    const next = lines[i + 1].trim();

    // Skip line pairs already separated by an explicit JSX space.
    if (/\{\s*['"]\s*['"]\s*\}\s*$/.test(here) || /^\{\s*['"]\s*['"]\s*\}/.test(next)) continue;

    const beforeTerm =
      ENDS_WITH_TEXT.test(here.trim()) && OPENS_TERM.test(next);
    const afterTerm =
      ENDS_WITH_TERM.test(here) && STARTS_TEXT.test(next);

    if (beforeTerm || afterTerm) {
      failures++;
      checked++;
      console.error(
        `FAIL ${rel}:${i + 2}: term and prose split across lines without {' '} — ` +
          (beforeTerm ? 'text before <Term>' : 'prose after Term') +
          ` will render glued`
      );
    }
  }
}

for (const moduleDir of readdirSync(contentDir, { withFileTypes: true })) {
  if (!moduleDir.isDirectory()) continue;
  for (const file of readdirSync(path.join(contentDir, moduleDir.name))) {
    if (file.endsWith('.tsx')) scan(path.join(contentDir, moduleDir.name, file));
  }
}

if (failures > 0) {
  console.error(`\n${failures} glued-term line break(s) found.`);
  console.error('Fix: add {\' \'} at the end of the prose line or after the tag.');
  process.exit(1);
}
console.log(`No glued-term line breaks found.`);
