import { describe, expect, it } from 'vitest';
import { lessonKeyFromPath } from '../src/content/registry';

describe('lessonKeyFromPath', () => {
  it('extracts module slug and lesson id from a glob path', () => {
    expect(lessonKeyFromPath('./modules/01-why-pfm-matters/01.1.mdx')).toBe(
      '01-why-pfm-matters/01.1'
    );
  });

  it('handles nested lesson ids with dots', () => {
    expect(lessonKeyFromPath('./modules/04-the-budget-cycle/04.1.mdx')).toBe(
      '04-the-budget-cycle/04.1'
    );
  });

  it('returns null for non-lesson paths', () => {
    expect(lessonKeyFromPath('./modules/some-readme.mdx')).toBeNull();
    expect(lessonKeyFromPath('./other/file.mdx')).toBeNull();
  });
});
