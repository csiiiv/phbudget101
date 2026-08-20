import { Link } from 'react-router-dom';
import { courseModules } from '@/data/course';
import { useProgress } from '@/lib/useProgress';

/** First lesson the learner has not completed, in course order. */
function nextUpcomingLesson(
  progress: ReturnType<typeof useProgress>['progress']
) {
  for (const mod of courseModules) {
    const lessons = progress?.modules[mod.id]?.lessons ?? {};
    const lesson = mod.lessons.find((l) => lessons[l.id] !== 'completed');
    if (lesson) {
      return { mod, lesson };
    }
  }
  return null;
}

export function HomePage() {
  const { progress } = useProgress();
  const completedTotal = Object.values(progress?.modules ?? {}).reduce(
    (sum, m) =>
      sum + Object.values(m.lessons).filter((s) => s === 'completed').length,
    0
  );
  const next = nextUpcomingLesson(progress);
  const startHref =
    next === null
      ? '/modules/00-start-here'
      : `/modules/${next.mod.slug}/lessons/${encodeURIComponent(next.lesson.id)}`;

  return (
    <div className="space-y-10">
      <section className="space-y-4 pt-6">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          A self-paced course
        </p>
        <h1 className="text-4xl font-bold tracking-tight leading-tight">
          Understanding Philippine Public Financial Management
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Where the money comes from, how it is planned and legislated, how it
          turns into services — and where you can participate.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to={startHref}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {completedTotal > 0
              ? `Continue: ${next ? `${next.lesson.id} ${next.lesson.title}` : 'the course'}`
              : 'Start the course'}
          </Link>
          <Link
            to="/reference"
            className="rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-secondary"
          >
            Browse the reference
          </Link>
          <Link
            to="/about"
            className="px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:underline"
          >
            About
          </Link>
        </div>
        {completedTotal > 0 && (
          <p className="text-sm text-muted-foreground">
            {completedTotal} lesson{completedTotal === 1 ? '' : 's'} completed
            so far.
          </p>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The course</h2>
        <ol className="space-y-2">
          {courseModules.map((mod) => {
            const lessons = progress?.modules[mod.id]?.lessons ?? {};
            const done = Object.values(lessons).filter((s) => s === 'completed').length;
            const total = mod.lessons.length;
            const moduleComplete = total > 0 && done === total;
            return (
              <li key={mod.id}>
                <Link
                  to={`/modules/${mod.slug}`}
                  className="flex items-center gap-4 rounded-lg border bg-card p-4 hover:bg-secondary/60 transition-colors"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-secondary text-sm font-semibold tabular-nums text-muted-foreground">
                    {mod.id.replace('mod-', '')}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-medium leading-snug">{mod.title}</span>
                    <span className="block text-sm text-muted-foreground truncate">
                      {mod.purpose}
                    </span>
                  </span>
                  {moduleComplete ? (
                    <span
                      className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-600 text-sm font-bold text-white"
                      title={`Module complete — all ${total} lessons`}
                      aria-label={`Module complete — all ${total} lessons`}
                    >
                      ✓
                    </span>
                  ) : done > 0 ? (
                    <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                      {done}/{total}
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
