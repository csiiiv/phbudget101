# Budget Cycle Interactive Options

## Purpose

Explore web-native ways to adapt the strongest ideas from *Budget Natin: A Guidebook for Engaging the Philippine Budget Cycle* (2023) without reproducing its printed visuals.

The most useful source material is:

- Page 23: local budget cycle and decision-makers
- Page 38: four-phase national budget cycle
- Page 48: activity using the complete national budget cycle
- Page 86: larger Annex version of the complete national budget cycle

The PDF should be treated as a content source rather than a visual template. The web experience should progressively reveal complexity, support different ways of exploring the process, and lead learners toward practical participation.

## Core design direction

Create one shared **Budget Journey** backed by structured data. It can appear in several views across Modules 4, 6, and 9 instead of building unrelated diagrams for each lesson.

Introduce the four phases using plain-language actions first:

| Plain-language label | Formal term |
| --- | --- |
| Plan the budget | Preparation |
| Approve the budget | Legislation or authorization |
| Spend and deliver | Execution |
| Check the results | Accountability |

Selecting a phase can reveal:

- What is happening
- The main decision being made
- Who is involved
- Documents produced or used
- Approximate timing
- Citizen participation opportunities
- What happens next

Only one phase should need to be expanded at a time. Detailed steps should be available on demand rather than displayed together in one dense infographic.

## Option 1: Guided story

Follow one public concern, such as a health center, classroom, or transport service, through the complete budget process.

Example journey:

> Community identifies a need -> agency proposes funding -> legislature approves it -> agency implements it -> government and citizens evaluate the results

Possible interactions:

- Scroll or select **Next** to advance the story.
- Reveal the responsible actor and document at each step.
- Ask the learner to predict what happens next.
- Show where an approved budget can still fail to produce a service.
- Allow learners to switch between a short overview and detailed explanation.

**Strengths:** approachable for beginners, easy to use on mobile, and able to connect budgeting to everyday services.

**Limitations:** less efficient for learners who want to look up a specific phase or institution.

## Option 2: Phase explorer

Present the four national phases as the course's primary organizing interface. Selecting a phase opens its summary, actors, documents, decisions, timing, and participation points.

Possible interactions:

- Select a phase from persistent navigation.
- Expand individual steps within that phase.
- Toggle citizen opportunities on or off.
- Complete short sequencing or matching checks.
- Follow links to lessons that explain a concept in greater depth.

**Strengths:** clear mental model, reusable throughout the course, and closely aligned with Module 4.

**Limitations:** it can imply that phases occur one at a time unless overlapping fiscal years are explicitly shown.

## Option 3: Overlapping-years timeline

Show how several budgets are active at the same time:

```text
Previous budget     Accountability ----------------
Current budget      Execution ---------------------
Next budget         Preparation ---- Legislation --
```

Possible interactions:

- Move a **Today** marker through the year.
- Choose a fiscal year.
- Compare previous, current, and next-year activities.
- Select an event to inspect its actors and documents.
- Switch between a simple phase view and the detailed calendar.

**Strengths:** explains one of the budget cycle's most important and confusing characteristics better than a circular diagram can.

**Limitations:** requires careful handling of dates, exceptions, and current-year verification.

## Option 4: Actor explorer

Reframe the cycle around people and institutions. This is a strong adaptation of the local decision-maker content on page 23.

Possible actors include:

- Citizens and civil society organizations
- Implementing agencies
- DBM and DBCC
- House of Representatives and Senate
- President
- Commission on Audit
- Local chief executive
- Sanggunian
- Local finance committee

Selecting an actor can highlight:

- The phases in which they participate
- The decisions they make or influence
- Documents for which they are responsible
- Ways citizens can engage with or monitor them

A matrix can provide an accessible overview:

| Actor | Preparation | Authorization | Review | Execution | Accountability |
| --- | ---: | ---: | ---: | ---: | ---: |
| Local chief executive | Yes | Yes |  | Yes | Yes |
| Sanggunian |  | Yes | Yes |  |  |
| Local finance committee | Yes | Yes | Yes |  |  |
| CSOs and private-sector groups | Yes | Yes | Yes | Yes | Yes |

The final matrix must be verified during content authoring; this example only demonstrates the interaction.

**Strengths:** reveals how responsibility changes and makes repeated actor lists easier to compare.

**Limitations:** learners may lose the chronological sequence if this appears before the basic phase model.

## Option 5: Participation view

Show only meaningful citizen and CSO entry points instead of the entire administrative process.

