import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getTerm } from '@/data/glossary';
import { cn } from '@/lib/utils';

interface TermProps {
  /** Glossary id, e.g. "pfm" or "gaa". */
  id: string;
  /**
   * When true, show the full term with the acronym in parentheses
   * (first-use pattern). Otherwise show the acronym if one exists, else the term.
   */
  expand?: boolean;
  /** Override the visible label. Hover text still comes from the glossary. */
  children?: ReactNode;
  className?: string;
}

/**
 * Inline glossary term: dotted underline, hover/focus definition, click/tap
 * opens the glossary entry. Hover is not the only affordance (mobile taps
 * through to the glossary page).
 */
export function Term({ id, expand, children, className }: TermProps) {
  const entry = getTerm(id);

  if (!entry) {
    return (
      <span className="text-destructive" title={`Missing glossary term: ${id}`}>
        {children ?? id}
      </span>
    );
  }

  const acronymLabel = entry.acronym ?? entry.term;
  const label =
    children ??
    (expand && entry.acronym ? (
      <>
        {entry.term} ({entry.acronym})
      </>
    ) : expand ? (
      entry.term
    ) : (
      acronymLabel
    ));

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={`/reference/glossary#${entry.id}`}
          className={cn(
            'border-b border-dotted border-primary/50 text-inherit no-underline decoration-transparent hover:border-solid hover:text-primary',
            className
          )}
        >
          {label}
        </Link>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs flex-col items-start gap-1 py-2 text-left font-normal"
      >
        <span className="font-semibold">
          {entry.acronym ? `${entry.acronym} — ${entry.term}` : entry.term}
        </span>
        <span className="text-background/80 leading-relaxed">{entry.short}</span>
        <span className="text-background/60">Open glossary</span>
      </TooltipContent>
    </Tooltip>
  );
}
