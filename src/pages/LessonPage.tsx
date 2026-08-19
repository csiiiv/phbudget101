import { Link, useParams } from 'react-router-dom';
import { courseModules } from '@/data/course';

export function LessonPage() {
  const { moduleId, lessonId } = useParams();
  const mod = courseModules.find((m) => m.slug === moduleId);
  const lesson = mod?.lessons.find((l) => l.id === lessonId);

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

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link to={`/modules/${mod.slug}`} className="hover:underline">
            {mod.title}
          </Link>{' '}
          / {lesson.id}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{lesson.title}</h1>
      </header>
      <div className="rounded-lg border border-dashed bg-card p-6 text-sm text-muted-foreground">
        Lesson content will be authored here (MDX). Spec:{' '}
        <code>docs/modules/{mod.slug}.md</code>, lesson {lesson.id}. Content
        status: outline — pending authoring.
      </div>
    </article>
  );
}
