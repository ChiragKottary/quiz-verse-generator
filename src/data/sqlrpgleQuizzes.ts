import { QuizSectionData } from '../models/QuizTypes';

export const sqlrpgleQuizData: QuizSectionData = {
  id: 'sqlrpgle',
  title: 'SQLRPGLE',
  description: 'Test your knowledge of embedded SQL in RPGLE.',
  quizzes: [
    {
      id: 'sqlrpgle-basics',
      title: 'SQLRPGLE Programming',
      description: 'Questions covering SQL embedded in RPGLE programming.',
      questions: [
        {
          id: 'sqlrpgle-q1',
          question: 'How do you begin an embedded SQL statement in SQLRPGLE?',
          options: [
            { id: 'sqlrpgle-q1-a', text: 'SQL:' },
            { id: 'sqlrpgle-q1-b', text: 'EXEC SQL' },
            { id: 'sqlrpgle-q1-c', text: 'BEGIN SQL' },
            { id: 'sqlrpgle-q1-d', text: 'RUN SQL' },
          ],
          correctOptionId: 'sqlrpgle-q1-b',
          explanation: 'EXEC SQL is the prefix used to begin an embedded SQL statement in SQLRPGLE.'
        },
        {
          id: 'sqlrpgle-q2',
          question: 'What is SQLSTATE in SQLRPGLE used for?',
          options: [
            { id: 'sqlrpgle-q2-a', text: 'To store the current database state' },
            { id: 'sqlrpgle-q2-b', text: 'To return error or warning conditions from SQL statements' },
            { id: 'sqlrpgle-q2-c', text: 'To define the SQL connection state' },
            { id: 'sqlrpgle-q2-d', text: 'To set database transaction state' },
          ],
          correctOptionId: 'sqlrpgle-q2-b',
          explanation: 'SQLSTATE is a variable that returns a status code indicating the outcome of the most recently executed SQL statement, used for error handling.'
        },
        {
          id: 'sqlrpgle-q3',
          question: 'What is the correct way to define a host variable in SQLRPGLE?',
          options: [
            { id: 'sqlrpgle-q3-a', text: 'DCL-S VarName SQL VARCHAR(20);' },
            { id: 'sqlrpgle-q3-b', text: 'DCL-S VarName VARCHAR(20);' },
            { id: 'sqlrpgle-q3-c', text: 'HOST-VAR VarName VARCHAR(20);' },
            { id: 'sqlrpgle-q3-d', text: 'SQL-VAR VarName VARCHAR(20);' },
          ],
          correctOptionId: 'sqlrpgle-q3-b',
          explanation: 'Host variables in SQLRPGLE are defined using standard RPGLE declaration statements like DCL-S, and then can be used in SQL statements with a colon prefix.'
        },
        {
          id: 'sqlrpgle-q4',
          question: 'How do you reference a host variable within an SQL statement?',
          options: [
            { id: 'sqlrpgle-q4-a', text: 'By putting a colon before the variable name (:VarName)' },
            { id: 'sqlrpgle-q4-b', text: 'By putting an ampersand before the variable name (&VarName)' },
            { id: 'sqlrpgle-q4-c', text: 'By putting the variable name in square brackets [VarName]' },
            { id: 'sqlrpgle-q4-d', text: 'By putting the variable name in quotes "VarName"' },
          ],
          correctOptionId: 'sqlrpgle-q4-a',
          explanation: 'Host variables in SQL statements are referenced by prefixing the variable name with a colon, like :VarName.'
        },
        {
          id: 'sqlrpgle-q5',
          question: 'What is an SQL cursor used for in SQLRPGLE?',
          options: [
            { id: 'sqlrpgle-q5-a', text: 'To point to the current record in a table' },
            { id: 'sqlrpgle-q5-b', text: 'To handle result sets returned by a query' },
            { id: 'sqlrpgle-q5-c', text: 'To maintain database connection state' },
            { id: 'sqlrpgle-q5-d', text: 'To navigate between different SQL servers' },
          ],
          correctOptionId: 'sqlrpgle-q5-b',
          explanation: 'An SQL cursor is used to handle result sets returned by a query, allowing you to process rows one at a time.'
        },
        {
          id: 'sqlrpgle-q6',
          question: 'What does the INCLUDE directive with SQLCA do in SQLRPGLE?',
          options: [
            { id: 'sqlrpgle-q6-a', text: 'Includes SQL compiler directives' },
            { id: 'sqlrpgle-q6-b', text: 'Includes the SQL Communications Area for error handling' },
            { id: 'sqlrpgle-q6-c', text: 'Includes SQL configuration options' },
            { id: 'sqlrpgle-q6-d', text: 'Includes SQL table definitions' },
          ],
          correctOptionId: 'sqlrpgle-q6-b',
          explanation: 'EXEC SQL INCLUDE SQLCA; includes the SQL Communications Area structure, which contains variables for error handling and diagnostics.'
        },
        {
          id: 'sqlrpgle-q7',
          question: 'What is the purpose of the COMMIT statement in SQLRPGLE?',
          options: [
            { id: 'sqlrpgle-q7-a', text: 'To log SQL commands for auditing' },
            { id: 'sqlrpgle-q7-b', text: 'To make SQL changes permanent' },
            { id: 'sqlrpgle-q7-c', text: 'To check syntax of SQL statements' },
            { id: 'sqlrpgle-q7-d', text: 'To compress the database after operations' },
          ],
          correctOptionId: 'sqlrpgle-q7-b',
          explanation: 'The COMMIT statement in SQL makes all changes to the database permanent since the last COMMIT or ROLLBACK statement.'
        },
        {
          id: 'sqlrpgle-q8',
          question: 'How do you declare a SQL cursor in SQLRPGLE?',
          options: [
            { id: 'sqlrpgle-q8-a', text: 'DECLARE cursor-name CURSOR' },
            { id: 'sqlrpgle-q8-b', text: 'EXEC SQL DECLARE cursor-name CURSOR' },
            { id: 'sqlrpgle-q8-c', text: 'CREATE CURSOR cursor-name' },
            { id: 'sqlrpgle-q8-d', text: 'DEFINE CURSOR cursor-name' },
          ],
          correctOptionId: 'sqlrpgle-q8-b',
          explanation: 'A cursor in SQLRPGLE is declared using the syntax EXEC SQL DECLARE cursor-name CURSOR FOR select-statement;'
        },
        {
          id: 'sqlrpgle-q9',
          question: 'What is the advantage of using SQL in RPGLE compared to traditional record-level access?',
          options: [
            { id: 'sqlrpgle-q9-a', text: 'SQL usually requires less code for complex data operations' },
            { id: 'sqlrpgle-q9-b', text: 'SQL is always faster than record-level access' },
            { id: 'sqlrpgle-q9-c', text: "SQL doesn't require compilation" },
            { id: 'sqlrpgle-q9-d', text: "SQL doesn't use system resources" },
          ],
          correctOptionId: 'sqlrpgle-q9-a',
          explanation: 'SQL typically requires less code for complex data operations like joins, aggregations, and filtering compared to traditional record-level access methods.'
        },
        {
          id: 'sqlrpgle-q10',
          question: 'What is the purpose of the FOR UPDATE clause in a cursor declaration?',
          options: [
            { id: 'sqlrpgle-q10-a', text: 'To indicate that the cursor will be used for updating records' },
            { id: 'sqlrpgle-q10-b', text: 'To automatically update records when fetched' },
            { id: 'sqlrpgle-q10-c', text: 'To update the cursor definition' },
            { id: 'sqlrpgle-q10-d', text: 'To update the cursor name' },
          ],
          correctOptionId: 'sqlrpgle-q10-a',
          explanation: 'The FOR UPDATE clause in a cursor declaration indicates that the cursor will be used to update records in the result set, enabling row-level locking.'
        }
      ]
    }
  ]
};
