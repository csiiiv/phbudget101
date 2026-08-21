import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getTerm } from '@/data/glossary';
import { useLocale, useT } from '@/lib/LocaleProvider';
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
 * tablets). On such devices hover text is unreachable, so a tap is what
 * reveals the definition — same pin/toggle behavior a desktop click gets.
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
 * Course-wide singleton for pinned term tooltips: at most one pinned
 * definition open at a time. A Term registers itself as the holder when it
 * pins; any other pinned Term un-pins in the same effect pass. Hover-only
 * tooltips (not pinned) are unaffected — they close on mouse-leave anyway.
 */
type Holder = { unpin: () => void } | null;
let pinnedHolder: Holder = null;
function claimPinned(unpin: () => void) {
  pinnedHolder?.unpin();
  pinnedHolder = { unpin };
}
function releasePinned(unpin: () => void) {
  if (pinnedHolder?.unpin === unpin) pinnedHolder = null;
}

/**
 * Inline glossary term: dotted underline, hover/focus definition. A plain
 * click or tap pins the definition open (tap again to close); the glossary
 * entry itself opens only via the "Open glossary" link inside the tooltip.
 * Modified clicks (Ctrl/Cmd-click, middle-click) keep native Link behavior,
 * so the entry can still be opened directly in a new tab. Only one pinned
 * tooltip can be open at a time — pinning another term (or hovering a
 * different term) closes the previous one.
 */
export function Term({ id, expand, children, className }: TermProps) {
  const { locale } = useLocale();
  const t = useT();
  const entry = getTerm(id, locale);
  const coarse = useCoarsePointer();
  const [open, setOpen] = useState(false);
  /** Fine-pointer pin: keeps the tooltip visible after the cursor leaves. */
  const [pinned, setPinned] = useState(false);
  const triggerRef = useRef<HTMLAnchorElement>(null);

  const unpin = useCallback(() => {
    setPinned(false);
    setOpen(false);
  }, []);
  useEffect(() => {
    if (pinned) claimPinned(unpin);
    else releasePinned(unpin);
  }, [pinned, unpin]);
  // Cleanup on unmount (e.g. navigating away mid-pin).
  useEffect(() => () => releasePinned(unpin), [unpin]);

  if (!entry) {
    return (
      <span className="text-destructive" title={t.term.missing(id)}>
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
  const dismiss = unpin;

  return (
    <Tooltip open={coarse ? open : pinned ? true : undefined}>
      <TooltipTrigger asChild>
        <Link
          ref={triggerRef}
          to={href}
          className={cn(
            'rounded-sm font-medium text-primary underline decoration-dotted decoration-primary/60 underline-offset-4 hover:decoration-2 hover:decoration-primary',
            className
          )}
          onMouseEnter={() => {
            // Hovering another term replaces any pinned definition — only one
            // tooltip instance should be visible at a time.
            if (pinnedHolder && pinnedHolder.unpin !== unpin) {
              pinnedHolder.unpin();
            }
          }}
          onClick={(event) => {
            // Let modified clicks open the glossary directly (new tab etc.).
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
              return;
            event.preventDefault();
            // Toggle: a second plain click/tap closes the pinned tooltip.
            const next = !(coarse ? open : pinned);
            setOpen(next);
            setPinned(next);
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
          // the click handler decide (second tap closes the tooltip).
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
          {t.term.openGlossary}
        </Link>
      </TooltipContent>
    </Tooltip>
  );
}
