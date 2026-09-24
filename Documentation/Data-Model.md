# Data Model

## 1. Sources and Ownership

| Entity | Source of truth | Mutable at runtime | Persistence |
| --- | --- | --- | --- |
| Course configuration | `src/data/courseConfig.js` | No | Bundled |
| Weeks and questions | `src/data/questions.js` | No | Bundled |
| Practice session | Setup and shuffle utilities | Yes, in memory | No |
| Attempt history | `AppDataContext` state | Append-only in normal use | `localStorage` |
| Question statistics | `AppDataContext` state | Updated on completed attempt | `localStorage` |
| Theme | Provider state | Yes | `localStorage` |

## 2. Question

```js
{
  id: "string",              // globally stable question ID
  type: "MCQ" | "MSQ",
  question: "string",
  options: ["string"],
  correctAnswers: ["string"],
  explanation: "string?",
  explanationHi: "string?",
  diagram: "object?",
  week: "number"             // added by AppDataProvider
}
```

`correctAnswers` contains exact option strings. MCQ should contain one correct answer; MSQ may contain multiple.

## 3. Week

```js
{
  week: 1,
  title: "string",
  topic: "string",
  questions: [Question]
}
```

The current course contains eight weeks and 160 questions.

## 4. Practice Session

A session is an in-memory ordered array of copied questions. It is created from a selected pool after question and option shuffling.

```js
Session = Question[]
```

Session order is not persisted. Retrying creates a new shuffle.

## 5. Answer State

During a session, component state uses:

```js
{
  [questionId]: {
    selected: ["option string"],
    checked: true | false
  }
}
```

At submission, `checked` is not persisted in the attempt. The durable answer record is:

```js
{
  selected: ["option string"],
  correct: true | false
}
```

Unattempted questions have `selected: []` and `correct: false`, while the attempt's `unattempted` count distinguishes them from wrong answers.

## 6. Attempt

```js
{
  id: "attempt-<timestamp>-<random>",
  date: "ISO-8601 string",
  mode: "full" | "exam",
  scope: {
    type: "week" | "random" | "allweeks" | "final" | "custom",
    week: "number?",
    weeks: "number[]?"
  },
  total: "number",
  correct: "number",
  wrong: "number",
  unattempted: "number",
  accuracy: "number",       // rounded percentage, excludes unattempted
  durationSec: "number | null",
  answers: {
    [questionId]: AnswerResult
  }
}
```

## 7. Question Statistics

```js
{
  [questionId]: {
    attempts: "number",
    correct: "number",
    wrong: "number"
  }
}
```

Derived accuracy is `correct / attempts`. Derived status rules are documented in [PRD.md](PRD.md) and implemented in `src/utils/stats.js`.

## 8. Persisted Root State

```js
{
  theme: "light" | "dark",
  history: Attempt[],
  questionStats: QuestionStats
}
```

Current storage key: `nptel_prep_python_v1`.

The loader must continue to tolerate missing fields and malformed JSON. New fields should be optional with defaults. If the storage key is ever renamed, add an explicit migration rather than silently discarding progress.

## 9. Invariants

- Question IDs are unique across all weeks.
- Every attempt answer ID belongs to the session used to create that attempt.
- `correct + wrong + unattempted === total`.
- `questionStats[qid].attempts === correct + wrong` for that question.
- A completed attempt is the only operation that increments question statistics.
- Source question data is never mutated by shuffling.

## 10. Validation and Migration Plan

Add a lightweight runtime validator before accepting imported or migrated state. Validate numeric counters, enum values, question IDs, and attempt totals. Keep a `schemaVersion` field when the first migration is introduced; migrate old state in memory and write it back in the newest shape.
