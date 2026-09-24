# Design Brief

## 1. Design Direction

NPTEL Python Prep should feel like a focused study desk: editorial enough to make learning feel intentional, structured enough for repeated practice, and quiet enough that the question remains the visual center of gravity.

The current interface establishes this direction with:

- Fraunces for display headings;
- Inter for interface text;
- IBM Plex Mono for numeric and time values;
- a pale blue-gray paper background and raised white surfaces;
- deep ink text;
- vivid amber as the learning accent;
- green for correct and red for wrong states;
- light and dark themes controlled by an explicit class toggle.

## 2. Audience and Emotional Goal

The audience is a learner returning repeatedly, often under exam pressure. The product should communicate clarity, momentum, and honest feedback. It should feel serious without feeling punitive.

## 3. Layout Principles

- Keep the current persistent sidebar/topbar shell for orientation.
- Make primary actions obvious and close to the relevant content.
- Use constrained reading widths for questions and explanations.
- Prefer rows, dividers, and compact status blocks over nested card stacks.
- Keep dashboards information-dense but scannable.
- On mobile, preserve the same hierarchy with a slide-over navigation pattern.
- Give questions and answer controls stable dimensions so selection does not shift the page.

## 4. Visual Hierarchy

1. Current question, setup choice, or next study action.
2. Progress and status information.
3. Explanation and supporting context.
4. Secondary navigation and historical detail.

Use display type sparingly for page titles and major study prompts. Use mono numerals for counts, timers, and score ratios so changing numbers do not visually jump.

## 5. Components and States

- **Primary action:** dark ink in light mode, amber in dark mode; use a familiar icon plus concise label.
- **Question options:** clear selected, correct, wrong, disabled, and unchecked states; maintain keyboard focus visibility.
- **Status labels:** pair color with text, never rely on color alone.
- **Progress bar:** amber fill with a stable track and a nearby textual question count.
- **Charts:** support the summary; do not make charts the only way to read a metric.
- **Empty states:** state what happened and offer one next action.
- **Exam timer:** use monospaced time and a clear urgency transition without flashing or motion that harms accessibility.

## 6. Content Voice

Use direct, calm language. Prefer "Needs practice" over judgmental language. Explain the difference between practice mode and exam mode before a learner starts. Keep labels consistent: `correct`, `wrong`, `unattempted`, `mastered`, `weak`, and `needs practice`.

## 7. Accessibility and Responsive Behavior

- Meet WCAG AA contrast for text and controls.
- Use semantic buttons, labels, headings, and landmarks.
- Support keyboard navigation through setup, answer selection, submission, and review.
- Respect `prefers-reduced-motion`.
- Do not encode correctness or status through color alone.
- Ensure long question text, code, tables, and option labels wrap without clipping.
- Test at narrow mobile widths and wide desktop widths before release.

## 8. Design Guardrails

Avoid marketing-style hero sections, decorative gradients, excessive rounded cards, vague analytics labels, and oversized type inside compact panels. The application is a working study tool; visual polish should reduce cognitive load rather than compete with practice.

## 9. Future Design Questions

- Should progress export/import become a first-class utility?
- Should review support a compact question navigator for long sessions?
- Should charts offer a table alternative by default for accessibility and precision?
