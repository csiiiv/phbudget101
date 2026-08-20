import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { acronyms, glossary } from '@/data/glossary';
import {
  BudgetCalendarPage,
  ClassificationReferencePage,
  DataSourcesPage,
  DocumentLibraryPage,
  FaqPage,
  InstitutionalMapPage,
  LegalReferencesPage,
  LocalBudgetStructuresPage,
} from '@/pages/reference/PendingReferencePages';

export function ReferencePage() {
  const { refId } = useParams();

  if (refId === 'glossary') return <GlossaryPage />;
  if (refId === 'acronyms') return <AcronymsPage />;
  if (refId === 'sources') return <SourcesPage />;
  if (refId === 'document-library') return <DocumentLibraryPage />;
  if (refId === 'institutional-map') return <InstitutionalMapPage />;
  if (refId === 'budget-calendar') return <BudgetCalendarPage />;
  if (refId === 'classification-reference') return <ClassificationReferencePage />;
  if (refId === 'local-budget-structures') return <LocalBudgetStructuresPage />;
  if (refId === 'legal-references') return <LegalReferencesPage />;
  if (refId === 'data-sources') return <DataSourcesPage />;
  if (refId === 'faq') return <FaqPage />;

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link to="/reference" className="hover:underline">
            Reference
          </Link>
        </div>
        <h1 className="text-3xl font-bold tracking-tight capitalize">
          {(refId ?? 'reference').replaceAll('-', ' ')}
        </h1>
      </header>
      <div className="rounded-lg border border-dashed bg-card p-6 text-sm text-muted-foreground">
        No reference page is registered for this path. Return to the{' '}
        <Link to="/reference" className="text-primary underline">
          reference index
        </Link>
        .
      </div>
    </article>
  );
}

function GlossaryPage() {
  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.replace(/^#/, '');
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [hash]);

  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link to="/reference" className="hover:underline">
            Reference
          </Link>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Glossary</h1>
        <p className="text-muted-foreground">
          Short definitions used in the course. Lesson terms with a dotted
          underline open the matching entry here. This list grows as modules are
          authored.
        </p>
      </header>
      <dl className="space-y-6">
        {sorted.map((e) => (
          <div
            key={e.id}
            id={e.id}
            className="scroll-mt-24 space-y-1 border-b pb-6 last:border-b-0"
          >
            <dt className="font-semibold">
              {e.term}
              {e.acronym && (
                <span className="ml-2 text-sm font-medium text-muted-foreground">
                  {e.acronym}
                </span>
              )}
            </dt>
            <dd className="text-sm leading-relaxed">{e.short}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function AcronymsPage() {
  const list = acronyms();
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link to="/reference" className="hover:underline">
            Reference
          </Link>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Acronyms</h1>
        <p className="text-muted-foreground">
          Expansions for every acronym in the glossary. Each row links to the
          full entry.
        </p>
      </header>
      <ul className="divide-y rounded-lg border bg-card">
        {list.map((e) => (
          <li key={e.id}>
            <Link
              to={`/reference/glossary#${e.id}`}
              className="flex items-baseline gap-4 p-4 hover:bg-secondary/60"
            >
              <span className="w-16 shrink-0 font-semibold tabular-nums">{e.acronym}</span>
              <span className="text-sm">{e.term}</span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

function SourcesPage() {
  const linkClass = 'text-primary underline underline-offset-2';
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link to="/reference" className="hover:underline">
            Reference
          </Link>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Sources and attribution
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Named source credits for the course. Lesson text itself stays focused
          on the PFM system; fuller bibliographic expansion of the guidebook’s
          reference list is planned for a later pass.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Primary source</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <a
            href="https://www.wesolve.ph/budget-natin-guidebook"
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            Budget Natin: A Guidebook for Engaging the Philippine Budget Cycle
          </a>{' '}
          (2023). Published by{' '}
          <a
            href="https://www.wesolve.ph/"
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            WeSolve Foundation
          </a>
          ; funded by the{' '}
          <a
            href="https://www.ndi.org/"
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            National Democratic Institute
          </a>
          . Also on{' '}
          <a
            href="https://doi.org/10.13140/RG.2.2.18173.74726"
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            ResearchGate
          </a>{' '}
          (DOI: 10.13140/RG.2.2.18173.74726).
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          PH Budget 101 redesigns that material for a general audience. It is
          not a page-by-page conversion. See also the{' '}
          <Link to="/about" className={linkClass}>
            About
          </Link>{' '}
          page.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Official data and primers</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>
            <a
              href="https://www.dbm.gov.ph/"
              className={linkClass}
              target="_blank"
              rel="noreferrer"
            >
              Department of Budget and Management (DBM)
            </a>
          </li>
          <li>
            <a
              href="https://www.coa.gov.ph/"
              className={linkClass}
              target="_blank"
              rel="noreferrer"
            >
              Commission on Audit (COA)
            </a>
          </li>
          <li>
            <a
              href="https://www.dof.gov.ph/"
              className={linkClass}
              target="_blank"
              rel="noreferrer"
            >
              Department of Finance (DOF)
            </a>
          </li>
          <li>
            <a
              href="https://psa.gov.ph/"
              className={linkClass}
              target="_blank"
              rel="noreferrer"
            >
              Philippine Statistics Authority (PSA)
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
