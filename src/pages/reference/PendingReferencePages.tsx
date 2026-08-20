import { Link, useLocation } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import {
  REFERENCE_VERIFIED_AS_OF,
  calendarRows,
  classifications,
  dataSources,
  documents,
  faqEntries,
  institutionGroups,
  institutions,
  legalEntries,
  localConstraints,
  localDocuments,
  localSequence,
  localTiming,
} from "@/data/reference";

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

function RefShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link to="/reference" className="hover:underline">
            Reference
          </Link>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <div className="text-muted-foreground leading-relaxed">{intro}</div>
      </header>
      {children}
    </article>
  );
}

function useHashScroll() {
  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.replace(/^#/, "");
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [hash]);
}

function VerifiedNote() {
  return (
    <p className="text-xs text-muted-foreground">
      Orientation content last reviewed {REFERENCE_VERIFIED_AS_OF}. Confirm
      current-year circulars, calendars, and portal URLs before relying on
      timing or links for a live decision.
    </p>
  );
}

export function DocumentLibraryPage() {
  useHashScroll();
  return (
    <RefShell
      title="Budget document library"
      intro={
        <p>
          What each major document is for, when it appears in the cycle, and
          where to find the official version. Course replicas are simplified
          teaching aids, not official facsimiles.
        </p>
      }
    >
      <VerifiedNote />
      <div className="space-y-8">
        {documents.map((doc) => (
          <section
            key={doc.id}
            id={doc.id}
            className="scroll-mt-24 space-y-3 border-b pb-8 last:border-b-0"
          >
            <h2 className="text-xl font-semibold">
              {doc.name}
              {doc.acronym ? (
                <span className="ml-2 text-base font-medium text-muted-foreground">
                  ({doc.acronym})
                </span>
              ) : null}
            </h2>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Cycle phase:</span>{" "}
              {doc.phases.join(" · ")}
            </p>
            <p className="text-sm leading-relaxed">
              <span className="font-medium">Questions it answers:</span>{" "}
              {doc.answers}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {doc.contents}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Where to look:</span>{" "}
              {doc.where}
              {doc.link ? (
                <>
                  {" "}
                  — <ExtLink href={doc.link.href}>{doc.link.label}</ExtLink>
                </>
              ) : null}
            </p>
            {doc.note ? (
              <p className="text-xs text-muted-foreground">{doc.note}</p>
            ) : null}
            {(() => {
              const glossaryId =
                doc.id === "aar"
                  ? "annual-audit-report"
                  : doc.id === "aip"
                    ? "annual-investment-program"
                    : doc.id === "veto-message"
                      ? null
                      : doc.id;
              return glossaryId ? (
                <p className="text-sm">
                  <Link
                    to={`/reference/glossary#${glossaryId}`}
                    className={linkClass}
                  >
                    Glossary entry
                  </Link>
                </p>
              ) : null;
            })()}
          </section>
        ))}
      </div>
    </RefShell>
  );
}

