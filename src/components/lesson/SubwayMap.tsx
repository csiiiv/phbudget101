import { cn } from '@/lib/utils';
import type { LessonSection } from '@/lib/sections';

export type StationState = 'not-visited' | 'current' | 'visited' | 'completed';

interface SubwayMapProps {
  sections: LessonSection[];
  states: StationState[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const dotClass: Record<StationState, string> = {
  'not-visited': 'border-border bg-background',
  current: 'border-primary bg-primary ring-4 ring-primary/15',
  visited: 'border-primary/60 bg-accent',
  completed: 'border-primary bg-primary',
};

export function SubwayMap({ sections, states, activeIndex, onSelect }: SubwayMapProps) {
  return (
    <nav aria-label="Lesson sections" className="not-prose no-print my-6">
      {/* Desktop: horizontal line */}
      <ol className="hidden sm:flex items-center gap-0 overflow-x-auto">
        {sections.map((s, i) => (
          <li key={s.id} className={cn('flex items-center shrink-0', i > 0 && 'ml-2')}>
            {i > 0 && (
              <span
                aria-hidden
                className={cn(
                  'h-0.5 w-4 rounded',
                  states[i] === 'not-visited' ? 'bg-border' : 'bg-primary/40'
                )}
              />
            )}
            <button
              type="button"
              onClick={() => onSelect(i)}
              className="flex flex-col items-center gap-1.5 group"
              aria-current={i === activeIndex ? 'step' : undefined}
            >
              <span
                className={cn(
                  'size-3.5 rounded-full border-2 transition-colors',
                  dotClass[states[i]]
                )}
              />
              <span
                className={cn(
                  'max-w-24 text-center text-xs leading-tight transition-colors',
                  i === activeIndex
                    ? 'font-semibold text-foreground'
                    : 'text-muted-foreground group-hover:text-foreground'
                )}
              >
                {s.shortTitle ?? s.title}
              </span>
            </button>
          </li>
        ))}
      </ol>

      {/* Mobile: compact current-station indicator expanding to vertical route */}
      <div className="sm:hidden">
        <details className="rounded-lg border bg-card">
          <summary className="flex cursor-pointer list-none items-center gap-3 p-3">
            <span
              className={cn(
                'size-3.5 shrink-0 rounded-full border-2',
                dotClass[states[activeIndex] ?? 'not-visited']
              )}
            />
            <span className="min-w-0 flex-1 text-sm">
              <span className="block font-medium leading-tight">
                {sections[activeIndex]?.shortTitle ?? sections[activeIndex]?.title}
              </span>
              <span className="text-xs text-muted-foreground">
                Station {activeIndex + 1} of {sections.length}
              </span>
            </span>
            <span className="text-xs text-muted-foreground">▾</span>
          </summary>
          <ol className="border-t px-3 py-2 space-y-0.5">
            {sections.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-sm transition-colors',
                    i === activeIndex ? 'bg-secondary font-medium' : 'hover:bg-secondary/60'
                  )}
                >
                  <span
                    className={cn('size-3 shrink-0 rounded-full border-2', dotClass[states[i]])}
                  />
                  {s.shortTitle ?? s.title}
                </button>
              </li>
                ))}
          </ol>
        </details>
      </div>
    </nav>
  );
}
