import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MDXContent } from '@/components/content/MDXContent';
import { hasLessonMdx } from '@/content/registry';
import { courseModules } from '@/data/course';
import { useProgress } from '@/lib/useProgress';

export function LessonPage() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const { progress, markVisited, markCompleted } = useProgress();

  const mod = courseModules.find((m) => m.slug === moduleId);
  const lesson = mod?.lessons.find((l) => l.id === lessonId);

  const lessonIndex = mod && lesson ? mod.lessons.indexOf(lesson) : -1;
  const prev = lessonIndex > 0 ? mod!.lessons[lessonIndex - 1] : null;
  const next =
    mod && lessonIndex >= 0 && lessonIndex < mod.lessons.length - 1
      ? mod.lessons[lessonIndex + 1]
      : null;

  useEffect(() => {
    if (mod && lesson) markVisited(mod.id, lesson.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mod?.id, lesson?.id]);

  if (!mod || !lesson) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Lesson not found</h1>
        <Link to="/" className="text-primary underline">
          Back to home
        </Link>
      </div>
    );
  }

  const isCompleted = progress?.modules[mod.id]?.lessons[lesson.id] === 'completed';
  const hasMdx = hasLessonMdx(mod.slug, lesson.id);

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link to={`/modules/${mod.slug}`} className="hover:underline">
            {mod.title}
          </Link>{' '}
          / Lesson {lesson.id}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{lesson.title}</h1>
      </header>

      {hasMdx ? (
        <div className="lesson-prose">
          <MDXContent moduleSlug={mod.slug} lessonId={lesson.id} />
        </div>
      ) : (
        <div className="rounded-lg border border-dashed bg-card p-6 text-sm text-muted-foreground">
          Lesson content pending authoring. Spec:{' '}
          <code>docs/modules/{mod.slug}.md</code>, lesson {lesson.id}.
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 border-t pt-4 no-print">
        {prev && (
          <Button
            variant="outline"
            onClick={() =>
              navigate(`/modules/${mod.slug}/lessons/${encodeURIComponent(prev.id)}`)
            }
          >
            ← {prev.id} {prev.title}
          </Button>
        )}
        <Button
          variant={isCompleted ? 'secondary' : 'default'}
          onClick={() => markCompleted(mod.id, lesson.id)}
          disabled={isCompleted}
        >
          {isCompleted ? '✓ Completed' : 'Mark lesson complete'}
        </Button>
        {next && (
          <Button
            onClick={() =>
              navigate(`/modules/${mod.slug}/lessons/${encodeURIComponent(next.id)}`)
            }
          >
            {next.id} {next.title} →
          </Button>
        )}
      </div>
    </article>
  );
}
