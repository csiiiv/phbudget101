/** BCP 47-style locale ids used by the app. Extend when adding locales. */
export type Locale = 'en' | 'fil';

export const DEFAULT_LOCALE: Locale = 'en';

export const SUPPORTED_LOCALES: readonly Locale[] = ['en', 'fil'] as const;

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  fil: 'Filipino',
};

const STORAGE_KEY = 'phbudget101:locale';

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function loadStoredLocale(): Locale {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw && isLocale(raw)) return raw;
  } catch {
    /* private browsing / blocked storage */
  }
  return DEFAULT_LOCALE;
}

export function saveStoredLocale(locale: Locale): void {
  window.localStorage.setItem(STORAGE_KEY, locale);
}

/** Intl locale tag for number/date formatting. */
export function intlTag(locale: Locale): string {
  return locale === 'fil' ? 'fil-PH' : 'en-PH';
}
