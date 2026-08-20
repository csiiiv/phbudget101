import { Link } from "react-router-dom";

import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Find a useful starting point",
      shortTitle: "Start",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            What do you already know about the public budget, and how much
            detail would help you right now?
          </p>
          <p>
            Use the three questions in this lesson to choose between the quick
            overview and the full course. You are not being graded, and there is
            no required score. The questions simply help you notice which route
            may be more useful today.
          </p>
        </>
      ),
    },
    {
      id: "how-to-use",
      title: "Answer for yourself",
      shortTitle: "How to use",
      type: "concept",
      content: (
        <>
          <p>
            Read each question and choose the answer that feels closest to your
            current experience. Do not look up an answer. This is a self-check
            of confidence and goals, not a test of whether you belong in the
            course.
          </p>
          <p>
            Keep track of whether you lean toward <strong>Yes</strong>,{" "}
            <strong>Not yet</strong>, or <strong>I want the foundation</strong>.
            You will use that pattern in the next station.
          </p>
        </>
      ),
    },
    {
      id: "self-check",
      title: "Three-question self-check",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <ol className="not-prose grid gap-4">
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Question 1 of 3
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              Could you explain why an approved budget item is not yet proof
              that a public service was delivered?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose for yourself: Yes, mostly / Not yet.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Question 2 of 3
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              If you had a question about a government program, would you know
              which budget stage or document to examine first?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose for yourself: Yes, usually / Not yet.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Question 3 of 3
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              What would help most: a short map of the core system, or a
              step-by-step foundation that covers every topic?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose for yourself: Short map / Step-by-step foundation.
            </p>
          </li>
        </ol>
      ),
    },
    {
      id: "recommendation",
      title: "Match your answers to a path",
      shortTitle: "Your path",
      type: "concept",
      content: (
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          <section className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              Try the quick overview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Choose this path if you answered “Yes” to the first two questions
              and want a short map. It covers Modules 1, 3, 4, and 5, with the
              reference section available when you need more detail.
            </p>
          </section>
          <section className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              Take the full course
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Choose this path if either of the first two answers was “Not yet,”
              or if you want a step-by-step foundation. The full route follows
              Modules 0–10 in order.
            </p>
          </section>
          <p className="text-sm text-muted-foreground sm:col-span-2">
            Mixed answers are normal. If you are unsure, start with the full
            path and switch after a lesson, or take the quick overview and
            return to any skipped module when a question comes up.
          </p>
        </div>
      ),
    },
    {
      id: "takeaway",
      title: "Your starting point can change",
      shortTitle: "Takeaway",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Choose the <strong>quick overview</strong> when you already know the
          basics and need the core map. Choose the <strong>full course</strong>{" "}
          when you want a foundation or found a gap. Neither choice is
          permanent.
        </KeyTakeaway>
      ),
    },
    {
      id: "choose-path",
      title: "Choose your coursework",
      shortTitle: "Choose",
      type: "takeaway",
      content: (
        <>
          <p>
            Mark this lesson complete, then pick the route that fits you today.
            All three lead out of Start Here — you can return or switch at any
            time.
          </p>
          <nav
            aria-label="Choose a learning path"
            className="not-prose grid gap-3 sm:grid-cols-3"
          >
            <Link
              className="rounded-lg border border-primary bg-card p-4 text-sm font-semibold text-primary hover:bg-accent/40"
              to="/modules/01-why-pfm-matters/lessons/01.1"
            >
              Start the quick overview
            </Link>
            <Link
              className="rounded-lg border border-primary bg-card p-4 text-sm font-semibold text-primary hover:bg-accent/40"
              to="/modules/01-why-pfm-matters/lessons/01.1"
            >
              Continue the full course
            </Link>
            <Link
              className="rounded-lg border border-primary bg-card p-4 text-sm font-semibold text-primary hover:bg-accent/40"
              to="/reference"
            >
              Browse by topic
            </Link>
          </nav>
        </>
      ),
    },
  ],
});
