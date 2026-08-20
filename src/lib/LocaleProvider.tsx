import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getUiStrings } from '@/i18n';
import type { UiStrings } from '@/i18n/types';
import {
  DEFAULT_LOCALE,
  loadStoredLocale,
  saveStoredLocale,
  type Locale,
} from './locale';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: UiStrings;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => loadStoredLocale());

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    saveStoredLocale(next);
  };

  const t = useMemo(() => getUiStrings(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === 'fil' ? 'fil' : 'en';
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, t]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}

export function useT(): UiStrings {
  return useLocale().t;
}

/** Safe default for tests or pre-provider usage. */
export function useLocaleOptional(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  return (
    ctx ?? {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: getUiStrings(DEFAULT_LOCALE),
    }
  );
}
