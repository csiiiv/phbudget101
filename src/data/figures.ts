import { moduleDataSchema, type Figure } from './schemas/figure';

const modulesJson = import.meta.glob('./modules/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, unknown>;

const byModule = new Map<string, Map<string, Figure>>();

for (const raw of Object.values(modulesJson)) {
  const parsed = moduleDataSchema.parse(raw);
  byModule.set(parsed.moduleId, new Map(parsed.figures.map((f) => [f.id, f])));
}

export function getFigure(moduleId: string, figureId: string): Figure | null {
  return byModule.get(moduleId)?.get(figureId) ?? null;
}

/** Locale-aware display value for a figure (₱ symbol from system fonts). */
export function formatFigureValue(fig: Figure): string {
  const num = new Intl.NumberFormat('en-PH', { maximumFractionDigits: 2 }).format(
    fig.value
  );
  switch (fig.unit) {
    case 'PHP-billion':
      return `₱${num} billion`;
    case 'PHP-million':
      return `₱${num} million`;
    case 'PHP':
      return `₱${num}`;
    case 'percent':
      return `${num}%`;
    case 'count':
      return num;
  }
}
