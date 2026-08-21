import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { acronyms, getGlossary } from '@/data/glossary';
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
import { useLocale, useT } from '@/lib/LocaleProvider';

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

  return <UnregisteredReferencePage />;
}

function RefBreadcrumb() {
  const t = useT();
  return (
    <div className="text-sm text-muted-foreground">
      <Link to="/reference" className="hover:underline">
        {t.reference.title}
      </Link>
    </div>
  );
}

function UnregisteredReferencePage() {
  const { refId } = useParams();
  const t = useT();
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <RefBreadcrumb />
        <h1 className="text-3xl font-bold tracking-tight capitalize">
          {(refId ?? t.reference.title).replaceAll('-', ' ')}
        </h1>
      </header>
      <div className="rounded-lg border border-dashed bg-card p-6 text-sm text-muted-foreground">
        {t.reference.notRegistered}{' '}
        <Link to="/reference" className="text-primary underline">
          {t.reference.referenceIndex}
        </Link>
        .
      </div>
    </article>
  );
}

function GlossaryPage() {
  const { hash } = useLocation();
  const { locale } = useLocale();
  const t = useT();
  useEffect(() => {
    const id = hash.replace(/^#/, '');
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [hash]);

  const sorted = [...getGlossary(locale)].sort((a, b) =>
    a.term.localeCompare(b.term),
  );
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <RefBreadcrumb />
        <h1 className="text-3xl font-bold tracking-tight">
          {t.reference.pages.glossary}
        </h1>
        <p className="text-muted-foreground">{t.reference.glossaryIntro}</p>
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
  const { locale } = useLocale();
  const t = useT();
  const list = acronyms(locale);
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <RefBreadcrumb />
        <h1 className="text-3xl font-bold tracking-tight">
          {t.reference.pages.acronyms}
        </h1>
        <p className="text-muted-foreground">{t.reference.acronymsIntro}</p>
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
  const t = useT();
  const linkClass = 'text-primary underline underline-offset-2';
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <RefBreadcrumb />
        <h1 className="text-3xl font-bold tracking-tight">
          {t.reference.pages.sources}
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          {t.reference.sourcesIntro}
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t.reference.sourcesPrimary}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <a
            href="https://www.wesolve.ph/budget-natin-guidebook"
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            Budget Natin: A Guidebook for Engaging the Philippine Budget Cycle
          </a>{' '}
          (2023). {t.reference.sourcesPublishedBy}{' '}
          <a
            href="https://www.wesolve.ph/"
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            WeSolve Foundation
          </a>
          ; {t.reference.sourcesFundedBy}{' '}
          <a
            href="https://www.ndi.org/"
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            National Democratic Institute
          </a>
          . {t.reference.sourcesAlsoOn}{' '}
          <a
            href="https://doi.org/10.13140/RG.2.2.18173.74726"
            className={linkClass}
            target="_blank"
            rel="noreferrer"
          >
            ResearchGate
          </a>{' '}
          {t.reference.sourcesDoi}.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t.reference.sourcesRedesign}{' '}
          <Link to="/about" className={linkClass}>
            {t.reference.sourcesAbout}
          </Link>{' '}
          {t.reference.sourcesPageWord}.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">
          {t.reference.sourcesOfficialData}
        </h2>
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
