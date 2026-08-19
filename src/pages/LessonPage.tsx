import { useEffect, useMemo, useRef, useState, type ComponentType } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SubwayMap, type StationState } from '@/components/lesson/SubwayMap';
import { findLessonContent, hasLessonContent } from '@/content/registry';
import { courseModules } from '@/data/course';
import { useProgress } from '@/lib/useProgress';
import type { LessonDefinition } from '@/lib/sections';
import { cn } from '@/lib/utils';

type ReadingMode = 'guided' | 'full';

interface LoadedLesson {
  def: LessonDefinition | null;
  legacy: ComponentType<Record<string, unknown>> | null;
}

function useLessonDefinition(moduleSlug: string, lessonId: string): LoadedLesson | 'loading' {
  const [loaded, setLoaded] = useState<LoadedLesson | 'loading'>('loading');
  useEffect(() => {
    const loader = findLessonContent(moduleSlug, lessonId);
    if (!loader) {
      setLoaded({ def: null, legacy: null });
      return;
    }
    let active = true;
    loader()
      .then((mod) => {
        if (!active) return;
        const def = mod.default as unknown;
        if (def && typeof def === 'object' && 'sections' in def) {
          setLoaded({ def: def as LessonDefinition, legacy: null });
        } else {
          setLoaded({ def: null, legacy: mod.legacy ?? (def as ComponentType<Record<string, unknown>>) });
        }
      })
      .catch(() => active && setLoaded({ def: null, legacy: null }));
    return () => {
      active = false;
    };
  }, [moduleSlug, lessonId]);
  return loaded;
}

/** Scroll-spy for full mode: reports the index of the section in view. */
function useActiveSection(sectionIds: string[], enabled: boolean): number {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!enabled || sectionIds.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(`section-${entry.target.id}`);
            if (idx >= 0) setActive(idx);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sectionIds.join(','), enabled]);
  return active;
}

