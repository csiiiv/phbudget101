import { describe, expect, it } from 'vitest';
import { importProgress, exportProgress, progressFileName, mistakeKey, parseMistakeKey } from '../src/lib/progress';
import { PROGRESS_VERSION } from '../src/lib/progressSchema';

const validFile = {
  version: PROGRESS_VERSION,
  exportedAt: '2026-08-19T00:00:00.000Z',
  path: 'full',
  modules: { 'mod-04': { lessons: { '04.1': 'completed' } } },
  diagnostic: { taken: true, suggested: 'quick' },
  drafts: {},
  mistakes: {},
};

describe('importProgress', () => {
  it('accepts a valid v1 file', () => {
    const result = importProgress(JSON.stringify(validFile));
    expect(result.version).toBe(1);
    expect(result.modules['mod-04'].lessons['04.1']).toBe('completed');
  });

  it('rejects invalid JSON', () => {
    expect(() => importProgress('not json')).toThrow('not valid JSON');
  });

  it('rejects a future version', () => {
    expect(() =>
      importProgress(JSON.stringify({ ...validFile, version: 99 }))
    ).toThrow('not a valid Budget 101 progress file');
  });

  it('rejects missing required fields', () => {
    const { diagnostic, ...withoutDiagnostic } = validFile;
    expect(() => importProgress(JSON.stringify(withoutDiagnostic))).toThrow();
    expect(diagnostic).toBeDefined();
  });
});

describe('exportProgress', () => {
  it('round-trips through import', () => {
    const exported = exportProgress(validFile as never);
    expect(importProgress(exported)).toEqual(validFile);
  });
});

describe('progressFileName', () => {
  it('includes the ISO date', () => {
    expect(progressFileName(new Date('2026-08-19T12:00:00Z'))).toBe(
      'budget101-progress-2026-08-19.json'
    );
  });
});

describe('mistakes', () => {
  it('round-trips a file with recorded misses', () => {
    const withMisses = {
      ...validFile,
      mistakes: {
        'mod-01/01.2/0': {
          question: 'Is a budget just a spreadsheet?',
          picked: 'Financial plan',
          reason: 'The statement compares allocations over time, which is about choice.',
          at: '2026-08-19T01:00:00.000Z',
        },
      },
    };
    const exported = exportProgress(withMisses as never);
    const imported = importProgress(exported);
    expect(imported.mistakes['mod-01/01.2/0'].picked).toBe('Financial plan');
  });

  it('imports pre-mistakes v1 files via the default', () => {
    const legacy = { ...validFile };
    const imported = importProgress(JSON.stringify(legacy));
    expect(imported.mistakes).toEqual({});
  });

  it('keys and parses mistake keys stably', () => {
    const key = mistakeKey('mod-01', '01.2', 0);
    expect(key).toBe('mod-01/01.2/0');
    expect(parseMistakeKey(key)).toEqual({
      moduleId: 'mod-01',
      lessonId: '01.2',
      itemIndex: 0,
    });
    expect(parseMistakeKey('garbage')).toBeNull();
  });
});