Possible filters:

- National or local government
- Issue or sector
- Budget phase
- Learner role
- Type of participation
- Available time or level of effort

Each result can be an action card containing:

- What the learner can do
- When it is most useful
- Which institution to approach
- What evidence or document is needed
- Effort and accessibility considerations
- The likely influence and limitations of the action

**Strengths:** practical, motivating, and suitable for reuse in Module 9.

**Limitations:** recommendations must not overstate formal access or likely impact.

## Option 6: Personal engagement planner

Turn the activity on page 48 into a usable planning tool.

Suggested flow:

1. Choose a public issue.
2. Choose national or local government.
3. Describe the desired change.
4. Review suggested intervention points.
5. Select actors to approach and documents to monitor.
6. Write or select a next action.
7. Copy, save, or print a one-page plan.

The tool should explain why each intervention point fits the learner's goal. Its output could resemble:

> I want to influence the city health budget during Preparation. I will monitor the budget call, contact the local health office, and look for an appropriate consultation or civil-society participation route.

**Strengths:** converts budget literacy into a concrete next step and completes the learning-to-action arc.

**Limitations:** higher content and development effort; generated guidance must be carefully scoped and dated.

## Option 7: Scenario and diagnostic activities

Use short exercises throughout the Budget Journey instead of relying on a large end-of-module quiz.

Possible activities:

- Put the four phases in order.
- Match a document to the phase that produces it.
- Identify who makes a particular decision.
- Distinguish an approved budget from actual spending.
- Choose the best intervention point for a scenario.
- Follow a peso allocation from proposal to public service.
- Diagnose where a fictional project was delayed.

Correct answers can update or unlock portions of the main journey so assessment feels like part of the exploration.

## Recommended combined experience

These options do not need to become separate interactives. A single structured model can support several modes:

- **Learn:** guided story
- **Explore:** four-phase explorer
- **Understand timing:** overlapping-years timeline
- **Find who decides:** actor explorer
- **Take action:** participation view and engagement planner

Recommended initial scope:

1. Four-stage phase explorer
2. Guided service-delivery story
3. Overlapping-years explanation
4. Citizen-action overlay
5. Short scenario-based checks

Possible later additions:

1. National and local comparison
2. Full actor explorer
3. Personalized engagement planner
4. Current-year schedules and source-document links

## Shared content model

The interface should render from structured content rather than hard-coded diagrams. An illustrative model is:

```ts
type BudgetStep = {
  id: string
  level: "national" | "local"
  phase: "preparation" | "legislation" | "execution" | "accountability"
  title: string
  plainLanguageTitle: string
  summary: string
  timing: string
  fiscalYearRelationship: "previous" | "current" | "next"
  actors: string[]
  documents: string[]
  decisions: string[]
  participationOptions: string[]
  nextStep: string
}
```

Local terminology may require additional phase values or a mapping layer, particularly for authorization and review. The data model should not force the national and local processes to appear identical.

## Design and accessibility principles

- Preserve stable colors for phases, but never communicate meaning through color alone.
- Pair colors with phase names, numbers, and icons.
- Prefer a vertical stepper on mobile instead of compressing a circular diagram.
- Keep screens focused on four to six choices.
- Lead with plain language and progressively reveal technical terminology.
- Define abbreviations on first use and through accessible help text.
- Provide keyboard navigation and visible focus states.
- Respect reduced-motion preferences.
- Give every visual view an equivalent table or structured-text presentation.
- Keep interaction state reflected in headings and screen-reader announcements.
- Make printable summaries available for learners with limited or intermittent connectivity.
- Date schedules and rules and identify the source used for verification.

## Relationship to the course

- **Module 4:** phase explorer, guided story, overlapping-years timeline, and core checks
- **Module 6:** local variant, actor comparison, and local participation points
- **Module 9:** participation view and engagement planner

This could evolve the existing `int-03 Budget cycle timeline` into the course's shared organizing system. Other modules should reuse focused views of the same data rather than introduce new representations of the cycle.

## Additional guidebook material worth adapting

- Page 53: social problem to policy-response sequence as a causal-chain exercise
- Page 54: research-to-advocacy relationship as a short decision scenario
- Page 65: approaches to government engagement as strategy cards
- Pages 67-70: policy-analysis tables as a guided proposal evaluator
- Pages 76-81: advocacy and communications content as a campaign-planning flow
- Pages 101-105: completed staff-work examples as annotated document walkthroughs

