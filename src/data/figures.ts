import { moduleDataSchema, type Figure } from './schemas/figure';
import { intlTag, type Locale } from '@/lib/locale';

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
export function formatFigureValue(fig: Figure, locale: Locale = 'en'): string {
  const num = new Intl.NumberFormat(intlTag(locale), {
    maximumFractionDigits: 2,
  }).format(fig.value);
  switch (fig.unit) {
    case 'PHP-billion':
      return locale === 'fil' ? `₱${num} bilyon` : `₱${num} billion`;
    case 'PHP-million':
      return locale === 'fil' ? `₱${num} milyon` : `₱${num} million`;
    case 'PHP':
      return `₱${num}`;
    case 'percent':
      return `${num}%`;
    case 'count':
      return num;
  }
}
