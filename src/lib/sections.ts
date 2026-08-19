import type { ReactNode } from 'react';

export type SectionType =
  | 'introduction'
  | 'concept'
  | 'example'
  | 'interactive'
  | 'knowledge-check'
  | 'takeaway';

export interface LessonSection {
  /** Kebab-case id, unique within the lesson; used as anchor and station key. */
  id: string;
  title: string;
  /** Compact label for the subway map; defaults to title. */
  shortTitle?: string;
  type: SectionType;
  content: ReactNode;
}

export interface LessonDefinition {
  sections: LessonSection[];
}

/**
 * Authoring entry point for TSX lessons. Lessons export
 * `defineLesson({ sections })` as their default; both reading modes,
 * the subway map, and section anchors render from this single collection.
 * See docs/notes/self_paced_lesson_format.md.
 */
export function defineLesson(def: LessonDefinition): LessonDefinition {
  return def;
}
