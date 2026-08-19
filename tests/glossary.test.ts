import { describe, expect, it } from 'vitest';
import { acronyms, getTerm, glossary } from '../src/data/glossary';

describe('glossary', () => {
  it('has unique ids', () => {
    const ids = glossary.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('resolves known terms', () => {
    expect(getTerm('pfm')?.acronym).toBe('PFM');
    expect(getTerm('gaa')?.term).toBe('General Appropriations Act');
    expect(getTerm('missing')).toBeNull();
  });

  it('lists only entries that have an acronym', () => {
    expect(acronyms().every((e) => e.acronym)).toBe(true);
    expect(acronyms().find((e) => e.id === 'appropriation')).toBeUndefined();
  });
});
