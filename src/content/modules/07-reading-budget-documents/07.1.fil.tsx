import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const DECISIONS = [
  {
    question: "Ano ang proposed ng executive branch?",
    document: "NEP",
    note: "Magsimula sa proposed na amounts ng ahensya at program na isinumite sa Kongreso.",
  },
  {
    question: "Ano ang inaprubahan ng Kongreso?",
    document: "GAA",
    note: "Basahin ang enacted appropriation pati na rin ang general o special provisions nito.",
  },
  {
    question: "Paano konektado ang spending plan sa revenues at financing?",
    document: "BESF",
    note: "Gamitin ang government-wide na expenditure, revenue, financing, at fiscal tables.",
  },
  {
    question: "Gaano kalayo umabot ang authority sa allotment, obligation, at disbursement?",
    document: "FAR No. 1 / SAAODB",
    note: "Basahin ang execution report ng ahensya para sa reporting period at nakasaad na level ng aggregation.",
  },
  {
    question: "Magkano ang cash authority na na-issue o nagamit?",
    document: "NCA records o utilization reports",
    note: "Gamitin ang cash-authority reporting; huwag ituring na kapareho ng appropriation o obligation.",
  },
  {
    question: "Ano ang natagpuan ng mga auditor pagkatapos suriin ang records at operations?",
    document: "COA audit report",
    note: "Basahin ang audit scope, opinion o findings, observations, at mga sagot ng ahensya.",
  },
  {
    question: "Ano ang plano at inaprubahan ng isang LGU?",
    document: "AIP at appropriation ordinance",
    note: "Gamitin ang local planning at authorization documents, tapos ang local execution at audit records para sa implementation.",
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Hindi iisang dokumento ang sagot sa “aktwal na nagastos”",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Kapag nagtanong ka, “Magkano talaga ang nagastos sa program na
            ito?”, tanungin muna ang sarili mo: approved, released, obligated,
            disbursed, o delivered ba ang ibig mong sabihin? Iba-iba ang
            ebidensyang itinuturo ng bawat salita.
          </p>
          <p>
            Magsimula sa stage at fiscal year, tapos piliin ang dokumento. Kapag
            binuksan mo agad ang budget PDF na pinakafamiliar sa iyo, maaari kang
            makakuha ng eksaktong sagot — pero sa maling tanong.
          </p>
        </>
      ),
    },
    {
      id: "proposal-and-authority",
      title: "Proposal, authority, at ang fiscal picture",
      shortTitle: "Bago ang execution",
      type: "concept",
      content: (
        <>
          <p>
            Gamitin ang <Term id="nep" expand /> para malaman kung ano ang
            proposed ng executive branch. Gamitin ang <Term id="gaa" expand />{" "}
            para malaman kung ano ang ginawang batas ng Kongreso at anong mga
            kondisyon ang sumasaklaw sa appropriation. Kapag pinagtabi mo ang
            dalawa, makikita mo kung paano nagbago ang isang item habang
            pinag-uusapan ito sa Kongreso.
          </p>
          <p>
            Gamitin ang <Term id="besf" expand /> kapag mas malawak ang tanong:
            paano umaangkop ang expenditures sa revenues, paghihiram,
            financing, macroeconomic assumptions, o government-wide na
            classifications. Maaaring ipakita ng isang agency page ang isang
            line nang detalyado, habang ipinapakita naman ng BESF ang fiscal
            setting sa paligid nito.
          </p>
          <p>
            Ang mga agency budget document, budget execution document, at
            program profile ay pwedeng magdagdag ng targets, schedules, at
            detalye tungkol sa mga operating unit. Tingnan muna kung
            proposal, enacted authority, o execution plan ang isang file bago mo
            pagkumparahin ang mga numero nito.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: Department of Budget and Management collections para sa{" "}
            <a href="https://www.dbm.gov.ph/index.php/2026/national-expenditure-program-fy-2026">National Expenditure Program</a>,{" "}
            <a href="https://www.dbm.gov.ph/index.php/2026/general-appropriations-act-gaa-fy-2026">General Appropriations Act</a>, at{" "}
            <a href="https://www.dbm.gov.ph/index.php/2026/budget-of-expenditures-and-sources-of-financing-fy-2026">Budget of Expenditures and Sources of Financing</a>.
          </p>
        </>
      ),
    },
    {
      id: "execution-audit-local",
      title: "Pagkatapos ma-enact: execution, audit, at local records",
      shortTitle: "Pagkatapos ma-enact",
      type: "concept",
      content: (
        <>
          <p>
            Para sa execution ng mga national agency, ang{" "}
            <Term id="far-1" expand /> ay nag-uulat ng appropriations,
            allotments, obligations, disbursements, at balances para sa isang
            reporting period. Ito ang pinaka-direktang starting point para
            masundan kung gaano kalayo umabot ang budget authority — pero
            kailangan mo pa ring basahin kung aling ahensya, fund source,
            period, at level ng detalye ang involved.
          </p>
          <p>
            Ang <Term id="nca" expand /> ay cash authority, hindi mismong
            appropriation. Ang status o utilization reports para sa mga NCA ay
            nakakatulong sa mga tanong tungkol sa cash release at paggamit ng
            cash. Ang agency disbursement reports at supporting records ay may
            mas detalyadong payment information, depende sa publication at
            aggregation limits.
          </p>
          <p>
            Ang <Term id="annual-audit-report" expand /> ay pagtingin sa
            nakaraan. Nakakatulong ito para suriin ang audited financial
            statements, observations, compliance, controls, at mga sagot ng
            ahensya; hindi ito live na project tracker.
          </p>
          <p>
            Para sa isang LGU, gamitin ang{" "}
            <Term id="annual-investment-program" expand /> para sa mga
            inaprubahang annual investment priorities at ang{" "}
            <Term id="appropriation-ordinance" expand /> para sa legal na budget
            authority. Pagkatapos, gamitin ang local accounting,
            accomplishment, at COA audit records para malaman kung ano ang
            nangyari sa implementation.
          </p>
          <p className="text-sm text-muted-foreground">
            Sources: DBM&apos;s{" "}
            <a href="https://www.dbm.gov.ph/index.php/statement-of-appropriations-allotments-obligations-disbursements-and-balances">SAAODB collection</a>{" "}
            at{" "}
            <a href="https://www.dbm.gov.ph/index.php/programs-projects/status-of-nca-utilization">NCA utilization collection</a>; Commission on Audit{" "}
            <a href="https://coa.gov.ph/coa_at_a_glance/">audit-report descriptions</a>; at DBM&apos;s{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/2023/Local-Budget-Circular/BOM-for-LGUs-2023-Edition-%282024-Reprinted%29-For-Posting-in-DBM-Website.pdf">Budget Operations Manual for LGUs</a>.
          </p>
        </>
      ),
    },
    {
      id: "decision-tree",
      title: "Static na document selector",
      shortTitle: "Selector",
      type: "interactive",
      content: (
        <>
          <p>
            Pumapalit ang static na selector na ito sa Phase 3 guided document
            explorer. Magsimula sa tanong sa kaliwang column, tapos buksan ang
            starting document sa kanang column. Walang sample corpus o
            document-viewer na kasama sa lesson na ito.
          </p>
          <div className="not-prose my-8 space-y-3" aria-label="Decision tree mula sa tanong sa budget papunta sa dokumento">
            {DECISIONS.map((item, index) => (
              <div key={item.question} className="grid gap-3 rounded-lg border bg-card p-5 md:grid-cols-[auto_1fr_auto_1fr] md:items-start">
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground" aria-hidden="true">{index + 1}</span>
                <div><p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Tanong</p><p className="mt-1 font-medium">{item.question}</p></div>
                <span className="hidden pt-5 text-primary md:block" aria-hidden="true">→</span>
                <div><p className="text-xs font-semibold uppercase tracking-wide text-primary">Magsimula sa {item.document}</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.note}</p></div>
              </div>
            ))}
          </div>
          <div className="not-prose my-6 rounded-lg border bg-secondary/40 p-5">
            <h3 className="font-semibold">Hindi karaniwan kayang ipangako ng mga public report</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>Real-time status: may cutoff dates ang mga report at maaaring preliminary o revised pa ang mga ito.</li>
              <li>Per-project na detalye: maaaring naka-aggregate ang published tables ayon sa agency, program, fund, o expense class.</li>
              <li>Kumpleto sa isang file: ang authority, cash, payment, physical delivery, at audit evidence ay kadalasang nasa magkakaibang systems.</li>
              <li>Perpektong comparability: maaaring magbago ang mga pangalan, classifications, scope, at reporting formats.</li>
            </ul>
          </div>
          <p>
            Kapag hindi sinagot ng starting document ang tanong sa kailangang
            level ng detalye, gawing mas specific ang request: sabihin ang
            project, agency o LGU, fiscal year, budget stage, reporting
            cutoff, at eksaktong measure na kailangan mo.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Check ang understanding mo",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Itugma ang tanong sa tamang starting document"
          moduleId="mod-07"
          lessonId="07.1"
          items={[
            {
              prompt: "Gusto mong malaman ang amount na ginawang batas ng Kongreso para sa isang program ng national agency. Saan ka magsisimula?",
              options: ["National Expenditure Program", "General Appropriations Act", "NCA utilization report", "COA annual audit report"],
              correct: 1,
              explanation: "Ang GAA ang enacted appropriations law at ang starting source para sa kung ano ang in-authorize ng Kongreso.",
              wrong: {
                0: "Pinapakita ng NEP ang proposal ng executive branch, na maaaring magkaiba sa enacted amount.",
                2: "Tungkol sa cash authority at paggamit nito pagkatapos ma-enact ang NCA reporting, hindi sa amount na in-authorize ng Kongreso.",
                3: "Sinusuri ng audit report ang records at operations pagkatapos mangyari ang mga ito; hindi ito ang enacted appropriations law.",
              },
            },
            {
              prompt: "Gusto mong ikumpara ang allotments, obligations, disbursements, at balances ng isang ahensya para sa isang reporting period. Saan ka magsisimula?",
              options: ["BESF macroeconomic assumptions", "FAR No. 1 / SAAODB", "Annual Investment Program", "National Expenditure Program"],
              correct: 1,
              explanation: "Ang FAR No. 1 ang dinisenyo para i-report ang mga execution stage at balances ng national agency para sa period na iyon.",
              wrong: {
                0: "Nagbibigay ang BESF ng mas malawak na fiscal picture, hindi ng execution sequence ng ahensya.",
                2: "Ang AIP ay local investment-planning document, hindi execution report ng national agency.",
                3: "Ang NEP ay proposal ng executive branch bago pa ma-enact at ma-execute.",
              },
            },
            {
              prompt: "Gusto mong malaman kung bakit may audit observation sa natapos nang project ng isang LGU. Saan ka magsisimula?",
              options: ["COA annual audit report ng LGU", "Ang national BESF", "Ang national NEP", "NCA report lamang"],
              correct: 0,
              explanation: "Ang COA audit report ang starting source para sa audit observation, ang batayan nito, at ang sagot ng audited entity.",
              wrong: {
                1: "Nagpapakita ang BESF ng national fiscal at financing picture, hindi ng isang partikular na audit observation ng LGU.",
                2: "Ang NEP ay proposed national budget at hindi naglalaman ng audit finding sa LGU na mas mauna pa rito.",
                3: "Hindi makakapagpaliwanag ng audit scope, criteria, o observation ang cash-authority reporting nang mag-isa.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Dapat tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Sabihin muna ang stage bago buksan ang file: proposal, enacted
          authority, fiscal context, execution, cash, audit, o local
          authorization. Pagkatapos, basahin ang fiscal year, cutoff date,
          scope, at level ng aggregation bago ituring na sagot ang dokumento.
        </KeyTakeaway>
      ),
    },
  ],
});
