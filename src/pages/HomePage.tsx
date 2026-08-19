import { Link } from 'react-router-dom';
import { courseModules } from '@/data/course';

export function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Understanding Philippine Public Financial Management
        </h1>
        <p className="text-muted-foreground">
          A self-paced course on how the Philippine public budget works — where
          the money comes from, how it is planned and legislated, how it turns
          into services, and where you can participate.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Start</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            to="/modules/00-start-here"
            className="rounded-lg border bg-card p-4 hover:bg-secondary block"
          >
            <div className="font-medium">Start Here</div>
            <div className="text-sm text-muted-foreground">
              Orientation, diagnostic, and choosing your learning path.
            </div>
          </Link>
          <Link
            to="/reference"
            className="rounded-lg border bg-card p-4 hover:bg-secondary block"
          >
            <div className="font-medium">Reference</div>
            <div className="text-sm text-muted-foreground">
              Glossary, documents, institutions, calendar, FAQ.
            </div>
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Course modules</h2>
        <ol className="space-y-2">
          {courseModules.map((mod, index) => (
            <li key={mod.id}>
              <Link
                to={`/modules/${mod.slug}`}
                className="flex items-baseline gap-3 rounded-lg border bg-card p-4 hover:bg-secondary"
              >
                <span className="text-sm text-muted-foreground tabular-nums">
                  {String(index).padStart(2, '0')}
                </span>
                <span>
                  <span className="font-medium">{mod.title}</span>
                  <span className="block text-sm text-muted-foreground">
                    {mod.purpose}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
