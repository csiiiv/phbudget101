import { useEffect, useState } from 'react';
import { findLessonMdx, type MDXModule } from '@/content/registry';
import { Figure } from './Figure';
import { TraceConcern } from '@/components/interactives/TraceConcern';

interface MDXContentProps {
  moduleSlug: string;
  lessonId: string;
}

/** Components available inside lesson MDX (no import needed in the MDX file). */
const mdxComponents = { Figure, TraceConcern };

type LessonComponent = MDXModule['default'];

/**
 * Lazily loads and renders a lesson's MDX body with route-level code
 * splitting (glob import -> dynamic chunk per lesson).
 */
export function MDXContent({ moduleSlug, lessonId }: MDXContentProps) {
  const [Content, setContent] = useState<LessonComponent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loader = findLessonMdx(moduleSlug, lessonId);
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
