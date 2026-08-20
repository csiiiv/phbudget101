import { Link } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { useCourseModules } from "@/data/localizedCourse";
import { useT } from "@/lib/LocaleProvider";
import { useProgress } from "@/lib/useProgress";
import type { ProgressState } from "@/lib/progress";

/** First lesson the learner has not completed, in course order. */
function nextUpcomingLesson(
  modules: ReturnType<typeof useCourseModules>,
  progress: ProgressState | null,
) {
  for (const mod of modules) {
    const lessons = progress?.modules[mod.id]?.lessons ?? {};
    const lesson = mod.lessons.find((l) => lessons[l.id] !== "completed");
    if (lesson) {
      return { mod, lesson };
    }
  }
  return null;
}

export function HomePage() {
  const { progress } = useProgress();
  const courseModules = useCourseModules();
  const t = useT();
  const completedTotal = Object.values(progress?.modules ?? {}).reduce(
    (sum, m) =>
      sum + Object.values(m.lessons).filter((s) => s === "completed").length,
    0,
  );
  const next = nextUpcomingLesson(courseModules, progress);
  const startHref =
    next === null
      ? "/modules/00-start-here"
      : `/modules/${next.mod.slug}/lessons/${encodeURIComponent(next.lesson.id)}`;

  return (
    <div className="space-y-10">
      <section className="space-y-4 pt-6">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          {t.home.eyebrow}
        </p>
        <h1 className="text-4xl font-bold tracking-tight leading-tight">
          {t.home.headline}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t.home.subhead}
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to={startHref}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {completedTotal > 0
              ? next
                ? t.home.continueLesson(next.lesson.id, next.lesson.title)
                : t.home.continueCourse
              : t.home.startCourse}
          </Link>
          <Link
            to="/reference"
            className="rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-secondary"
          >
            {t.home.browseReference}
          </Link>
          <Link
            to="/about"
            className="px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:underline"
          >
            {t.nav.about}
          </Link>
        </div>
        {completedTotal > 0 && (
          <p className="text-sm text-muted-foreground">
            {t.home.lessonsCompleted(completedTotal)}
          </p>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.home.courseSection}</h2>
        <ol className="space-y-2">
          {courseModules.map((mod) => {
            const lessons = progress?.modules[mod.id]?.lessons ?? {};
            const done = Object.values(lessons).filter(
              (s) => s === "completed",
            ).length;
            const total = mod.lessons.length;
            const moduleComplete = total > 0 && done === total;
            const completeLabel = t.home.moduleComplete(total);
            return (
              <li key={mod.id}>
                <Link
                  to={`/modules/${mod.slug}`}
                  className="flex items-center gap-4 rounded-lg border bg-card p-4 hover:bg-secondary/60 transition-colors"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-secondary text-sm font-semibold tabular-nums text-muted-foreground">
                    {mod.id.replace("mod-", "")}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-medium leading-snug">
                      {mod.title}
                    </span>
                    <span className="block text-sm leading-relaxed text-muted-foreground">
                      {mod.purpose}
                    </span>
                  </span>
                  {moduleComplete ? (
                    <span className="shrink-0" title={completeLabel}>
                      <CircleCheck
                        className="size-7 text-emerald-600"
                        aria-label={completeLabel}
                      />
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
