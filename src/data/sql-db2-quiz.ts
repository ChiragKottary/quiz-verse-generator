import { QuizSectionData } from "@/models/QuizTypes";

export const sqldb2quiz: QuizSectionData ={
  "id": "sql-db2-quiz",
  "title": "SQL and DB2 Concepts",
  "description": "Test your knowledge of general SQL and DB2 concepts.",
  "quizzes": [
    {
      "id": "sql-db2-basics",
      "title": "SQL/DB2 Fundamentals",
      "description": "Questions covering basic SQL statements, clauses, functions, and DB2 concepts.",
      "questions": [
        {
          "id": "sql-q1",
          "question": "What are the different events in Triggers?",
          "options": [
            { "id": "sql-q1-a", "text": "Drop, Comment, Delete" },
            { "id": "sql-q1-b", "text": "Define, Create, Comment" },
            { "id": "sql-q1-c", "text": "Select, Commit, Define" },
            { "id": "sql-q1-d", "text": "Insert, Update, Delete" }
          ],
          "correctOptionId": "sql-q1-d",
          "explanation": "Triggers are activated by Data Manipulation Language (DML) events, specifically INSERT, UPDATE, and DELETE operations on a table."
        },
        {
          "id": "sql-q2",
          "question": "Which query is used for sorting data that retrieves all the fields from the CUSTOMER table and listed them in ascending order based on age?",
          "options": [
            { "id": "sql-q2-a", "text": "SELECT * FROM CUSTOMER SORT BY age" },
            { "id": "sql-q2-b", "text": "SELECT * FROM CUSTOMER ORDER BY COLUMN age" },
            { "id": "sql-q2-c", "text": "SELECT * FROM CUSTOMER ORDER BY age" },
            { "id": "sql-q2-d", "text": "SELECT * FROM CUSTOMER ORDER age" }
          ],
          "correctOptionId": "sql-q2-c",
          "explanation": "The ORDER BY clause is used to sort the result set. By default, it sorts in ascending order. Specifying the column name after ORDER BY is the correct syntax."
        },
        {
          "id": "sql-q3",
          "question": "Which function can be used to return a specified portion of a character string?",
          "options": [
            { "id": "sql-q3-a", "text": "STRIP" },
            { "id": "sql-q3-b", "text": "SUBSTR" },
            { "id": "sql-q3-c", "text": "TRIM" },
            { "id": "sql-q3-d", "text": "POS" }
          ],
          "correctOptionId": "sql-q3-b",
          "explanation": "SUBSTR (or SUBSTRING in some SQL dialects) is used to extract a portion (substring) from a character string."
        },
        {
          "id": "sql-q4",
          "question": "You need to filter return data from your query on the STUDENT table according to the CLASS column. Which of the following clauses in your SQL query will contain a reference to the appropriate filter criteria?",
          "options": [
            { "id": "sql-q4-a", "text": "WHERE" },
            { "id": "sql-q4-b", "text": "SELECT" },
            { "id": "sql-q4-c", "text": "FROM" },
            { "id": "sql-q4-d", "text": "HAVING" }
          ],
          "correctOptionId": "sql-q4-a",
          "explanation": "The WHERE clause is used to filter records based on specified conditions before any grouping occurs."
        },
        {
          "id": "sql-q5",
          "question": "Which of the following SQL command can be used to modify existing data in a database table?",
          "options": [
            { "id": "sql-q5-a", "text": "INSERT" },
            { "id": "sql-q5-b", "text": "MODIFY" },
            { "id": "sql-q5-c", "text": "CHANGE" },
            { "id": "sql-q5-d", "text": "UPDATE" }
          ],
          "correctOptionId": "sql-q5-d",
          "explanation": "The UPDATE statement is used to modify existing records in a table."
        },
        {
          "id": "sql-q6",
          "question": "Which of the following SQL Statements is right?",
          "options": [
            { "id": "sql-q6-a", "text": "SELECT FROM Sales WHERE Date BETWEEN '10/12/2005' AND '01/01/2006'" },
            { "id": "sql-q6-b", "text": "SELECT FROM Sales WHERE Date BETWEEN ('10/12/2005', '01/01/2006')" },
            { "id": "sql-q6-c", "text": "SELECT * FROM Sales WHERE Date BETWEEN '10/12/2005' AND '01/01/2006'" },
            { "id": "sql-q6-d", "text": "SELECT * FROM Sales WHERE Date BETWEEN '10/12/2005' AND Date BETWEEN '01/01/2006'" }
          ],
          "correctOptionId": "sql-q6-c",
          "explanation": "The correct syntax requires specifying columns (or * for all columns) after SELECT and using the BETWEEN operator with AND to define the range."
        },
        {
          "id": "sql-q7",
          "question": "What is the difference between the WHERE and HAVING SQL clauses?",
          "options": [
            { "id": "sql-q7-a", "text": "The having clause is the same as the where clause" },
            { "id": "sql-q7-b", "text": "The HAVING SQL clause is applied to all rows in the result. The WHERE clause is used only with SELECT SQL statements and specifies a search condition for an aggregate or a group" },
            { "id": "sql-q7-c", "text": "The WHERE SQL clause is applied to individual rows before grouping. The HAVING clause is used to filter groups based on a specified condition, typically involving aggregate functions." },
            { "id": "sql-q7-d", "text": "None of the above" }
          ],
          "correctOptionId": "sql-q7-c",
          "explanation": "WHERE filters rows before aggregation, while HAVING filters groups after aggregation."
        },
        {
          "id": "sql-q8",
          "question": "A field whose value uniquely identifies every row in a table?",
          "options": [
            { "id": "sql-q8-a", "text": "keys" },
            { "id": "sql-q8-b", "text": "data type" },
            { "id": "sql-q8-c", "text": "foreign key" },
            { "id": "sql-q8-d", "text": "primary key" }
          ],
          "correctOptionId": "sql-q8-d",
          "explanation": "A primary key is a constraint that uniquely identifies each record in a database table."
        },
        {
          "id": "sql-q9",
          "question": "When you COMMIT, is the cursor closed?",
          "options": [
            { "id": "sql-q9-a", "text": "yes" },
            { "id": "sql-q9-b", "text": "no" }
          ],
          "correctOptionId": "sql-q9-a",
          "explanation": "In standard SQL behavior (including DB2), a COMMIT operation typically closes all open cursors unless the cursor was declared WITH HOLD."
        },
        {
          "id": "sql-q10",
          "question": "Which of the following are the five built-in aggregate functions provided by SQL?",
          "options": [
            { "id": "sql-q10-a", "text": "SUM, AVG1, MIN, MAX, NAME" },
            { "id": "sql-q10-b", "text": "COUNT, SUM, AVG, MIN, MAX" },
            { "id": "sql-q10-c", "text": "SUM, AVG, MULT, DIV1, MIN" },
            { "id": "sql-q10-d", "text": "SUM, AVG, MIN, MAX, MULT" }
          ],
          "correctOptionId": "sql-q10-b",
          "explanation": "The standard SQL aggregate functions are COUNT, SUM, AVG, MIN, and MAX."
        },
        {
          "id": "sql-q11",
          "question": "Is DECLARE CURSOR executable?",
          "options": [
            { "id": "sql-q11-a", "text": "yes" },
            { "id": "sql-q11-b", "text": "no" }
          ],
          "correctOptionId": "sql-q11-b",
          "explanation": "DECLARE CURSOR is a declarative statement, not an executable one. It defines a cursor but doesn't perform an action until OPEN, FETCH, or CLOSE is executed."
        },
        {
          "id": "sql-q12",
          "question": "How many indexes will be created by the following statement?\n\n```sql\nCreate table TABLE1\n { Column1 integer not null primary key,\n Column2 integer not null,\nColumn3 char (20),\n Column4 char (10),\n Constraint Const_4 unique (Column1,Column2)\n }\n```",
          "options": [
            { "id": "sql-q12-a", "text": "0" },
            { "id": "sql-q12-b", "text": "3" },
            { "id": "sql-q12-c", "text": "1" },
            { "id": "sql-q12-d", "text": "2" }
          ],
          "correctOptionId": "sql-q12-d",
          "explanation": "DB2 typically creates an index automatically for a PRIMARY KEY constraint and another index for a UNIQUE constraint. Therefore, two indexes will be created: one for the primary key on Column1, and one for the unique constraint on (Column1, Column2)."
        },
        {
          "id": "sql-q13",
          "question": "Can you have more than one cursor open at any one time in a program?",
          "options": [
            { "id": "sql-q13-a", "text": "yes" },
            { "id": "sql-q13-b", "text": "no" }
          ],
          "correctOptionId": "sql-q13-a",
          "explanation": "Yes, a program can declare and open multiple cursors simultaneously, allowing iteration over different result sets."
        },
        {
          "id": "sql-q14",
          "question": "What does a positive value of SQLCODE (or SQLSTATE class '01') mean?",
          "options": [
            { "id": "sql-q14-a", "text": "successful execution" },
            { "id": "sql-q14-b", "text": "no rows found" },
            { "id": "sql-q14-c", "text": "warning" },
            { "id": "sql-q14-d", "text": "error" }
          ],
          "correctOptionId": "sql-q14-c",
          "explanation": "A positive SQLCODE (like +100 for 'no rows found') or an SQLSTATE starting with '01' generally indicates a warning or a successful completion with additional information (e.g., no data met the criteria)."
        },
        {
          "id": "sql-q15",
          "question": "What are the aggregate functions supported by DB2?",
          "options": [
            { "id": "sql-q15-a", "text": "SUM and AVG" },
            { "id": "sql-q15-b", "text": "SUM, MAX, MIN, AVG, and COUNT" },
            { "id": "sql-q15-c", "text": "Both of the above" },
            { "id": "sql-q15-d", "text": "none of the above" }
          ],
          "correctOptionId": "sql-q15-b",
          "explanation": "DB2 supports the standard SQL aggregate functions: SUM, MAX, MIN, AVG, and COUNT, among others."
        },
        {
          "id": "sql-q16",
          "question": "Which of the following DB2 data types cannot be used to create an identity column?",
          "options": [
            { "id": "sql-q16-a", "text": "NUMERIC" },
            { "id": "sql-q16-b", "text": "SMALLINT" },
            { "id": "sql-q16-c", "text": "DOUBLE" },
            { "id": "sql-q16-d", "text": "INTEGER" }
          ],
          "correctOptionId": "sql-q16-c",
          "explanation": "Identity columns must be based on exact numeric types (like SMALLINT, INTEGER, BIGINT, DECIMAL, NUMERIC). Floating-point types like DOUBLE or REAL cannot be used for identity columns."
        },
        {
          "id": "sql-q17",
          "question": "Which of the following query is correct for using comparison operators in SQL?",
          "options": [
            { "id": "sql-q17-a", "text": "SELECT CUSTNAME FROM CUSTOMER where age > 50 and where age < 80" },
            { "id": "sql-q17-b", "text": "SELECT CUSTNAME FROM CUSTOMER where age > 50 and < 80" },
            { "id": "sql-q17-c", "text": "SELECT CUSTNAME FROM CUSTOMER where age > 50 and age < 80" },
            { "id": "sql-q17-d", "text": "none of the above" }
          ],
          "correctOptionId": "sql-q17-c",
          "explanation": "When combining multiple conditions with AND or OR, each condition must be fully specified, including the column name (e.g., 'age > 50 AND age < 80')."
        }
      ]
    }
  ]
}