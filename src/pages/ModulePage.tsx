import { Link, useParams } from 'react-router-dom';
import { CircleCheck } from 'lucide-react';
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

  const lessons = progress?.modules[mod.id]?.lessons ?? {};
  const done = Object.values(lessons).filter((s) => s === 'completed').length;
  const total = mod.lessons.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const nextModule =
    courseModules[
      courseModules.findIndex((m) => m.id === mod.id) + 1
    ] ?? null;

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <div className="text-sm text-muted-foreground">
          Module {mod.id.replace('mod-', '')}
        </div>
        <h1 className="text-3xl font-bold tracking-tight leading-tight">
          {mod.title}
        </h1>
        <p className="text-muted-foreground">{mod.purpose}</p>
        {done > 0 && (
          <div className="space-y-1.5">
            <div className="text-xs text-muted-foreground tabular-nums">
              {done} of {total} lessons complete
            </div>
            <div
              className="h-1.5 w-full max-w-xs rounded-full bg-secondary overflow-hidden"
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        )}
      </header>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Lessons</h2>
        <ol className="space-y-2">
          {mod.lessons.map((lesson) => {
            const status = lessons[lesson.id];
            return (
              <li key={lesson.id}>
                <Link
                  to={`/modules/${mod.slug}/lessons/${encodeURIComponent(lesson.id)}`}
                  className="flex items-center gap-4 rounded-lg border bg-card p-4 hover:bg-secondary/60 transition-colors"
                >
                  {status === 'completed' ? (
                    <CircleCheck
                      className="size-8 shrink-0 text-primary"
                      aria-hidden
                    />
                  ) : (
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full border text-xs font-medium tabular-nums text-muted-foreground"
                      aria-hidden
                    >
                      {lesson.id.split('.')[1]}
                    </span>
                  )}
                  <span className="flex-1 font-medium leading-snug">
                    {lesson.title}
                  </span>
                  {status === 'visited' && (
                    <span className="shrink-0 text-xs text-muted-foreground">
                      In progress
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
      {nextModule && done === total && (
        <section className="rounded-lg border border-primary/40 bg-accent/40 p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-primary">
            Module complete
          </p>
          <p className="mt-1 font-semibold leading-snug">
            You finished all {total} lessons of Module {mod.id.replace('mod-', '')}.
          </p>
          <Link
            to={`/modules/${nextModule.slug}`}
            className="mt-3 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Next module: {nextModule.id.replace('mod-', '')} — {nextModule.title} →
          </Link>
        </section>
      )}
    </article>
  );
}
