import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

/** Filipino metadata and lesson peers currently required in CI. */
const FILIPINO_COVERAGE = [
  {
    moduleId: "mod-00",
    moduleSlug: "00-start-here",
    metadataLessons: ["00.1", "00.2", "00.3"],
    lessonBodies: ["00.1", "00.2", "00.3"],
  },
  {
    moduleId: "mod-01",
    moduleSlug: "01-why-pfm-matters",
    metadataLessons: ["01.1", "01.2", "01.3"],
    lessonBodies: ["01.1", "01.2", "01.3"],
  },
  {
    moduleId: "mod-02",
    moduleSlug: "02-the-governments-money",
    metadataLessons: ["02.1", "02.2", "02.3"],
    lessonBodies: ["02.1", "02.2", "02.3"],
  },
  {
    moduleId: "mod-03",
    moduleSlug: "03-anatomy-of-the-budget",
    metadataLessons: ["03.1", "03.2", "03.3", "03.4"],
    lessonBodies: ["03.1", "03.2", "03.3", "03.4"],
  },
  {
    moduleId: "mod-04",
    moduleSlug: "04-the-budget-cycle",
    metadataLessons: ["04.1", "04.2", "04.3", "04.4"],
    lessonBodies: ["04.1", "04.2", "04.3", "04.4"],
  },
  {
    moduleId: "mod-05",
    moduleSlug: "05-from-appropriation-to-public-service",
    metadataLessons: ["05.1", "05.2", "05.3"],
    lessonBodies: ["05.1", "05.2", "05.3"],
  },
  {
    moduleId: "mod-06",
    moduleSlug: "06-local-government-budgets",
    metadataLessons: ["06.1", "06.2", "06.3", "06.4"],
    lessonBodies: ["06.1", "06.2", "06.3", "06.4"],
  },
  {
    moduleId: "mod-07",
    moduleSlug: "07-reading-budget-documents",
    metadataLessons: ["07.1", "07.2", "07.3", "07.4"],
    lessonBodies: ["07.1", "07.2", "07.3", "07.4"],
  },
  {
    moduleId: "mod-08",
    moduleSlug: "08-evaluating-budget-decisions",
    metadataLessons: ["08.1", "08.2", "08.3", "08.4", "08.5"],
    lessonBodies: ["08.1", "08.2", "08.3", "08.4", "08.5"],
  },
  {
    moduleId: "mod-09",
    moduleSlug: "09-participating-in-the-budget-process",
    metadataLessons: ["09.1", "09.2", "09.3", "09.4", "09.5"],
    lessonBodies: ["09.1", "09.2", "09.3", "09.4", "09.5"],
  },
  {
    moduleId: "mod-10",
    moduleSlug: "10-capstone-follow-the-money",
    metadataLessons: ["10.1"],
    // Capstone lesson body is Phase 2 — metadata only until English draft exists.
    lessonBodies: [],
  },
] as const;

let failures = 0;

function fail(message: string): void {
  failures++;
  console.error(`FAIL ${message}`);
}

function ok(message: string): void {
  console.log(`OK  ${message}`);
}

function collectKeys(value: unknown, prefix = ""): string[] {
  if (typeof value === "function") {
    return prefix ? [prefix] : [];
  }
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return prefix ? [prefix] : [];
  }
  return Object.entries(value as Record<string, unknown>).flatMap(
    ([key, child]) => collectKeys(child, prefix ? `${prefix}.${key}` : key),
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
  const { ui: enUi } = await import("../src/i18n/en/ui");
  const { ui: filUi } = await import("../src/i18n/fil/ui");

  const enKeys = new Set(collectKeys(enUi));
  const filKeys = new Set(collectKeys(filUi));

  for (const key of enKeys) {
    if (!filKeys.has(key)) fail(`Missing Filipino UI key: ${key}`);
  }
  for (const key of filKeys) {
    if (!enKeys.has(key))
      fail(`Extra Filipino UI key (not in English): ${key}`);
  }
  if (failures === 0) {
    ok(`UI dictionaries aligned (${enKeys.size} keys)`);
  }

  const { courseFil } = await import("../src/i18n/fil/course");
  for (const coverage of FILIPINO_COVERAGE) {
    const moduleMeta = courseFil.modules[coverage.moduleId];
    if (!moduleMeta) {
      fail(`Missing Filipino course metadata for ${coverage.moduleId}`);
    } else {
      ok(`Filipino metadata present for ${coverage.moduleId}`);
      for (const lessonKey of coverage.metadataLessons) {
        if (!moduleMeta.lessons[lessonKey]) {
          fail(
            `Missing Filipino lesson title for ${coverage.moduleId}/${lessonKey}`,
          );
        }
      }
    }
  }

  const contentDir = path.resolve("src/content/modules");
  for (const coverage of FILIPINO_COVERAGE) {
    for (const lessonId of coverage.lessonBodies) {
      const filFile = path.join(
        contentDir,
        coverage.moduleSlug,
        `${lessonId}.fil.tsx`,
      );
      if (!existsSync(filFile)) {
        fail(`Missing Filipino lesson file: ${filFile}`);
      } else {
        ok(`Filipino lesson file ${coverage.moduleSlug}/${lessonId}.fil.tsx`);
      }
    }
  }

  for (const moduleDir of readdirSync(contentDir)) {
    const dirPath = path.join(contentDir, moduleDir);
    if (!existsSync(dirPath)) continue;
    for (const file of readdirSync(dirPath)) {
      if (!file.endsWith(".tsx") && !file.endsWith(".mdx")) continue;
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
  console.log("\nLocale validation passed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
