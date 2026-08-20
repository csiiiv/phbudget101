import { useEffect, useId, useRef, useState } from "react";
import { Check, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLocale, useT } from "@/lib/LocaleProvider";
import { LOCALE_LABELS, SUPPORTED_LOCALES, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

function useMobileLayout(): boolean {
  const [mobile, setMobile] = useState(
    () => window.matchMedia("(max-width: 639px)").matches,
  );
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");
    const onChange = (event: MediaQueryListEvent) => setMobile(event.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return mobile;
}

function LanguageOptionList({
  locale,
  listId,
  onSelect,
  className,
}: {
  locale: Locale;
  listId: string;
  onSelect: (locale: Locale) => void;
  className?: string;
}) {
  return (
    <ul
      id={listId}
      role="listbox"
      aria-label="Languages"
      className={cn("space-y-1", className)}
    >
      {SUPPORTED_LOCALES.map((loc) => {
        const selected = locale === loc;
        return (
          <li key={loc}>
            <button
              type="button"
              role="option"
              aria-selected={selected}
              onClick={() => onSelect(loc)}
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors",
                selected
                  ? "bg-accent text-accent-foreground font-medium"
                  : "hover:bg-secondary",
              )}
            >
              <span>{LOCALE_LABELS[loc]}</span>
              {selected && <Check className="size-4 shrink-0" aria-hidden />}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Header language control. Desktop: icon opens a dropdown. Mobile:
 * icon opens a dialog for easier touch targets. Switches locale in place — no
 * full page reload; React context and lesson loaders react to the new locale.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const t = useT();
  const mobile = useMobileLayout();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const select = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  useEffect(() => {
    if (!open || mobile) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, mobile]);

  const trigger = (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      className="text-muted-foreground hover:text-foreground"
      aria-label={t.languageSwitcher.label}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-controls={open && !mobile ? listId : undefined}
      onClick={() => setOpen((value) => !value)}
    >
      <Languages aria-hidden />
    </Button>
  );

  if (mobile) {
    return (
      <div className={className}>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground hover:text-foreground"
          aria-label={t.languageSwitcher.label}
          onClick={() => setOpen(true)}
        >
          <Languages aria-hidden />
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent showCloseButton>
            <DialogHeader>
              <DialogTitle>{t.settings.language}</DialogTitle>
              <DialogDescription>{t.settings.languageHelp}</DialogDescription>
            </DialogHeader>
            <LanguageOptionList
              locale={locale}
              listId={listId}
              onSelect={select}
              className="pt-1"
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {trigger}
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 rounded-lg border bg-popover p-1.5 text-popover-foreground shadow-md ring-1 ring-foreground/10">
          <LanguageOptionList
            locale={locale}
            listId={listId}
            onSelect={select}
          />
        </div>
      )}
    </div>
  );
}
