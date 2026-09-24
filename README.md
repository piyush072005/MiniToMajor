# NPTEL Python Prep — The Joy of Computing with Python

A practice platform for NPTEL's The Joy of Computing with Python: shuffled questions and options on every attempt, mastery tracking, weak-question practice, exam mode, and full result history — all saved locally in your browser.

## What's loaded right now
The question bank contains 8 weeks and 160 questions extracted from the provided Joy of Computing with Python assignment PDFs. Each question includes its options, answer, and assignment justification.

## Running it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build a static production version:
```bash
npm run build
npm run preview   # serves the built dist/ folder locally
```

Don't open `dist/index.html` directly by double-clicking it — browsers block ES module scripts loaded via `file://`. Use `npm run preview` or any static file server instead.

## Editing or adding questions
The source PDFs are in `course-content/`. To regenerate the question bank after replacing or updating them, run:

```bash
python scripts/convert_assignments.py
```

The generated questions live in `src/data/questions.js`. Each question needs:
- `id` — unique string
- `type` — `"MCQ"` (single answer) or `"MSQ"` (multi-select)
- `question` — exact text (use `\n` for line breaks in tables/schedules)
- `options` — array of option strings
- `correctAnswers` — array of the exact matching option string(s)
- `explanation` — optional

Nothing else needs to change — shuffling, scoring, stats, and the dashboard all read from this file automatically.

## Where your progress is stored
Everything (attempt history, per-question stats, mistakes, theme) is saved in your browser's `localStorage` under the key `nptel_prep_v1`. It's local to your browser — clearing browser data will clear it too. There's no backend; nothing is sent anywhere.
