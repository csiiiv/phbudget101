import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useProgress } from '@/lib/useProgress';
import { useT } from '@/lib/LocaleProvider';
import { parseMistakeKey } from '@/lib/progress';

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
  /** Owning module, e.g. "mod-01" — required to persist misses. */
  moduleId: string;
  /** Owning lesson id, e.g. "01.2" — required to persist misses. */
  lessonId: string;
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
 * Lesson-pattern slot 6: knowledge check, presented one question at a time
 * (self_paced_lesson_format.md §5). Self-assessment only — not scored, not
 * gating. Wrong picks explain why the chosen option is wrong and may be
 * retried; after two wrong picks the item reveals the answer. Misses persist
 * to the progress store and surface in a review recap.
 */
export function KnowledgeCheck({
  title,
  items,
  moduleId,
  lessonId,
}: KnowledgeCheckProps) {
  const t = useT();
  const resolvedTitle = title ?? t.knowledgeCheck.defaultTitle;
  const [states, setStates] = useState<ItemState[]>(() => initialStates(items.length));
  const [current, setCurrent] = useState(0);
  const { progress, recordMistake, clearMistake } = useProgress();

  const misses = Object.entries(progress?.mistakes ?? {})
    .filter(([key]) => {
      const parsed = parseMistakeKey(key);
      return parsed?.moduleId === moduleId && parsed?.lessonId === lessonId;
    })
    .sort((a, b) => (a[1].at < b[1].at ? -1 : 1))
    .map(([key, mistake]) => ({ key, ...mistake }));

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
        const reason = item.wrong?.[optionIndex] ?? t.knowledgeCheck.notQuite;
        if (wrongPicks.length >= MAX_WRONG_PICKS) {
          return {
            wrongPicks,
            solved: 'revealed',
            feedback: `The correct answer is highlighted. ${item.explanation}`,
            feedbackKind: 'reveal',
          };
        }
        return { wrongPicks, solved: null, feedback: reason, feedbackKind: 'wrong' };
      })
    );
    if (optionIndex !== item.correct) {
      recordMistake(moduleId, lessonId, itemIndex, {
        question: item.prompt,
        picked: item.options[optionIndex],
        reason: item.wrong?.[optionIndex] ?? t.knowledgeCheck.notQuite,
        at: new Date().toISOString(),
      });
    }
  };

  const allDone = states.every((s) => s.solved);
  const firstTry = states.filter((s) => s.solved === 'first-try').length;
  const item = items[current];
  const state = states[current];

  return (
    <section
      data-interactive
      className="not-prose my-8 rounded-lg border bg-card p-5 space-y-4"
    >
      <header className="flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {resolvedTitle}
        </h3>
        {items.length > 1 && (
          <span className="text-xs text-muted-foreground tabular-nums">
            Question {current + 1} of {items.length}
          </span>
        )}
      </header>

      {!allDone && (
        <div className="space-y-3">
          <p className="font-medium text-sm leading-snug">{item.prompt}</p>
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
                  onClick={() => pick(current, oi)}
                  className={cn(
                    'rounded-md border px-3 py-2 text-left text-sm transition-colors',
                    !showState && !isPickedWrong && 'hover:bg-secondary',
                    showState && isCorrect && 'border-primary bg-accent/50 font-medium',
                    isPickedWrong &&
                      'border-destructive/60 bg-destructive/10 text-muted-foreground line-through decoration-destructive/50',
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
          {state.solved && current < items.length - 1 && (
            <div className="flex justify-end">
              <Button size="sm" onClick={() => setCurrent((c) => c + 1)}>
                {t.knowledgeCheck.nextQuestion} →
              </Button>
            </div>
          )}
        </div>
      )}

      {allDone && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium">
              {firstTry === items.length
                ? t.knowledgeCheck.allCorrect
                : `${firstTry} of ${items.length} correct on the first try.`}
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="no-print"
              onClick={() => {
                setStates(initialStates(items.length));
                setCurrent(0);
              }}
            >
              {t.knowledgeCheck.tryAgain}
            </Button>
          </div>
          <details className="rounded-md border bg-secondary/40 p-4" open>
            <summary className="cursor-pointer text-sm font-medium">
              Answers ({items.length})
            </summary>
            <ol className="mt-3 list-decimal space-y-3 pl-5">
              {items.map((item, i) => {
                const s = states[i];
                return (
                  <li key={i} className="space-y-1 text-sm">
                    <p className="font-medium">{item.prompt}</p>
                    <p>
                      <span className="text-muted-foreground">Correct answer:</span>{' '}
                      {item.options[item.correct]}
                    </p>
                    <p
                      className={cn(
                        s.solved === 'first-try'
                          ? 'text-muted-foreground'
                          : 'text-foreground'
                      )}
                    >
                      <span className="text-muted-foreground">You:</span>{' '}
                      {s.solved === 'first-try'
                        ? `correct on the first try — ${item.options[item.correct]}`
                        : s.solved === 'retry'
                          ? `correct after retries — ${item.options[item.correct]}`
                          : `revealed after two misses — ${item.options[item.correct]}`}
                    </p>
                    <p className="text-muted-foreground">{item.explanation}</p>
                  </li>
                );
              })}
            </ol>
          </details>
          {misses.length > 0 && (
            <details className="rounded-md border bg-secondary/40 p-4" open>
              <summary className="cursor-pointer text-sm font-medium">
                Review your misses ({misses.length})
              </summary>
              <ul className="mt-3 space-y-3">
                {misses.map((m) => (
                  <li key={m.key} className="text-sm space-y-1">
                    <p className="font-medium">{m.question}</p>
                    <p className="text-muted-foreground">
                      You picked: <span className="line-through">{m.picked}</span>
                    </p>
                    <p>{m.reason}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="no-print h-7 px-2 text-xs"
                      onClick={() => {
                        const parsed = parseMistakeKey(m.key);
                        if (parsed) clearMistake(parsed.moduleId, parsed.lessonId, parsed.itemIndex);
                      }}
                    >
                      Mark reviewed
                    </Button>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Misses are saved with your progress and clear when you mark them reviewed.
              </p>
            </details>
          )}
        </div>
      )}
    </section>
  );
}
