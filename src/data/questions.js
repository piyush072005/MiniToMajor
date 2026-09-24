// Questions extracted from the eight Joy of Computing with Python assignment PDFs.
const rawWeeks = [
  {
    "week": 1,
    "title": "Week 1",
    "topic": "Programming foundations, problem solving, loops, and Scratch",
    "questions": [
      {
        "id": "w1-q1",
        "type": "MCQ",
        "question": "Which statement best captures the professor's reason for learning programming despite the availability of many applications?",
        "options": [
          "Existing applications eliminate the need for programmers.",
          "Programming enables people to create, improve, and customize solutions beyond existing applications.",
          "Programming is useful only for developing mobile apps.",
          "Learning programming is compulsory for every profession."
        ],
        "correctAnswers": [
          "Programming enables people to create, improve, and customize solutions beyond existing applications."
        ],
        "explanation": "The professor compares software to buildings\u2014existing solutions do not prevent creating better or more customized ones."
      },
      {
        "id": "w1-q2",
        "type": "MCQ",
        "question": "According to the professor, why have multiple programming languages evolved over time?",
        "options": [
          "Each country develops its own programming language.",
          "Different languages were designed to solve different types of problems and improve programming.",
          "Older programming languages cannot run on modern computers.",
          "Every programmer must create a new programming language."
        ],
        "correctAnswers": [
          "Different languages were designed to solve different types of problems and improve programming."
        ],
        "explanation": "Programming languages evolved to address different domains and make programming more effective and easier."
      },
      {
        "id": "w1-q3",
        "type": "MCQ",
        "question": "What was the primary purpose of the hand-gesture classroom activity?",
        "options": [
          "To improve students' memory.",
          "To demonstrate that programming involves giving clear instructions using agreed-upon symbols.",
          "To teach sign language.",
          "To measure students' reaction speed."
        ],
        "correctAnswers": [
          "To demonstrate that programming involves giving clear instructions using agreed-upon symbols."
        ],
        "explanation": "The activity illustrated that programming is fundamentally about communicating precise instructions through symbols."
      },
      {
        "id": "w1-q4",
        "type": "MCQ",
        "question": "According to the professor, what is the most effective way to become proficient in programming?",
        "options": [
          "Memorize every programming language before writing code.",
          "Begin with advanced programming problems.",
          "Practice regularly, stay motivated, and learn gradually through small steps.",
          "Depend entirely on modern programming tools and IDEs."
        ],
        "correctAnswers": [
          "Practice regularly, stay motivated, and learn gradually through small steps."
        ],
        "explanation": "The professor emphasizes that programming is a skill developed through consistent practice and gradual learning."
      },
      {
        "id": "w1-q5",
        "type": "MCQ",
        "question": "Which conclusion would Riya most likely draw after attending the session?",
        "options": [
          "Programming is a problem-solving skill that can benefit people across many disciplines.",
          "Programming is valuable only for software engineers.",
          "Programming is primarily about memorizing the syntax of different languages.",
          "Existing software packages make programming unnecessary."
        ],
        "correctAnswers": [
          "Programming is a problem-solving skill that can benefit people across many disciplines."
        ],
        "explanation": "The session highlights that programming is a transferable problem-solving skill applicable to diverse fields such as economics, science, business, and healthcare."
      },
      {
        "id": "w1-q6",
        "type": "MCQ",
        "question": "Why did the second student recommend using a loop instead of writing every movement instruction separately?",
        "options": [
          "Loops allow repeated actions to be expressed with fewer instructions while preserving the same behavior.",
          "Loops make the robot move faster.",
          "Loops reduce the distance travelled by the robot.",
          "Loops automatically correct programming errors."
        ],
        "correctAnswers": [
          "Loops allow repeated actions to be expressed with fewer instructions while preserving the same behavior."
        ],
        "explanation": "A loop eliminates repetitive code by executing the same sequence multiple times."
      },
      {
        "id": "w1-q7",
        "type": "MCQ",
        "question": "In the improved program, what is the primary purpose of using a variable for the travel distance?",
        "options": [
          "To store the robot's battery level.",
          "To allow the distance to change automatically after each repetition.",
          "To count how many students are programming.",
          "To increase the robot's speed."
        ],
        "correctAnswers": [
          "To allow the distance to change automatically after each repetition."
        ],
        "explanation": "The variable stores the current distance and is updated after each iteration, allowing the robot to travel progressively farther."
      },
      {
        "id": "w1-q8",
        "type": "MCQ",
        "question": "The instructor later replaces the fixed starting distance with another variable. What is the main advantage of this change?",
        "options": [
          "The robot no longer requires a loop.",
          "The same program can easily be reused for different starting distances without rewriting the logic.",
          "The program will execute only once.",
          "Variables automatically make the program run faster."
        ],
        "correctAnswers": [
          "The same program can easily be reused for different starting distances without rewriting the logic."
        ],
        "explanation": "Replacing fixed values with variables increases flexibility and reusability."
      },
      {
        "id": "w1-q9",
        "type": "MCQ",
        "question": "Suppose a student removes the statement that updates the distance variable inside the loop. Which outcome is most likely?",
        "options": [
          "The robot will continue repeating the same movement distance in every round.",
          "The robot will stop after the first movement.",
          "The robot will automatically choose new distances.",
          "The loop will immediately terminate."
        ],
        "correctAnswers": [
          "The robot will continue repeating the same movement distance in every round."
        ],
        "explanation": "Without updating the variable, its value remains unchanged, so every iteration performs the same movement."
      },
      {
        "id": "w1-q10",
        "type": "MCQ",
        "question": "Which statement best summarizes the role of loops in programming?",
        "options": [
          "Loops are useful only for mathematical calculations.",
          "Loops replace the need for variables.",
          "Loops help automate repetitive tasks and make programs easier to modify and maintain.",
          "Loops should be avoided because they make programs difficult to understand."
        ],
        "correctAnswers": [
          "Loops help automate repetitive tasks and make programs easier to modify and maintain."
        ],
        "explanation": "Loops improve readability, reduce duplication, and make programs easier to update and extend."
      },
      {
        "id": "w1-q11",
        "type": "MCQ",
        "question": "Which Scratch block determines the direction of the sprite before its final movement of 10 steps?",
        "options": [
          "move 5 steps (first block)",
          "turn 15 degrees",
          "move 5 steps (third block)",
          "point in direction 90\u00b0"
        ],
        "correctAnswers": [
          "point in direction 90\u00b0"
        ],
        "explanation": "The point in direction 90\u00b0 block sets the sprite's direction immediately before the final move 10 steps block."
      },
      {
        "id": "w1-q12",
        "type": "MCQ",
        "question": "What is the purpose of the turn 15 degrees block in this program?",
        "options": [
          "It changes the sprite's direction before the second movement.",
          "It changes the sprite's position by 15 steps.",
          "It changes the direction for the entire program, including after the point in direction block.",
          "It makes the sprite move automatically."
        ],
        "correctAnswers": [
          "It changes the sprite's direction before the second movement."
        ],
        "explanation": "The turn block only changes the current direction. The next movement follows this new direction until another direction block changes it."
      },
      {
        "id": "w1-q13",
        "type": "MCQ",
        "question": "Suppose the point in direction 90\u00b0 block is removed while keeping all other blocks unchanged. Which statement is most likely to be true?",
        "options": [
          "The final movement will continue in the direction established by the earlier turn.",
          "The sprite will not execute the last move.",
          "The sprite will return to its starting position.",
          "The program will stop with an error."
        ],
        "correctAnswers": [
          "The final movement will continue in the direction established by the earlier turn."
        ],
        "explanation": "Without the point in direction block, the sprite keeps its current direction after the 15\u00b0 turn."
      },
      {
        "id": "w1-q14",
        "type": "MCQ",
        "question": "Which Scratch blocks in the program only change the sprite's position and never its direction?",
        "options": [
          "the two move 5 blocks",
          "all three move blocks",
          "turn and point",
          "move 10 and point"
        ],
        "correctAnswers": [
          "all three move blocks"
        ],
        "explanation": "The move blocks change only the sprite's position. They do not alter its facing direction."
      },
      {
        "id": "w1-q15",
        "type": "MCQ",
        "question": "A student accidentally swaps the positions of the turn 15 degrees block and the point in direction 90\u00b0 block. What is the most likely effect?",
        "options": [
          "The sprite will follow exactly the same path.",
          "The final movement will occur after turning 15\u00b0 from 90\u00b0, producing a different path.",
          "The sprite will not execute the second movement.",
          "The program will become an infinite loop."
        ],
        "correctAnswers": [
          "The final movement will occur after turning 15\u00b0 from 90\u00b0, producing a different path."
        ],
        "explanation": "Scratch executes blocks sequentially. Swapping the two direction blocks changes the direction before the final movement, resulting in a different path."
      },
      {
        "id": "w1-q16",
        "type": "MCQ",
        "question": "Why does the program use the expression counter mod 2 = 0?",
        "options": [
          "To check whether the current round number is even.",
          "To stop the repeat loop after two iterations.",
          "To calculate the total score.",
          "To reset the bonus variable."
        ],
        "correctAnswers": [
          "To check whether the current round number is even."
        ],
        "explanation": "The modulo operation returns the remainder after division by 2. A remainder of 0 indicates an even number."
      },
      {
        "id": "w1-q17",
        "type": "MCQ",
        "question": "Which variable is updated in every iteration of the repeat loop, regardless of the outcome of the if-else condition?",
        "options": [
          "bonus",
          "counter",
          "score",
          "Both score and counter"
        ],
        "correctAnswers": [
          "Both score and counter"
        ],
        "explanation": "Every iteration increases both score and counter. The bonus changes in both branches, but by different amounts."
      },
      {
        "id": "w1-q18",
        "type": "MCQ",
        "question": "What is the purpose of the statement change score by bonus placed after the repeat loop?",
        "options": [
          "It resets the score before displaying the final message.",
          "It adds the total bonus accumulated during all iterations to the final score.",
          "It increases the bonus by the current score.",
          "It determines how many times the loop executes."
        ],
        "correctAnswers": [
          "It adds the total bonus accumulated during all iterations to the final score."
        ],
        "explanation": "The bonus is accumulated during the loop and added to the score only once after the loop finishes."
      },
      {
        "id": "w1-q19",
        "type": "MCQ",
        "question": "Suppose the statement change score by bonus is moved inside the repeat loop, immediately before the if condition. What would be the most likely effect?",
        "options": [
          "The final score would become much larger because the bonus would be added repeatedly.",
          "The final score would remain unchanged.",
          "The bonus variable would always become zero.",
          "The repeat loop would execute fewer times."
        ],
        "correctAnswers": [
          "The final score would become much larger because the bonus would be added repeatedly."
        ],
        "explanation": "Adding the accumulated bonus during every iteration would repeatedly increase the score, resulting in a much larger final value."
      },
      {
        "id": "w1-q20",
        "type": "MCQ",
        "question": "Which statement best describes how the Scratch program decides which message to display?",
        "options": [
          "The message depends only on the value of counter.",
          "The message depends only on the value of bonus.",
          "The program first computes the final score and then checks the score against the conditions in order.",
          "All three messages are displayed one after another."
        ],
        "correctAnswers": [
          "The program first computes the final score and then checks the score against the conditions in order."
        ],
        "explanation": "After the bonus is added to the score, the program evaluates the conditions sequentially. Once a condition is true, the corresponding message is displayed."
      }
    ]
  },
  {
    "week": 2,
    "title": "Week 2",
    "topic": "Input, variables, conditionals, loops, and basic Python programs",
    "questions": [
      {
        "id": "w2-q1",
        "type": "MCQ",
        "question": "Why does the registration kiosk ask each student to enter their name?",
        "options": [
          "To personalize the welcome message and participation slip.",
          "To make the computer process information faster.",
          "To install the coding software.",
          "To increase the computer's storage."
        ],
        "correctAnswers": [
          "To personalize the welcome message and participation slip."
        ],
        "explanation": "The student's name is collected so the computer can use it in personalized messages and printed information."
      },
      {
        "id": "w2-q2",
        "type": "MCQ",
        "question": "A student first enters their age as 15, but later realizes it should be 16 and updates it before the participation slip is printed. Which age will appear on the slip?",
        "options": [
          "15",
          "Both 15 and 16",
          "16",
          "No age will be displayed."
        ],
        "correctAnswers": [
          "16"
        ],
        "explanation": "The latest value replaces the previous one, so the updated age is used."
      },
      {
        "id": "w2-q3",
        "type": "MCQ",
        "question": "The computer displays a greeting that includes the student's name without asking for it again. How is this possible?",
        "options": [
          "The computer remembers every student's name forever.",
          "The name is stored and reused whenever needed during the program.",
          "The greeting works only for the first student.",
          "The student secretly enters the name again."
        ],
        "correctAnswers": [
          "The name is stored and reused whenever needed during the program."
        ],
        "explanation": "The program stores the entered name and can use it multiple times without asking again."
      },
      {
        "id": "w2-q4",
        "type": "MCQ",
        "question": "A student accidentally enters the name Riya instead of Diya. Before the participation slip is printed, the mistake is corrected. What is the most likely outcome?",
        "options": [
          "The slip will show Riya.",
          "The slip will show both Riya and Diya.",
          "The slip will show Diya.",
          "The slip will not display any name."
        ],
        "correctAnswers": [
          "The slip will show Diya."
        ],
        "explanation": "Once the information is updated, the program uses the corrected value instead of the old one."
      },
      {
        "id": "w2-q5",
        "type": "MCQ",
        "question": "Why is it useful for the program to store information like a student's name and age?",
        "options": [
          "It allows the same information to be used multiple times without asking the student again.",
          "It permanently stores the information on every computer.",
          "It prevents the program from displaying messages.",
          "It eliminates the need for user input in all future programs."
        ],
        "correctAnswers": [
          "It allows the same information to be used multiple times without asking the student again."
        ],
        "explanation": "Storing information allows the program to reuse it whenever needed during its execution, making the interaction more efficient."
      },
      {
        "id": "w2-q6",
        "type": "MCQ",
        "question": "Which line collects the name of the customer?",
        "options": [
          "Line 1",
          "Line 2",
          "Line 3",
          "Line 8"
        ],
        "correctAnswers": [
          "Line 2"
        ],
        "explanation": "Line 2 uses input() to ask the customer to enter their name."
      },
      {
        "id": "w2-q7",
        "type": "MCQ",
        "question": "A student initially enters Sandwich as the food item. What will be displayed in Line 7?",
        "options": [
          "Sandwich",
          "Sandwich Pasta",
          "Pasta",
          "No food item will be displayed."
        ],
        "correctAnswers": [
          "Pasta"
        ],
        "explanation": "Line 6 changes the value of order to Pasta, so the updated value is printed."
      },
      {
        "id": "w2-q8",
        "type": "MCQ",
        "question": "Which variable stores the name of the customer throughout the program?",
        "options": [
          "order",
          "customer",
          "input",
          "print"
        ],
        "correctAnswers": [
          "customer"
        ],
        "explanation": "The variable customer stores the user's name and is used whenever the program needs it."
      },
      {
        "id": "w2-q9",
        "type": "MCQ",
        "question": "If the customer enters Neha as the name, what will be displayed in Line 8?",
        "options": [
          "Thank you for your order, customer",
          "Thank you for your order, Neha",
          "Thank you for your order, Pasta",
          "Thank you for your order"
        ],
        "correctAnswers": [
          "Thank you for your order, Neha"
        ],
        "explanation": "The variable customer contains the value Neha, which is displayed in the final message."
      },
      {
        "id": "w2-q10",
        "type": "MCQ",
        "question": "Why is the variable order updated in Line 6 instead of creating another variable?",
        "options": [
          "A variable can only store one value at a time, and the latest value replaces the previous one.",
          "Python does not allow more than one variable in a program.",
          "The original value cannot be changed.",
          "Updating a variable permanently changes all future programs."
        ],
        "correctAnswers": [
          "A variable can only store one value at a time, and the latest value replaces the previous one."
        ],
        "explanation": "Assigning a new value to a variable replaces its previous value, so the program always uses the latest information."
      },
      {
        "id": "w2-q11",
        "type": "MCQ",
        "question": "Why does the program convert the customer's entered price into a number before calculating the discount?",
        "options": [
          "To make the input appear on the screen.",
          "To allow mathematical operations such as multiplication.",
          "To permanently save the customer's purchase history.",
          "To reduce the size of the program."
        ],
        "correctAnswers": [
          "To allow mathematical operations such as multiplication."
        ],
        "explanation": "Keyboard input is initially treated as text. Converting it to a number allows arithmetic operations like calculating discounts."
      },
      {
        "id": "w2-q12",
        "type": "MCQ",
        "question": "A customer enters the price of a book as \u20b9800. After applying a 10% discount, what amount should the customer pay?",
        "options": [
          "\u20b9720",
          "\u20b9780",
          "\u20b9880",
          "\u20b9700"
        ],
        "correctAnswers": [
          "\u20b9720"
        ],
        "explanation": "A 10% discount means the customer pays 90% of the original price: \u20b9800 \u00d7 0.9 = \u20b9720."
      },
      {
        "id": "w2-q13",
        "type": "MCQ",
        "question": "During testing, a developer forgets to convert the entered price into a number before performing calculations. What is the most likely outcome?",
        "options": [
          "The calculations may fail or produce unexpected results.",
          "The discount becomes 20% automatically.",
          "The program permanently deletes the input.",
          "Python automatically fixes the mistake."
        ],
        "correctAnswers": [
          "The calculations may fail or produce unexpected results."
        ],
        "explanation": "Without converting the input into a numeric type, Python treats it as text, so arithmetic operations cannot be performed correctly."
      },
      {
        "id": "w2-q14",
        "type": "MCQ",
        "question": "Another developer accidentally removes the required colon (:) from a Python statement. What is the most likely result?",
        "options": [
          "The program will ignore the missing colon and continue.",
          "Python will report a syntax error.",
          "The program will apply the wrong discount.",
          "The program will ask the user to re-enter the price."
        ],
        "correctAnswers": [
          "Python will report a syntax error."
        ],
        "explanation": "Python follows strict syntax rules. Missing required symbols, such as a colon, results in a syntax error."
      },
      {
        "id": "w2-q15",
        "type": "MSQ",
        "question": "Which of the following statements are correct about the bookstore's discount program? (Select all that apply.)",
        "options": [
          "User input must often be converted into a number before performing arithmetic calculations.",
          "Python requires correct syntax and indentation for a program to run properly.",
          "A 10% discount means the customer pays 90% of the original price.",
          "Python automatically treats every keyboard input as a number."
        ],
        "correctAnswers": [
          "User input must often be converted into a number before performing arithmetic calculations.",
          "Python requires correct syntax and indentation for a program to run properly.",
          "A 10% discount means the customer pays 90% of the original price."
        ],
        "explanation": "\u2022 A: Correct. User input is initially treated as text and often needs conversion. \u2022 B: Correct. Python is sensitive to syntax and indentation. \u2022 C: Correct. Paying after a 10% discount means paying 90% of the original price. \u2022 D: Incorrect. Keyboard input is treated as text unless explicitly converted."
      },
      {
        "id": "w2-q16",
        "type": "MCQ",
        "question": "What is displayed first when the program starts?",
        "options": [
          "Do Exercise 1",
          "Continue? (1 = Yes, 0 = No)",
          "Morning Exercise Begins",
          "Exercise Session Over"
        ],
        "correctAnswers": [
          "Morning Exercise Begins"
        ],
        "explanation": "Line 1 executes before the loop begins, displaying the welcome message."
      },
      {
        "id": "w2-q17",
        "type": "MCQ",
        "question": "The teacher enters 1 three times and then enters 0. Which exercise numbers will be displayed?",
        "options": [
          "1, 2, 3",
          "1, 2, 3, 4",
          "0, 1, 2, 3",
          "2, 3, 4"
        ],
        "correctAnswers": [
          "1, 2, 3, 4"
        ],
        "explanation": "The program displays Exercise 1 initially. Each time the teacher enters 1, the next exercise number is displayed. After entering 0, the loop stops, so the displayed numbers are 1, 2, 3, and 4."
      },
      {
        "id": "w2-q18",
        "type": "MSQ",
        "question": "Which statements about the program are correct? (Select all that apply.)",
        "options": [
          "The value of count increases by 1 during each repetition.",
          "The while loop repeats only while continue_session is equal to 1.",
          "The message \"Exercise Session Over\" is displayed after the loop ends.",
          "The value of count decreases during each repetition."
        ],
        "correctAnswers": [
          "The value of count increases by 1 during each repetition.",
          "The while loop repeats only while continue_session is equal to 1.",
          "The message \"Exercise Session Over\" is displayed after the loop ends."
        ],
        "explanation": "\u2022 A: Correct. Line 7 increases count by 1. \u2022 B: Correct. The loop condition is checked in Line 5. \u2022 C: Correct. Line 10 runs after the loop finishes. \u2022 D: Incorrect. count never decreases."
      },
      {
        "id": "w2-q19",
        "type": "MCQ",
        "question": "Why is a while loop used in this program?",
        "options": [
          "Because the number of repetitions depends on the teacher's choice.",
          "Because the program always repeats exactly 10 times.",
          "Because Python cannot print numbers without a while loop.",
          "Because variables cannot be used inside a for loop."
        ],
        "correctAnswers": [
          "Because the number of repetitions depends on the teacher's choice."
        ],
        "explanation": "The teacher decides when to stop the exercise session, so the number of repetitions is not fixed beforehand."
      },
      {
        "id": "w2-q20",
        "type": "MSQ",
        "question": "Which of the following statements correctly compare for loops and while loops? (Select all that apply.)",
        "options": [
          "A for loop is useful when the number of repetitions is known in advance.",
          "A while loop continues until its condition becomes false.",
          "A while loop always executes exactly 10 times.",
          "Both for and while loops are used to repeat tasks."
        ],
        "correctAnswers": [
          "A for loop is useful when the number of repetitions is known in advance.",
          "A while loop continues until its condition becomes false.",
          "Both for and while loops are used to repeat tasks."
        ],
        "explanation": "\u2022 A: Correct. for loops are commonly used for a fixed number of repetitions. \u2022 B: Correct. A while loop keeps running as long as its condition is true. \u2022 C: Incorrect. A while loop may run any number of times depending on the condition. \u2022 D: Correct. Both loop types are repetition constructs used in programming."
      }
    ]
  },
  {
    "week": 3,
    "title": "Week 3",
    "topic": "Lists, tuples, dictionaries, sets, and estimation",
    "questions": [
      {
        "id": "w3-q1",
        "type": "MCQ",
        "question": "Why does the librarian sort the catalog of books?",
        "options": [
          "To remove duplicate book titles",
          "To make the books easier to organize and locate",
          "To increase the number of books in the catalog",
          "To replace old books with new ones"
        ],
        "correctAnswers": [
          "To make the books easier to organize and locate"
        ],
        "explanation": "Sorting arranges the book titles in a meaningful order, making them easier to organize, search, and analyze."
      },
      {
        "id": "w3-q2",
        "type": "MCQ",
        "question": "After sorting the catalog alphabetically, the librarian wants to display the books from Z to A. Which operation is most suitable?",
        "options": [
          "Count",
          "Append",
          "Reverse",
          "Length"
        ],
        "correctAnswers": [
          "Reverse"
        ],
        "explanation": "Reversing a sorted list changes the order from ascending (A\u2013Z) to descending (Z\u2013A)."
      },
      {
        "id": "w3-q3",
        "type": "MCQ",
        "question": "The librarian wants to know how many copies of the book Python Basics are present in the catalog. Which list operation is most appropriate?",
        "options": [
          "Length",
          "Reverse",
          "Insert",
          "Count"
        ],
        "correctAnswers": [
          "Count"
        ],
        "explanation": "The count() operation returns the number of times a particular item appears in the list."
      },
      {
        "id": "w3-q4",
        "type": "MCQ",
        "question": "A newly purchased encyclopedia must appear as the second item in the catalog instead of being added at the end. Which operation should be used?",
        "options": [
          "Insert",
          "Append",
          "Sort",
          "Reverse"
        ],
        "correctAnswers": [
          "Insert"
        ],
        "explanation": "The insert() operation places an item at a specified position in the list."
      },
      {
        "id": "w3-q5",
        "type": "MCQ",
        "question": "The librarian wants to know the total number of books currently stored in the catalog. Which operation provides this information?",
        "options": [
          "Count",
          "Length",
          "Reverse",
          "Slice"
        ],
        "correctAnswers": [
          "Length"
        ],
        "explanation": "The length operation returns the total number of elements present in the list."
      },
      {
        "id": "w3-q6",
        "type": "MCQ",
        "question": "What will be the output of line 6?",
        "options": [
          "['Aman', 'Aman', 'Bhavna', 'Kiran', 'Neha', 'Riya', 'Sana']",
          "['Riya', 'Bhavna', 'Aman', 'Kiran', 'Neha', 'Aman', 'Sana']",
          "['Aman', 'Bhavna', 'Kiran', 'Neha', 'Riya', 'Sana']",
          "['Bhavna', 'Aman', 'Aman', 'Kiran', 'Neha', 'Riya', 'Sana']"
        ],
        "correctAnswers": [
          "['Aman', 'Aman', 'Bhavna', 'Kiran', 'Neha', 'Riya', 'Sana']"
        ],
        "explanation": "After appending and inserting, the list is sorted alphabetically before being printed."
      },
      {
        "id": "w3-q7",
        "type": "MCQ",
        "question": "What is stored in the variable batch after line 5?",
        "options": [
          "['Aman', 'Bhavna', 'Kiran', 'Neha']",
          "['Bhavna', 'Kiran', 'Neha', 'Riya']",
          "['Aman', 'Aman', 'Bhavna', 'Kiran']",
          "['Kiran', 'Neha', 'Riya', 'Sana']"
        ],
        "correctAnswers": [
          "['Aman', 'Bhavna', 'Kiran', 'Neha']"
        ],
        "explanation": "Slicing participants[1:5] returns elements at indices 1, 2, 3, and 4."
      },
      {
        "id": "w3-q8",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements are true after line 4?",
        "options": [
          "The participant Sana has been added to the list.",
          "The name Aman appears twice.",
          "The list contains 6 participants.",
          "The names are arranged alphabetically."
        ],
        "correctAnswers": [
          "The participant Sana has been added to the list.",
          "The name Aman appears twice.",
          "The names are arranged alphabetically."
        ],
        "explanation": "\u2022 A: True. append() adds Sana. \u2022 B: True. Aman appears twice. \u2022 C: False. The list contains 7 participants. \u2022 D: True. sort() arranges the names alphabetically."
      },
      {
        "id": "w3-q9",
        "type": "MCQ",
        "question": "Which line inserts the participant Bhavna at a specific position in the list?",
        "options": [
          "Line 1",
          "Line 2",
          "Line 3",
          "Line 5"
        ],
        "correctAnswers": [
          "Line 3"
        ],
        "explanation": "insert(1, \"Bhavna\") places Bhavna at index 1 before sorting."
      },
      {
        "id": "w3-q10",
        "type": "MCQ",
        "question": "Which operation is demonstrated by line 5?",
        "options": [
          "Appending a new participant",
          "Sorting the participant list",
          "Counting duplicate names",
          "Extracting a portion of the participant list"
        ],
        "correctAnswers": [
          "Extracting a portion of the participant list"
        ],
        "explanation": "The slicing operation creates a new list containing only a selected range of participants."
      },
      {
        "id": "w3-q11",
        "type": "MCQ",
        "question": "What should the system display when the number 15 is reached?",
        "options": [
          "15",
          "Walk",
          "Wait",
          "WalkWait"
        ],
        "correctAnswers": [
          "WalkWait"
        ],
        "explanation": "Since 15 is divisible by both 3 and 5, the system displays WalkWait."
      },
      {
        "id": "w3-q12",
        "type": "MCQ",
        "question": "Which of the following numbers will display \"Walk\"?",
        "options": [
          "8",
          "12",
          "20",
          "25"
        ],
        "correctAnswers": [
          "12"
        ],
        "explanation": "12 is divisible by 3 but not by 5."
      },
      {
        "id": "w3-q13",
        "type": "MCQ",
        "question": "A programmer first checks whether a number is divisible by 3, then checks whether it is divisible by 5, and only after that checks whether it is divisible by both 3 and 5. What problem is likely to occur?",
        "options": [
          "Numbers divisible by both 3 and 5 will be displayed as Walk instead of WalkWait.",
          "Numbers divisible by 5 will never be displayed.",
          "The loop will never stop.",
          "The program will print every number twice."
        ],
        "correctAnswers": [
          "Numbers divisible by both 3 and 5 will be displayed as Walk instead of WalkWait."
        ],
        "explanation": "The first condition is satisfied for numbers like 15, so the later check for both conditions is never reached."
      },
      {
        "id": "w3-q14",
        "type": "MCQ",
        "question": "Which programming concept allows the system to process every number from 1 to 30 automatically?",
        "options": [
          "Function",
          "List",
          "Loop",
          "Variable"
        ],
        "correctAnswers": [
          "Loop"
        ],
        "explanation": "A loop repeats the same set of instructions for each number in the specified range."
      },
      {
        "id": "w3-q15",
        "type": "MCQ",
        "question": "Which statement best explains why the condition \"divisible by both 3 and 5\" should be checked before checking divisibility by 3 or 5 individually?",
        "options": [
          "It reduces the number of iterations in the loop.",
          "It ensures that numbers satisfying both conditions receive the correct output.",
          "It changes the range of numbers processed.",
          "It makes the program run without using loops."
        ],
        "correctAnswers": [
          "It ensures that numbers satisfying both conditions receive the correct output."
        ],
        "explanation": "Checking the combined condition first prevents numbers like 15 from being incorrectly classified as only divisible by 3 or only divisible by 5."
      },
      {
        "id": "w3-q16",
        "type": "MCQ",
        "question": "(MCQ) Why did the researchers ask a large number of volunteers instead of only one wildlife expert?",
        "options": [
          "To reduce the size of the dataset",
          "Because a larger group can produce a reliable collective estimate",
          "Because volunteers always know the exact answer",
          "To avoid using statistical measures"
        ],
        "correctAnswers": [
          "Because a larger group can produce a reliable collective estimate"
        ],
        "explanation": "The wisdom of crowds suggests that combining many independent estimates often leads to a reliable result."
      },
      {
        "id": "w3-q17",
        "type": "MCQ",
        "question": "(MCQ) Which statistical measure is specifically designed to reduce the effect of extremely high and extremely low estimates?",
        "options": [
          "Maximum",
          "Median",
          "10% Trimmed Mean",
          "Range"
        ],
        "correctAnswers": [
          "10% Trimmed Mean"
        ],
        "explanation": "A trimmed mean removes a percentage of the smallest and largest values before calculating the average."
      },
      {
        "id": "w3-q18",
        "type": "MCQ",
        "question": "(MCQ) The researchers create a histogram of all the estimates using Matplotlib. What is the main purpose of this graph?",
        "options": [
          "To sort the estimates automatically",
          "To visualize how the estimates are distributed",
          "To calculate the trimmed mean",
          "To remove incorrect estimates"
        ],
        "correctAnswers": [
          "To visualize how the estimates are distributed"
        ],
        "explanation": "A histogram helps visualize the distribution and frequency of estimates."
      },
      {
        "id": "w3-q19",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements about 10% trimmed mean are correct?",
        "options": [
          "The data should be sorted before removing extreme values.",
          "The smallest and largest 10% of estimates are removed.",
          "Every estimate is included in the final calculation.",
          "It helps reduce the influence of outliers."
        ],
        "correctAnswers": [
          "The data should be sorted before removing extreme values.",
          "The smallest and largest 10% of estimates are removed.",
          "It helps reduce the influence of outliers."
        ],
        "explanation": "\u2022 A: Correct. Sorting is required to identify the extreme values. \u2022 B: Correct. Both the lowest and highest 10% are removed. \u2022 C: Incorrect. Extreme values are excluded. \u2022 D: Correct. This reduces the effect of unusually high or low estimates."
      },
      {
        "id": "w3-q20",
        "type": "MSQ",
        "question": "(MSQ) The researchers use the following statement before calculating the trimmed mean: estimates.sort() Which of the following are true about this statement?",
        "options": [
          "It arranges the estimates in ascending order.",
          "It changes the original list of estimates.",
          "It creates a new sorted copy while leaving the original unchanged.",
          "It helps identify the smallest and largest estimates for trimming."
        ],
        "correctAnswers": [
          "It arranges the estimates in ascending order.",
          "It changes the original list of estimates.",
          "It helps identify the smallest and largest estimates for trimming."
        ],
        "explanation": "\u2022 A: Correct. sort() arranges elements in ascending order. \u2022 B: Correct. sort() modifies the original list. \u2022 C: Incorrect. sort() does not create a new list; sorted() does. \u2022 D: Correct. Once sorted, extreme values are easy to locate and remove."
      }
    ]
  },
  {
    "week": 4,
    "title": "Week 4",
    "topic": "Randomness, dates, simulations, and game logic",
    "questions": [
      {
        "id": "w4-q1",
        "type": "MCQ",
        "question": "Why does the program check whether a randomly generated year is a leap year?",
        "options": [
          "To ensure that February is assigned the correct number of days.",
          "To reduce the number of duplicate birthdays.",
          "To generate birthdays in chronological order.",
          "To calculate the person's age."
        ],
        "correctAnswers": [
          "To ensure that February is assigned the correct number of days."
        ],
        "explanation": "Leap years determine whether February has 28 or 29 days."
      },
      {
        "id": "w4-q2",
        "type": "MCQ",
        "question": "Which Python library is primarily responsible for creating valid calendar dates in the program?",
        "options": [
          "random",
          "math",
          "datetime",
          "calendar"
        ],
        "correctAnswers": [
          "datetime"
        ],
        "explanation": "The datetime library is used to represent birthdays as valid date objects."
      },
      {
        "id": "w4-q3",
        "type": "MCQ",
        "question": "Why does the program convert each birthday into its \"day of the year\" value?",
        "options": [
          "To calculate the age of each person.",
          "To compare birthdays without considering the birth year.",
          "To reduce the amount of memory used.",
          "To make sorting unnecessary."
        ],
        "correctAnswers": [
          "To compare birthdays without considering the birth year."
        ],
        "explanation": "Only the day and month matter when checking for birthday collisions."
      },
      {
        "id": "w4-q4",
        "type": "MCQ",
        "question": "Why is the list of day-of-year values sorted before checking for collisions?",
        "options": [
          "To generate birthdays more efficiently.",
          "To remove invalid dates automatically.",
          "To arrange birthdays by year.",
          "To make duplicate values easier to identify."
        ],
        "correctAnswers": [
          "To make duplicate values easier to identify."
        ],
        "explanation": "Sorting places identical values next to each other, making collisions easy to detect."
      },
      {
        "id": "w4-q5",
        "type": "MCQ",
        "question": "Why does the program usually produce a different number of collisions each time it is executed?",
        "options": [
          "The random birthday generation creates a different set of birthdays in every run.",
          "The leap year calculation changes during execution.",
          "The sorting algorithm produces a different order every time.",
          "The datetime library stores dates differently in each execution."
        ],
        "correctAnswers": [
          "The random birthday generation creates a different set of birthdays in every run."
        ],
        "explanation": "Different randomly generated birthdays result in different collision counts."
      },
      {
        "id": "w4-q6",
        "type": "MCQ",
        "question": "What is the primary objective of the Python program?",
        "options": [
          "To generate two cards with exactly one common symbol.",
          "To sort symbols alphabetically before displaying them.",
          "To count the number of vowels on each card.",
          "To generate identical cards every time."
        ],
        "correctAnswers": [
          "To generate two cards with exactly one common symbol."
        ],
        "explanation": "The program is designed so that the two cards share exactly one common symbol."
      },
      {
        "id": "w4-q7",
        "type": "MSQ",
        "question": "(MSQ) Which of the following steps help ensure that the two cards contain exactly one common symbol? (Select all that apply.)",
        "options": [
          "Removing the common symbol from the symbol pool after placing it.",
          "Removing every newly assigned symbol from the available symbol pool.",
          "Randomly choosing only one symbol to be shared between both cards.",
          "Sorting the cards after they are generated."
        ],
        "correctAnswers": [
          "Removing the common symbol from the symbol pool after placing it.",
          "Removing every newly assigned symbol from the available symbol pool.",
          "Randomly choosing only one symbol to be shared between both cards."
        ],
        "explanation": "Removing used symbols prevents extra matches, while random positions determine where the single common symbol appears. Sorting does not affect the card contents."
      },
      {
        "id": "w4-q8",
        "type": "MCQ",
        "question": "Why does the program use random.choice()?",
        "options": [
          "To sort the available symbols.",
          "To select a symbol randomly from the available symbol list.",
          "To compare the two cards.",
          "To convert uppercase letters into lowercase letters."
        ],
        "correctAnswers": [
          "To select a symbol randomly from the available symbol list."
        ],
        "explanation": "random.choice() selects a random element from a list."
      },
      {
        "id": "w4-q9",
        "type": "MCQ",
        "question": "Why was random.randint(0, 5) changed to random.randint(0, 4) while selecting card positions?",
        "options": [
          "The cards contain only four symbols.",
          "The random library cannot generate the value 5.",
          "A five-element list has valid indices only from 0 to 4.",
          "Python lists always begin with index 1."
        ],
        "correctAnswers": [
          "A five-element list has valid indices only from 0 to 4."
        ],
        "explanation": "A list with five elements has indices 0 through 4; index 5 is out of range."
      },
      {
        "id": "w4-q10",
        "type": "MCQ",
        "question": "What does the program do after displaying both generated cards?",
        "options": [
          "It automatically highlights the common symbol.",
          "It asks the player to identify the common symbol.",
          "It generates another pair of cards immediately.",
          "It removes all symbols from both cards."
        ],
        "correctAnswers": [
          "It asks the player to identify the common symbol."
        ],
        "explanation": "The player is prompted to enter the common symbol, and the program checks whether the answer is correct."
      },
      {
        "id": "w4-q11",
        "type": "MCQ",
        "question": "Which programming construct is primarily responsible for creating the two-dimensional matrix in the prototype?",
        "options": [
          "Nested list comprehension",
          "Nested if-else statements",
          "Nested while loops",
          "Function recursion"
        ],
        "correctAnswers": [
          "Nested list comprehension"
        ],
        "explanation": "The matrix is created using a nested list comprehension that generates rows and columns."
      },
      {
        "id": "w4-q12",
        "type": "MCQ",
        "question": "If the value of n is changed from 3 to 5, which statement remains true without modifying the rest of the program?",
        "options": [
          "The number 1 will always be placed in the center of the matrix.",
          "The number 1 will always be placed in the middle row of the last column.",
          "The matrix will automatically become a valid Magic Square.",
          "The program will generate numbers from 1 to 25 automatically."
        ],
        "correctAnswers": [
          "The number 1 will always be placed in the middle row of the last column."
        ],
        "explanation": "The starting position is determined by the algorithm and remains the middle row of the last column for any odd-sized matrix."
      },
      {
        "id": "w4-q13",
        "type": "MCQ",
        "question": "Why is the matrix initialized with zeros instead of leaving it empty?",
        "options": [
          "To allow the program to identify cells that have not yet been assigned a value.",
          "To ensure that every row initially has the same sum.",
          "To improve the speed of printing the matrix.",
          "To prevent duplicate numbers from being generated."
        ],
        "correctAnswers": [
          "To allow the program to identify cells that have not yet been assigned a value."
        ],
        "explanation": "Zero acts as a placeholder, making it easy to distinguish occupied and unoccupied cells."
      },
      {
        "id": "w4-q14",
        "type": "MCQ",
        "question": "What is the primary limitation of this prototype compared to the complete Magic Square algorithm?",
        "options": [
          "It cannot create matrices larger than 3 \u00d7 3.",
          "It places only the first number and does not determine positions for the remaining numbers.",
          "It cannot display the matrix.",
          "It requires recursion to execute."
        ],
        "correctAnswers": [
          "It places only the first number and does not determine positions for the remaining numbers."
        ],
        "explanation": "The prototype demonstrates only the initialization and placement of the first value."
      },
      {
        "id": "w4-q15",
        "type": "MSQ",
        "question": "Which of the following statements correctly describe the prototype program? (Select all that apply.)",
        "options": [
          "It allocates memory for an n \u00d7 n matrix before placing any numbers.",
          "It determines the initial position of the first number using the Magic Square algorithm.",
          "It uses nested iteration while creating the matrix.",
          "It verifies that every row, column, and diagonal has the same sum."
        ],
        "correctAnswers": [
          "It allocates memory for an n \u00d7 n matrix before placing any numbers.",
          "It determines the initial position of the first number using the Magic Square algorithm.",
          "It uses nested iteration while creating the matrix."
        ],
        "explanation": "The prototype creates the matrix, determines the starting position, and uses nested iteration for initialization, but it does not validate or construct the complete Magic Square."
      },
      {
        "id": "w4-q16",
        "type": "MCQ",
        "question": "Which function is responsible for creating the initial masked movie title displayed to the player?",
        "options": [
          "unlock()",
          "is_present()",
          "create_question()",
          "random.choice()"
        ],
        "correctAnswers": [
          "create_question()"
        ],
        "explanation": "create_question() replaces alphabetic characters with * while preserving spaces and other characters."
      },
      {
        "id": "w4-q17",
        "type": "MCQ",
        "question": "The player enters a letter that is not present in the selected movie title. What happens next?",
        "options": [
          "The movie title is selected again.",
          "The current masked title remains unchanged, and a message is displayed.",
          "The game terminates immediately.",
          "All hidden letters are revealed."
        ],
        "correctAnswers": [
          "The current masked title remains unchanged, and a message is displayed."
        ],
        "explanation": "If the guessed letter is absent, the program displays \"Letter not found.\" and continues with the existing masked title."
      },
      {
        "id": "w4-q18",
        "type": "MCQ",
        "question": "Why does the unlock() function receive both the original movie title and the current masked title as parameters?",
        "options": [
          "To compare their lengths before displaying the result.",
          "To generate a new random movie title.",
          "To reveal only the newly guessed letters while preserving previously revealed letters.",
          "To convert the movie title into uppercase."
        ],
        "correctAnswers": [
          "To reveal only the newly guessed letters while preserving previously revealed letters."
        ],
        "explanation": "The original title identifies matching letters, while the masked title preserves letters revealed in earlier guesses."
      },
      {
        "id": "w4-q19",
        "type": "MCQ",
        "question": "Which condition causes the game loop to terminate?",
        "options": [
          "The player enters an incorrect letter.",
          "All letters in the movie title have been revealed.",
          "The player guesses five incorrect letters.",
          "The movie list becomes empty."
        ],
        "correctAnswers": [
          "All letters in the movie title have been revealed."
        ],
        "explanation": "The loop continues until the masked title becomes identical to the original movie title."
      },
      {
        "id": "w4-q20",
        "type": "MSQ",
        "question": "Which of the following statements about the program are correct? (Select all that apply.)",
        "options": [
          "random.choice() is used to select one movie title from the list.",
          "isalpha() ensures that spaces and non-alphabetic characters are replaced with *.",
          "The unlock() function may reveal multiple occurrences of the guessed letter in a single attempt.",
          "The player's input is converted to uppercase before it is checked against the movie title."
        ],
        "correctAnswers": [
          "random.choice() is used to select one movie title from the list.",
          "The unlock() function may reveal multiple occurrences of the guessed letter in a single attempt.",
          "The player's input is converted to uppercase before it is checked against the movie title."
        ],
        "explanation": "The program randomly selects a movie, converts the player's input to uppercase, and reveals every occurrence of a correctly guessed letter. isalpha() masks only alphabetic characters, leaving spaces and other non-alphabetic characters unchanged rather than replacing them."
      }
    ]
  },
  {
    "week": 5,
    "title": "Week 5",
    "topic": "Lists, searching, sorting, and game strategies",
    "questions": [
      {
        "id": "w5-q1",
        "type": "MCQ",
        "question": "(MCQ) How many key-value pairs are present in borrow_count immediately after the completion of Line 16?",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correctAnswers": [
          "5"
        ],
        "explanation": "Initially, borrow_count contains four key-value pairs. During the update process, \"Science\" and \"History\" are updated, while \"Art\" is added as a new key. Therefore, the dictionary contains five key-value pairs after Line 16."
      },
      {
        "id": "w5-q2",
        "type": "MCQ",
        "question": "(MCQ) Which statement correctly describes the execution of the else block (Lines 15\u201316)?",
        "options": [
          "It executes for every category in updates.",
          "It executes only when a category already exists in borrow_count.",
          "It executes only when a category is not present in borrow_count.",
          "It never executes because all categories already exist."
        ],
        "correctAnswers": [
          "It executes only when a category is not present in borrow_count."
        ],
        "explanation": "The else block is executed only when the condition category in borrow_count evaluates to False. In this program, only the category \"Art\" is absent from borrow_count, so the else block executes exactly once."
      },
      {
        "id": "w5-q3",
        "type": "MCQ",
        "question": "(MCQ) Immediately after executing Line 21 for the first time, what is the value of max_books?",
        "options": [
          "-1",
          "10",
          "12",
          "7"
        ],
        "correctAnswers": [
          "12"
        ],
        "explanation": "Before the second loop begins, max_books is initialized to -1. The first category processed is \"Fiction\" with a borrowing count of 12. Since 12 > -1, max_books is updated to 12."
      },
      {
        "id": "w5-q4",
        "type": "MCQ",
        "question": "(MCQ) Which variable stores the largest borrowing count after the program completes execution?",
        "options": [
          "highest",
          "category",
          "count",
          "max_books"
        ],
        "correctAnswers": [
          "max_books"
        ],
        "explanation": "The variable max_books stores the highest borrowing count encountered during the traversal of the dictionary. The variable highest stores the corresponding category name, while category and count represent the current key and value during iteration."
      },
      {
        "id": "w5-q5",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements are correct?",
        "options": [
          "The values of \"Science\" and \"History\" are increased.",
          "The value of \"Technology\" remains unchanged.",
          "Exactly one new key is added to the dictionary.",
          "The final dictionary contains fewer keys than the initial dictionary."
        ],
        "correctAnswers": [
          "The values of \"Science\" and \"History\" are increased.",
          "The value of \"Technology\" remains unchanged.",
          "Exactly one new key is added to the dictionary."
        ],
        "explanation": "\u2022 A: Correct. \"Science\" is updated from 8 to 12, and \"History\" is updated from 5 to 7. \u2022 B: Correct. \"Technology\" is not present in the updates dictionary, so its value remains unchanged. \u2022 C: Correct. \"Art\" is the only new category added to borrow_count. \u2022 D: Incorrect. The dictionary grows from four keys to five keys after the addition of \"Art\"."
      },
      {
        "id": "w5-q6",
        "type": "MCQ",
        "question": "(MCQ) What is the purpose of the dictionary wins_against?",
        "options": [
          "It stores the scores of both players.",
          "It stores the choices made by each player.",
          "It stores which move defeats another move.",
          "It stores the winner of each round."
        ],
        "correctAnswers": [
          "It stores which move defeats another move."
        ],
        "explanation": "The dictionary maps each move to the move it defeats. For example, \"Rock\" maps to \"Scissors\" because Rock beats Scissors."
      },
      {
        "id": "w5-q7",
        "type": "MCQ",
        "question": "(MCQ) What is the value of the score dictionary after the loop finishes?",
        "options": [
          "{\"Player A\": 2, \"Player B\": 2}",
          "{\"Player A\": 3, \"Player B\": 1}",
          "{\"Player A\": 4, \"Player B\": 0}",
          "{\"Player A\": 1, \"Player B\": 3}"
        ],
        "correctAnswers": [
          "{\"Player A\": 3, \"Player B\": 1}"
        ],
        "explanation": "Player A wins Rounds 1, 2, and 3, while Player B wins Round 5. Round 4 is a draw, so the final score is {\"Player A\": 3, \"Player B\": 1}."
      },
      {
        "id": "w5-q8",
        "type": "MCQ",
        "question": "(MCQ) What does the expression wins_against[playerA[i]] return?",
        "options": [
          "The current score of Player A.",
          "The move that defeats Player A's current move.",
          "The move defeated by Player A's current move.",
          "The current round number."
        ],
        "correctAnswers": [
          "The move defeated by Player A's current move."
        ],
        "explanation": "The expression retrieves the value associated with Player A's current move from the dictionary. For example, if Player A chooses \"Paper\", it returns \"Rock\"."
      },
      {
        "id": "w5-q9",
        "type": "MCQ",
        "question": "(MCQ) Which statement is printed at the end of the program?",
        "options": [
          "Player A Wins",
          "Player B Wins",
          "Match Draw",
          "No output is printed."
        ],
        "correctAnswers": [
          "Player A Wins"
        ],
        "explanation": "Player A scores 3 points, while Player B scores 1 point. Since Player A has the higher score, the program prints \"Player A Wins\"."
      },
      {
        "id": "w5-q10",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements are correct?",
        "options": [
          "The dictionary score is updated during program execution.",
          "The dictionary wins_against is modified during the program.",
          "The program records one drawn round.",
          "The statement score[\"Player A\"] += 1 updates the value associated with the key \"Player A\"."
        ],
        "correctAnswers": [
          "The dictionary score is updated during program execution.",
          "The program records one drawn round.",
          "The statement score[\"Player A\"] += 1 updates the value associated with the key \"Player A\"."
        ],
        "explanation": "The score dictionary is updated whenever a player wins a round, while wins_against is used only for lookups. One round ends in a draw, and score[\"Player A\"] += 1 increments Player A's score by one. Library Book Search System A digital library stores book IDs in a sorted list. When a student searches for a book, the librarian first performs a Linear Search to locate the book. Later, the system uses a Binary Search to improve search efficiency on the same sorted list. Study the following program and answer the questions."
      },
      {
        "id": "w5-q11",
        "type": "MCQ",
        "question": "(MCQ) Why is the list book_ids arranged in ascending order?",
        "options": [
          "To reduce memory usage.",
          "Because Binary Search requires the data to be sorted.",
          "Because Linear Search requires the data to be sorted.",
          "To avoid duplicate values."
        ],
        "correctAnswers": [
          "Because Binary Search requires the data to be sorted."
        ],
        "explanation": "Binary Search works correctly only when the elements are sorted. Linear Search does not require a sorted list."
      },
      {
        "id": "w5-q12",
        "type": "MCQ",
        "question": "(MCQ) What is the output of the program?",
        "options": [
          "Linear Search: 3 and Binary Search: 3",
          "Linear Search: 4 and Binary Search: 4",
          "Linear Search: 5 and Binary Search: 5",
          "Linear Search: -1 and Binary Search: -1"
        ],
        "correctAnswers": [
          "Linear Search: 4 and Binary Search: 4"
        ],
        "explanation": "The value 134 is present at index 4 in the list. Both search algorithms locate the same element and return the same index."
      },
      {
        "id": "w5-q13",
        "type": "MCQ",
        "question": "(MCQ) During the first iteration of the Binary Search loop, what is the value of mid?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswers": [
          "3"
        ],
        "explanation": "Initially, low = 0 and high = 7. Therefore, mid = (0 + 7) // 2 = 3."
      },
      {
        "id": "w5-q14",
        "type": "MCQ",
        "question": "(MCQ) Suppose the statement break on Line 9 is removed. Which statement is correct?",
        "options": [
          "The program produces an error.",
          "The Linear Search continues checking the remaining elements even after finding the target.",
          "The Binary Search stops working.",
          "The value of linear_index becomes -1."
        ],
        "correctAnswers": [
          "The Linear Search continues checking the remaining elements even after finding the target."
        ],
        "explanation": "Without the break, the loop continues until the end of the list. Since the target appears only once, the final value of linear_index remains unchanged."
      },
      {
        "id": "w5-q15",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements are correct?",
        "options": [
          "Linear Search checks elements one by one from the beginning of the list.",
          "Binary Search repeatedly divides the search space into two halves.",
          "Both Linear Search and Binary Search return index 4 for the given input.",
          "Binary Search can be applied correctly even if book_ids is not sorted."
        ],
        "correctAnswers": [
          "Linear Search checks elements one by one from the beginning of the list.",
          "Binary Search repeatedly divides the search space into two halves.",
          "Both Linear Search and Binary Search return index 4 for the given input."
        ],
        "explanation": "Linear Search examines elements sequentially, while Binary Search repeatedly halves the search range. Since the target exists at index 4, both algorithms return 4; however, Binary Search requires the list to be sorted."
      },
      {
        "id": "w5-q16",
        "type": "MCQ",
        "question": "(MCQ) How many elements would Linear Search examine before finding Gate 126?",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correctAnswers": [
          "7"
        ],
        "explanation": "Linear Search checks elements one by one from the beginning. Gate 126 is the 7th element in the list, so seven comparisons are required."
      },
      {
        "id": "w5-q17",
        "type": "MCQ",
        "question": "(MCQ) During the first comparison of Binary Search, which gate number is examined?",
        "options": [
          "112",
          "117",
          "121",
          "126"
        ],
        "correctAnswers": [
          "117"
        ],
        "explanation": "The middle index of a 10-element list is (0 + 9) // 2 = 4. The element at index 4 is 117."
      },
      {
        "id": "w5-q18",
        "type": "MCQ",
        "question": "(MCQ) After the first Binary Search comparison, which part of the list will be searched next?",
        "options": [
          "[101, 104, 108, 112]",
          "[101, 104, 108, 112, 117]",
          "[121, 126, 130, 135, 140]",
          "[126, 130, 135, 140]"
        ],
        "correctAnswers": [
          "[121, 126, 130, 135, 140]"
        ],
        "explanation": "Since 126 is greater than 117, Binary Search discards the left half. It continues searching the right half of the list."
      },
      {
        "id": "w5-q19",
        "type": "MCQ",
        "question": "(MCQ) Why is Binary Search generally faster than Linear Search for large sorted lists?",
        "options": [
          "It compares every element only once.",
          "It checks two elements in every comparison.",
          "It eliminates half of the remaining search space after each comparison.",
          "It works only on lists with unique values."
        ],
        "correctAnswers": [
          "It eliminates half of the remaining search space after each comparison."
        ],
        "explanation": "Binary Search reduces the search space by half after each comparison. This makes it much more efficient than checking elements one by one."
      },
      {
        "id": "w5-q20",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements are correct?",
        "options": [
          "Binary Search requires the list to be sorted.",
          "Linear Search can be used on both sorted and unsorted lists.",
          "Both Linear Search and Binary Search will locate Gate 126 in this scenario.",
          "Binary Search always examines every element in the list."
        ],
        "correctAnswers": [
          "Binary Search requires the list to be sorted.",
          "Linear Search can be used on both sorted and unsorted lists.",
          "Both Linear Search and Binary Search will locate Gate 126 in this scenario."
        ],
        "explanation": "Binary Search works correctly only on sorted data, whereas Linear Search works on any list. In this scenario, both methods successfully locate Gate 126, but Binary Search does not examine every element."
      }
    ]
  },
  {
    "week": 6,
    "title": "Week 6",
    "topic": "Strings, recursion, binary search, and decision logic",
    "questions": [
      {
        "id": "w6-q1",
        "type": "MCQ",
        "question": "(MCQ) Which line creates the substitution rule that maps each letter to its replacement?",
        "options": [
          "Line 5",
          "Line 7",
          "Line 8",
          "Line 16"
        ],
        "correctAnswers": [
          "Line 8"
        ],
        "explanation": "Line 8 stores each original letter as a key and its substituted letter as the corresponding value in the dictionary."
      },
      {
        "id": "w6-q2",
        "type": "MCQ",
        "question": "(MCQ) Suppose the user enters the input: ABC123 Which statement ensures that the digits 1, 2, and 3 remain unchanged?",
        "options": [
          "Line 10",
          "Lines 17\u201318",
          "Line 20",
          "Line 21"
        ],
        "correctAnswers": [
          "Lines 17\u201318"
        ],
        "explanation": "If a character is not found in the dictionary (such as digits or punctuation), the else block copies it unchanged."
      },
      {
        "id": "w6-q3",
        "type": "MCQ",
        "question": "(MCQ) What is the purpose of Line 12?",
        "options": [
          "It stores the substitution dictionary.",
          "It stores the original input.",
          "It initializes an empty string to build the encrypted message.",
          "It prints the encrypted output."
        ],
        "correctAnswers": [
          "It initializes an empty string to build the encrypted message."
        ],
        "explanation": "The variable encrypted starts as an empty string, and encrypted characters are appended to it during processing."
      },
      {
        "id": "w6-q4",
        "type": "MCQ",
        "question": "(MCQ) If Line 16 encrypted += cipher[ch] is replaced with encrypted += ch what will be the result?",
        "options": [
          "Only uppercase letters will be encrypted.",
          "The program will generate an error.",
          "Only digits will be encrypted.",
          "The output will be identical to the input."
        ],
        "correctAnswers": [
          "The output will be identical to the input."
        ],
        "explanation": "The substitution dictionary is no longer used. Every character is copied directly into the output."
      },
      {
        "id": "w6-q5",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements about the program are correct? (Select all that apply.)",
        "options": [
          "Line 5 stores all lowercase and uppercase English letters.",
          "Line 8 creates a substitution mapping using a dictionary.",
          "Line 15 checks whether the current character is a digit.",
          "Lines 20 and 21 display both the original and encrypted messages."
        ],
        "correctAnswers": [
          "Line 5 stores all lowercase and uppercase English letters.",
          "Line 8 creates a substitution mapping using a dictionary.",
          "Lines 20 and 21 display both the original and encrypted messages."
        ],
        "explanation": "\u2022 A: string.ascii_letters contains both lowercase and uppercase English letters. \u2022 B: Line 8 creates the mapping from each letter to its substitute. \u2022 C: Line 15 checks whether the character exists in the dictionary, not whether it is a digit. \u2022 D: The final two print statements display both the original input and the encrypted output."
      },
      {
        "id": "w6-q6",
        "type": "MCQ",
        "question": "(MCQ) Which line checks whether all three cells in a row contain the same non-empty symbol?",
        "options": [
          "Line 7",
          "Line 9",
          "Line 10",
          "Line 15"
        ],
        "correctAnswers": [
          "Line 10"
        ],
        "explanation": "Line 10 compares all three elements of a row and ensures that they are not blank."
      },
      {
        "id": "w6-q7",
        "type": "MCQ",
        "question": "(MCQ) What is the purpose of the break statement in Line 12?",
        "options": [
          "It skips the current row.",
          "It exits the loop after finding a winner.",
          "It resets the board.",
          "It starts checking the rows again."
        ],
        "correctAnswers": [
          "It exits the loop after finding a winner."
        ],
        "explanation": "Once a winning row is found, there is no need to examine the remaining rows."
      },
      {
        "id": "w6-q8",
        "type": "MCQ",
        "question": "(MCQ) Which variable stores the winning player's symbol?",
        "options": [
          "board",
          "row",
          "winner",
          "print"
        ],
        "correctAnswers": [
          "winner"
        ],
        "explanation": "The variable winner is updated with 'X' or 'O' when a winning row is found."
      },
      {
        "id": "w6-q9",
        "type": "MCQ",
        "question": "(MCQ) If Line 11 winner = row[0] is replaced with winner = \"Player\" what will the program display when a winning row is found?",
        "options": [
          "The winning symbol (X or O)",
          "\"Player\"",
          "\"None\"",
          "The entire row"
        ],
        "correctAnswers": [
          "\"Player\""
        ],
        "explanation": "The variable winner would always contain the string \"Player\" instead of the winning symbol."
      },
      {
        "id": "w6-q10",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements about the program are correct? (Select all that apply.)",
        "options": [
          "The board is represented using a nested list.",
          "The program checks only row-wise winning conditions.",
          "The loop stops immediately after a winner is found.",
          "The program checks both row-wise and diagonal winning conditions."
        ],
        "correctAnswers": [
          "The board is represented using a nested list.",
          "The program checks only row-wise winning conditions.",
          "The loop stops immediately after a winner is found."
        ],
        "explanation": "\u2022 A: Correct. The board is stored as a list of lists. \u2022 B: Correct. The program examines only the rows for a winning condition. \u2022 C: Correct. The break statement terminates the loop once a winner is detected. \u2022 D: Incorrect. The program does not check diagonal or column-wise winning conditions. Scenario-Based Question: Recursive Folder Search A company stores its documents in a hierarchy of folders. Each folder can contain: \u2022 Files \u2022 Other folders A software engineer is asked to write a program to find a file named Report.pdf. The program begins with the main folder. Whenever it encounters a subfolder, it performs the same search process inside that subfolder. If the file is found, the search stops. If a folder contains no more subfolders or files, the program returns to the previous folder and continues searching. No loops are explicitly used to revisit folders; instead, the same search procedure is repeatedly applied to each subfolder. Questions"
      },
      {
        "id": "w6-q11",
        "type": "MCQ",
        "question": "(MCQ) Which characteristic of the search process best represents recursion?",
        "options": [
          "The search visits folders in alphabetical order.",
          "The same search procedure is applied repeatedly to each subfolder.",
          "Every folder contains the same number of files.",
          "The search uses multiple computers simultaneously."
        ],
        "correctAnswers": [
          "The same search procedure is applied repeatedly to each subfolder."
        ],
        "explanation": "In recursion, the same task is performed repeatedly on smaller instances of the same problem."
      },
      {
        "id": "w6-q12",
        "type": "MCQ",
        "question": "(MCQ) In this scenario, what is the base case for the recursive search?",
        "options": [
          "The search begins from the main folder.",
          "A folder contains only PDF files.",
          "A folder has no more files or subfolders to search, or the required file is found.",
          "The search enters a subfolder."
        ],
        "correctAnswers": [
          "A folder has no more files or subfolders to search, or the required file is found."
        ],
        "explanation": "A recursive process stops when it reaches a condition where no further recursive calls are needed."
      },
      {
        "id": "w6-q13",
        "type": "MCQ",
        "question": "(MCQ) Why is recursion a suitable approach for this problem?",
        "options": [
          "Every folder has exactly one subfolder.",
          "The same search operation must be repeated for each subfolder.",
          "Recursion is always faster than iteration.",
          "Files can only exist in the main folder."
        ],
        "correctAnswers": [
          "The same search operation must be repeated for each subfolder."
        ],
        "explanation": "Each subfolder is simply a smaller version of the original problem, making recursion a natural solution."
      },
      {
        "id": "w6-q14",
        "type": "MCQ",
        "question": "(MCQ) What would most likely happen if the search process had no base case?",
        "options": [
          "The search would immediately stop.",
          "The search would examine only the main folder.",
          "The search could continue indefinitely or until system resources are exhausted.",
          "The search would automatically switch to an iterative approach."
        ],
        "correctAnswers": [
          "The search could continue indefinitely or until system resources are exhausted."
        ],
        "explanation": "Without a stopping condition, recursive calls continue indefinitely, eventually causing a stack overflow or exhausting system resources."
      },
      {
        "id": "w6-q15",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements correctly describe recursion in the given scenario? (Select all that apply.)",
        "options": [
          "The same search procedure is used for every subfolder.",
          "The search must have a stopping condition.",
          "Each subfolder represents a smaller instance of the original problem.",
          "Recursion can only be used if every folder contains exactly one subfolder."
        ],
        "correctAnswers": [
          "The same search procedure is used for every subfolder.",
          "The search must have a stopping condition.",
          "Each subfolder represents a smaller instance of the original problem."
        ],
        "explanation": "\u2022 A: Correct. The same search logic is applied to every subfolder. \u2022 B: Correct. Every recursive solution requires a base case to terminate. \u2022 C: Correct. Each subfolder is a smaller version of the original folder search problem. \u2022 D: Incorrect. A folder may contain any number of subfolders or none at all; recursion does not require exactly one subfolder."
      },
      {
        "id": "w6-q16",
        "type": "MCQ",
        "question": "(MCQ) Which line represents the base case where the search terminates because the search range has become invalid?",
        "options": [
          "Line 5",
          "Line 2",
          "Line 7",
          "Line 14"
        ],
        "correctAnswers": [
          "Line 2"
        ],
        "explanation": "Line 2 checks whether low > high. If true, there are no more elements to search, and the recursion terminates."
      },
      {
        "id": "w6-q17",
        "type": "MCQ",
        "question": "(MCQ) Which line performs the recursive search on the left half of the list?",
        "options": [
          "Line 5",
          "Line 8",
          "Line 11",
          "Line 19"
        ],
        "correctAnswers": [
          "Line 11"
        ],
        "explanation": "When the target is smaller than the middle element, the function recursively searches from low to mid - 1."
      },
      {
        "id": "w6-q18",
        "type": "MCQ",
        "question": "(MCQ) What is the purpose of Line 5?",
        "options": [
          "It checks whether the element is found.",
          "It calculates the middle index of the current search range.",
          "It sorts the list.",
          "It prints the search result."
        ],
        "correctAnswers": [
          "It calculates the middle index of the current search range."
        ],
        "explanation": "The middle index is calculated so that the current search range can be divided into two halves."
      },
      {
        "id": "w6-q19",
        "type": "MCQ",
        "question": "(MCQ) If Line 14 return binary_search(arr, mid + 1, high, target) is replaced with return binary_search(arr, low, high, target) what is the most likely outcome when the target is greater than the middle element?",
        "options": [
          "The program always finds the target immediately.",
          "The search correctly moves to the right half.",
          "The search continues without reducing the search range, leading to infinite recursion.",
          "The program searches only the left half."
        ],
        "correctAnswers": [
          "The search continues without reducing the search range, leading to infinite recursion."
        ],
        "explanation": "Since the search boundaries do not change, the same recursive call is repeated indefinitely."
      },
      {
        "id": "w6-q20",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements about the program are correct? (Select all that apply.)",
        "options": [
          "The recursive calls in Lines 11 and 14 reduce the search space in every recursive step.",
          "The program can correctly perform binary search even if numbers is not sorted.",
          "Line 5 compares the target with every element in the list.",
          "The recursion stops either when the target is found (Line 8) or when the search range becomes invalid (Line 3)."
        ],
        "correctAnswers": [
          "The recursive calls in Lines 11 and 14 reduce the search space in every recursive step.",
          "The recursion stops either when the target is found (Line 8) or when the search range becomes invalid (Line 3)."
        ],
        "explanation": "\u2022 A: Correct. Each recursive call searches only one half of the remaining list. \u2022 B: Incorrect. Binary search requires the list to be sorted. \u2022 C: Incorrect. Line 5 only computes the middle index; it does not compare every element. \u2022 D: Correct. These are the two terminating conditions of the recursive binary search."
      }
    ]
  },
  {
    "week": 7,
    "title": "Week 7",
    "topic": "Matrices, games, coordinates, and route planning",
    "questions": [
      {
        "id": "w7-q1",
        "type": "MCQ",
        "question": "(MCQ) Which variables store the starting row and starting column of the current spiral layer?",
        "options": [
          "k and l",
          "m and n",
          "i and k",
          "a and i"
        ],
        "correctAnswers": [
          "k and l"
        ],
        "explanation": "k stores the starting row index and l stores the starting column index."
      },
      {
        "id": "w7-q2",
        "type": "MCQ",
        "question": "(MCQ) What is the purpose of the statement at line 9?",
        "options": [
          "It moves to the next column.",
          "It moves to the next row after printing the top row.",
          "It moves to the previous row.",
          "It resets the row index."
        ],
        "correctAnswers": [
          "It moves to the next row after printing the top row."
        ],
        "explanation": "The starting row index is increased after the top row has been printed."
      },
      {
        "id": "w7-q3",
        "type": "MCQ",
        "question": "(MCQ) Which statement best describes the loop at lines 11\u201312?",
        "options": [
          "It prints the first column from top to bottom.",
          "It prints the last row from left to right.",
          "It prints the last column from top to bottom.",
          "It prints the top row from right to left."
        ],
        "correctAnswers": [
          "It prints the last column from top to bottom."
        ],
        "explanation": "The column index remains fixed at n-1 while the row index increases."
      },
      {
        "id": "w7-q4",
        "type": "MCQ",
        "question": "(MCQ) What is the first sequence of numbers printed by the program?",
        "options": [
          "1 2 3 4",
          "4 8 12 16",
          "13 14 15 16",
          "1 5 9 13"
        ],
        "correctAnswers": [
          "1 2 3 4"
        ],
        "explanation": "The algorithm begins by traversing the top row from left to right."
      },
      {
        "id": "w7-q5",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements are true about the program?",
        "options": [
          "The variables k, l, m, and n define the current boundaries of the unvisited portion of the matrix.",
          "After each side of the spiral is printed, the corresponding boundary is updated.",
          "The program prints only square matrices correctly.",
          "The program traverses the matrix column by column throughout."
        ],
        "correctAnswers": [
          "The variables k, l, m, and n define the current boundaries of the unvisited portion of the matrix.",
          "After each side of the spiral is printed, the corresponding boundary is updated."
        ],
        "explanation": "The algorithm maintains and updates four boundaries to progressively traverse the matrix in spiral order."
      },
      {
        "id": "w7-q6",
        "type": "MCQ",
        "question": "(MCQ) Which statement ensures that the player does not move beyond the last position on the board?",
        "options": [
          "if position == target:",
          "if position + roll <= target:",
          "position += roll",
          "break"
        ],
        "correctAnswers": [
          "if position + roll <= target:"
        ],
        "explanation": "The condition allows a move only if the new position does not exceed the target."
      },
      {
        "id": "w7-q7",
        "type": "MCQ",
        "question": "(MCQ) If the player reaches position 16, what happens next?",
        "options": [
          "The player moves to position 22.",
          "The player stays at position 16.",
          "The player moves to position 18.",
          "The player moves to position 7."
        ],
        "correctAnswers": [
          "The player moves to position 7."
        ],
        "explanation": "Position 16 is the head of a snake that sends the player to position 7."
      },
      {
        "id": "w7-q8",
        "type": "MCQ",
        "question": "(MCQ) What is the purpose of the statement at line 21?",
        "options": [
          "It checks whether all dice rolls are completed.",
          "It checks whether the player has reached the target position.",
          "It resets the player's position.",
          "It moves the player to the next turn."
        ],
        "correctAnswers": [
          "It checks whether the player has reached the target position."
        ],
        "explanation": "The condition checks if the player has reached the final position."
      },
      {
        "id": "w7-q9",
        "type": "MCQ",
        "question": "(MCQ) Which statement immediately ends the loop once the player reaches the target?",
        "options": [
          "break",
          "position += roll",
          "print(position, end=\" \")",
          "for roll in rolls:"
        ],
        "correctAnswers": [
          "break"
        ],
        "explanation": "The break statement terminates the loop immediately."
      },
      {
        "id": "w7-q10",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements are true about the program?",
        "options": [
          "The player always moves after every dice roll.",
          "The game stops only after all dice rolls are processed.",
          "A move is ignored if it takes the player beyond position 25.",
          "Landing on a snake or ladder changes the player's position immediately."
        ],
        "correctAnswers": [
          "A move is ignored if it takes the player beyond position 25.",
          "Landing on a snake or ladder changes the player's position immediately."
        ],
        "explanation": "The program ignores moves beyond the target and immediately applies snakes or ladders whenever the player lands on them."
      },
      {
        "id": "w7-q11",
        "type": "MCQ",
        "question": "(MCQ) What is the purpose of the statement at line 3?",
        "options": [
          "It creates a marker on the map.",
          "It stores restaurant names.",
          "It creates a Google map centered at the given location.",
          "It saves the map as an HTML file."
        ],
        "correctAnswers": [
          "It creates a Google map centered at the given location."
        ],
        "explanation": "The statement creates a Google Map object centered at the specified latitude and longitude."
      },
      {
        "id": "w7-q12",
        "type": "MCQ",
        "question": "(MCQ) Which statement adds a marker for each restaurant?",
        "options": [
          "gmap.draw(\"restaurants.html\")",
          "gmap.marker(lat, lon, title=name)",
          "restaurants = [...]",
          "for name, lat, lon in restaurants:"
        ],
        "correctAnswers": [
          "gmap.marker(lat, lon, title=name)"
        ],
        "explanation": "The marker() method places a marker at the specified coordinates."
      },
      {
        "id": "w7-q13",
        "type": "MCQ",
        "question": "(MCQ) What is displayed as the title of each marker?",
        "options": [
          "The latitude value",
          "The longitude value",
          "The map's zoom level",
          "The restaurant name"
        ],
        "correctAnswers": [
          "The restaurant name"
        ],
        "explanation": "The value of name is passed as the marker's title."
      },
      {
        "id": "w7-q14",
        "type": "MCQ",
        "question": "(MCQ) What is the purpose of the statement at line 14?",
        "options": [
          "It creates another marker.",
          "It removes all markers from the map.",
          "It changes the map center.",
          "It saves the map as an HTML file."
        ],
        "correctAnswers": [
          "It saves the map as an HTML file."
        ],
        "explanation": "The draw() method generates the HTML file containing the map."
      },
      {
        "id": "w7-q15",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements are true about the program?",
        "options": [
          "The program creates a separate map for each restaurant.",
          "The markers are added using the latitude and longitude values.",
          "The program iterates through all restaurants using a for loop.",
          "The HTML file is created before the markers are added."
        ],
        "correctAnswers": [
          "The markers are added using the latitude and longitude values.",
          "The program iterates through all restaurants using a for loop."
        ],
        "explanation": "The loop processes each restaurant and marker() uses its latitude and longitude to place a marker on the map."
      },
      {
        "id": "w7-q16",
        "type": "MCQ",
        "question": "(MCQ) The attractions are stored in random order. Which searching technique is most appropriate for finding a particular attraction?",
        "options": [
          "Binary Search",
          "Spiral Search",
          "Linear Search",
          "Depth First Search"
        ],
        "correctAnswers": [
          "Linear Search"
        ],
        "explanation": "Linear search is suitable when the data is not sorted."
      },
      {
        "id": "w7-q17",
        "type": "MCQ",
        "question": "(MCQ) Why does the inspection drone use a spiral traversal of the city matrix?",
        "options": [
          "To visit only the corner locations.",
          "To inspect every location by moving from the outer boundary towards the center.",
          "To sort the locations alphabetically.",
          "To search for a specific attraction."
        ],
        "correctAnswers": [
          "To inspect every location by moving from the outer boundary towards the center."
        ],
        "explanation": "Spiral traversal systematically covers all cells from the outer layer to the center."
      },
      {
        "id": "w7-q18",
        "type": "MCQ",
        "question": "(MCQ) Which information is essential for placing an attraction on the Google Map?",
        "options": [
          "Name and Category",
          "Rating and Category",
          "Latitude and Longitude",
          "Name and Rating"
        ],
        "correctAnswers": [
          "Latitude and Longitude"
        ],
        "explanation": "A map marker requires geographic coordinates to determine its location."
      },
      {
        "id": "w7-q19",
        "type": "MCQ",
        "question": "(MCQ) In the Treasure Trail game, what should happen if a dice roll moves the visitor beyond checkpoint 25?",
        "options": [
          "The visitor returns to checkpoint 1.",
          "The visitor wins immediately.",
          "The visitor moves to checkpoint 25.",
          "The move is ignored."
        ],
        "correctAnswers": [
          "The move is ignored."
        ],
        "explanation": "The game rules specify that moves beyond the final checkpoint are not allowed."
      },
      {
        "id": "w7-q20",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements are true about the Smart Heritage City Explorer?",
        "options": [
          "Binary search can be used efficiently even if the attractions are stored in random order.",
          "A dictionary is suitable for storing multiple details about each attraction.",
          "Spiral traversal is a suitable approach for visiting every location in a matrix.",
          "Google Map markers are placed using the latitude and longitude of an attraction."
        ],
        "correctAnswers": [
          "A dictionary is suitable for storing multiple details about each attraction.",
          "Spiral traversal is a suitable approach for visiting every location in a matrix."
        ],
        "explanation": "Dictionaries can store multiple attributes of an attraction, and spiral traversal visits every matrix location exactly once."
      }
    ]
  },
  {
    "week": 8,
    "title": "Week 8",
    "topic": "Tuples, dictionaries, data analysis, and random processes",
    "questions": [
      {
        "id": "w8-q1",
        "type": "MCQ",
        "question": "Which piece of information is stored in the third position of the tuple?",
        "options": [
          "Student Name",
          "Student ID",
          "Department",
          "CGPA"
        ],
        "correctAnswers": [
          "Department"
        ],
        "explanation": "The third value in the tuple is \"Computer Science\", which represents the student's department."
      },
      {
        "id": "w8-q2",
        "type": "MCQ",
        "question": "Why is a tuple a suitable data structure for storing this record?",
        "options": [
          "Because the student details are not expected to change frequently.",
          "Because tuples automatically sort the data.",
          "Because tuples allow duplicate student IDs.",
          "Because tuples can only store text values."
        ],
        "correctAnswers": [
          "Because the student details are not expected to change frequently."
        ],
        "explanation": "Tuples are useful when the stored information remains fixed after creation."
      },
      {
        "id": "w8-q3",
        "type": "MCQ",
        "question": "How many pieces of information are stored in the student's tuple?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswers": [
          "4"
        ],
        "explanation": "The tuple contains four values: Name, Student ID, Department, and CGPA."
      },
      {
        "id": "w8-q4",
        "type": "MCQ",
        "question": "Which of the following is the last item stored in the tuple?",
        "options": [
          "Ananya",
          "1023",
          "Computer Science",
          "8.7"
        ],
        "correctAnswers": [
          "8.7"
        ],
        "explanation": "The last value in the tuple is the student's CGPA, which is 8.7."
      },
      {
        "id": "w8-q5",
        "type": "MCQ",
        "question": "A staff member wants to replace the department \"Computer Science\" with \"Artificial Intelligence\" in the existing tuple. What should they do?",
        "options": [
          "Modify the existing tuple directly.",
          "Create a new tuple with the updated value.",
          "Delete only the department value.",
          "Use the append() operation."
        ],
        "correctAnswers": [
          "Create a new tuple with the updated value."
        ],
        "explanation": "Tuples are immutable, so their values cannot be modified after creation. A new tuple must be created with the updated information."
      },
      {
        "id": "w8-q6",
        "type": "MCQ",
        "question": "According to Line 5, how many rounds will the game be played?",
        "options": [
          "7",
          "8",
          "10",
          "Depends on the random numbers"
        ],
        "correctAnswers": [
          "7"
        ],
        "explanation": "range(7) repeats the loop 7 times, so the game consists of seven rounds."
      },
      {
        "id": "w8-q7",
        "type": "MCQ",
        "question": "Which lines generate the random numbers for the player's bet and the lucky draw?",
        "options": [
          "Lines 3 and 5",
          "Lines 8 and 9",
          "Lines 11 and 12",
          "Lines 6 and 7"
        ],
        "correctAnswers": [
          "Lines 6 and 7"
        ],
        "explanation": "Lines 6 and 7 use random.randint(1, 10) to generate the bet number and the lucky draw number."
      },
      {
        "id": "w8-q8",
        "type": "MCQ",
        "question": "If the bet number and lucky draw number are equal, what is the net change in the account balance according to Line 12?",
        "options": [
          "+\u20b9100",
          "+\u20b9900",
          "+\u20b9700",
          "+\u20b9800"
        ],
        "correctAnswers": [
          "+\u20b9800"
        ],
        "explanation": "The player receives \u20b9900 and pays a \u20b9100 participation fee. Therefore, the net increase is \u20b9800."
      },
      {
        "id": "w8-q9",
        "type": "MCQ",
        "question": "According to Lines 13\u201314, what happens when the bet number and lucky draw number are different?",
        "options": [
          "\u20b9100 is deducted from the account.",
          "\u20b9900 is added to the account.",
          "The account balance remains unchanged.",
          "A new account is created."
        ],
        "correctAnswers": [
          "\u20b9100 is deducted from the account."
        ],
        "explanation": "The else block subtracts \u20b9100 from the account, representing the participation fee."
      },
      {
        "id": "w8-q10",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements about the program are correct? (Choose all that apply.)",
        "options": [
          "The player's account balance is printed after every round.",
          "The player's bet is entered by the user using input().",
          "The lucky draw number is always different from the bet number.",
          "The player's account balance can become negative."
        ],
        "correctAnswers": [
          "The player's account balance is printed after every round.",
          "The player's account balance is printed after every round.",
          "The player's account balance can become negative.",
          "The player's account balance can become negative."
        ],
        "explanation": "\u2022 A Line 16 prints the account balance after each iteration of the loop. \u2022 B The program generates the bet randomly; it does not use input(). \u2022 C Since both values are random, they may or may not be equal. \u2022 D If the player loses multiple rounds, \u20b9100 is deducted each time, so the account balance can become negative."
      },
      {
        "id": "w8-q11",
        "type": "MCQ",
        "question": "Suppose the user enters the word LEVEL. Which of the following statements is always true?",
        "options": [
          "The displayed puzzle will never contain repeated letters.",
          "The displayed puzzle will always have exactly five letters.",
          "The displayed puzzle will always be alphabetically sorted.",
          "The displayed puzzle cannot be generated because the word contains repeated letters."
        ],
        "correctAnswers": [
          "The displayed puzzle will always have exactly five letters."
        ],
        "explanation": "Shuffling changes only the order of characters. The number of characters always remains the same. Repeated letters do not prevent an anagram from being generated."
      },
      {
        "id": "w8-q12",
        "type": "MCQ",
        "question": "Consider the execution of Lines 6\u201311. Which situation can cause the loop to execute more than once?",
        "options": [
          "The entered keyword has fewer than five letters.",
          "random.shuffle() arranges the letters in the same order as the original keyword.",
          "The keyword contains only uppercase letters.",
          "The keyword contains duplicate characters."
        ],
        "correctAnswers": [
          "random.shuffle() arranges the letters in the same order as the original keyword."
        ],
        "explanation": "If the shuffled arrangement is identical to the original word, the condition on Line 10 fails and the loop repeats until a different arrangement is obtained."
      },
      {
        "id": "w8-q13",
        "type": "MCQ",
        "question": "Which of the following inputs may cause the program to never terminate?",
        "options": [
          "PYTHON",
          "RANDOM",
          "A",
          "SECURE"
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "A single-character word has only one possible arrangement. Therefore, candidate will always be equal to keyword, making the condition on Line 10 false forever."
      },
      {
        "id": "w8-q14",
        "type": "MCQ",
        "question": "Which statement best describes the purpose of Lines 10\u201311?",
        "options": [
          "They ensure that every possible anagram is generated exactly once.",
          "They ensure that duplicate letters are removed.",
          "They stop the loop only after a shuffled word different from the original has been generated.",
          "They guarantee that the generated anagram is alphabetically smallest."
        ],
        "correctAnswers": [
          "They stop the loop only after a shuffled word different from the original has been generated."
        ],
        "explanation": "The loop terminates only when the generated arrangement differs from the original word."
      },
      {
        "id": "w8-q15",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements about the program are correct? (Choose all that apply.)",
        "options": [
          "If the input contains only one character, the program may run indefinitely.",
          "Every execution of the program produces a different anagram.",
          "The program guarantees that all possible anagrams will eventually be generated.",
          "The generated puzzle always contains exactly the same characters as the original keyword."
        ],
        "correctAnswers": [
          "If the input contains only one character, the program may run indefinitely.",
          "If the input contains only one character, the program may run indefinitely.",
          "The generated puzzle always contains exactly the same characters as the original keyword.",
          "The generated puzzle always contains exactly the same characters as the original keyword."
        ],
        "explanation": "\u2022 A Correct. A one-character word has only one possible arrangement, so the loop never satisfies the condition on Line 10. \u2022 B Incorrect. Randomness does not guarantee a different output on every execution. The same anagram may be generated in different runs. \u2022 C Incorrect. The program stops after generating the first valid anagram. It does not enumerate all possible anagrams. \u2022 D Correct. random.shuffle() only changes the order of the existing characters; it does not add, remove, or replace any characters."
      },
      {
        "id": "w8-q16",
        "type": "MCQ",
        "question": "What is the primary purpose of Line 14?",
        "options": [
          "To create a Pandas DataFrame.",
          "To create an object that can analyze the sentiment of text.",
          "To read customer reviews from a file.",
          "To display the final DataFrame."
        ],
        "correctAnswers": [
          "To create an object that can analyze the sentiment of text."
        ],
        "explanation": "SentimentIntensityAnalyzer() creates a VADER sentiment analyzer that is used to calculate sentiment scores for text."
      },
      {
        "id": "w8-q17",
        "type": "MCQ",
        "question": "According to Line 17, which value is used to determine whether a review is positive or negative?",
        "options": [
          "neg",
          "compound",
          "neu",
          "pos"
        ],
        "correctAnswers": [
          "compound"
        ],
        "explanation": "The program extracts the compound score from the dictionary returned by polarity_scores(). This score is used in the decision on Lines 18\u201321."
      },
      {
        "id": "w8-q18",
        "type": "MCQ",
        "question": "What is the purpose of Line 23?",
        "options": [
          "It removes reviews with negative sentiment.",
          "It creates a new column containing the sentiment label for each review.",
          "It sorts the reviews based on sentiment.",
          "It replaces the original review text with sentiment scores."
        ],
        "correctAnswers": [
          "It creates a new column containing the sentiment label for each review."
        ],
        "explanation": "The apply() function calls get_sentiment() for every review and stores the returned labels in the new Sentiment column."
      },
      {
        "id": "w8-q19",
        "type": "MCQ",
        "question": "Which statement best describes the role of the function get_sentiment()?",
        "options": [
          "It converts reviews into uppercase.",
          "It counts the number of words in each review.",
          "It calculates the average sentiment score of all reviews.",
          "It assigns a sentiment label to a single review based on its compound score."
        ],
        "correctAnswers": [
          "It assigns a sentiment label to a single review based on its compound score."
        ],
        "explanation": "The function computes the compound score for one review and returns either \"Positive\" or \"Negative\"."
      },
      {
        "id": "w8-q20",
        "type": "MSQ",
        "question": "(MSQ) Which of the following statements are correct? (Choose all that apply.)",
        "options": [
          "The program stores the sentiment score directly in the Review column.",
          "The reviews are stored in a Pandas DataFrame.",
          "The sentiment label for each review is generated using the get_sentiment() function.",
          "The program classifies reviews based on the length of the review text."
        ],
        "correctAnswers": [
          "The reviews are stored in a Pandas DataFrame.",
          "The program stores the sentiment score directly in the Review column.",
          "The program classifies reviews based on the length of the review text.",
          "The sentiment label for each review is generated using the get_sentiment() function."
        ],
        "explanation": "\u2022 A. Incorrect. The original Review column is not modified. \u2022 B. Correct. Lines 4\u201312 create a Pandas DataFrame named reviews. \u2022 C. Correct. Line 23 applies the get_sentiment() function to every review. \u2022 D. Incorrect. Classification is based on the compound sentiment score, not the length of the review."
      }
    ]
  }
];

export default rawWeeks;
