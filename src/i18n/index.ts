import type { Locale } from '@/lib/locale';
import { ui as enUi } from './en/ui';
import { ui as filUi } from './fil/ui';
import type { UiStrings } from './types';

const uiByLocale: Record<Locale, UiStrings> = {
  en: enUi,
  fil: filUi,
};

export function getUiStrings(locale: Locale): UiStrings {
  return uiByLocale[locale];
}

export type { UiStrings, CourseLocaleStrings } from './types';
