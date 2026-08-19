import { Link, useParams } from 'react-router-dom';
import { courseModules } from '@/data/course';
import { useProgress } from '@/lib/useProgress';

export function ModulePage() {
  const { moduleId } = useParams();
  const mod = courseModules.find((m) => m.slug === moduleId);
  const { progress } = useProgress();

  if (!mod) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Module not found</h1>
        <Link to="/" className="text-primary underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <div className="text-sm text-muted-foreground">{mod.id}</div>
        <h1 className="text-3xl font-bold tracking-tight">{mod.title}</h1>
        <p className="text-muted-foreground">{mod.purpose}</p>
      </header>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Lessons</h2>
        <ol className="space-y-2">
          {mod.lessons.map((lesson) => {
            const status = progress?.modules[mod.id]?.lessons[lesson.id];
            return (
              <li key={lesson.id}>
                <Link
                  to={`/modules/${mod.slug}/lessons/${encodeURIComponent(lesson.id)}`}
                  className="flex items-baseline gap-3 rounded-lg border bg-card p-4 hover:bg-secondary"
                >
                  <span className="text-sm text-muted-foreground tabular-nums">
                    {lesson.id}
                  </span>
                  <span className="font-medium flex-1">{lesson.title}</span>
                  {status === 'completed' && (
                    <span className="text-xs text-muted-foreground">✓</span>
                  )}
                  {status === 'visited' && (
                    <span className="text-xs text-muted-foreground">·</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </article>
  );
}
