import { Link, useParams } from 'react-router-dom';

export function ReferencePage() {
  const { refId } = useParams();

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
