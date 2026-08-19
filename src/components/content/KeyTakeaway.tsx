import type { ReactNode } from 'react';

interface KeyTakeawayProps {
  children: ReactNode;
}

/**
 * Lesson-pattern slot 7: the concise takeaway — the one thing to remember.
 */
export function KeyTakeaway({ children }: KeyTakeawayProps) {
  return (
    <aside
      data-interactive
      className="not-prose my-8 rounded-lg border-l-4 border-primary bg-accent/40 p-5"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-1.5">
        Key takeaway
      </h3>
      <div className="text-sm leading-relaxed">{children}</div>
    </aside>
  );
}
