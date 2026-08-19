import type { ComponentType } from 'react';

export interface MDXModule {
  default: ComponentType<{ components?: Record<string, unknown> }>;
}

const mdxFiles = import.meta.glob('./modules/*/*.mdx') as Record<
  string,
  () => Promise<MDXModule>
>;

/**
 * Extract the `${moduleSlug}/${lessonId}` key from a globbed MDX path,
 * e.g. './modules/01-why-pfm-matters/01.1.mdx' -> '01-why-pfm-matters/01.1'.
 * Returns null for paths that do not match the expected shape.
 */
export function lessonKeyFromPath(path: string): string | null {
  const match = path.match(/modules\/([^/]+)\/([^/]+)\.mdx$/);
  return match ? `${match[1]}/${match[2]}` : null;
}

const lessonLoaders = new Map<string, () => Promise<MDXModule>>();
for (const [path, loader] of Object.entries(mdxFiles)) {
  const key = lessonKeyFromPath(path);
  if (key) lessonLoaders.set(key, loader);
}

export function findLessonMdx(
  moduleSlug: string,
  lessonId: string
): (() => Promise<MDXModule>) | null {
  return lessonLoaders.get(`${moduleSlug}/${lessonId}`) ?? null;
}

export function hasLessonMdx(moduleSlug: string, lessonId: string): boolean {
  return lessonLoaders.has(`${moduleSlug}/${lessonId}`);
}
