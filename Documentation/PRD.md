# Product Requirements Document

## 1. Product Summary

**Product:** NPTEL Python Prep

**Course:** NPTEL's *The Joy of Computing with Python*

NPTEL Python Prep is a local-first practice workspace for learners who want to study assignment questions, simulate exams, understand mistakes, and track mastery over time. The product should make the next useful study action obvious while preserving the speed and simplicity of a static client application.

**Current status:** Working React/Vite application with eight weeks and 160 assignment-derived questions. Progress is persisted in browser `localStorage`; there is no account system, backend, or remote sync.

## 2. Problem

Learners have assignment questions and explanations, but a PDF or static question list does not provide:

- repeatable practice with varied question and option order;
- immediate feedback for learning or delayed feedback for exam simulation;
- a reliable view of weak areas and mastered questions;
- historical performance across weeks and attempts;
- a low-friction way to revise only the questions that need attention.

## 3. Goals

1. Help a learner start relevant practice in under one minute.
2. Support week-based study, mixed revision, weak-question remediation, and final-exam simulation.
3. Give clear feedback, explanations, and review after each completed attempt.
4. Track question-level progress using transparent, deterministic rules.
5. Work offline after the app and question bank are loaded.
6. Keep learner data private by default through local browser storage.
7. Remain usable on desktop and mobile, including keyboard and reduced-motion users.

## 4. Non-goals

- User accounts, cloud sync, social features, or leaderboards.
- Authoring questions inside the app.
- Automated adaptive learning or AI-generated explanations.
- Replacing the official NPTEL exam or making claims about official scoring.
- Multi-course content management in the first release.

## 5. Target Users

### Primary: Exam-focused NPTEL learner
Needs realistic practice, a timer, cumulative coverage, and an honest result review.

### Secondary: Week-by-week learner
Needs progress by week, explanations, and a clear signal of what to study next.

### Secondary: Revision-focused learner
Needs weak-question and mistake-history views to spend time efficiently.

## 6. Core User Stories

- As a learner, I can choose a week and practice its questions.
- As a learner, I can create a mixed session from selected weeks.
- As a learner, I can choose a question count and optionally enable timed exam mode.
- As a learner, I can answer MCQ and MSQ questions and know whether my answer is correct.
- As a learner, I can see an explanation and review all answers after submission.
- As a learner, I can see which questions are new, mastered, need practice, or weak.
- As a learner, I can practice the automatically generated weak-question pool.
- As a learner, I can search question text, options, and week labels.
- As a learner, I can inspect previous attempts and overall progress.
- As a learner, I can switch between light and dark themes.

## 7. Functional Requirements

### FR-1 Dashboard
Show total attempts, overall accuracy, practiced questions, mastered questions, weak questions, charts, and week summaries. Provide obvious entry points into the next practice action.

### FR-2 Course and week browsing
Display all configured weeks, topics, question counts, practice history, best result, average accuracy, and week status.

### FR-3 Practice setup
Allow a learner to choose a pool, question count, and practice or exam mode. All-week and final pools should guarantee coverage from each week when the selected count allows it.

### FR-4 Session behavior
Shuffle question order and option order without mutating source content. Support single-answer MCQ and multi-answer MSQ. Practice mode may reveal feedback per question; exam mode must defer results until submission.

### FR-5 Submission and scoring
Record correct, wrong, unattempted, accuracy, duration, mode, scope, and per-question answers. Unattempted questions must not count as correct or wrong in attempt accuracy.

### FR-6 Review
Show selected answers, correct answers, explanations, optional diagrams, and optional alternate-language explanations where content exists.

### FR-7 Progress classification
Use the current deterministic rules:

- `new`: no recorded attempts;
- `mastered`: at least 3 attempts and at least 85% question accuracy;
- `weak`: at least 2 wrong answers and below 50% question accuracy;
- `needs_practice`: all other attempted questions.

### FR-8 History and remediation
Persist completed attempts newest first. Provide mistake history and a weak-question practice pool derived from question statistics.

### FR-9 Search and accessibility
Search question text, options, and week labels. Preserve visible focus, readable contrast, semantic labels, responsive layout, and reduced-motion behavior.

## 8. Success Metrics

- Practice-start completion rate: percentage of setup views that start a session.
- Session completion rate: percentage of started sessions that reach results.
- Review engagement: percentage of completed sessions that open review.
- Remediation usage: weak-question sessions started per active learner.
- Return value: attempts per learner over a rolling study period.
- Reliability: no loss of saved progress during normal reloads or navigation.

These metrics are product goals; the current local-only implementation does not collect analytics remotely.

## 9. Product Principles

- Make practice the primary action, not content browsing.
- Explain performance with inspectable rules.
- Keep the learner's data local unless they explicitly choose otherwise in a future version.
- Prefer dense, calm information design over decorative dashboard treatment.
- Never make a score feel more precise than the underlying attempt data supports.

## 10. Open Decisions

- Whether to expose a user-facing clear-progress/export action.
- Whether attempts should be capped or archived if local storage grows large.
- Whether question content should gain stable version metadata for future migrations.
- Whether a future backend is needed for cross-device progress.
