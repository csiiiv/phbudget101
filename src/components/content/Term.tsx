import { useEffect, useRef, useState, type ReactNode } from 'react';
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
 * True when the primary pointer cannot hover (touch screens, most phones and
 * tablets). On such devices hover text is unreachable, so Term falls back to a
 * two-tap pattern: tap once to reveal the definition, tap again (or use the
 * link inside the definition) to open the glossary entry.
 */
function useCoarsePointer(): boolean {
  const query = '(hover: none), (pointer: coarse)';
  const [coarse, setCoarse] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setCoarse(event.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);
  return coarse;
}

/**
 * Inline glossary term: dotted underline, hover/focus definition, click/tap
 * opens the glossary entry. Hover is not the only affordance (mobile taps
 * through to the glossary page).
 */
export function Term({ id, expand, children, className }: TermProps) {
  const entry = getTerm(id);
  const coarse = useCoarsePointer();
  const [open, setOpen] = useState(false);
  /** Whether the definition was already revealed for this touch session. */
  const revealed = useRef(false);
  const triggerRef = useRef<HTMLAnchorElement>(null);

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

  const href = `/reference/glossary#${entry.id}`;
  const dismiss = () => {
    revealed.current = false;
    setOpen(false);
  };

  return (
    <Tooltip open={coarse ? open : undefined}>
      <TooltipTrigger asChild>
        <Link
          ref={triggerRef}
          to={href}
          className={cn(
            'border-b border-dotted border-primary/50 text-inherit no-underline decoration-transparent hover:border-solid hover:text-primary',
            className
          )}
          onClick={(event) => {
            if (!coarse) return;
            // Second tap falls through and navigates.
            if (revealed.current) return;
            event.preventDefault();
            revealed.current = true;
            setOpen(true);
          }}
        >
          {label}
        </Link>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs flex-col items-start gap-1 py-2 text-left font-normal"
        onPointerDownOutside={(event) => {
          // A tap on the term itself is not "outside" for our purposes — let
          // the click handler decide (second tap navigates).
          if (triggerRef.current?.contains(event.target as Node)) return;
          dismiss();
        }}
        onEscapeKeyDown={dismiss}
      >
        <span className="font-semibold">
          {entry.acronym ? `${entry.acronym} — ${entry.term}` : entry.term}
        </span>
        <span className="text-background/80 leading-relaxed">{entry.short}</span>
        <Link
          to={href}
          className="text-background/60 underline underline-offset-2"
          onClick={dismiss}
        >
          Open glossary
        </Link>
      </TooltipContent>
    </Tooltip>
  );
}
