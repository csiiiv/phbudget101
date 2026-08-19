import { Link } from 'react-router-dom';

const referencePages = [
  { id: 'glossary', title: 'Glossary' },
  { id: 'document-library', title: 'Budget document library' },
  { id: 'institutional-map', title: 'Institutional map' },
  { id: 'budget-calendar', title: 'Budget calendar' },
  { id: 'classification-reference', title: 'Classification reference' },
  { id: 'local-budget-structures', title: 'Local government budget structures' },
  { id: 'acronyms', title: 'Acronyms' },
  { id: 'legal-references', title: 'Legal and policy references' },
  { id: 'sources', title: 'Sources and attribution' },
  { id: 'data-sources', title: 'Data-source directory' },
  { id: 'faq', title: 'FAQ' },
];

export function ReferenceIndexPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Reference</h1>
        <p className="text-muted-foreground">
          Detailed material outside the learning path: glossary, documents,
          institutions, calendar, and more.
        </p>
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
