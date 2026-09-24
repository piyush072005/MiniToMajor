# Engineering Plan

## 1. Objective

Maintain and evolve NPTEL Python Prep as a reliable local-first study tool while keeping content, domain rules, persistence, and presentation independently testable.

## 2. Current Baseline

- React 19 and React DOM
- Vite 8
- JavaScript/JSX ES modules
- Tailwind CSS 4 through PostCSS
- Recharts for dashboard charts
- lucide-react for icons
- Oxlint for linting
- PyMuPDF-based assignment conversion script
- Browser `localStorage` persistence

Useful commands:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
python scripts/convert_assignments.py
```

## 3. Workstreams

### A. Correctness and domain tests

Add unit coverage for:

- MCQ and MSQ answer equality;
- shuffle non-mutation and option permutation;
- attempt accuracy with unattempted answers;
- status thresholds and boundary values;
- week statistics;
- weak-question pool selection;
- malformed and partial persisted state.

Prefer pure tests around `src/utils` before adding UI tests.

### B. Persistence hardening

1. Align the README storage-key documentation with the implementation.
2. Add a `schemaVersion` to future persisted state.
3. Add export/import or clear-progress controls only after defining recovery behavior.
4. Handle storage quota and unavailable-storage states with a user-visible but non-blocking message.
5. Consider bounded history or IndexedDB if real usage exceeds local storage limits.

### C. Content pipeline

1. Keep source PDFs in `course-content/`.
2. Make conversion output deterministic.
3. Validate unique IDs, valid question types, non-empty options, and correct-answer membership.
4. Add a content report showing question counts by week and questions with missing explanations.
5. Record content version metadata when stable migrations become necessary.

### D. UX and accessibility

1. Test the complete practice flow at mobile and desktop widths.
2. Add keyboard-focused tests for answer selection and submission.
3. Verify all correctness/status states with text plus color.
4. Provide a readable table alternative for chart summaries.
5. Add an accessible empty state for the weak-question pool.
6. Make storage failure and timer expiry understandable without relying on motion.

### E. Navigation and session resilience

1. Decide whether route state must survive a browser reload.
2. If yes, introduce URL-based route state or a session recovery record.
3. Preserve current view names and provider actions while changing navigation internals.
4. Ensure back/forward behavior does not duplicate or resubmit an attempt.

## 4. Delivery Sequence

### Phase 1: Baseline safety

- Align documentation and storage-key behavior.
- Add pure utility tests for scoring, stats, and shuffling.
- Add content validation to the question-generation workflow.
- Run lint and production build in CI.

### Phase 2: Learner trust

- Add clear-progress and progress export/import design.
- Surface storage failures.
- Add accessible chart summaries and keyboard-flow checks.
- Verify timer auto-submit and duplicate-submit behavior.

### Phase 3: Study quality

- Improve weak-question explanations and review navigation.
- Add richer week-level trend reporting.
- Add optional session recovery after accidental reload.
- Evaluate a content version and migration strategy.

### Phase 4: Optional platform expansion

- Assess remote sync only after local export/import and privacy expectations are defined.
- Introduce authentication and backend storage as separate infrastructure, not as a requirement of the current app shell.

## 5. Testing Strategy

- **Unit:** pure utility functions and storage parsing.
- **Component:** setup choices, MCQ/MSQ controls, result summaries, empty states.
- **Flow:** start practice -> answer -> submit -> result -> review -> retry.
- **Regression:** all eight weeks load, IDs are unique, generated data builds successfully.
- **Manual responsive:** narrow mobile, tablet, and wide desktop; light and dark themes; reduced motion.

## 6. Definition of Done

A change is ready when:

- its domain behavior is covered by a focused test or a documented manual check;
- `npm run lint` passes;
- `npm run build` passes;
- persisted state remains backward-compatible or has a migration;
- mobile, keyboard, light, dark, and reduced-motion behavior are considered;
- documentation is updated when behavior or data contracts change.

## 7. Risks and Mitigations

| Risk | Mitigation |
| --- | --- |
| Browser data loss | Export/import, clear messaging, future migration/versioning |
| Incorrect mastery signal | Pure threshold tests and visible definitions |
| Content extraction errors | Deterministic converter plus schema validation |
| Timer or duplicate submit bugs | Focused lifecycle tests and submit guard |
| Layout failure on long questions | Stable layout constraints and responsive content tests |
| Scope expansion into backend work | Preserve local-first milestone and treat sync as a separate phase |
