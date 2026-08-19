import { useCallback, useEffect, useState } from 'react';
import {
  loadProgress,
  newProgress,
  saveProgress,
  clearProgress,
  mistakeKey,
  type ProgressState,
} from './progress';
import type { Mistake } from './progressSchema';

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

/** Shared localStorage-backed progress store with cross-tab sync via events. */
export function useProgress(): {
  progress: ProgressState | null;
  markVisited: (moduleId: string, lessonId: string) => void;
  markCompleted: (moduleId: string, lessonId: string) => void;
  setPath: (path: 'quick' | 'full') => void;
  reset: () => void;
  recordMistake: (moduleId: string, lessonId: string, itemIndex: number, mistake: Mistake) => void;
  clearMistake: (moduleId: string, lessonId: string, itemIndex: number) => void;
  moduleStatus: (moduleId: string) => { visited: number; completed: number };
} {
  const [progress, setProgress] = useState<ProgressState | null>(() => loadProgress());

  useEffect(() => {
    const update = () => setProgress(loadProgress());
    listeners.add(update);
    window.addEventListener('storage', update);
    return () => {
      listeners.delete(update);
      window.removeEventListener('storage', update);
    };
  }, []);

  const mutate = useCallback((fn: (state: ProgressState) => ProgressState) => {
    const current = loadProgress() ?? newProgress();
    const next = fn(current);
    saveProgress(next);
    setProgress(next);
    emit();
  }, []);

  const markVisited = useCallback(
    (moduleId: string, lessonId: string) =>
      mutate((s) => {
        const lessons = { ...(s.modules[moduleId]?.lessons ?? {}) };
        if (lessons[lessonId] !== 'completed') lessons[lessonId] = 'visited';
        return { ...s, modules: { ...s.modules, [moduleId]: { lessons } } };
      }),
    [mutate]
  );

  const markCompleted = useCallback(
    (moduleId: string, lessonId: string) =>
      mutate((s) => {
        const lessons = { ...(s.modules[moduleId]?.lessons ?? {}) };
        lessons[lessonId] = 'completed';
        return { ...s, modules: { ...s.modules, [moduleId]: { lessons } } };
      }),
    [mutate]
  );

  const setPath = useCallback(
    (path: 'quick' | 'full') => mutate((s) => ({ ...s, path })),
    [mutate]
  );

  const recordMistake = useCallback(
    (moduleId: string, lessonId: string, itemIndex: number, mistake: Mistake) =>
      mutate((s) => ({
        ...s,
        mistakes: { ...s.mistakes, [mistakeKey(moduleId, lessonId, itemIndex)]: mistake },
      })),
    [mutate]
  );

  const clearMistake = useCallback(
    (moduleId: string, lessonId: string, itemIndex: number) =>
      mutate((s) => {
        if (!(mistakeKey(moduleId, lessonId, itemIndex) in s.mistakes)) return s;
        const mistakes = { ...s.mistakes };
        delete mistakes[mistakeKey(moduleId, lessonId, itemIndex)];
        return { ...s, mistakes };
      }),
    [mutate]
  );

  const reset = useCallback(() => {
    clearProgress();
    setProgress(null);
    emit();
  }, []);

  const moduleStatus = useCallback(
    (moduleId: string) => {
      const lessons = progress?.modules[moduleId]?.lessons ?? {};
      const entries = Object.values(lessons);
      return {
        visited: entries.length,
        completed: entries.filter((v) => v === 'completed').length,
      };
    },
    [progress]
  );

  return { progress, markVisited, markCompleted, setPath, reset, moduleStatus, recordMistake, clearMistake };
}
