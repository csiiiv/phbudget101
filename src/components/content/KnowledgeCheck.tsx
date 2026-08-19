import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface CheckItem {
  /** The question or statement shown to the learner. */
  prompt: string;
  options: string[];
  /** Index of the correct option. */
  correct: number;
  /** Shown when answered correctly (or after reveal). */
  explanation: string;
  /** Why each wrong option is wrong, keyed by option index. */
  wrong?: Record<number, string>;
}

interface KnowledgeCheckProps {
  title?: string;
  items: CheckItem[];
}

const MAX_WRONG_PICKS = 2;

interface ItemState {
  wrongPicks: number[];
  solved: 'first-try' | 'retry' | 'revealed' | null;
  feedback: string | null;
  feedbackKind: 'wrong' | 'right' | 'reveal' | null;
}

function initialStates(count: number): ItemState[] {
  return Array.from({ length: count }, () => ({
    wrongPicks: [],
    solved: null,
    feedback: null,
    feedbackKind: null,
  }));
}

/**
 * Lesson-pattern slot 6: knowledge check. Self-assessment only — answers are
 * not scored or persisted (spec: advisory, not gating). Wrong picks explain
 * why the chosen option is wrong and may be retried; after two wrong picks
 * the item reveals the correct answer so the learner is never dead-ended.
 */
export function KnowledgeCheck({ title = 'Check your understanding', items }: KnowledgeCheckProps) {
  const [states, setStates] = useState<ItemState[]>(() => initialStates(items.length));

  const pick = (itemIndex: number, optionIndex: number) => {
    const item = items[itemIndex];
    setStates((prev) =>
      prev.map((s, i) => {
        if (i !== itemIndex || s.solved) return s;
        if (optionIndex === item.correct) {
          return {
            wrongPicks: s.wrongPicks,
            solved: s.wrongPicks.length === 0 ? 'first-try' : 'retry',
            feedback: item.explanation,
            feedbackKind: 'right',
          };
        }
        const wrongPicks = [...s.wrongPicks, optionIndex];
        if (wrongPicks.length >= MAX_WRONG_PICKS) {
          return {
            wrongPicks,
            solved: 'revealed',
            feedback: `The correct answer is highlighted. ${item.explanation}`,
            feedbackKind: 'reveal',
          };
        }
        return {
          wrongPicks,
          solved: null,
          feedback: item.wrong?.[optionIndex] ?? 'Not quite — try again.',
          feedbackKind: 'wrong',
        };
      })
    );
  };

  const allSolved = states.every((s) => s.solved);
  const firstTry = states.filter((s) => s.solved === 'first-try').length;

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
          const state = states[i];
          return (
            <li key={i} className="space-y-2">
              <p className="font-medium text-sm leading-snug">
                {i + 1}. {item.prompt}
              </p>
              <div className="flex flex-col gap-1.5">
                {item.options.map((option, oi) => {
                  const isPickedWrong = state.wrongPicks.includes(oi);
                  const isCorrect = oi === item.correct;
                  const showState = state.solved !== null;
                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={isPickedWrong || state.solved !== null}
                      onClick={() => pick(i, oi)}
                      className={cn(
                        'rounded-md border px-3 py-2 text-left text-sm transition-colors',
                        !showState && !isPickedWrong && 'hover:bg-secondary',
                        showState && isCorrect && 'border-primary bg-accent/50 font-medium',
                        isPickedWrong && 'border-destructive/60 bg-destructive/10 text-muted-foreground line-through decoration-destructive/50',
                        showState && !isCorrect && !isPickedWrong && 'opacity-60'
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {state.feedback && (
                <p
                  role="status"
                  className={cn(
                    'text-sm text-muted-foreground',
                    state.feedbackKind === 'wrong' && 'text-foreground'
                  )}
                >
                  {state.feedbackKind === 'right' && '✓ '}
                  {state.feedbackKind === 'wrong' && '✗ '}
                  {state.feedback}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      {allSolved && (
        <div className="flex items-center gap-3 pt-1">
          <p className="text-sm font-medium">
            {firstTry === items.length
              ? 'All correct on the first try — nice work.'
              : `${firstTry} of ${items.length} correct on the first try.`}
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="no-print"
            onClick={() => setStates(initialStates(items.length))}
          >
            Reset
          </Button>
        </div>
      )}
    </section>
  );
}
