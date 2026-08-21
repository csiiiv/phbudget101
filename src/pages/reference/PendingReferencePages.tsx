import { Link, useLocation } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import {
  getCalendarRows,
  getClassifications,
  getDataSources,
  getDocuments,
  getFaqEntries,
  getInstitutionGroups,
  getInstitutions,
  getLegalEntries,
  getLocalConstraints,
  getLocalDocuments,
  getLocalSequence,
  getLocalTiming,
} from "@/data/reference/localized";
import { REFERENCE_VERIFIED_AS_OF } from "@/data/reference/types";
import { useLocale, useT } from "@/lib/LocaleProvider";

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
  const t = useT();
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <div className="text-sm text-muted-foreground">
          <Link to="/reference" className="hover:underline">
            {t.reference.title}
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
  const t = useT();
  return (
    <p className="text-xs text-muted-foreground">
      {t.reference.verifiedNote(REFERENCE_VERIFIED_AS_OF)}
    </p>
  );
}

export function DocumentLibraryPage() {
  useHashScroll();
  const { locale } = useLocale();
  const t = useT();
  const documents = getDocuments(locale);
  return (
    <RefShell
      title={t.reference.pages.documentLibrary}
      intro={<p>{t.reference.intros.documentLibrary}</p>}
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
              <span className="font-medium text-foreground">
                {t.reference.cyclePhase}
              </span>{" "}
              {doc.phases.join(" · ")}
            </p>
            <p className="text-sm leading-relaxed">
              <span className="font-medium">
                {t.reference.questionsItAnswers}
              </span>{" "}
              {doc.answers}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {doc.contents}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                {t.reference.whereToLook}
              </span>{" "}
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
                    {t.reference.glossaryEntry}
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
  const { locale } = useLocale();
  const t = useT();
  const institutions = getInstitutions(locale);
  const groups = getInstitutionGroups(locale);
  return (
    <RefShell
      title={t.reference.pages.institutionalMap}
      intro={<p>{t.reference.intros.institutionalMap}</p>}
    >
      <VerifiedNote />
      <div className="space-y-10">
        {groups.map((group) => {
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
                        {t.reference.keyOutputs}
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
  const { locale } = useLocale();
  const t = useT();
  const rows = getCalendarRows(locale);
  return (
    <RefShell
      title={t.reference.pages.budgetCalendar}
      intro={<p>{t.reference.intros.budgetCalendar}</p>}
    >
      <VerifiedNote />
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead className="border-b bg-secondary/40">
            <tr>
              <th className="p-3 font-semibold">{t.reference.period}</th>
              <th className="p-3 font-semibold">{t.reference.national}</th>
              <th className="p-3 font-semibold">{t.reference.local}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
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
  const { locale } = useLocale();
  const t = useT();
  const blocks = getClassifications(locale);
  return (
    <RefShell
      title={t.reference.pages.classification}
      intro={<p>{t.reference.intros.classification}</p>}
    >
      <div className="space-y-10">
        {blocks.map((block) => (
          <section key={block.id} id={block.id} className="space-y-4">
            <h2 className="text-xl font-semibold">{block.title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {block.summary}
            </p>
            <ul className="space-y-3">
              {block.levels.map((level) => (
                <li
                  key={level.id}
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
                <span className="font-medium text-foreground">
                  {t.reference.example}
                </span>{" "}
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
  const { locale } = useLocale();
  const t = useT();
  const sequence = getLocalSequence(locale);
  const docs = getLocalDocuments(locale);
  const constraints = getLocalConstraints(locale);
  const timing = getLocalTiming(locale);
  return (
    <RefShell
      title={t.reference.pages.localBudgetStructures}
      intro={<p>{t.reference.intros.localBudgetStructures}</p>}
    >
      <VerifiedNote />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.reference.budgetSequence}</h2>
        <ol className="space-y-3">
          {sequence.map((item, index) => (
            <li key={item.id} className="rounded-lg border bg-card p-4">
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
        <h2 className="text-xl font-semibold">
          {t.reference.keyLocalDocuments}
        </h2>
        <ul className="space-y-3">
          {docs.map((doc) => (
            <li key={doc.id} className="rounded-lg border bg-card p-4">
              <p className="font-medium">{doc.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {doc.role}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{t.reference.statutoryTiming}</h2>
        <ul className="divide-y rounded-lg border bg-card">
          {timing.map((row) => (
            <li
              key={row.id}
              className="flex flex-col gap-1 p-4 sm:flex-row sm:justify-between"
            >
              <span className="font-medium">{row.milestone}</span>
              <span className="text-sm text-muted-foreground">{row.when}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          {t.reference.constraintThemes}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t.reference.constraintThemesNote}
        </p>
        <div className="space-y-4">
          {constraints.map((c) => (
            <div key={c.id} className="space-y-1 border-b pb-4 last:border-b-0">
              <h3 className="font-semibold">{c.topic}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.rule}
              </p>
              <p className="text-xs text-muted-foreground">
                {t.reference.basis} {c.basis}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm">
          <Link to="/reference/legal-references#lgc" className={linkClass}>
            {t.reference.lgcReferenceLink}
          </Link>
        </p>
      </section>
    </RefShell>
  );
}

export function LegalReferencesPage() {
  useHashScroll();
  const { locale } = useLocale();
  const t = useT();
  const entries = getLegalEntries(locale);
  return (
    <RefShell
      title={t.reference.pages.legalReferences}
      intro={<p>{t.reference.intros.legalReferences}</p>}
    >
      <VerifiedNote />
      <div className="space-y-8">
        {entries.map((entry) => (
          <section
            key={entry.id}
            id={entry.id}
            className="scroll-mt-24 space-y-2 border-b pb-8 last:border-b-0"
          >
            <h2 className="text-lg font-semibold">{entry.name}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                {t.reference.governs}
              </span>{" "}
              {entry.governs}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                {t.reference.relevantToCourse}
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
  const { locale } = useLocale();
  const t = useT();
  const sources = getDataSources(locale);
  const groups = [...new Set(sources.map((d) => d.group))];
  return (
    <RefShell
      title={t.reference.pages.dataSources}
      intro={<p>{t.reference.intros.dataSources}</p>}
    >
      <VerifiedNote />
      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group} className="space-y-4">
            <h2 className="text-xl font-semibold">{group}</h2>
            <div className="space-y-6">
              {sources
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
                        {t.reference.updateCadence}
                      </span>{" "}
                      {source.cadence}
                    </p>
                    {source.caution ? (
                      <p className="text-xs text-muted-foreground">
                        {t.reference.caution} {source.caution}
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
  const { locale } = useLocale();
  const t = useT();
  const entries = getFaqEntries(locale);
  return (
    <RefShell
      title={t.reference.pages.faq}
      intro={<p>{t.reference.intros.faq}</p>}
    >
      <div className="space-y-8">
        {entries.map((item) => (
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
