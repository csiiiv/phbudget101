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

export const progressFileSchema = z.object({
  version: z.literal(PROGRESS_VERSION),
  exportedAt: z.string(),
  path: z.enum(['quick', 'full']),
  modules: z.record(z.string(), z.object({ lessons: lessonMapSchema })),
  diagnostic: diagnosticSchema,
  drafts: draftsSchema,
});

export type ProgressFile = z.infer<typeof progressFileSchema>;
export type ParseResult = ProgressFile;
