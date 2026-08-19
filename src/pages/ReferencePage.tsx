import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { acronyms, glossary } from '@/data/glossary';

export function ReferencePage() {
  const { refId } = useParams();

  if (refId === 'glossary') return <GlossaryPage />;
  if (refId === 'acronyms') return <AcronymsPage />;

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
        Reference content will be authored here. Spec: docs/reference-section.md
        (this page maps to one ref-NN component). Content status: outline —
        pending authoring.
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
