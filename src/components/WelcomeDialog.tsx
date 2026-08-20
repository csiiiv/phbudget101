import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLocale, useT } from "@/lib/LocaleProvider";
import { LOCALE_LABELS, SUPPORTED_LOCALES } from "@/lib/locale";
import { cn } from "@/lib/utils";

const DISMISSED_KEY = "phbudget101:welcome-dismissed";

function hasDismissedWelcome(): boolean {
  try {
    return window.localStorage.getItem(DISMISSED_KEY) === "true";
  } catch {
    return false;
  }
}

export function WelcomeDialog() {
  const { locale, setLocale } = useLocale();
  const t = useT();
  const [open, setOpen] = useState(() => !hasDismissedWelcome());
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const close = () => {
    if (dontShowAgain) {
      try {
        window.localStorage.setItem(DISMISSED_KEY, "true");
      } catch {
        // The modal can still close if storage is unavailable.
      }
    }
    setOpen(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      setOpen(true);
      return;
    }
    close();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent showCloseButton>
        <DialogHeader>
          <DialogTitle>{t.welcome.title}</DialogTitle>
          <DialogDescription>{t.welcome.intro}</DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <p className="text-sm font-medium">{t.welcome.languageLabel}</p>
          <div
            className="grid grid-cols-2 gap-2"
            role="group"
            aria-label={t.welcome.languageLabel}
          >
            {SUPPORTED_LOCALES.map((option) => (
              <Button
                key={option}
                type="button"
                variant={locale === option ? "default" : "outline"}
                onClick={() => setLocale(option)}
                aria-pressed={locale === option}
                className={cn(
                  "justify-start",
                  locale === option && "pointer-events-none",
                )}
              >
                {LOCALE_LABELS[option]}
              </Button>
            ))}
          </div>
        </div>

        <DialogFooter>
          <label className="mr-auto flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(event) => setDontShowAgain(event.target.checked)}
              className="size-4 accent-primary"
            />
            {t.welcome.dontShowAgain}
          </label>
          <Button type="button" onClick={close}>
            {t.welcome.continue}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
