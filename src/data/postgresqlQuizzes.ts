import { QuizSectionData } from '../models/QuizTypes';

export const postgresqlQuizSection: QuizSectionData = {
  id: 'postgresql',
  title: 'PostgreSQL',
  description: 'Test your knowledge of PostgreSQL database management.',
  quizzes: [
    {
      id: 'postgresql-basics',
      title: 'PostgreSQL Database',
      description: 'Questions covering PostgreSQL fundamentals and advanced features.',
      questions: [
        {
          id: 'pg-q1',
          question: 'Which command is used to create a new database in PostgreSQL?',
          options: [
            { id: 'pg-q1-a', text: 'CREATE DATABASE dbname;' },
            { id: 'pg-q1-b', text: 'NEW DATABASE dbname;' },
            { id: 'pg-q1-c', text: 'MAKE DATABASE dbname;' },
            { id: 'pg-q1-d', text: 'GENERATE DATABASE dbname;' },
          ],
          correctOptionId: 'pg-q1-a',
          explanation: 'CREATE DATABASE is the correct SQL command to create a new database in PostgreSQL.'
        },
        {
          id: 'pg-q2',
          question: 'What is the purpose of the VACUUM command in PostgreSQL?',
          options: [
            { id: 'pg-q2-a', text: 'To compress database files' },
            { id: 'pg-q2-b', text: 'To recover disk space and update statistics' },
            { id: 'pg-q2-c', text: 'To create backup copies of the database' },
            { id: 'pg-q2-d', text: 'To delete all data from tables' },
          ],
          correctOptionId: 'pg-q2-b',
          explanation: 'The VACUUM command in PostgreSQL is used to recover disk space occupied by dead tuples and update statistics used by the query planner.'
        },
        {
          id: 'pg-q3',
          question: 'Which PostgreSQL data type would you use to store JSON data?',
          options: [
            { id: 'pg-q3-a', text: 'VARCHAR' },
            { id: 'pg-q3-b', text: 'TEXT' },
            { id: 'pg-q3-c', text: 'JSONB' },
            { id: 'pg-q3-d', text: 'BLOB' },
          ],
          correctOptionId: 'pg-q3-c',
          explanation: 'JSONB is the binary JSON data type in PostgreSQL that provides efficient storage and indexing capabilities for JSON data.'
        },
        {
          id: 'pg-q4',
          question: 'What is the purpose of an EXPLAIN command in PostgreSQL?',
          options: [
            { id: 'pg-q4-a', text: 'To explain database schema' },
            { id: 'pg-q4-b', text: 'To show the query execution plan' },
            { id: 'pg-q4-c', text: 'To provide documentation for tables' },
            { id: 'pg-q4-d', text: 'To translate SQL to another language' },
          ],
          correctOptionId: 'pg-q4-b',
          explanation: 'The EXPLAIN command shows the execution plan of a statement, which is useful for understanding and optimizing query performance.'
        },
        {
          id: 'pg-q5',
          question: 'What is a materialized view in PostgreSQL?',
          options: [
            { id: 'pg-q5-a', text: 'A view that is physically stored' },
            { id: 'pg-q5-b', text: 'A view that contains only material data types' },
            { id: 'pg-q5-c', text: 'A view that automatically updates' },
            { id: 'pg-q5-d', text: 'A deprecated view type' },
          ],
          correctOptionId: 'pg-q5-a',
          explanation: 'A materialized view in PostgreSQL stores the result of a query physically, requiring manual refreshing but providing faster access to complex query results.'
        },
        {
          id: 'pg-q6',
          question: 'Which of the following is NOT a valid index type in PostgreSQL?',
          options: [
            { id: 'pg-q6-a', text: 'B-tree' },
            { id: 'pg-q6-b', text: 'Hash' },
            { id: 'pg-q6-c', text: 'GiST' },
            { id: 'pg-q6-d', text: 'QuadTree' },
          ],
          correctOptionId: 'pg-q6-d',
          explanation: 'PostgreSQL supports B-tree, Hash, GiST, SP-GiST, GIN, and BRIN index types, but not QuadTree as a built-in index type.'
        },
        {
          id: 'pg-q7',
          question: 'What is the purpose of the RETURNING clause in PostgreSQL?',
          options: [
            { id: 'pg-q7-a', text: 'To return from a stored procedure' },
            { id: 'pg-q7-b', text: 'To return data from modified rows' },
            { id: 'pg-q7-c', text: 'To return error messages' },
            { id: 'pg-q7-d', text: 'To return to a previous database state' },
          ],
          correctOptionId: 'pg-q7-b',
          explanation: 'The RETURNING clause allows you to retrieve values of columns from modified rows in INSERT, UPDATE, or DELETE statements.'
        },
        {
          id: 'pg-q8',
          question: 'Which command is used to create a database extension in PostgreSQL?',
          options: [
            { id: 'pg-q8-a', text: 'CREATE EXTENSION extension_name;' },
            { id: 'pg-q8-b', text: 'ADD EXTENSION extension_name;' },
            { id: 'pg-q8-c', text: 'INSTALL EXTENSION extension_name;' },
            { id: 'pg-q8-d', text: 'IMPORT EXTENSION extension_name;' },
          ],
          correctOptionId: 'pg-q8-a',
          explanation: 'CREATE EXTENSION is used to load additional functionality into PostgreSQL database by installing and registering an extension.'
        },
        {
          id: 'pg-q9',
          question: 'What is the purpose of the LATERAL keyword in PostgreSQL?',
          options: [
            { id: 'pg-q9-a', text: 'To join tables horizontally' },
            { id: 'pg-q9-b', text: 'To allow subqueries in FROM to reference columns from preceding FROM items' },
            { id: 'pg-q9-c', text: 'To perform operations on adjacent rows' },
            { id: 'pg-q9-d', text: 'To create lateral indexes for faster retrieval' },
          ],
          correctOptionId: 'pg-q9-b',
          explanation: 'The LATERAL keyword allows subqueries in the FROM clause to reference columns from preceding FROM items, which is not normally allowed.'
        },
        {
          id: 'pg-q10',
          question: 'What does the "WITH" clause (Common Table Expressions) allow you to do in PostgreSQL?',
          options: [
            { id: 'pg-q10-a', text: 'Create temporary indexes' },
            { id: 'pg-q10-b', text: 'Define auxiliary statements for use in a query' },
            { id: 'pg-q10-c', text: 'Set server configuration parameters' },
            { id: 'pg-q10-d', text: 'Create views with specific permissions' },
          ],
          correctOptionId: 'pg-q10-b',
          explanation: 'The WITH clause, also known as Common Table Expressions (CTEs), allows you to define auxiliary statements for use in a larger query, improving readability and allowing recursive queries.'
        }
      ]
    }
  ]
};
