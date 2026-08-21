import { Link } from 'react-router-dom';
import { useT } from '@/lib/LocaleProvider';

export function ReferenceIndexPage() {
  const t = useT();
  const referencePages = [
    { id: 'glossary', title: t.reference.pages.glossary },
    { id: 'document-library', title: t.reference.pages.documentLibrary },
    { id: 'institutional-map', title: t.reference.pages.institutionalMap },
    { id: 'budget-calendar', title: t.reference.pages.budgetCalendar },
    { id: 'classification-reference', title: t.reference.pages.classification },
    {
      id: 'local-budget-structures',
      title: t.reference.pages.localBudgetStructures,
    },
    { id: 'acronyms', title: t.reference.pages.acronyms },
    { id: 'legal-references', title: t.reference.pages.legalReferences },
    { id: 'sources', title: t.reference.pages.sources },
    { id: 'data-sources', title: t.reference.pages.dataSources },
    { id: 'faq', title: t.reference.pages.faq },
  ];

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {t.reference.title}
        </h1>
        <p className="text-muted-foreground">{t.reference.indexIntro}</p>
      </header>
      <ul className="grid gap-2 sm:grid-cols-2">
        {referencePages.map((ref) => (
          <li key={ref.id}>
            <Link
              to={`/reference/${ref.id}`}
              className="block rounded-lg border bg-card p-4 hover:bg-secondary"
            >
              {ref.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
