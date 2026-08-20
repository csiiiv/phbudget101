import type { GlossaryEntry } from '../types';

/** Filipino display overrides for glossary terms introduced in translated lessons. */
export const glossaryFilOverrides: Partial<
  Record<string, Pick<GlossaryEntry, 'term' | 'acronym' | 'short'>>
> = {
  pfm: {
    term: 'Pamamahala sa Pananalapi ng Publiko',
    acronym: 'PFM',
    short:
      'Ang sistema kung saan pinaplano, ginagabayan, at kinokontrol ng pamahalaan ang pera ng publiko upang maghatid ng serbisyo publiko.',
  },
};
