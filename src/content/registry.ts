import type { ComponentType } from 'react';

export interface LessonModule {
  default: ComponentType<Record<string, unknown>>;
}

/**
 * Lessons are resolved by glob from src/content/modules/<module-slug>/<lesson-id>.<ext>.
 * .tsx is the default format (full type safety, direct imports); .mdx remains
 * supported for prose-heavy lessons (components are injected by LessonContent).
 */
const files = {
  ...import.meta.glob('./modules/*/*.tsx'),
  ...import.meta.glob('./modules/*/*.mdx'),
} as Record<string, () => Promise<LessonModule>>;

/**
 * Extract the `${moduleSlug}/${lessonId}` key from a globbed lesson path,
 * e.g. './modules/01-why-pfm-matters/01.1.tsx' -> '01-why-pfm-matters/01.1'.
 * Returns null for paths that do not match the expected shape.
 */
export function lessonKeyFromPath(path: string): string | null {
  const match = path.match(/modules\/([^/]+)\/([^/]+)\.(tsx|mdx)$/);
  return match ? `${match[1]}/${match[2]}` : null;
}

const lessonLoaders = new Map<string, () => Promise<LessonModule>>();
for (const [path, loader] of Object.entries(files)) {
  const key = lessonKeyFromPath(path);
  if (key) lessonLoaders.set(key, loader);
}

export function findLessonContent(
  moduleSlug: string,
  lessonId: string
): (() => Promise<LessonModule>) | null {
  return lessonLoaders.get(`${moduleSlug}/${lessonId}`) ?? null;
}

export function hasLessonContent(moduleSlug: string, lessonId: string): boolean {
  return lessonLoaders.has(`${moduleSlug}/${lessonId}`);
}
