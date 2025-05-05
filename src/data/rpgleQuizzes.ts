import { QuizSectionData } from '../models/QuizTypes';

export const rpgleQuizData: QuizSectionData = {
  id: 'rpgle',
  title: 'RPGLE',
  description: 'Test your knowledge of RPGLE programming language.',
  quizzes: [
    {
      id: 'rpgle-basics',
      title: 'RPGLE Programming',
      description: 'Questions covering RPGLE programming fundamentals and techniques.',
      questions: [
        {
          id: 'rpgle-q1',
          question: 'What does RPG stand for in the context of IBM i programming?',
          options: [
            { id: 'rpgle-q1-a', text: 'Report Program Generator' },
            { id: 'rpgle-q1-b', text: 'Relational Program Gateway' },
            { id: 'rpgle-q1-c', text: 'Routine Process Generation' },
            { id: 'rpgle-q1-d', text: 'Remote Program Gateway' },
          ],
          correctOptionId: 'rpgle-q1-a',
          explanation: 'RPG stands for Report Program Generator, a programming language developed by IBM originally for generating business reports.'
        },
        {
          id: 'rpgle-q2',
          question: 'Which operation code is used to read a record from a file in RPGLE?',
          options: [
            { id: 'rpgle-q2-a', text: 'OPEN' },
            { id: 'rpgle-q2-b', text: 'READ' },
            { id: 'rpgle-q2-c', text: 'GET' },
            { id: 'rpgle-q2-d', text: 'FETCH' },
          ],
          correctOptionId: 'rpgle-q2-b',
          explanation: 'The READ operation code is used to read a record from a file in RPGLE.'
        },
        {
          id: 'rpgle-q3',
          question: 'What is the prefix for defining a file in free-form RPGLE?',
          options: [
            { id: 'rpgle-q3-a', text: 'DCL-F' },
            { id: 'rpgle-q3-b', text: 'DEF-F' },
            { id: 'rpgle-q3-c', text: 'FILE-F' },
            { id: 'rpgle-q3-d', text: 'DEFINE-F' },
          ],
          correctOptionId: 'rpgle-q3-a',
          explanation: 'DCL-F is the prefix used to define a file in free-form RPGLE (e.g., DCL-F CUSTFILE).'
        },
        {
          id: 'rpgle-q4',
          question: 'Which directive is used to include a copy member in RPGLE?',
          options: [
            { id: 'rpgle-q4-a', text: '/INCLUDE' },
            { id: 'rpgle-q4-b', text: '/COPY' },
            { id: 'rpgle-q4-c', text: '/INSERT' },
            { id: 'rpgle-q4-d', text: '/IMPORT' },
          ],
          correctOptionId: 'rpgle-q4-b',
          explanation: 'The /COPY directive is used to include a copy member in RPGLE code.'
        },
        {
          id: 'rpgle-q5',
          question: 'What is the correct syntax for a procedure prototype in RPGLE?',
          options: [
            { id: 'rpgle-q5-a', text: 'DCL-PR ProcName;' },
            { id: 'rpgle-q5-b', text: 'PROTOTYPE ProcName;' },
            { id: 'rpgle-q5-c', text: 'PR ProcName;' },
            { id: 'rpgle-q5-d', text: 'PROC-DEF ProcName;' },
          ],
          correctOptionId: 'rpgle-q5-a',
          explanation: 'DCL-PR is used to declare a procedure prototype in free-format RPGLE.'
        },
        {
          id: 'rpgle-q6',
          question: 'What does the keyword QUALIFIED do when used with a data structure?',
          options: [
            { id: 'rpgle-q6-a', text: 'Makes the data structure read-only' },
            { id: 'rpgle-q6-b', text: 'Requires field names to be prefixed with the data structure name' },
            { id: 'rpgle-q6-c', text: 'Allocates the data structure in qualified memory' },
            { id: 'rpgle-q6-d', text: 'Validates the data structure against a database table' },
          ],
          correctOptionId: 'rpgle-q6-b',
          explanation: 'The QUALIFIED keyword requires that fields in the data structure be referenced with the data structure name as a prefix (e.g., DS.field instead of just field).'
        },
        {
          id: 'rpgle-q7',
          question: 'What is the purpose of EXTPGM keyword in a procedure interface?',
          options: [
            { id: 'rpgle-q7-a', text: 'To call an external subroutine' },
            { id: 'rpgle-q7-b', text: 'To specify the program is an external program' },
            { id: 'rpgle-q7-c', text: 'To extend the program functionality' },
            { id: 'rpgle-q7-d', text: 'To extract parts of a program' },
          ],
          correctOptionId: 'rpgle-q7-b',
          explanation: 'The EXTPGM keyword is used to specify that a procedure interface is for an external program call rather than a procedure call.'
        },
        {
          id: 'rpgle-q8',
          question: 'Which built-in function is used to trim leading and trailing blanks from a string?',
          options: [
            { id: 'rpgle-q8-a', text: '%TRIM' },
            { id: 'rpgle-q8-b', text: '%TRIMB' },
            { id: 'rpgle-q8-c', text: '%TRIMT' },
            { id: 'rpgle-q8-d', text: '%STRIP' },
          ],
          correctOptionId: 'rpgle-q8-a',
          explanation: '%TRIM is the built-in function used to remove both leading and trailing blanks from a string in RPGLE.'
        },
        {
          id: 'rpgle-q9',
          question: 'What does the *INLR indicator control in RPG?',
          options: [
            { id: 'rpgle-q9-a', text: 'Input line recording' },
            { id: 'rpgle-q9-b', text: 'Internal loop reset' },
            { id: 'rpgle-q9-c', text: 'Last record processing' },
            { id: 'rpgle-q9-d', text: 'Program termination' },
          ],
          correctOptionId: 'rpgle-q9-d',
          explanation: 'The *INLR (Last Record) indicator controls program termination. When set to "on" (1), it indicates that the program should terminate normally.'
        },
        {
          id: 'rpgle-q10',
          question: 'What does the PREFIX keyword do when used with a file definition?',
          options: [
            { id: 'rpgle-q10-a', text: 'Adds a prefix to field names in the file' },
            { id: 'rpgle-q10-b', text: 'Specifies the file is a prefix file' },
            { id: 'rpgle-q10-c', text: 'Sets priority for the file in multi-file processing' },
            { id: 'rpgle-q10-d', text: 'Defines the file path prefix' },
          ],
          correctOptionId: 'rpgle-q10-a',
          explanation: 'The PREFIX keyword adds a prefix to all field names in an externally described file, which can help avoid naming conflicts between fields from different files.'
        }
      ]
    }
  ]
};
