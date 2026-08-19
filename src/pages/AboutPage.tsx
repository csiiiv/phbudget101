import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          About
        </p>
        <h1 className="text-3xl font-bold tracking-tight leading-tight">
          PH Budget 101
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A self-paced course on how Philippine public financial management
          works: where public money comes from, how it is planned and
          legislated, how it turns into services, and where you can participate.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Who it is for</h2>
        <p className="text-muted-foreground leading-relaxed">
          Anyone who wants a clear picture of the public budget and does not
          already work in this field — students, journalists, researchers, and
          engaged citizens. No economics background is assumed. Technical terms
          are defined at first use and collected in the{' '}
          <Link to="/reference/glossary" className="text-primary underline">
            glossary
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">How the course is organized</h2>
        <p className="text-muted-foreground leading-relaxed">
          Eleven modules run from orientation through a capstone investigation.
          Lessons default to a guided, section-by-section view; you can switch
          to a full-page view at any time. Knowledge checks are for
          understanding, not grades — they do not lock the next lesson.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Your progress is stored only on this device. Export or import it from{' '}
          <Link to="/settings" className="text-primary underline">
            Settings
          </Link>{' '}
          if you change browsers or machines.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Sources and editorial approach</h2>
        <p className="text-muted-foreground leading-relaxed">
          The course is a redesign of material from{' '}
          <em>
            Budget Natin: A Guidebook for Engaging the Philippine Budget Cycle
          </em>{' '}
          (2023), not a page-by-page conversion. It teaches the public financial
          management system first. Participation is presented later as an
          application of that literacy.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Lesson text names government institutions, laws, documents, and public
          programs. It does not name advocacy organizations, campaigns, or
          personalities. Named sources and attributions live on the{' '}
          <Link to="/reference/sources" className="text-primary underline">
            sources
          </Link>{' '}
          page in the reference section. Year-specific figures are dated and
          cited; amounts used only to teach a mechanic are labeled illustrative.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">This site</h2>
        <p className="text-muted-foreground leading-relaxed">
          The site is a static app: there is no account, and nothing you do here
          is sent to a server. The project is open on{' '}
          <a
            href="https://github.com/csiiiv/phbudget101"
            className="text-primary underline"
          >
            GitHub
          </a>
          .
        </p>
      </section>

      <p>
        <Link
          to="/modules/00-start-here"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Start the course
        </Link>
      </p>
    </article>
  );
}
