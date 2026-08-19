import { useEffect, useState, type ComponentType } from 'react';
import { findLessonContent } from '@/content/registry';
import { Figure } from './Figure';
import { KeyTakeaway } from './KeyTakeaway';
import { KnowledgeCheck } from './KnowledgeCheck';
import { TraceConcern } from '@/components/interactives/TraceConcern';

interface LessonContentProps {
  moduleSlug: string;
  lessonId: string;
}

/** Components injected into .mdx lessons (no import needed in the MDX file). */
const mdxComponents = { Figure, KeyTakeaway, KnowledgeCheck, TraceConcern };

/**
 * Lazily loads and renders a lesson body (.tsx default, .mdx supported) with
 * route-level code splitting via the glob registry.
 */
export function LessonContent({ moduleSlug, lessonId }: LessonContentProps) {
  const [Content, setContent] = useState<ComponentType<Record<string, unknown>> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loader = findLessonContent(moduleSlug, lessonId);
    if (!loader) {
      setContent(null);
      setError(null);
      return;
    }
    let active = true;
    loader()
      .then((mod) => {
        if (active) {
          setContent(() => mod.default);
          setError(null);
        }
      })
      .catch(() => {
        if (active) setError('This lesson failed to load.');
      });
    return () => {
      active = false;
    };
  }, [moduleSlug, lessonId]);

  if (Content) return <Content components={mdxComponents} />;
  if (error) return <p className="text-sm text-destructive">{error}</p>;
  return null;
}
