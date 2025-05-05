import { QuizSectionData } from '../models/QuizTypes';

export const csharpQuizSection: QuizSectionData = {
  id: 'csharp',
  title: 'C#',
  description: 'Test your knowledge of C# programming language.',
  quizzes: [
    {
      id: 'csharp-basics',
      title: 'C# Programming',
      description: 'Questions covering C# fundamentals and advanced concepts.',
      questions: [
        {
          id: 'csharp-q1',
          question: 'What is the correct way to declare a constant in C#?',
          options: [
            { id: 'csharp-q1-a', text: 'fixed int VALUE = 10;' },
            { id: 'csharp-q1-b', text: 'const int VALUE = 10;' },
            { id: 'csharp-q1-c', text: 'static int VALUE = 10;' },
            { id: 'csharp-q1-d', text: 'readonly int VALUE = 10;' },
          ],
          correctOptionId: 'csharp-q1-b',
          explanation: 'Constants in C# are declared using the const keyword, followed by the type and identifier.'
        },
        {
          id: 'csharp-q2',
          question: 'Which of the following is NOT a value type in C#?',
          options: [
            { id: 'csharp-q2-a', text: 'int' },
            { id: 'csharp-q2-b', text: 'char' },
            { id: 'csharp-q2-c', text: 'string' },
            { id: 'csharp-q2-d', text: 'struct' },
          ],
          correctOptionId: 'csharp-q2-c',
          explanation: 'In C#, string is a reference type, not a value type. Value types include int, float, char, bool, and structs.'
        },
        {
          id: 'csharp-q3',
          question: 'What is the purpose of the "using" statement in C#?',
          options: [
            { id: 'csharp-q3-a', text: 'To include external namespaces' },
            { id: 'csharp-q3-b', text: 'To create a new instance of a class' },
            { id: 'csharp-q3-c', text: 'To automatically dispose resources' },
            { id: 'csharp-q3-d', text: 'To create an alias for a namespace' },
          ],
          correctOptionId: 'csharp-q3-c',
          explanation: 'The "using" statement in C# is used to automatically dispose of IDisposable resources once they go out of scope.'
        },
        {
          id: 'csharp-q4',
          question: 'What keyword is used to prevent a class from being inherited in C#?',
          options: [
            { id: 'csharp-q4-a', text: 'static' },
            { id: 'csharp-q4-b', text: 'final' },
            { id: 'csharp-q4-c', text: 'private' },
            { id: 'csharp-q4-d', text: 'sealed' },
          ],
          correctOptionId: 'csharp-q4-d',
          explanation: 'The sealed keyword prevents other classes from inheriting from a class in C#.'
        },
        {
          id: 'csharp-q5',
          question: 'What is the purpose of the "virtual" keyword in C#?',
          options: [
            { id: 'csharp-q5-a', text: 'To declare a method that cannot be overridden' },
            { id: 'csharp-q5-b', text: 'To declare a method that must be implemented in derived classes' },
            { id: 'csharp-q5-c', text: 'To declare a method that can be overridden in derived classes' },
            { id: 'csharp-q5-d', text: 'To declare a method that exists only at compile time' },
          ],
          correctOptionId: 'csharp-q5-c',
          explanation: 'The virtual keyword in C# is used to declare a method that can be overridden in derived classes using the override keyword.'
        },
        {
          id: 'csharp-q6',
          question: 'Which collection type in C# is both a dictionary and thread-safe?',
          options: [
            { id: 'csharp-q6-a', text: 'Dictionary<TKey, TValue>' },
            { id: 'csharp-q6-b', text: 'ConcurrentDictionary<TKey, TValue>' },
            { id: 'csharp-q6-c', text: 'Hashtable' },
            { id: 'csharp-q6-d', text: 'SortedDictionary<TKey, TValue>' },
          ],
          correctOptionId: 'csharp-q6-b',
          explanation: 'ConcurrentDictionary<TKey, TValue> is a thread-safe dictionary collection that can be modified by multiple threads concurrently.'
        },
        {
          id: 'csharp-q7',
          question: 'What does the "yield" keyword do in C#?',
          options: [
            { id: 'csharp-q7-a', text: 'Forces garbage collection' },
            { id: 'csharp-q7-b', text: 'Creates a new thread' },
            { id: 'csharp-q7-c', text: 'Implements iterator behavior' },
            { id: 'csharp-q7-d', text: 'Pauses all running threads' },
          ],
          correctOptionId: 'csharp-q7-c',
          explanation: 'The yield keyword in C# is used to implement an iterator method that returns elements one at a time without having to build a complete collection.'
        },
        {
          id: 'csharp-q8',
          question: 'Which of the following describes C# delegates correctly?',
          options: [
            { id: 'csharp-q8-a', text: 'Type-safe function pointers' },
            { id: 'csharp-q8-b', text: 'Global variables' },
            { id: 'csharp-q8-c', text: 'Event listeners only' },
            { id: 'csharp-q8-d', text: 'Static methods' },
          ],
          correctOptionId: 'csharp-q8-a',
          explanation: 'Delegates in C# are type-safe function pointers that can reference methods with compatible signatures.'
        },
        {
          id: 'csharp-q9',
          question: 'What is the purpose of the "as" operator in C#?',
          options: [
            { id: 'csharp-q9-a', text: 'Performs arithmetic operations' },
            { id: 'csharp-q9-b', text: 'Performs a compile-time type check' },
            { id: 'csharp-q9-c', text: 'Converts a type and returns null if conversion fails' },
            { id: 'csharp-q9-d', text: 'Creates an alias for a namespace' },
          ],
          correctOptionId: 'csharp-q9-c',
          explanation: 'The "as" operator in C# attempts to convert an object to a specified type but returns null if the conversion fails, rather than throwing an exception.'
        },
        {
          id: 'csharp-q10',
          question: 'Which of the following is true about structs in C#?',
          options: [
            { id: 'csharp-q10-a', text: 'They support inheritance' },
            { id: 'csharp-q10-b', text: 'They are reference types' },
            { id: 'csharp-q10-c', text: 'They are value types' },
            { id: 'csharp-q10-d', text: 'They cannot have constructors' },
          ],
          correctOptionId: 'csharp-q10-c',
          explanation: 'Structs in C# are value types, which means they are stored on the stack and are passed by value by default.'
        }
      ]
    }
  ]
};

