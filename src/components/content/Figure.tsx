import { getFigure, formatFigureValue } from '@/data/figures';
import { cn } from '@/lib/utils';

interface FigureProps {
  /** Module owning the figure, e.g. "mod-04" */
  module: string;
  /** Figure key from src/data/modules/NN.json */
  id: string;
  /** When true, render only the value (for inline use in prose). */
  inline?: boolean;
  className?: string;
}

/**
 * Renders a swappable, year-specific figure. Values never live in MDX prose;
 * this component enforces amount + as-of date + source display so provenance
 * is always visible (see build_spec swappable-data requirement).
 */
export function Figure({ module, id, inline, className }: FigureProps) {
  const fig = getFigure(module, id);
  if (!fig) {
    return (
      <span className="text-destructive" title={`Missing figure ${module}/${id}`}>
        [missing figure: {module}/{id}]
      </span>
    );
  }
  if (inline) {
    return (
      <span className={className} title={`As of ${fig.asOf}. Source: ${fig.source}`}>
        {formatFigureValue(fig)}
      </span>
    );
  }
  return (
    <span
      className={cn(
        'inline-flex flex-col rounded-md border bg-card px-3 py-2 text-sm',
        className
      )}
    >
      <span className="font-semibold tabular-nums">{formatFigureValue(fig)}</span>
      <span className="text-xs text-muted-foreground">
        As of {fig.asOf} · {fig.source}
      </span>
      {fig.note && <span className="text-xs text-muted-foreground">{fig.note}</span>}
    </span>
  );
}
