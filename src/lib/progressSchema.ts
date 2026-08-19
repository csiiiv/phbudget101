import { z } from 'zod';

export const PROGRESS_VERSION = 1;

const lessonStatusSchema = z.enum(['visited', 'completed']);
export type LessonStatus = z.infer<typeof lessonStatusSchema>;

const lessonMapSchema = z.record(z.string(), lessonStatusSchema);

const diagnosticSchema = z.object({
  taken: z.boolean(),
  suggested: z.enum(['quick', 'full']).optional(),
});

const capstoneDraftSchema = z.object({
  sector: z.string().optional(),
  step: z.number().int().min(1).max(8).optional(),
});

const draftsSchema = z.object({
  capstone: capstoneDraftSchema.optional(),
});

/** Preferred lesson presentation; defaults to guided for new learners. */
export const readingModeSchema = z.enum(['guided', 'full']).default('guided');

export const mistakeSchema = z.object({
  /** Snapshot of the question prompt (survives lesson text edits). */
  question: z.string(),
  /** The wrong option the learner picked. */
  picked: z.string(),
  /** Why that option is wrong. */
  reason: z.string(),
  /** ISO timestamp of the miss. */
  at: z.string(),
});
export type Mistake = z.infer<typeof mistakeSchema>;

/**
 * Wrong answers recorded per check item, keyed `${moduleId}/${lessonId}/${itemIndex}`.
 * Kept even after the item is later solved — misses are the reference material.
 * Optional with default so v1 files exported before this field still import.
 */
const mistakesSchema = z.record(z.string(), mistakeSchema).default({});

export const progressFileSchema = z.object({
  version: z.literal(PROGRESS_VERSION),
  exportedAt: z.string(),
  path: z.enum(['quick', 'full']),
  modules: z.record(z.string(), z.object({ lessons: lessonMapSchema })),
  diagnostic: diagnosticSchema,
  drafts: draftsSchema,
  readingMode: readingModeSchema,
  mistakes: mistakesSchema,
});

export type ProgressFile = z.infer<typeof progressFileSchema>;
export type ParseResult = ProgressFile;
