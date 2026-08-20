import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/lib/LocaleProvider";
import { cn } from "@/lib/utils";

interface TraceStep {
  label: string;
  title: string;
  body: string;
}

interface Concern {
  id: string;
  label: string;
  steps: TraceStep[];
}

/**
 * Illustrative scenarios. Amounts are simplified for teaching mechanics and
 * labeled as such at render time (build_spec illustrative-content rule).
 */
const CONCERNS: Concern[] = [
  {
    id: "classrooms",
    label: "Classrooms",
    steps: [
      {
        label: "Need",
        title: "A crowded school",
        body: "Parents and teachers at a public elementary school report class sizes of 60+ students. The community raises the concern with their local officials.",
      },
      {
        label: "Policy",
        title: "A program responds",
        body: "The Department of Education includes new classroom construction under its Basic Education Facilities program in its plans.",
      },
      {
        label: "Budget line",
        title: "The plan gets money",
        body: "The classroom program appears in the National Expenditure Program with an allocation, is deliberated in Congress, and is enacted in the General Appropriations Act.",
      },
      {
        label: "Implementation",
        title: "Procurement and construction",
        body: "The implementing agency releases funds, bids out the construction contract, and the contractor builds the classrooms.",
      },
      {
        label: "Service",
        title: "Students in smaller classes",
        body: "The new classrooms open, class sizes drop, and the school reports the buildings as physical accomplishments — which auditors later verify.",
      },
    ],
  },
  {
    id: "health-centers",
    label: "Health centers",
    steps: [
      {
        label: "Need",
        title: "A barangay without a clinic",
        body: "Residents of a remote barangay travel two hours to the nearest health center. They raise this in a community consultation.",
      },
      {
        label: "Policy",
        title: "A program responds",
        body: "The local health office proposes a barangay health station under the local development plan.",
      },
      {
        label: "Budget line",
        title: "The plan gets money",
        body: "The municipal mayor includes the health station in the local budget proposal; the sanggunian appropriates funds for it.",
      },
      {
        label: "Implementation",
        title: "Construction and staffing",
        body: "The municipality procures construction services, builds the station, and budgets for a midwife in the next fiscal year.",
      },
      {
        label: "Service",
        title: "Care close to home",
        body: "The health station opens with scheduled consult days; residents report shorter travel and higher check-up rates.",
      },
    ],
  },
  {
    id: "flood-control",
    label: "Flood control",
    steps: [
      {
        label: "Need",
        title: "A flooded street every rainy season",
        body: "A riverside community documents flooding incidents and damages each year and brings the record to the city engineer\u2019s office.",
      },
      {
        label: "Policy",
        title: "A program responds",
        body: "The city includes a drainage improvement project in its local development investment plan.",
      },
      {
        label: "Budget line",
        title: "The plan gets money",
        body: "The project is funded in the city budget under capital outlay, co-funded by a national flood control program.",
      },
      {
        label: "Implementation",
        title: "Engineering works",
        body: "The contractor upgrades the drainage line; the city engineer inspects and accepts the works.",
      },
      {
        label: "Service",
        title: "A drier rainy season",
        body: "Flood incidents in the covered streets drop; the city reports the project as completed in its accomplishment report.",
      },
    ],
  },
];

