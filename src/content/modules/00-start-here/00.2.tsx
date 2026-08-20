import { Link } from "react-router-dom";

import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Two questions organize the course",
      shortTitle: "Start",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Where does government money come from, and where does it go?
          </p>
          <p>
            Those two questions connect every module in PH Budget 101. The full
            answers involve many institutions, documents, and steps. For now,
            use one simple flow as your map: revenue comes in, budget decisions
            direct it, and public services are meant to come out.
          </p>
        </>
      ),
    },
    {
      id: "headline-flow",
      title: "The whole course in one flow",
      shortTitle: "The flow",
      type: "interactive",
      content: (
        <div
          className="not-prose my-6"
          aria-label="Revenue flows through budget decisions toward public services"
        >
          <ol className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 1
              </p>
              <h3 className="mt-1 font-semibold text-foreground">Revenue in</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Government gathers resources and, when needed, borrows.
              </p>
              <Link
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                to="/modules/02-the-governments-money"
              >
                Preview Module 2
              </Link>
            </li>
            <li
              aria-hidden="true"
              className="self-center text-center text-xl font-semibold text-primary"
            >
              →
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 2
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Budget decisions
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Government proposes, authorizes, and carries out spending
                choices.
              </p>
              <Link
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                to="/modules/04-the-budget-cycle"
              >
                Preview Module 4
              </Link>
            </li>
            <li
              aria-hidden="true"
              className="self-center text-center text-xl font-semibold text-primary"
            >
              →
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 3
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Services out
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Agencies turn authorized funds into work, goods, and services.
              </p>
              <Link
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                to="/modules/05-from-appropriation-to-public-service"
              >
                Preview Module 5
              </Link>
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted-foreground">
            Static course map. The interactive concept map is planned for a
            later phase.
          </p>
        </div>
      ),
    },
    {
      id: "money-in",
      title: "First ask: what resources are available?",
      shortTitle: "Money in",
      type: "concept",
      content: (
        <>
          <p>
            The money-in side begins with revenue. Taxes are one source, but the
            complete picture also includes fees, other government income,
            grants, and borrowing. Estimates matter because the resources
            government expects to have shape what it can responsibly plan to
            spend.
          </p>
          <p>
            Module 2 examines those sources and the limits they place on budget
            choices. At this point, remember only the headline: spending
            decisions begin with a view of available resources.
          </p>
        </>
      ),
    },
    {
      id: "money-out",
      title: "Then ask: what happened after the choice?",
      shortTitle: "Money out",
      type: "concept",
      content: (
        <>
          <p>
            A budget decision does not itself deliver a service. The choice must
            be recorded and authorized, funds must move, and an agency must do
            the work. That is why the second orienting question is larger than
            “What was budgeted?” It also asks what was implemented and
            delivered.
          </p>
          <p>
            Modules 3 and 4 show how decisions are organized and made. Module 5
            follows authorized spending toward service delivery. Later modules
            help you read the records, evaluate results, and participate.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Check the flow",
      shortTitle: "Check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Put the headline ideas in place"
          moduleId="mod-00"
          lessonId="00.2"
          items={[
            {
              prompt:
                "Which sequence is the course map introduced in this lesson?",
              options: [
                "Services → revenue → budget decisions",
                "Revenue → budget decisions → services",
                "Budget decisions → services → revenue",
              ],
              correct: 1,
              explanation:
                "The orientation flow starts with resources coming in, passes through budget decisions, and points toward public services.",
              wrong: {
                0: "Services are the intended result of the flow, not its starting resource.",
                2: "Budget choices depend on an estimate of available resources, so revenue belongs before decisions in this headline map.",
              },
            },
            {
              prompt:
                "A program appears in an approved budget. What can you conclude from that fact alone?",
              options: [
                "The public service has already been delivered.",
                "The budget decision exists, but implementation and delivery still need to be checked.",
                "Government collected exactly enough revenue for that program.",
              ],
              correct: 1,
              explanation:
                "Authorization is an important decision point, but agencies still have to use funds and carry out the work before a service reaches people.",
              wrong: {
                0: "An approved item is not proof of implementation or service delivery.",
                2: "Budgets combine many resource sources and choices; one program does not map to an equal, dedicated collection amount.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Keep both questions together",
      shortTitle: "Takeaway",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Follow the complete headline flow:{" "}
          <strong>revenue in → budget decisions → services out</strong>. Asking
          where money comes from tells you about resources; asking where it goes
          leads you from choices through delivery.
        </KeyTakeaway>
      ),
    },
  ],
});
