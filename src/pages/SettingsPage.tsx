import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  clearProgress,
  exportProgress,
  importProgress,
  loadProgress,
  progressFileName,
  saveProgress,
  newProgress,
} from '@/lib/progress';
import { useLocale, useT } from '@/lib/LocaleProvider';
import { LOCALE_LABELS, SUPPORTED_LOCALES } from '@/lib/locale';

export function SettingsPage() {
  const { locale, setLocale } = useLocale();
  const t = useT();
  const [message, setMessage] = useState<{ kind: 'ok' | 'error'; text: string } | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const current = loadProgress();

  function handleExport() {
    const state = loadProgress();
    if (!state) {
      setMessage({ kind: 'error', text: t.settings.noProgressExport });
      return;
    }
    const blob = new Blob([exportProgress(state)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = progressFileName();
    a.click();
    URL.revokeObjectURL(url);
    setMessage({ kind: 'ok', text: t.settings.exported });
  }

  function handleImportFile(file: File) {
    file.text().then((text) => {
      try {
        const imported = importProgress(text);
        saveProgress(imported);
        setMessage({
          kind: 'ok',
          text: t.settings.imported,
        });
      } catch (err) {
        setMessage({
          kind: 'error',
          text: err instanceof Error ? err.message : 'Import failed.',
        });
      }
    });
  }

  function handleReset() {
    clearProgress();
    setMessage({ kind: 'ok', text: t.settings.cleared });
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{t.settings.title}</h1>
        <p className="text-muted-foreground">{t.settings.intro}</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.settings.language}</h2>
        <p className="text-sm text-muted-foreground">{t.settings.languageHelp}</p>
        <div className="flex flex-wrap gap-2">
          {SUPPORTED_LOCALES.map((loc) => (
            <Button
              key={loc}
              variant={locale === loc ? 'default' : 'outline'}
              onClick={() => setLocale(loc)}
              aria-pressed={locale === loc}
            >
              {LOCALE_LABELS[loc]}
            </Button>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.settings.progress}</h2>
        <div className="rounded-lg border bg-card p-4 text-sm space-y-1">
          <div>
            {current ? t.settings.statusInProgress : t.settings.statusNotStarted}{' '}
            {current?.path && (
              <span className="text-muted-foreground">
                {t.settings.pathLabel(current.path)}
              </span>
            )}
          </div>
          <div className="text-muted-foreground">
            {t.settings.modulesWithActivity(
              current ? Object.keys(current.modules).length : 0
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={handleExport}>{t.settings.export}</Button>
          <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
            {t.settings.import}
          </Button>
          <Button variant="outline" className="text-destructive" onClick={handleReset}>
            {t.settings.clear}
          </Button>
          {!current && (
            <Button
              variant="outline"
              onClick={() => {
                saveProgress(newProgress());
                setMessage({ kind: 'ok', text: t.settings.initialized });
              }}
            >
              {t.settings.initialize}
            </Button>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleImportFile(file);
            e.target.value = '';
          }}
        />
        {message && (
          <p
            className={`text-sm ${
              message.kind === 'ok' ? 'text-primary' : 'text-destructive'
            }`}
          >
            {message.text}
          </p>
        )}
      </section>
    </div>
  );
}
