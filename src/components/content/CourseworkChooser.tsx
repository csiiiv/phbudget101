import { Link } from 'react-router-dom';

import { useProgress } from '@/lib/useProgress';

export interface CourseworkOption {
  to: string;
  label: string;
  description?: string;
}

interface CourseworkChooserProps {
  moduleId: string;
  lessonId: string;
  options: CourseworkOption[];
}

/**
 * Terminal coursework chooser. Options stay disabled until the lesson is
 * marked complete (the footer button below the station), so the exit gate
 * and the completion control can never disagree. Unlocks live once
 * completion is recorded.
 */
export function CourseworkChooser({
  moduleId,
  lessonId,
  options,
}: CourseworkChooserProps) {
  const { progress } = useProgress();
  const completed =
    progress?.modules[moduleId]?.lessons[lessonId] === 'completed';

  return (
    <div className="not-prose my-6">
      {!completed && (
        <p className="mb-4 rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
          One step left: mark this lesson complete below. Your routes unlock
          the moment you do.
        </p>
      )}
      <p className="mb-3 text-sm font-medium">
        {completed
          ? 'Lesson complete — choose the route that fits you today:'
          : 'Choose the route that fits you today:'}
      </p>
      <nav
        aria-label="Choose a learning path"
        aria-disabled={!completed}
        className={`grid gap-3 sm:grid-cols-3 ${
          completed ? '' : 'pointer-events-none opacity-60'
        }`}
      >
        {options.map((option) =>
          completed ? (
            <Link
              key={`${option.to}-${option.label}`}
              to={option.to}
              className="rounded-lg border border-primary bg-card p-4 text-sm font-semibold text-primary transition-colors hover:bg-accent/40"
            >
              {option.label}
              {option.description && (
                <span className="mt-1 block text-xs font-normal leading-snug text-muted-foreground">
                  {option.description}
                </span>
              )}
            </Link>
          ) : (
            <span
              key={`${option.to}-${option.label}`}
              aria-disabled="true"
              className="cursor-not-allowed rounded-lg border bg-card p-4 text-sm font-semibold text-muted-foreground"
            >
              {option.label}
              {option.description && (
                <span className="mt-1 block text-xs font-normal leading-snug text-muted-foreground">
                  {option.description}
                </span>
              )}
            </span>
          )
        )}
      </nav>
    </div>
  );
}
