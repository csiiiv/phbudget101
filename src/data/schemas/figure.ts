import { z } from 'zod';

/**
 * A swappable, year-specific figure. Every peso amount, share, or dated
 * figure in lesson content references a Figure by key; values never live
 * inline in prose. Missing asOf or source fails CI (see scripts/validate-data).
 */
export const figureSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, 'figure id must be kebab-case'),
  value: z.number(),
  unit: z.enum(['PHP', 'percent', 'count', 'PHP-billion', 'PHP-million']),
  asOf: z.string().regex(/^\d{4}(-\d{2}-\d{2})?$/, 'asOf must be YYYY or YYYY-MM-DD'),
  source: z.string().min(1, 'every figure needs a source'),
  note: z.string().optional(),
});
export type Figure = z.infer<typeof figureSchema>;

export const moduleDataSchema = z.object({
  moduleId: z.string().regex(/^mod-\d{2}$/),
  figures: z.array(figureSchema).min(1),
});
export type ModuleData = z.infer<typeof moduleDataSchema>;
