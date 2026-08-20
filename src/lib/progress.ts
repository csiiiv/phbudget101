import type { ParseResult } from './progressSchema';
import { progressFileSchema, PROGRESS_VERSION } from './progressSchema';

const STORAGE_KEY = 'phbudget101:progress';

export type ProgressState = ParseResult & { __brand?: never };

export function loadProgress(): ProgressState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return progressFileSchema.parse(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function saveProgress(state: ProgressState): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function clearProgress(): void {
  window.localStorage.removeItem(STORAGE_KEY);
}

/** Serialize current progress for download. */
export function exportProgress(state: ProgressState): string {
  return JSON.stringify(state, null, 2);
}

/**
 * Parse an imported progress file.
 * Throws Error with a human-readable message on invalid input,
 * unsupported future version, or a v0-style legacy file.
 */
export function importProgress(rawJson: string): ProgressState {
  let parsed: unknown;
  try {
    parsed = JSON.parse(rawJson);
  } catch {
    throw new Error('This file is not valid JSON.');
  }
  const result = progressFileSchema.safeParse(parsed);
  if (!result.success) {
    throw new Error(
      'This file is not a valid PH Budget 101 progress file (missing or invalid fields).'
    );
  }
  return result.data;
}

export function newProgress(path: 'quick' | 'full' = 'full'): ProgressState {
  return {
    version: PROGRESS_VERSION,
    exportedAt: new Date().toISOString(),
    path,
    modules: {},
    diagnostic: { taken: false },
    drafts: {},
    readingMode: 'guided',
    mistakes: {},
  };
}

export function progressFileName(date = new Date()): string {
  const iso = date.toISOString().slice(0, 10);
  return `budget101-progress-${iso}.json`;
}

/** Stable key for a missed check item: `${moduleId}/${lessonId}/${itemIndex}`. */
export function mistakeKey(moduleId: string, lessonId: string, itemIndex: number): string {
  return `${moduleId}/${lessonId}/${itemIndex}`;
}

export interface ParsedMistakeKey {
  moduleId: string;
  lessonId: string;
  itemIndex: number;
}

export function parseMistakeKey(key: string): ParsedMistakeKey | null {
  const match = key.match(/^(mod-\d{2})\/(\d{2}\.\d)\/(\d+)$/);
  if (!match) return null;
  return { moduleId: match[1], lessonId: match[2], itemIndex: Number(match[3]) };
}