const FIL_CONCERNS: Concern[] = [
  {
    id: "classrooms",
    label: "Mga classroom",
    steps: [
      {
        label: "Pangangailangan",
        title: "Siksikan sa classroom",
        body: "Ini-report ng mga magulang at guro sa isang public elementary school na mahigit 60 ang estudyante sa bawat klase. Inilapit ng community ang problema sa local officials.",
      },
      {
        label: "Policy",
        title: "May program na tutugon",
        body: "Isinama ng Department of Education sa plano ng Basic Education Facilities program ang pagpapatayo ng mga bagong classroom.",
      },
      {
        label: "Budget line",
        title: "Nagkaroon ng pondo ang plano",
        body: "Isinama ang classroom program sa National Expenditure Program, dininig sa Congress, at isinabatas sa General Appropriations Act.",
      },
      {
        label: "Implementation",
        title: "Procurement at construction",
        body: "Nag-release ng pondo ang implementing agency, nagsagawa ng bidding para sa construction contract, at itinayo ng contractor ang mga classroom.",
      },
      {
        label: "Serbisyo",
        title: "Mas kaunting estudyante bawat klase",
        body: "Nagbukas ang mga bagong classroom, lumiit ang class sizes, at ini-report ng school ang mga gusali bilang physical accomplishments na susuriin din ng auditors.",
      },
    ],
  },
  {
    id: "health-centers",
    label: "Mga health center",
    steps: [
      {
        label: "Pangangailangan",
        title: "Barangay na walang clinic",
        body: "Dalawang oras ang biyahe ng mga residente ng isang malayong barangay papunta sa pinakamalapit na health center. Inilapit nila ito sa community consultation.",
      },
      {
        label: "Policy",
        title: "May program na tutugon",
        body: "Nag-propose ang local health office ng barangay health station sa local development plan.",
      },
      {
        label: "Budget line",
        title: "Nagkaroon ng pondo ang plano",
        body: "Isinama ng municipal mayor ang health station sa local budget proposal, at naglaan ng pondo ang sanggunian para rito.",
      },
      {
        label: "Implementation",
        title: "Construction at staffing",
        body: "Kumuha ang municipality ng construction services, itinayo ang station, at naglaan ng budget para sa midwife sa susunod na fiscal year.",
      },
      {
        label: "Serbisyo",
        title: "Mas malapit na healthcare",
        body: "Nagbukas ang health station na may scheduled consultation days. Mas maikli na ang biyahe ng residents at mas marami ang nakakapagpa-checkup.",
      },
    ],
  },
  {
    id: "flood-control",
    label: "Flood control",
    steps: [
      {
        label: "Pangangailangan",
        title: "Kalsadang binabaha tuwing tag-ulan",
        body: "Taon-taong dini-document ng isang riverside community ang mga baha at pinsala, at dinadala nila ang records sa city engineer’s office.",
      },
      {
        label: "Policy",
        title: "May program na tutugon",
        body: "Isinama ng city ang drainage improvement project sa local development investment plan.",
      },
      {
        label: "Budget line",
        title: "Nagkaroon ng pondo ang plano",
        body: "Pinondohan ang project sa city budget sa ilalim ng capital outlay, kasama ang pondo mula sa national flood control program.",
      },
      {
        label: "Implementation",
        title: "Engineering works",
        body: "In-upgrade ng contractor ang drainage line. Sinuri at tinanggap ng city engineer ang natapos na trabaho.",
      },
      {
        label: "Serbisyo",
        title: "Mas kaunting baha sa tag-ulan",
        body: "Bumaba ang bilang ng pagbaha sa mga sakop na kalsada, at ini-report ng city na completed ang project sa accomplishment report.",
      },
    ],
  },
];

const UI = {
  en: {
    title: "Trace a public concern",
    prompt:
      "Pick a concern and follow it from community need to delivered service.",
    trace: "Trace",
    change: "Change concern",
    step: "Step",
    back: "Back",
    next: "Next",
    restart: "Start over",
    illustrative: "Illustrative example. Details are simplified for clarity.",
  },
  fil: {
    title: "Sundan ang isang public concern",
    prompt:
      "Pumili ng concern at sundan ito mula sa pangangailangan ng community hanggang sa serbisyong naihatid.",
    trace: "Sinusundan",
    change: "Pumili ng iba",
    step: "Step",
    back: "Bumalik",
    next: "Susunod",
    restart: "Ulitin",
    illustrative:
      "Illustrative example. Pinasimple ang details para mas malinaw.",
  },
} as const;

export function TraceConcern() {
  const { locale } = useLocale();
  const concerns = locale === "fil" ? FIL_CONCERNS : CONCERNS;
  const text = UI[locale];
  const [concernId, setConcernId] = useState<string | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const concern = useMemo(
    () => concerns.find((item) => item.id === concernId),
    [concernId, concerns],
  );

  if (!concern) {
    return (
      <Card className="not-prose">
        <CardHeader>
          <CardTitle>{text.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">{text.prompt}</p>
          <div className="flex flex-wrap gap-2">
            {concerns.map((c) => (
              <Button
                key={c.id}
                variant="outline"
                onClick={() => {
                  setConcernId(c.id);
                  setStepIndex(0);
                }}
              >
                {c.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const step = concern.steps[stepIndex];
  const isLast = stepIndex === concern.steps.length - 1;

  return (
    <Card className="not-prose">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle>
            {text.trace}: {concern.label.toLowerCase()}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setConcernId(null)}
            className="no-print"
          >
            {text.change}
          </Button>
        </div>
        <ol className="flex flex-wrap gap-1.5">
          {concern.steps.map((s, i) => (
            <li key={s.label}>
              <Badge
                variant={
                  i === stepIndex
                    ? "default"
                    : i < stepIndex
                      ? "secondary"
                      : "outline"
                }
              >
                {s.label}
              </Badge>
            </li>
          ))}
        </ol>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">
            {text.step} {stepIndex + 1} {locale === "fil" ? "sa" : "of"}{" "}
            {concern.steps.length}
          </div>
          <h3 className="font-semibold">{step.title}</h3>
          <p className="text-sm">{step.body}</p>
        </div>
        <div className={cn("flex gap-2 no-print")}>
          <Button
            variant="outline"
            onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
            disabled={stepIndex === 0}
          >
            {text.back}
          </Button>
          {!isLast ? (
            <Button onClick={() => setStepIndex((i) => i + 1)}>
              {text.next}
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => {
                setConcernId(null);
                setStepIndex(0);
              }}
            >
              {text.restart}
            </Button>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{text.illustrative}</p>
      </CardContent>
    </Card>
  );
}
