import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface CheckItem {
  /** The question or statement shown to the learner. */
  prompt: string;
  options: string[];
  /** Index of the correct option. */
  correct: number;
  /** Shown after answering, regardless of correctness. */
  explanation: string;
}

interface KnowledgeCheckProps {
  title?: string;
  items: CheckItem[];
}

/**
 * Lesson-pattern slot 6: knowledge check. Self-assessment only —
 * answers are not scored or persisted (spec: advisory, not gating).
 */
export function KnowledgeCheck({ title = 'Check your understanding', items }: KnowledgeCheckProps) {
  const [selected, setSelected] = useState<(number | null)[]>(() => items.map(() => null));

  const answered = selected.some((s) => s !== null);
  const allCorrect = selected.every((s, i) => s === items[i].correct);

  return (
    <section
      data-interactive
      className="not-prose my-8 rounded-lg border bg-card p-5 space-y-5"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>
      <ol className="space-y-5">
        {items.map((item, i) => {
          const choice = selected[i];
          return (
            <li key={i} className="space-y-2">
              <p className="font-medium text-sm leading-snug">
                {i + 1}. {item.prompt}
              </p>
              <div className="flex flex-col gap-1.5">
                {item.options.map((option, oi) => {
                  const isPicked = choice === oi;
                  const isRight = oi === item.correct;
                  const showState = choice !== null;
                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={choice !== null}
                      onClick={() =>
                        setSelected((prev) => prev.map((s, si) => (si === i ? oi : s)))
                      }
                      className={cn(
                        'rounded-md border px-3 py-2 text-left text-sm transition-colors',
                        !showState && 'hover:bg-secondary',
                        showState && isRight && 'border-primary bg-accent/50',
                        showState && isPicked && !isRight && 'border-destructive bg-destructive/10',
                        showState && !isPicked && !isRight && 'opacity-60'
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {choice !== null && (
                <p className="text-sm text-muted-foreground">
                  {choice === item.correct ? '✓ Correct. ' : '✗ Not quite. '}
                  {item.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      {answered && (
        <div className="flex items-center gap-3 pt-1">
          <p className="text-sm font-medium">
            {allCorrect
              ? 'All correct — nice work.'
              : 'Review the explanations above, then continue.'}
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="no-print"
            onClick={() => setSelected(items.map(() => null))}
          >
            Reset
          </Button>
        </div>
      )}
    </section>
  );
}
