import { Link } from "react-router-dom";
import type { ReactNode } from "react";

const linkClass = "text-primary underline underline-offset-2";

function ExtLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={linkClass} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

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
          are defined at first use and collected in the{" "}
          <Link to="/reference/glossary" className={linkClass}>
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
          Your progress is stored only on this device. Export or import it from{" "}
          <Link to="/settings" className={linkClass}>
            Settings
          </Link>{" "}
          if you change browsers or machines.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sources and attribution</h2>
        <p className="text-muted-foreground leading-relaxed">
          This course is a redesign of material from the{" "}
          <ExtLink href="https://www.wesolve.ph/budget-natin-guidebook">
            Budget Natin: A Guidebook for Engaging the Philippine Budget Cycle
          </ExtLink>{" "}
          (2023) — not a page-by-page conversion. It teaches the public financial
          management system first. Participation is presented later as an
          application of that literacy.
        </p>

        <ul className="space-y-4 text-muted-foreground leading-relaxed">
          <li>
            <span className="font-medium text-foreground">Guidebook.</span>{" "}
            Published by{" "}
            <ExtLink href="https://www.wesolve.ph/">WeSolve Foundation</ExtLink>
            , developed with partners including the People’s Budget Coalition
            through the Young Budget Leaders Program. The 2023 publication was
            funded by the{" "}
            <ExtLink href="https://www.ndi.org/">
              National Democratic Institute
            </ExtLink>
            . A downloadable copy is also available on{" "}
            <ExtLink href="https://doi.org/10.13140/RG.2.2.18173.74726">
              ResearchGate
            </ExtLink>{" "}
            (DOI: 10.13140/RG.2.2.18173.74726).
          </li>
          <li>
            <span className="font-medium text-foreground">
              Official data and primers.
            </span>{" "}
            Year-specific figures and process details are checked against
            published materials from government sources such as the{" "}
            <ExtLink href="https://www.dbm.gov.ph/">
              Department of Budget and Management
            </ExtLink>
            , the{" "}
            <ExtLink href="https://www.coa.gov.ph/">
              Commission on Audit
            </ExtLink>
            , the{" "}
            <ExtLink href="https://www.dof.gov.ph/">
              Department of Finance
            </ExtLink>
            , and the{" "}
            <ExtLink href="https://psa.gov.ph/">
              Philippine Statistics Authority
            </ExtLink>
            . Dated amounts in lessons show their as-of date and source; teaching
            numbers used only to illustrate a mechanic are labeled illustrative.
          </li>
        </ul>

        <p className="text-muted-foreground leading-relaxed">
          Lesson text names government institutions, laws, documents, and public
          programs. It does not name advocacy organizations, campaigns, or
          personalities as subjects of endorsement or critique. Fuller citations
          and named attributions live on the{" "}
          <Link to="/reference/sources" className={linkClass}>
            sources and attribution
          </Link>{" "}
          page in the reference section.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">This site</h2>
        <p className="text-muted-foreground leading-relaxed">
          The site is a static app: there is no account, and nothing you do here
          is sent to a server. The project is open on{" "}
          <ExtLink href="https://github.com/csiiiv/phbudget101">GitHub</ExtLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Comments, feedback, suggestions</h2>
        <p className="text-muted-foreground leading-relaxed">
          Spotted an error, or have an idea for improving the course? Send an
          email to{" "}
          <ExtLink href="mailto:csevilla@simple-systems.dev">
            csevilla@simple-systems.dev
          </ExtLink>
          , or{" "}
          <ExtLink href="https://github.com/csiiiv/phbudget101/pulls">
            open a pull request
          </ExtLink>{" "}
          on GitHub. Corrections to figures, dates, and legal references are
          especially welcome — include the source you are relying on so it can
          be checked.
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
