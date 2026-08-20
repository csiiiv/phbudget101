import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "What will you be able to do?",
      shortTitle: "Start",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            How does public money become a classroom, a health service, or a
            road — and how can you check what happened along the way?
          </p>
          <p>
            PH Budget 101 gives you a practical map of the Philippine public
            budget. By the end, you should be better able to find the right
            budget information, follow money from a government decision to a
            public service, and ask more precise questions about results.
          </p>
        </>
      ),
    },
    {
      id: "pfm-first",
      title: "Learn the system before applying it",
      shortTitle: "PFM first",
      type: "concept",
      content: (
        <>
          <p>
            This course begins with <Term id="pfm" expand />: the system
            government uses to plan, direct, and control public money so it can
            deliver public services. That system includes raising revenue,
            choosing priorities, authorizing spending, releasing and using
            funds, and checking results.
          </p>
          <p>
            The aim is budget literacy first. Once you understand how the system
            works, you can apply that knowledge in many roles: managing a
            program, reviewing a proposal, reporting on public spending,
            participating in a consultation, or asking government a
            well-targeted question.
          </p>
          <p>
            Throughout the course, keep two orienting questions in view:{" "}
            <strong>
              Where does government money come from, and where does it go?
            </strong>
          </p>
        </>
      ),
    },
    {
      id: "who-it-is-for",
      title: "Who this course is for",
      shortTitle: "For you",
      type: "concept",
      content: (
        <>
          <p>
            You do not need a background in economics, accounting, law, or
            public administration. The course is designed for anyone who needs a
            clear introduction to public budgets, including:
          </p>
          <ul>
            <li>citizens trying to understand a public service or project;</li>
            <li>
              students, teachers, and journalists building budget literacy;
            </li>
            <li>
              public servants connecting their work to the wider budget system;
              and
            </li>
            <li>people preparing to participate in a budget decision.</li>
          </ul>
          <p>
            Lessons use plain English and explain technical terms when they
            first appear. You can move in order or open the lesson that answers
            your immediate question.
          </p>
        </>
      ),
    },
    {
      id: "three-paths",
      title: "Three ways through the course",
      shortTitle: "Three paths",
      type: "concept",
      content: (
        <div className="not-prose grid gap-4 sm:grid-cols-3">
          <section className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold text-foreground">Quick overview</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Take Modules 1, 3, 4, and 5, then use the reference section when
              you need a definition or document. Plan for about 2–3 hours.
            </p>
          </section>
          <section className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Full PH Budget 101
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Complete Modules 0–10 in order, from orientation through the
              follow-the-money capstone. Plan for about 10–12 hours.
            </p>
          </section>
          <section className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Topic-based reference
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Navigate freely to a lesson or reference page whenever you need an
              answer. Each lesson is designed to stand on its own.
            </p>
          </section>
        </div>
      ),
    },
    {
      id: "paths-ahead",
      title: "Your choice comes at the end",
      shortTitle: "What’s next",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Keep these three routes in mind as you go. After a short self-check at
          the end of this module, you will choose the one that fits you — and
          you can change it at any time. Continue to the next lesson to see the
          whole course in one flow.
        </KeyTakeaway>
      ),
    },
  ],
});