export function LessonPage() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const { progress, markVisited, markCompleted, setReadingMode } = useProgress();
  const loaded = useLessonDefinition(moduleId ?? '', lessonId ?? '');

  const mod = courseModules.find((m) => m.slug === moduleId);
  const lesson = mod?.lessons.find((l) => l.id === lessonId);

  const lessonIndex = mod && lesson ? mod.lessons.indexOf(lesson) : -1;
  const prev = lessonIndex > 0 ? mod!.lessons[lessonIndex - 1] : null;
  const next =
    mod && lessonIndex >= 0 && lessonIndex < mod.lessons.length - 1
      ? mod.lessons[lessonIndex + 1]
      : null;

  useEffect(() => {
    if (mod && lesson) markVisited(mod.id, lesson.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mod?.id, lesson?.id]);

  const mode: ReadingMode = progress?.readingMode ?? 'guided';
  const [guidedIndex, setGuidedIndex] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  // Reset station position when the lesson changes.
  useEffect(() => {
    setGuidedIndex(0);
  }, [moduleId, lessonId]);

  const sections = loaded !== 'loading' ? loaded.def?.sections ?? [] : [];
  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);
  const activeFull = useActiveSection(sectionIds, mode === 'full' && sections.length > 0);

  if (!mod || !lesson) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Lesson not found</h1>
        <Link to="/" className="text-primary underline">
          Back to home
        </Link>
      </div>
    );
  }

  const isCompleted = progress?.modules[mod.id]?.lessons[lesson.id] === 'completed';
  const hasContent = hasLessonContent(mod.slug, lesson.id);

  const stationStates: StationState[] = sections.map((_, i) => {
    if (i < guidedIndex) return 'visited';
    if (i === guidedIndex) return 'current';
    return 'not-visited';
  });

  const goTo = (index: number) => {
    if (mode === 'guided') {
      setGuidedIndex(index);
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById(`section-${sections[index].id}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="space-y-6">
      <div ref={topRef} />
      <header className="space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link to={`/modules/${mod.slug}`} className="hover:underline">
            {mod.title}
          </Link>{' '}
          / Lesson {lesson.id}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{lesson.title}</h1>
      </header>

      {loaded === 'loading' ? null : !hasContent ? (
        <div className="rounded-lg border border-dashed bg-card p-6 text-sm text-muted-foreground">
          Lesson content pending authoring. Spec:{' '}
          <code>docs/modules/{mod.slug}.md</code>, lesson {lesson.id}.
        </div>
      ) : (
        <>
          {(sections.length > 0 || (loaded as LoadedLesson) !== null) && (
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1" />
              <div className="flex items-center gap-1 rounded-full border bg-card p-1 no-print">
                {(['guided', 'full'] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setReadingMode(m)}
                    className={cn(
                      'rounded-full px-3 py-1 text-xs font-medium transition-colors',
                      mode === m
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                    aria-pressed={mode === m}
                  >
                    {m === 'guided' ? 'Guided' : 'Full lesson'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {sections.length > 0 ? (
            <>
              <SubwayMap
                sections={sections}
                states={stationStates}
                activeIndex={mode === 'guided' ? guidedIndex : activeFull}
                onSelect={goTo}
              />

              <div
                key={lesson.id}
                className="lesson-prose prose prose-slate max-w-none prose-headings:tracking-tight prose-a:text-primary"
              >
                {mode === 'guided' ? (
                  <GuidedBody
                    sections={sections}
                    index={guidedIndex}
                    total={sections.length}
                    onPrev={() => goTo(Math.max(0, guidedIndex - 1))}
                    onNext={() => goTo(Math.min(sections.length - 1, guidedIndex + 1))}
                    isLast={guidedIndex === sections.length - 1}
                  />
                ) : (
                  sections.map((s) => (
                    <section key={s.id} id={`section-${s.id}`} className="scroll-mt-24">
                      <h2>{s.title}</h2>
                      {s.content}
                    </section>
                  ))
                )}
              </div>
            </>
          ) : (
            <LegacyLesson
              key={lesson.id}
              legacy={(loaded as LoadedLesson).legacy ?? null}
            />
          )}
        </>
      )}

      <footer className="mt-10 space-y-4 border-t pt-6 no-print">
        <div className="flex justify-center">
          <Button
            variant={isCompleted ? 'secondary' : 'default'}
            onClick={() => markCompleted(mod.id, lesson.id)}
            disabled={isCompleted}
          >
            {isCompleted ? '✓ Lesson completed' : 'Mark lesson complete'}
          </Button>
        </div>
        <nav
          aria-label="Lesson navigation"
          className="grid gap-3 sm:grid-cols-2"
        >
          {prev ? (
            <button
              type="button"
              onClick={() =>
                navigate(`/modules/${mod.slug}/lessons/${encodeURIComponent(prev.id)}`)
              }
              className="group rounded-lg border bg-card p-4 text-left transition-colors hover:bg-secondary/60"
            >
              <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                ← Previous
              </span>
              <span className="mt-1 block text-sm font-medium leading-snug">
                {prev.id} {prev.title}
              </span>
            </button>
          ) : (
            <span aria-hidden className="hidden sm:block" />
          )}
          {next ? (
            <button
              type="button"
              onClick={() =>
                navigate(`/modules/${mod.slug}/lessons/${encodeURIComponent(next.id)}`)
              }
              className="group rounded-lg border bg-card p-4 text-right transition-colors hover:bg-secondary/60 sm:col-start-2"
            >
              <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Next →
              </span>
              <span className="mt-1 block text-sm font-medium leading-snug">
                {next.id} {next.title}
              </span>
            </button>
          ) : isCompleted && mod.slug !== '00-start-here' ? (
            <Link
              to="/"
              className="group rounded-lg border border-primary/40 bg-accent/40 p-4 text-right transition-colors hover:bg-accent/70 sm:col-start-2"
            >
              <span className="block text-xs font-medium uppercase tracking-wide text-primary">
                Course home →
              </span>
              <span className="mt-1 block text-sm font-medium leading-snug">
                You reached the end of this module — return to the course
              </span>
            </Link>
          ) : (
            <span aria-hidden className="hidden sm:block" />
          )}
        </nav>
      </footer>
    </article>
  );
}

function GuidedBody({
  sections,
  index,
  total,
  onPrev,
  onNext,
  isLast,
}: {
  sections: LessonDefinition['sections'];
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isLast: boolean;
}) {
  const s = sections[index];
  return (
    <>
      <section id={`section-${s.id}`} key={s.id} className="scroll-mt-24">
        <h2 className="mb-0">{s.title}</h2>
        <div className="mt-4">{s.content}</div>
      </section>
      <div className="not-prose my-8 space-y-3 border-t pt-4 no-print sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:space-y-0">
        <span className="block text-center text-xs text-muted-foreground tabular-nums sm:hidden">
          Section {index + 1} of {total}
        </span>
        <Button variant="outline" onClick={onPrev} disabled={index === 0}>
          ← Previous
        </Button>
        <span className="hidden text-xs text-muted-foreground tabular-nums sm:block">
          Section {index + 1} of {total}
        </span>
        <div className="flex sm:justify-end">
          <Button className="w-full sm:w-auto" onClick={onNext} disabled={isLast}>
            Continue →
          </Button>
        </div>
      </div>
    </>
  );
}

function LegacyLesson({ legacy }: { legacy: ComponentType<Record<string, unknown>> | null }) {
  if (!legacy) return null;
  const Legacy = legacy;
  return (
    <div className="lesson-prose prose prose-slate max-w-none prose-headings:tracking-tight prose-a:text-primary">
      <Legacy />
    </div>
  );
}