export function InstitutionalMapPage() {
  useHashScroll();
  return (
    <RefShell
      title="Institutional map"
      intro={
        <p>
          Who does what across the budget cycle. Roles are summarized for
          orientation; enabling laws and current issuances control the details.
        </p>
      }
    >
      <VerifiedNote />
      <div className="space-y-10">
        {institutionGroups.map((group) => {
          const rows = institutions.filter((i) => i.group === group.id);
          return (
            <section key={group.id} className="space-y-4">
              <h2 className="text-xl font-semibold">{group.title}</h2>
              <div className="space-y-6">
                {rows.map((inst) => (
                  <div
                    key={inst.id}
                    id={inst.id}
                    className="scroll-mt-24 space-y-2 border-b pb-6 last:border-b-0"
                  >
                    <h3 className="font-semibold">
                      {inst.name}
                      {inst.acronym ? (
                        <span className="ml-2 text-sm font-medium text-muted-foreground">
                          {inst.acronym}
                        </span>
                      ) : null}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {inst.role}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Key outputs:
                      </span>{" "}
                      {inst.produces}
                    </p>
                    {inst.link ? (
                      <p className="text-sm">
                        <ExtLink href={inst.link.href}>{inst.link.label}</ExtLink>
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </RefShell>
  );
}

export function BudgetCalendarPage() {
  return (
    <RefShell
      title="Budget calendar"
      intro={
        <p>
          Typical national and local timing across the cycle. Exact dates move
          with each year’s issuances — use this table to orient, then verify.
        </p>
      }
    >
      <VerifiedNote />
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead className="border-b bg-secondary/40">
            <tr>
              <th className="p-3 font-semibold">Period</th>
              <th className="p-3 font-semibold">National</th>
              <th className="p-3 font-semibold">Local</th>
            </tr>
          </thead>
          <tbody>
            {calendarRows.map((row) => (
              <tr key={row.id} className="border-b align-top last:border-b-0">
                <td className="p-3 font-medium">{row.period}</td>
                <td className="p-3 text-muted-foreground">
                  {row.national}
                  {row.note ? (
                    <span className="mt-2 block text-xs">{row.note}</span>
                  ) : null}
                </td>
                <td className="p-3 text-muted-foreground">{row.local}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RefShell>
  );
}

export function ClassificationReferencePage() {
  return (
    <RefShell
      title="Classification reference"
      intro={
        <p>
          How budget tables are organized — expense classes, program hierarchy,
          and other lenses used in Modules 3 and 7.
        </p>
      }
    >
      <div className="space-y-10">
        {classifications.map((block) => (
          <section key={block.id} id={block.id} className="space-y-4">
            <h2 className="text-xl font-semibold">{block.title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {block.summary}
            </p>
            <ul className="space-y-3">
              {block.levels.map((level) => (
                <li
                  key={level.label}
                  className="rounded-lg border bg-card p-4"
                >
                  <p className="font-medium">{level.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {level.meaning}
                  </p>
                </li>
              ))}
            </ul>
            {block.example ? (
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Example:</span>{" "}
                {block.example}
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </RefShell>
  );
}

export function LocalBudgetStructuresPage() {
  return (
    <RefShell
      title="Local government budget structures"
      intro={
        <p>
          Local documents, the prepare–authorize–review sequence, and statutory
          constraint themes for Module 6. Verify percentages and ceilings against
          the current Local Government Code and implementing guidance for your
          LGU type.
        </p>
      }
    >
      <VerifiedNote />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Budget sequence</h2>
        <ol className="space-y-3">
          {localSequence.map((item, index) => (
            <li key={item.step} className="rounded-lg border bg-card p-4">
              <p className="font-medium">
                {index + 1}. {item.step}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Key local documents</h2>
        <ul className="space-y-3">
          {localDocuments.map((doc) => (
            <li key={doc.name} className="rounded-lg border bg-card p-4">
              <p className="font-medium">{doc.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {doc.role}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Statutory timing targets</h2>
        <ul className="divide-y rounded-lg border bg-card">
          {localTiming.map((row) => (
            <li
              key={row.milestone}
              className="flex flex-col gap-1 p-4 sm:flex-row sm:justify-between"
            >
              <span className="font-medium">{row.milestone}</span>
              <span className="text-sm text-muted-foreground">{row.when}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Constraint themes</h2>
        <p className="text-sm text-muted-foreground">
          These are orientation notes, not a substitute for the Code text.
        </p>
        <div className="space-y-4">
          {localConstraints.map((c) => (
            <div key={c.id} className="space-y-1 border-b pb-4 last:border-b-0">
              <h3 className="font-semibold">{c.topic}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.rule}
              </p>
              <p className="text-xs text-muted-foreground">Basis: {c.basis}</p>
            </div>
          ))}
        </div>
        <p className="text-sm">
          <Link to="/reference/legal-references#lgc" className={linkClass}>
            Local Government Code reference
          </Link>
        </p>
      </section>
    </RefShell>
  );
}

export function LegalReferencesPage() {
  useHashScroll();
  return (
    <RefShell
      title="Legal and policy references"
      intro={
        <p>
          Laws and issuances the course relies on. Entries state what each
          governs and point to an official or widely used public text — no
          advocacy commentary.
        </p>
      }
    >
      <VerifiedNote />
      <div className="space-y-8">
        {legalEntries.map((entry) => (
          <section
            key={entry.id}
            id={entry.id}
            className="scroll-mt-24 space-y-2 border-b pb-8 last:border-b-0"
          >
            <h2 className="text-lg font-semibold">{entry.name}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Governs:</span>{" "}
              {entry.governs}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                Relevant to the course:
              </span>{" "}
              {entry.relevant}
            </p>
            <p className="text-sm">
              <ExtLink href={entry.link.href}>{entry.link.label}</ExtLink>
            </p>
          </section>
        ))}
      </div>
    </RefShell>
  );
}

export function DataSourcesPage() {
  const groups = [...new Set(dataSources.map((d) => d.group))];
  return (
    <RefShell
      title="Data-source directory"
      intro={
        <p>
          Public portals and datasets for looking up numbers the course cites —
          or for your own follow-the-money work.
        </p>
      }
    >
      <VerifiedNote />
      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group} className="space-y-4">
            <h2 className="text-xl font-semibold">{group}</h2>
            <div className="space-y-6">
              {dataSources
                .filter((d) => d.group === group)
                .map((source) => (
                  <div
                    key={source.id}
                    id={source.id}
                    className="space-y-2 border-b pb-6 last:border-b-0"
                  >
                    <h3 className="font-semibold">{source.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {source.contains}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Update cadence:
                      </span>{" "}
                      {source.cadence}
                    </p>
                    {source.caution ? (
                      <p className="text-xs text-muted-foreground">
                        Caution: {source.caution}
                      </p>
                    ) : null}
                    <p className="text-sm">
                      <ExtLink href={source.link.href}>
                        {source.link.label}
                      </ExtLink>
                    </p>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </RefShell>
  );
}

export function FaqPage() {
  return (
    <RefShell
      title="FAQ"
      intro={
        <p>
          Short answers to common questions, with links into glossary entries,
          reference pages, and modules.
        </p>
      }
    >
      <div className="space-y-8">
        {faqEntries.map((item) => (
          <section
            key={item.id}
            id={item.id}
            className="scroll-mt-24 space-y-3 border-b pb-8 last:border-b-0"
          >
            <h2 className="text-lg font-semibold">{item.question}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
            {item.links && item.links.length > 0 ? (
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {item.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </RefShell>
  );
}