export const csharpFundamentalsQuizSection: QuizSectionData = {
  "id": "csharp-quiz",
  "title": "C# Development",
  "description": "Test your knowledge of C# programming concepts.",
  "quizzes": [
    {
      "id": "csharp-basics",
      "title": "C# Fundamentals",
      "description": "Questions covering the basics of C# programming.",
      "questions": [
        {
          "id": "csharp-q1",
          "question": "Which file extension is commonly used for C# source code files in Visual Studio Code?",
          "options": [
            { "id": "csharp-q1-a", "text": ".docx" },
            { "id": "csharp-q1-b", "text": ".py" },
            { "id": "csharp-q1-c", "text": ".cs" },
            { "id": "csharp-q1-d", "text": ".cpp" }
          ],
          "correctOptionId": "csharp-q1-c",
          "explanation": ".cs is the standard file extension for C# source code files."
        },
        {
          "id": "csharp-q2",
          "question": "Which character is used as an escape sequence to represent a new line in C#?",
          "options": [
            { "id": "csharp-q2-a", "text": "\t" },
            { "id": "csharp-q2-b", "text": "\\" },
            { "id": "csharp-q2-c", "text": "\"" },
            { "id": "csharp-q2-d", "text": "\r" },
            { "id": "csharp-q2-e", "text": "\n" }
          ],
          "correctOptionId": "csharp-q2-e",
          "explanation": "\n is the escape sequence used to represent a new line in C#."
        },
        {
          "id": "csharp-q3",
          "question": "Which of the following options represents the correct way to calculate the remainder of dividing two integers?",
          "options": [
            { "id": "csharp-q3-a", "text": "x % (y - 1)" },
            { "id": "csharp-q3-b", "text": "x % y =" },
            { "id": "csharp-q3-c", "text": "Math.Remainder(x, y)" },
            { "id": "csharp-q3-d", "text": "Math.Mod(x, y)" },
            { "id": "csharp-q3-e", "text": "x.Remainder(y)" }
          ],
          "correctOptionId": "csharp-q3-c",
          "explanation": "The correct method to calculate the remainder is using the modulus operator (%) or Math.Remainder(x, y)."
        },
        {
          "id": "csharp-q4",
          "question": "Given the following code snippet, what technique is used to convert the double value b to an int in the code below? int a = 10; double b = 3.14; int result = a / (int)b;",
          "options": [
            { "id": "csharp-q4-a", "text": "Type casting" },
            { "id": "csharp-q4-b", "text": "Parsing" },
            { "id": "csharp-q4-c", "text": "Rounding" },
            { "id": "csharp-q4-d", "text": "Explicit casting" },
            { "id": "csharp-q4-e", "text": "Implicit casting" }
          ],
          "correctOptionId": "csharp-q4-d",
          "explanation": "Explicit casting is used to convert a double value to an int using the (int) syntax."
        },
        {
          "id": "csharp-q5",
          "question": "How do you exit a for loop before its completion in C#?",
          "options": [
            { "id": "csharp-q5-a", "text": "return;" },
            { "id": "csharp-q5-b", "text": "exit;" },
            { "id": "csharp-q5-c", "text": "break;" },
            { "id": "csharp-q5-d", "text": "stop;" },
            { "id": "csharp-q5-e", "text": "skip;" }
          ],
          "correctOptionId": "csharp-q5-c",
          "explanation": "'break;' is used to exit a loop early in C#."
        },
        {
          "id": "csharp-q6",
          "question": "What is the main purpose of using comments in your code?",
          "options": [
            { "id": "csharp-q6-a", "text": "To execute certain sections of code." },
            { "id": "csharp-q6-b", "text": "To prevent others from accessing your code." },
            { "id": "csharp-q6-c", "text": "To provide explanations and documentation for the code." },
            { "id": "csharp-q6-d", "text": "To indicate errors in the code." },
            { "id": "csharp-q6-e", "text": "To improve the performance of the code." }
          ],
          "correctOptionId": "csharp-q6-c",
          "explanation": "Comments are used to provide explanations and documentation for the code, improving readability."
        },
        {
          "id": "csharp-q7",
          "question": "Which symbol is used for concatenation of strings in C#?",
          "options": [
            { "id": "csharp-q7-a", "text": "&" },
            { "id": "csharp-q7-b", "text": "$" },
            { "id": "csharp-q7-c", "text": "+" },
            { "id": "csharp-q7-d", "text": "*" },
            { "id": "csharp-q7-e", "text": "@" }
          ],
          "correctOptionId": "csharp-q7-c",
          "explanation": "The '+' operator is used for string concatenation in C#."
        },
        {
          "id": "csharp-q8",
          "question": "How do you define a method with multiple parameters in C#?",
          "options": [
            { "id": "csharp-q8-a", "text": "Separate the parameters with the 'and' keyword." },
            { "id": "csharp-q8-b", "text": "Use the 'param' keyword before each parameter." },
            { "id": "csharp-q8-c", "text": "Declare each parameter on a new line." },
            { "id": "csharp-q8-d", "text": "Enclose the parameters in square brackets." },
            { "id": "csharp-q8-e", "text": "Specify the parameters separated by commas." }
          ],
          "correctOptionId": "csharp-q8-e",
          "explanation": "Parameters are defined by separating them with commas when declaring a method."
        },
        {
          "id": "csharp-q9",
          "question": "What is the purpose of the Convert class in C#?",
          "options": [
            { "id": "csharp-q9-a", "text": "It provides methods for performing mathematical operations." },
            { "id": "csharp-q9-b", "text": "It provides methods for converting data types." },
            { "id": "csharp-q9-c", "text": "It provides methods for manipulating strings." },
            { "id": "csharp-q9-d", "text": "It provides methods for interacting with databases." },
            { "id": "csharp-q9-e", "text": "It provides methods for handling exceptions." }
          ],
          "correctOptionId": "csharp-q9-b",
          "explanation": "The Convert class provides methods to convert between different data types in C#."
        },
        {
          "id": "csharp-q10",
          "question": "What is the lifetime of a variable declared inside a code block in C#?",
          "options": [
            { "id": "csharp-q10-a", "text": "The lifetime is unlimited." },
            { "id": "csharp-q10-b", "text": "The lifetime is determined by the accessibility of the variable." },
            { "id": "csharp-q10-c", "text": "The lifetime is limited to the scope of the code block." },
            { "id": "csharp-q10-d", "text": "The lifetime is tied to the duration of the program." },
            { "id": "csharp-q10-e", "text": "The lifetime is determined by the operating system." }
          ],
          "correctOptionId": "csharp-q10-c",
          "explanation": "Variables declared inside a code block exist only within that block, and are destroyed once the block is exited."
        }
      ]
    }
  ]
};
