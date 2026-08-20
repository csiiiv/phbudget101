import type { ComponentType } from 'react';
import type { Locale } from '@/lib/locale';
import type { LessonDefinition } from '@/lib/sections';

export interface LessonModule {
  /** defineLesson(...) result — required contract for TSX lessons. */
  default: LessonDefinition;
  /** Legacy MDX default export (ComponentType). */
  legacy?: ComponentType<Record<string, unknown>>;
}

/**
 * Lessons are resolved by glob from src/content/modules/<module-slug>/<lesson-id>.<ext>.
 * Locale-specific peers use `<lesson-id>.<locale>.tsx` (e.g. `00.1.fil.tsx`).
 * .tsx lessons export defineLesson({ sections }) as default (see src/lib/sections.ts);
 * .mdx lessons remain supported as legacy continuous articles.
 */
const files = {
  ...import.meta.glob('./modules/*/*.tsx'),
  ...import.meta.glob('./modules/*/*.mdx'),
} as Record<string, LessonLoader>;

export type LessonLoader = () => Promise<LessonModule>;

export interface ParsedLessonPath {
  moduleSlug: string;
  lessonId: string;
  locale: Locale;
}

/**
 * Extract module slug, lesson id, and locale from a globbed lesson path.
 * e.g. './modules/01-why-pfm-matters/01.1.tsx' -> en default
 *      './modules/00-start-here/00.1.fil.tsx' -> fil
 */
export function parseLessonPath(path: string): ParsedLessonPath | null {
  const match = path.match(/modules\/([^/]+)\/([^/]+)\.(tsx|mdx)$/);
  if (!match) return null;
  const [, moduleSlug, fileBase] = match;
  const localeMatch = fileBase.match(/^(.+)\.(fil|en)$/);
  if (localeMatch) {
    return {
      moduleSlug,
      lessonId: localeMatch[1],
      locale: localeMatch[2] as Locale,
    };
  }
  return { moduleSlug, lessonId: fileBase, locale: 'en' };
}

/**
 * Extract the `${moduleSlug}/${lessonId}` key from a globbed lesson path,
 * e.g. './modules/01-why-pfm-matters/01.1.tsx' -> '01-why-pfm-matters/01.1'.
 * Returns null for paths that do not match the expected shape.
 */
export function lessonKeyFromPath(path: string): string | null {
  const parsed = parseLessonPath(path);
  return parsed ? `${parsed.moduleSlug}/${parsed.lessonId}` : null;
}

const lessonLoaders = new Map<string, LessonLoader>();
for (const [path, loader] of Object.entries(files)) {
  const parsed = parseLessonPath(path);
  if (parsed) {
    lessonLoaders.set(
      `${parsed.moduleSlug}/${parsed.lessonId}@${parsed.locale}`,
      loader
    );
  }
}

export function findLessonContent(
  moduleSlug: string,
  lessonId: string,
  locale: Locale = 'en'
): LessonLoader | null {
  const key = `${moduleSlug}/${lessonId}`;
  if (locale === 'fil') {
    return (
      lessonLoaders.get(`${key}@fil`) ??
      lessonLoaders.get(`${key}@en`) ??
      null
    );
  }
  return lessonLoaders.get(`${key}@en`) ?? null;
}

export function hasLessonContent(
  moduleSlug: string,
  lessonId: string,
  locale: Locale = 'en'
): boolean {
  return findLessonContent(moduleSlug, lessonId, locale) !== null;
}
