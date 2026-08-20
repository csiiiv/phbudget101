import { useMemo } from 'react';
import { courseFil } from '@/i18n/fil/course';
import { useLocale } from '@/lib/LocaleProvider';
import type { Locale } from '@/lib/locale';
import { courseModules, type CourseModule } from './course';

export function getCourseModules(locale: Locale): CourseModule[] {
  if (locale === 'en') return courseModules;

  return courseModules.map((mod) => {
    const tr = courseFil.modules[mod.id];
    if (!tr) return mod;
    return {
      ...mod,
      title: tr.title,
      purpose: tr.purpose,
      lessons: mod.lessons.map((lesson) => ({
        ...lesson,
        title: tr.lessons[lesson.id] ?? lesson.title,
      })),
    };
  });
}

export function useCourseModules(): CourseModule[] {
  const { locale } = useLocale();
  return useMemo(() => getCourseModules(locale), [locale]);
}
