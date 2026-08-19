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

export function SettingsPage() {
  const [message, setMessage] = useState<{ kind: 'ok' | 'error'; text: string } | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const current = loadProgress();

  function handleExport() {
    const state = loadProgress();
    if (!state) {
      setMessage({ kind: 'error', text: 'No progress to export yet.' });
      return;
    }
    const blob = new Blob([exportProgress(state)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = progressFileName();
    a.click();
    URL.revokeObjectURL(url);
    setMessage({ kind: 'ok', text: 'Progress downloaded.' });
  }

  function handleImportFile(file: File) {
    file.text().then((text) => {
      try {
        const imported = importProgress(text);
        saveProgress(imported);
        setMessage({
          kind: 'ok',
          text: 'Progress imported. Your previous progress on this device was replaced.',
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
    setMessage({ kind: 'ok', text: 'Progress cleared on this device.' });
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Your progress is stored only on this device. Export it to move to
          another device or keep a backup.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Progress</h2>
        <div className="rounded-lg border bg-card p-4 text-sm space-y-1">
          <div>
            Status: {current ? 'In progress' : 'Not started'}{' '}
            {current?.path && <span className="text-muted-foreground">({current.path} path)</span>}
          </div>
          <div className="text-muted-foreground">
            Modules with activity:{' '}
            {current ? Object.keys(current.modules).length : 0}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={handleExport}>Export progress</Button>
          <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
            Import progress
          </Button>
          <Button variant="outline" className="text-destructive" onClick={handleReset}>
            Clear progress
          </Button>
          {!current && (
            <Button
              variant="outline"
              onClick={() => {
                saveProgress(newProgress());
                setMessage({ kind: 'ok', text: 'Progress initialized.' });
              }}
            >
              Initialize progress
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
