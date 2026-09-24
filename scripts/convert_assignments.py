from pathlib import Path
import json
import re

import fitz


ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "course-content"
OUTPUT = ROOT / "src" / "data" / "questions.js"

ASSIGNMENT_FILES = [
    "week-01-assignment.pdf",
    "week-02-assignment.pdf",
    "week-03-assignment.pdf",
    "week-04-assignment.pdf",
    "week-05-assignments.pdf",
    "week-06-assignment.pdf",
    "week-07-assignments.pdf",
    "week-08-assignment.pdf",
]

WEEK_TOPICS = [
    "Programming foundations, problem solving, loops, and Scratch",
    "Input, variables, conditionals, loops, and basic Python programs",
    "Lists, tuples, dictionaries, sets, and estimation",
    "Randomness, dates, simulations, and game logic",
    "Lists, searching, sorting, and game strategies",
    "Strings, recursion, binary search, and decision logic",
    "Matrices, games, coordinates, and route planning",
    "Tuples, dictionaries, data analysis, and random processes",
]


def clean(value):
    return re.sub(r"\s+", " ", value).strip()


def extract_text(path):
    return "\n".join(page.get_text() for page in fitz.open(path))


def parse_week(week, filename):
    text = extract_text(CONTENT / filename)
    marker = re.compile(r"(?m)^\s*(?:Q\d+\.\s*|Question\s+\d+\s*|(?:MCQ|MSQ)\s+\d+\s*)")
    blocks = marker.split(text)[1:]
    questions = []

    for index, block in enumerate(blocks, start=1):
        option_match = re.search(r"(?m)^\s*A\.\s*", block)
        if not option_match:
            continue

        prompt = clean(block[: option_match.start()])
        option_area = block[option_match.start() :]
        answer_match = re.search(r"(?im)^\s*(?:Correct\s+Answers?|Answers?|Answer)\s*:\s*(.+)$", option_area)
        if not answer_match:
            raise ValueError(f"Missing answer for week {week}, question {index}")

        option_text = option_area[: answer_match.start()]
        options = []
        for option in re.finditer(r"(?m)^\s*([A-D])\.\s*(.*?)(?=\n\s*[A-D]\.\s*|\Z)", option_text, re.S):
            options.append(clean(option.group(2)))

        answer_labels = re.findall(r"[A-D]", answer_match.group(1).upper())
        correct_answers = [options[ord(label) - ord("A")] for label in answer_labels if ord(label) - ord("A") < len(options)]
        justification_match = re.search(r"(?im)^\s*Justification\s*:\s*(.*)$", option_area[answer_match.end() :], re.S)
        explanation = justification_match.group(1) if justification_match else ""
        explanation = re.split(r"(?im)\n\s*(?:Case Study|Scenario):", explanation, maxsplit=1)[0]
        explanation = clean(explanation)

        questions.append(
            {
                "id": f"w{week}-q{index}",
                "type": "MSQ" if len(correct_answers) > 1 else "MCQ",
                "question": prompt,
                "options": options,
                "correctAnswers": correct_answers,
                "explanation": explanation,
            }
        )

    if len(questions) != 20:
        raise ValueError(f"Expected 20 questions in week {week}, found {len(questions)}")
    return questions


def main():
    weeks = []
    for week, filename in enumerate(ASSIGNMENT_FILES, start=1):
        weeks.append(
            {
                "week": week,
                "title": f"Week {week}",
                "topic": WEEK_TOPICS[week - 1],
                "questions": parse_week(week, filename),
            }
        )

    header = "// Questions extracted from the eight Joy of Computing with Python assignment PDFs.\n"
    OUTPUT.write_text(
        header
        + "const rawWeeks = "
        + json.dumps(weeks, indent=2, ensure_ascii=True)
        + ";\n\nexport default rawWeeks;\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()