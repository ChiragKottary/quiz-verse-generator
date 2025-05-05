import { QuizSectionData } from "@/models/QuizTypes";

export const ibmiquiz: QuizSectionData ={
  "id": "ibm-i-quiz",
  "title": "IBM i Development",
  "description": "Test your knowledge of IBM i programming concepts (RPGLE, SQLRPGLE, CLLE, DDS, SQL).",
  "quizzes": [
    {
      "id": "rpgle-fundamentals",
      "title": "RPGLE Fundamentals",
      "description": "Questions covering RPGLE programming fundamentals.",
      "questions": [
        {
          "id": "rpgle-q1",
          "question": "What is the primary difference between fixed-format and free-format RPG?",
          "options": [
            { "id": "rpgle-q1-a", "text": "Free-format requires more memory allocation than fixed-format" },
            { "id": "rpgle-q1-b", "text": "Fixed-format uses position-dependent code while free-format is position-independent" },
            { "id": "rpgle-q1-c", "text": "Free-format can only be used with SQL operations" },
            { "id": "rpgle-q1-d", "text": "Fixed-format is the only format supported in IBM i V7R2 and above" }
          ],
          "correctOptionId": "rpgle-q1-b",
          "explanation": "Fixed-format RPG requires code to be placed in specific columns with each position having a predefined meaning (specification type in column 6, factor 1 starting in column 12, etc.). Free-format RPG, introduced with RPG IV, is position-independent and uses modern syntax with operations and keywords that can start anywhere on a line, making code more readable and maintainable."
        },
        {
          "id": "rpgle-q2",
          "question": "Which of the following correctly defines a qualified data structure with a subfield in free-format RPG?",
          "options": [
            { "id": "rpgle-q2-a", "text": "```\nDCL-DS customer QUALIFIED;\n  name VARCHAR(50);\n  id CHAR(10);\nEND-DS;\n```" },
            { "id": "rpgle-q2-b", "text": "```\nD customer       DS                  QUALIFIED\nD  name                       50A    \nD  id                         10A\n```" },
            { "id": "rpgle-q2-c", "text": "```\nDCL-DS customer;\n  name VARCHAR(50) QUALIFIED;\n  id CHAR(10) QUALIFIED;\nEND-DS;\n```" },
            { "id": "rpgle-q2-d", "text": "```\nDCL-DS customer.\n  name VARCHAR(50);\n  id CHAR(10);\n/END-DS;\n```" }
          ],
          "correctOptionId": "rpgle-q2-a",
          "explanation": "Answer A correctly shows the syntax for a qualified data structure in free-format RPG. The QUALIFIED keyword is specified on the data structure itself, and the DCL-DS and END-DS statements properly enclose the data structure definition. Answer B shows fixed-format syntax, not free-format. Answer C incorrectly applies the QUALIFIED keyword to individual fields. Answer D uses incorrect syntax with a period after customer and an invalid /END-DS closing tag."
        },
        {
          "id": "rpgle-q3",
          "question": "What will be the output of the following RPG code?\n\n```\nDCL-S Array CHAR(1) DIM(5) CTDATA;\nDCL-S i INT(10);\n\nFOR i = 1 TO %ELEM(Array);\n  IF Array(i) = 'B';\n    LEAVE;\n  ENDIF;\n  DSPLY Array(i);\nENDFOR;\n\n**CTDATA Array\nABCDE\n```",
          "options": [
            { "id": "rpgle-q3-a", "text": "A" },
            { "id": "rpgle-q3-b", "text": "AB" },
            { "id": "rpgle-q3-c", "text": "A (followed by a blank display)" },
            { "id": "rpgle-q3-d", "text": "Nothing is displayed" }
          ],
          "correctOptionId": "rpgle-q3-a",
          "explanation": "In this code, 'ABCDE' is loaded into the Array via the CTDATA. The FOR loop processes each element. When i=1, Array(1) contains 'A', which is displayed. When i=2, Array(2) contains 'B', which triggers the LEAVE statement, exiting the loop before displaying 'B'. So only 'A' is displayed. The LEAVE statement immediately exits the FOR loop when the condition is met."
        },
        {
          "id": "rpgle-q4",
          "question": "Which built-in function would be most appropriate to handle null values from a database field in RPGLE?",
          "options": [
            { "id": "rpgle-q4-a", "text": "%NULLIND" },
            { "id": "rpgle-q4-b", "text": "%NULLIFY" },
            { "id": "rpgle-q4-c", "text": "%ISBLANK" },
            { "id": "rpgle-q4-d", "text": "%NULLTEST" }
          ],
          "correctOptionId": "rpgle-q4-a",
          "explanation": "%NULLIND is the correct built-in function for handling null indicators in RPG. It allows you to get or set the null indicator for a field, determining whether a database null value is present. %NULLIFY doesn't exist in RPG. %ISBLANK tests if a value is blank but doesn't specifically handle null values. %NULLTEST is not a valid RPG built-in function."
        }
      ]
    },
    {
      "id": "sqlrpgle",
      "title": "SQLRPGLE",
      "description": "Questions covering embedded SQL in RPGLE programs.",
      "questions": [
        {
          "id": "sqlrpgle-q5",
          "question": "Which of the following correctly embeds an SQL SELECT statement in an SQLRPGLE program?",
          "options": [
            { "id": "sqlrpgle-q5-a", "text": "```\nEXEC SQL\n  SELECT CUSTNAME INTO :custName FROM CUSTOMER\n  WHERE CUSTID = :custId;\n```" },
            { "id": "sqlrpgle-q5-b", "text": "```\nC/EXEC SQL\nC+   SELECT CUSTNAME INTO :custName FROM CUSTOMER\nC+   WHERE CUSTID = :custId\nC/END-EXEC\n```" },
            { "id": "sqlrpgle-q5-c", "text": "```\nEXEC SQL SELECT CUSTNAME INTO @custName FROM CUSTOMER\n         WHERE CUSTID = @custId;\n```" },
            { "id": "sqlrpgle-q5-d", "text": "```\nSQL.EXEC(\n  SELECT CUSTNAME INTO :custName FROM CUSTOMER\n  WHERE CUSTID = :custId);\n```" }
          ],
          "correctOptionId": "sqlrpgle-q5-a",
          "explanation": "Answer A shows the correct syntax for embedded SQL in free-format SQLRPGLE. SQL statements start with \"EXEC SQL\" and end with a semicolon. Host variables are prefixed with a colon (:). Answer B shows fixed-format embedded SQL, which requires C/ and C+ in specific columns. Answer C incorrectly uses @ instead of : for host variables. Answer D uses completely invalid syntax."
        },
        {
          "id": "sqlrpgle-q6",
          "question": "What is the result of executing the following SQLRPGLE code?\n\n```\nDCL-S custName VARCHAR(50);\nDCL-S sqlState CHAR(5);\n\nEXEC SQL\n  DECLARE C1 CURSOR FOR\n    SELECT CUSTNAME FROM CUSTOMER\n    WHERE STATUS = 'A'\n    ORDER BY CUSTNAME\n    FOR UPDATE;\n\nEXEC SQL\n  OPEN C1;\n\nEXEC SQL\n  FETCH NEXT FROM C1 INTO :custName;\n\nEXEC SQL\n  GET DIAGNOSTICS :sqlState = RETURNED_SQLSTATE;\n\nIF sqlState = '02000';\n  DSPLY 'No records found';\nELSE;\n  DSPLY custName;\nENDIF;\n\nEXEC SQL\n  CLOSE C1;\n```",
          "options": [
            { "id": "sqlrpgle-q6-a", "text": "The first active customer name is displayed" },
            { "id": "sqlrpgle-q6-b", "text": "'No records found' is displayed only if the CUSTOMER table is empty" },
            { "id": "sqlrpgle-q6-c", "text": "'No records found' is displayed only if there are no active customers" },
            { "id": "sqlrpgle-q6-d", "text": "A syntax error occurs because GET DIAGNOSTICS must follow immediately after FETCH" }
          ],
          "correctOptionId": "sqlrpgle-q6-c",
          "explanation": "This code declares a cursor for selecting active customers (STATUS = 'A'), fetches the first record, and checks the SQLSTATE. The value '02000' indicates \"no data found\". Therefore, 'No records found' will display only if there are no customers with STATUS = 'A'. Otherwise, it displays the first active customer's name. The GET DIAGNOSTICS statement is valid after any SQL statement, not just immediately after FETCH."
        },
        {
          "id": "sqlrpgle-q7",
          "question": "Which of the following correctly demonstrates the use of parameter markers in dynamic SQL?",
          "options": [
            { "id": "sqlrpgle-q7-a", "text": "```\nEXEC SQL\n  PREPARE stmt FROM 'SELECT * FROM CUSTOMER WHERE STATUS = ?';\nEXEC SQL\n  EXECUTE stmt USING :status;\n```" },
            { "id": "sqlrpgle-q7-b", "text": "```\nEXEC SQL\n  PREPARE stmt FROM 'SELECT * FROM CUSTOMER WHERE STATUS = :status';\nEXEC SQL\n  EXECUTE stmt;\n```" },
            { "id": "sqlrpgle-q7-c", "text": "```\nEXEC SQL\n  PREPARE stmt FROM 'SELECT * FROM CUSTOMER WHERE STATUS = &status';\nEXEC SQL\n  EXECUTE stmt SET &status = :status;\n```" },
            { "id": "sqlrpgle-q7-d", "text": "```\nEXEC SQL\n  PREPARE stmt FROM 'SELECT * FROM CUSTOMER WHERE STATUS = @status';\nEXEC SQL\n  EXECUTE stmt SET @status = :status;\n```" }
          ],
          "correctOptionId": "sqlrpgle-q7-a",
          "explanation": "Answer A correctly demonstrates parameter markers in dynamic SQL. The question mark (?) in the prepared statement is a parameter marker, which is replaced by values provided in the USING clause of the EXECUTE statement. Answer B incorrectly uses a host variable notation inside a string. Answer C and D use invalid syntax with & and @ symbols instead of the standard ? parameter marker."
        }
      ]
    },
    {
      "id": "clle",
      "title": "CLLE (Control Language)",
      "description": "Questions covering CLLE programming.",
      "questions": [
        {
          "id": "clle-q8",
          "question": "Which of the following CLLE statements correctly handles errors from a command?",
          "options": [
            { "id": "clle-q8-a", "text": "`MONMSG MSGID(CPF0000) EXEC(GOTO ERROR)`" },
            { "id": "clle-q8-b", "text": "`RCVMSG MSGID(CPF0000) EXEC(GOTO ERROR)`" },
            { "id": "clle-q8-c", "text": "`ONERROR MSGID(CPF0000) EXEC(GOTO ERROR)`" },
            { "id": "clle-q8-d", "text": "`TRY MSGID(CPF0000) CATCH(GOTO ERROR)`" }
          ],
          "correctOptionId": "clle-q8-a",
          "explanation": "The MONMSG (Monitor Message) command is the correct way to handle errors in CL programs. It specifies what action to take when a specific message or range of messages (like CPF0000, which captures all CPFxxxx messages) is sent as a result of running a command. RCVMSG is for receiving a message, not handling errors. ONERROR and TRY/CATCH are not valid CL commands."
        },
        {
          "id": "clle-q9",
          "question": "What will be the value of &RESULT after executing the following CLLE code?\n\n```\nDCL &NUM1 *DEC (5 0) VALUE(10)\nDCL &NUM2 *DEC (5 0) VALUE(3)\nDCL &RESULT *CHAR (10)\n\nIF (&NUM1 *GT &NUM2) THEN(DO)\n   CHGVAR &RESULT VALUE('GT')\nENDDO\nELSE CMD(DO)\n   IF (&NUM1 *EQ &NUM2) THEN(DO)\n      CHGVAR &RESULT VALUE('EQ')\n   ENDDO\n   ELSE CMD(DO)\n      CHGVAR &RESULT VALUE('LT')\n   ENDDO\nENDDO\n```",
          "options": [
            { "id": "clle-q9-a", "text": "GT" },
            { "id": "clle-q9-b", "text": "EQ" },
            { "id": "clle-q9-c", "text": "LT" },
            { "id": "clle-q9-d", "text": "The code will not compile due to syntax errors" }
          ],
          "correctOptionId": "clle-q9-a",
          "explanation": "In this code, &NUM1 is 10 and &NUM2 is 3. The first condition checks if &NUM1 is greater than &NUM2, which is true (10 > 3). Therefore, &RESULT is set to 'GT'. The ELSE clause never executes because the first condition is satisfied. The syntax is valid CL code using structured programming with IF, THEN(DO), and ELSE CMD(DO) constructs."
        },
        {
          "id": "clle-q10",
          "question": "Which of the following correctly passes parameters to a called program in CLLE?",
          "options": [
            { "id": "clle-q10-a", "text": "```\nCALL PGM(CUSTPGM) PARM(&CUSTID &NAME &ADDR)\n```" },
            { "id": "clle-q10-b", "text": "```\nCALL CUSTPGM PARM(&CUSTID, &NAME, &ADDR)\n```" },
            { "id": "clle-q10-c", "text": "```\nCALL CUSTPGM(&CUSTID &NAME &ADDR)\n```" },
            { "id": "clle-q10-d", "text": "```\nCALL PGM(CUSTPGM) PASSING(&CUSTID &NAME &ADDR)\n```" }
          ],
          "correctOptionId": "clle-q10-a",
          "explanation": "Answer A shows the correct syntax for calling a program with parameters in CL. The PGM keyword specifies the program to call, and the PARM keyword lists the parameters to pass. Multiple parameters are separated by spaces, not commas. Answer B incorrectly uses commas between parameters. Answer C omits the PARM keyword. Answer D incorrectly uses PASSING instead of PARM."
        }
      ]
    },
    {
      "id": "embedded-sql",
      "title": "Embedded SQL",
      "description": "Questions covering general embedded SQL concepts.",
      "questions": [
        {
          "id": "embed-sql-q11",
          "question": "What is the purpose of the PREPARE and EXECUTE statements in embedded SQL?",
          "options": [
            { "id": "embed-sql-q11-a", "text": "To precompile SQL statements for better performance" },
            { "id": "embed-sql-q11-b", "text": "To dynamically build and execute SQL statements at runtime" },
            { "id": "embed-sql-q11-c", "text": "To execute stored procedures with variable input parameters" },
            { "id": "embed-sql-q11-d", "text": "To prepare transaction logs before executing critical SQL operations" }
          ],
          "correctOptionId": "embed-sql-q11-b",
          "explanation": "PREPARE and EXECUTE statements are used for dynamic SQL, allowing applications to build and execute SQL statements at runtime rather than having them fixed at compile time. This provides flexibility when the exact SQL statement isn't known until the program runs. It doesn't precompile for performance (A), isn't specifically for stored procedures (C), and has nothing to do with transaction logs (D)."
        },
        {
          "id": "embed-sql-q12",
          "question": "Which of the following correctly shows how to handle a null value in a host variable with indicators in embedded SQL?",
          "options": [
            { "id": "embed-sql-q12-a", "text": "```\nEXEC SQL\n  SELECT COMMENTS INTO :comments :commentsNull\n  FROM CUSTOMER WHERE CUSTID = :custId;\nIF commentsNull < 0 THEN\n  // Handle null value\nENDIF;\n```" },
            { "id": "embed-sql-q12-b", "text": "```\nEXEC SQL\n  SELECT COMMENTS INTO :comments INDICATOR :commentsNull\n  FROM CUSTOMER WHERE CUSTID = :custId;\nIF commentsNull = -1 THEN\n  // Handle null value\nENDIF;\n```" },
            { "id": "embed-sql-q12-c", "text": "```\nEXEC SQL\n  SELECT COMMENTS INTO :comments:commentsNull\n  FROM CUSTOMER WHERE CUSTID = :custId;\nIF commentsNull = NULL THEN\n  // Handle null value\nENDIF;\n```" },
            { "id": "embed-sql-q12-d", "text": "```\nEXEC SQL\n  SELECT COMMENTS INTO :comments WITH NULL INDICATOR :commentsNull\n  FROM CUSTOMER WHERE CUSTID = :custId;\nIF commentsNull IS NULL THEN\n  // Handle null value\nENDIF;\n```" }
          ],
          "correctOptionId": "embed-sql-q12-a",
          "explanation": "In embedded SQL, null indicators are specified by listing the indicator variable after the host variable, separated by a space. When SQL assigns a null to a host variable, it sets the indicator variable to -1. The correct way to check for null is to test if the indicator is negative. Answer B incorrectly uses the INDICATOR keyword. Answer C has incorrect syntax with no space between variables. Answer D uses invalid \"WITH NULL INDICATOR\" syntax and incorrect null testing."
        },
        {
          "id": "embed-sql-q13",
          "question": "Which statement correctly starts a transaction in embedded SQL?",
          "options": [
            { "id": "embed-sql-q13-a", "text": "`EXEC SQL START TRANSACTION;`" },
            { "id": "embed-sql-q13-b", "text": "`EXEC SQL BEGIN TRANSACTION;`" },
            { "id": "embed-sql-q13-c", "text": "`EXEC SQL BEGIN WORK;`" },
            { "id": "embed-sql-q13-d", "text": "`EXEC SQL SET TRANSACTION;`" }
          ],
          "correctOptionId": "embed-sql-q13-c",
          "explanation": "In DB2 for IBM i (SQL/400), `BEGIN WORK` is the standard statement to start a transaction. While some SQL implementations support START TRANSACTION or BEGIN TRANSACTION, in IBM i the correct syntax is BEGIN WORK. SET TRANSACTION is used to set transaction characteristics but doesn't start a transaction."
        }
      ]
    },
    {
      "id": "physical-files",
      "title": "Physical Files (PF)",
      "description": "Questions covering Physical File DDS.",
      "questions": [
        {
          "id": "pf-q14",
          "question": "Which DDS keyword is used to define a primary key in a physical file?",
          "options": [
            { "id": "pf-q14-a", "text": "PRIKEY" },
            { "id": "pf-q14-b", "text": "UNIQUE" },
            { "id": "pf-q14-c", "text": "PRIMARY" },
            { "id": "pf-q14-d", "text": "KEY" }
          ],
          "correctOptionId": "pf-q14-b",
          "explanation": "In DDS for physical files, the UNIQUE keyword is used to define a unique key, which serves as the primary key. There is no PRIKEY keyword in DDS. The PRIMARY keyword doesn't exist in DDS. KEY is not a valid DDS keyword - keys are defined using K in position 17 along with field names."
        },
        {
          "id": "pf-q15",
          "question": "Consider the following DDS for a physical file:\n\n```\n     A          R CUSTREC                  TEXT('Customer Record')\n     A            CUSTID         10A        COLHDG('Customer' 'ID')\n     A            NAME           50A\n     A            ADDR1          50A\n     A            ADDR2          50A\n     A            CITY           25A\n     A            STATE           2A\n     A            ZIP            10A\n     A            CRTDATE         L         TIMFMT(*ISO)\n     A            CRTUSR         10A\n     A          K CUSTID\n```\n\nWhich statement about this file definition is true?",
          "options": [
            { "id": "pf-q15-a", "text": "The physical file will store the creation date and time in ISO format" },
            { "id": "pf-q15-b", "text": "The CRTUSR field will automatically contain the user profile that added each record" },
            { "id": "pf-q15-c", "text": "The CRTDATE field is a date field in ISO format" },
            { "id": "pf-q15-d", "text": "The record format name CUSTREC must match the physical file name" }
          ],
          "correctOptionId": "pf-q15-a",
          "explanation": "The CRTDATE field is defined as type L (timestamp) with TIMFMT(*ISO), which means it will store the date and time in ISO format (YYYY-MM-DD HH:MM:SS.MMMMMM). The CRTUSR field is just a regular character field and doesn't automatically populate with the user profile - this would require additional programming logic. CRTDATE is a timestamp (not date) field. The record format name (CUSTREC) doesn't need to match the physical file name."
        },
        {
          "id": "pf-q16",
          "question": "Which commitment control level locks a record for update but allows other jobs to read it?",
          "options": [
            { "id": "pf-q16-a", "text": "*CHG" },
            { "id": "pf-q16-b", "text": "*CS" },
            { "id": "pf-q16-c", "text": "*ALL" },
            { "id": "pf-q16-d", "text": "*RR" }
          ],
          "correctOptionId": "pf-q16-b",
          "explanation": "*CS (Cursor Stability) locks a record for update but allows other jobs to read it. This provides a balance between concurrency and data integrity. *CHG allows changes to be made without locking records for other jobs' updates. *ALL is not a valid commitment control level. *RR (Repeatable Read) is the most restrictive level, preventing other jobs from both reading and updating locked records."
        }
      ]
    },
    {
      "id": "logical-files",
      "title": "Logical Files (LF)",
      "description": "Questions covering Logical File DDS.",
      "questions": [
        {
          "id": "lf-q17",
          "question": "What is the primary purpose of a join logical file?",
          "options": [
            { "id": "lf-q17-a", "text": "To physically combine records from multiple physical files" },
            { "id": "lf-q17-b", "text": "To provide a logical view of data from multiple physical files without duplicating the data" },
            { "id": "lf-q17-c", "text": "To create a backup copy of physical files" },
            { "id": "lf-q17-d", "text": "To improve query performance by pre-computing joins" }
          ],
          "correctOptionId": "lf-q17-b",
          "explanation": "Join logical files provide a view that combines data from multiple physical files without physically duplicating the data. They create a logical representation that applications can use as if it were a single file. They don't physically combine records (A), create backups (C), or pre-compute anything (D) - the join is performed when the logical file is accessed."
        },
        {
          "id": "lf-q18",
          "question": "Which of the following DDS statements correctly defines a logical file with selection criteria?",
          "options": [
            { "id": "lf-q18-a", "text": "```\n     A          R LREC                     PFILE(CUSTOMER)\n     A            CUSTID\n     A            NAME\n     A            STATE\n     A          S STATE,EQ,'TX'\n     A          K CUSTID\n```" },
            { "id": "lf-q18-b", "text": "```\n     A          R LREC                     PFILE(CUSTOMER)\n     A            CUSTID\n     A            NAME\n     A            STATE\n     A          K CUSTID\n     A          WHERE STATE='TX'\n```" },
            { "id": "lf-q18-c", "text": "```\n     A          R LREC                     PFILE(CUSTOMER)\n     A            CUSTID\n     A            NAME\n     A            STATE\n     A          K CUSTID\n     A          SELECT IF(STATE='TX')\n```" },
            { "id": "lf-q18-d", "text": "```\n     A          R LREC                     PFILE(CUSTOMER)\n     A            CUSTID\n     A            NAME\n     A            STATE\n     A          K CUSTID\n     A          FILTER STATE='TX'\n```" }
          ],
          "correctOptionId": "lf-q18-a",
          "explanation": "In DDS for logical files, selection (filtering) is specified using an S in position 17 followed by the field name, comparison operator, and value. Answer A correctly shows this syntax with S STATE,EQ,'TX' to select only records where STATE equals 'TX'. The other options show invalid syntax that does not exist in DDS."
        },
        {
          "id": "lf-q19",
          "question": "What is the effect of the MAINT(*IMMED) parameter when specified for a logical file?",
          "options": [
            { "id": "lf-q19-a", "text": "The logical file's access path is maintained immediately when changes occur to the underlying physical file" },
            { "id": "lf-q19-b", "text": "The logical file is immediately available for use after creation" },
            { "id": "lf-q19-c", "text": "Any changes to the logical file definition take effect immediately" },
            { "id": "lf-q19-d", "text": "Records in the logical file are immediately synchronized with the physical file" }
          ],
          "correctOptionId": "lf-q19-a",
          "explanation": "MAINT(*IMMED) specifies that the access path for a logical file is maintained (updated) immediately when changes occur to the underlying physical file. This ensures the logical file's access path is always up-to-date, but can impact performance during updates. Other options include MAINT(*REBLD) and MAINT(*DLY), which delay access path maintenance until the file is opened or based on system preferences."
        }
      ]
    },
    {
      "id": "display-files",
      "title": "Display Files (DSPF)",
      "description": "Questions covering Display File DDS.",
      "questions": [
        {
          "id": "dspf-q20",
          "question": "Which keyword is used in DDS to define function keys in a display file?",
          "options": [
            { "id": "dspf-q20-a", "text": "FKEY" },
            { "id": "dspf-q20-b", "text": "CA" },
            { "id": "dspf-q20-c", "text": "CF" },
            { "id": "dspf-q20-d", "text": "FK" }
          ],
          "correctOptionId": "dspf-q20-c",
          "explanation": "The CF (Command Function) keyword is used in DDS to define function keys in a display file. For example, CF03('Exit') defines F3 as an \"Exit\" function key. CA (Command Attention) is a similar keyword but with different processing characteristics. FKEY and FK are not valid DDS keywords for display files."
        },
        {
          "id": "dspf-q21",
          "question": "Which of the following DDS keywords is used to validate that a field contains a specific value?",
          "options": [
            { "id": "dspf-q21-a", "text": "VALID" },
            { "id": "dspf-q21-b", "text": "VALUES" },
            { "id": "dspf-q21-c", "text": "COMP" },
            { "id": "dspf-q21-d", "text": "CHECK" }
          ],
          "correctOptionId": "dspf-q21-c",
          "explanation": "The COMP (Compare) keyword is used in DDS to validate that a field contains a specific value. For example, COMP(EQ 'Y' 'N') validates that a field contains either 'Y' or 'N'. VALID is not a DDS keyword. VALUES is not a DDS keyword for validation. CHECK is used for edit checks like CHECK(AB) for alphabetic only, not for value validation."
        },
        {
          "id": "dspf-q22",
          "question": "What will happen when the following RPG code interacts with a display file containing the DDS shown?\n\nDDS:\n```\n     A          R RECORD1\n     A            FIELD1        10A  B  5  2\n     A  01                                  DSPATR(PC)\n     A            FIELD2        10A  B  6  2\n     A  02                                  DSPATR(PC)\n     A            FIELD3        10A  B  7  2\n     A  N01 N02                             DSPATR(PC)\n```\n\nRPG Code:\n```\n*IN01 = *ON;\n*IN02 = *OFF;\nWRITE RECORD1;\n```",
          "options": [
            { "id": "dspf-q22-a", "text": "FIELD1 and FIELD3 will appear in reverse image" },
            { "id": "dspf-q22-b", "text": "FIELD1 and FIELD2 will appear in reverse image" },
            { "id": "dspf-q22-c", "text": "Only FIELD1 will appear in reverse image" },
            { "id": "dspf-q22-d", "text": "Only FIELD3 will appear in reverse image" }
          ],
          "correctOptionId": "dspf-q22-c",
          "explanation": "The DSPATR(PC) keyword applies reverse image display attribute. In this case:\n- FIELD1 has DSPATR(PC) conditioned on indicator 01, which is ON, so FIELD1 will appear in reverse image\n- FIELD2 has DSPATR(PC) conditioned on indicator 02, which is OFF, so FIELD2 will appear normally\n- FIELD3 has DSPATR(PC) conditioned on N01 N02 (meaning NOT 01 AND NOT 02), which evaluates to FALSE because 01 is ON, so FIELD3 will appear normally"
        }
      ]
    },
    {
      "id": "subfiles",
      "title": "Subfiles",
      "description": "Questions covering Subfile DDS.",
      "questions": [
        {
          "id": "sfl-q23",
          "question": "Which of the following DDS keywords is required to define a subfile control record?",
          "options": [
            { "id": "sfl-q23-a", "text": "SFLCTL" },
            { "id": "sfl-q23-b", "text": "SFLCNT" },
            { "id": "sfl-q23-c", "text": "SFLDSP" },
            { "id": "sfl-q23-d", "text": "SFLREC" }
          ],
          "correctOptionId": "sfl-q23-a",
          "explanation": "SFLCTL is a required keyword to define a subfile control record. It identifies the record format as a subfile control record and specifies which subfile it controls. SFLCNT specifies the number of active records in a subfile. SFLDSP is used to display the subfile. SFLREC is not a valid DDS keyword for subfiles."
        },
        {
          "id": "sfl-q24",
          "question": "Given the following subfile DDS, what is the maximum number of records that can be loaded into the subfile?\n\n```\n     A          R SFLDTA                   SFL\n     A            FIELD1        10A  O  5  2\n     A            FIELD2        20A  O  5 13\n     A          R SFLCTL                   SFLCTL(SFLDTA)\n     A                                     SFLPAG(14)\n     A                                     SFLSIZ(84)\n     A                                     SFLDSP\n     A                                     SFLDSPCTL\n     A                                     SFLCLR\n```",
          "options": [
            { "id": "sfl-q24-a", "text": "14" },
            { "id": "sfl-q24-b", "text": "84" },
            { "id": "sfl-q24-c", "text": "98" },
            { "id": "sfl-q24-d", "text": "1176" }
          ],
          "correctOptionId": "sfl-q24-b",
          "explanation": "The SFLSIZ keyword specifies the maximum number of records that can be loaded into the subfile, which is 84 in this case. SFLPAG(14) specifies that 14 records can be displayed at one time on the screen. The other options are incorrect: 14 is the page size, not the total size; 98 (14+84) has no significance; 1176 (14*84) has no significance."
        },
        {
          "id": "sfl-q25",
          "question": "What is the main difference between a single-page subfile and a multiple-page subfile?",
          "options": [
            { "id": "sfl-q25-a", "text": "Single-page subfiles can only contain one record, while multiple-page subfiles can contain many" },
            { "id": "sfl-q25-b", "text": "Single-page subfiles display all records at once, while multiple-page subfiles display records in pages" },
            { "id": "sfl-q25-c", "text": "Single-page subfiles are defined with SFLSIZ equal to SFLPAG, while multiple-page subfiles have SFLSIZ greater than SFLPAG" },
            { "id": "sfl-q25-d", "text": "Single-page subfiles cannot be scrolled, while multiple-page subfiles support scrolling" }
          ],
          "correctOptionId": "sfl-q25-c",
          "explanation": "The key difference is in the relationship between SFLSIZ and SFLPAG. If SFLSIZ equals SFLPAG, it's a single-page subfile where all records fit on one screen. If SFLSIZ is greater than SFLPAG, it's a multiple-page subfile that allows more records than can be displayed at once. Single-page subfiles can contain many records (not just one), and both types can be scrolled if properly programmed."
        }
      ]
    },
    {
      "id": "subfile-messages",
      "title": "Subfile Messages (SFLMSG)",
      "description": "Questions covering Message Subfile DDS.",
      "questions": [
        {
          "id": "sflmsg-q26",
          "question": "Which DDS keyword is used to define a message subfile?",
          "options": [
            { "id": "sflmsg-q26-a", "text": "MSGCTL" },
            { "id": "sflmsg-q26-b", "text": "SFLMSG" },
            { "id": "sflmsg-q26-c", "text": "MSGSFL" },
            { "id": "sflmsg-q26-d", "text": "ERRSFL" }
          ],
          "correctOptionId": "sflmsg-q26-b",
          "explanation": "SFLMSG is the keyword used to define a message subfile. This keyword is specified on the subfile control record format. MSGCTL is not a valid DDS keyword. MSGSFL is not a valid DDS keyword. ERRSFL is not a valid DDS keyword for defining message subfiles."
        },
        {
          "id": "sflmsg-q27",
          "question": "Which API is commonly used to send messages to a program message queue that can later be displayed in a message subfile?",
          "options": [
            { "id": "sflmsg-q27-a", "text": "QMHSNDPM" },
            { "id": "sflmsg-q27-b", "text": "QMHRTVM" },
            { "id": "sflmsg-q27-c", "text": "SNDPGMMSG" },
            { "id": "sflmsg-q27-d", "text": "QSNDMSG" }
          ],
          "correctOptionId": "sflmsg-q27-a",
          "explanation": "QMHSNDPM (Send Program Message) is the API commonly used to send messages to a program message queue that can later be displayed in a message subfile. QMHRTVM is for retrieving messages, not sending them. SNDPGMMSG is a CL command, not an API. QSNDMSG is not a valid API name."
        },
        {
          "id": "sflmsg-q28",
          "question": "Which of the following combinations of DDS keywords correctly implements a field-level error message subfile?",
          "options": [
            { "id": "sflmsg-q28-a", "text": "```\nSFLMSG\nSFLMSGRCD\nSFLMSGKEY\n```" },
            { "id": "sflmsg-q28-b", "text": "```\nSFLMSGID\nSFLMSGKEY\nSFLDSP\n```" },
            { "id": "sflmsg-q28-c", "text": "```\nSFLMSG\nSFLMSGKEY\nMSGRCD\n```" },
            { "id": "sflmsg-q28-d", "text": "```\nSFLMSGID\nSFLERRN\nSFLERR\n```" }
          ],
          "correctOptionId": "sflmsg-q28-a",
          "explanation": "The correct combination for implementing a field-level error message subfile is SFLMSG (to indicate this is a message subfile), SFLMSGRCD (to specify the record format containing the message subfile), and SFLMSGKEY (to uniquely identify each message in the subfile). The other combinations contain invalid or incomplete keyword sets for this purpose."
        }
      ]
    },
    {
      "id": "ibm-i-database",
      "title": "IBM i Database",
      "description": "Questions covering IBM i database concepts.",
      "questions": [
        {
          "id": "db-q29",
          "question": "What is the main advantage of using commitment control in IBM i database operations?",
          "options": [
            { "id": "db-q29-a", "text": "It improves query performance by caching frequently accessed data" },
            { "id": "db-q29-b", "text": "It ensures database integrity by treating multiple operations as one unit of work" },
            { "id": "db-q29-c", "text": "It automatically compresses data to save disk space" },
            { "id": "db-q29-d", "text": "It eliminates the need for journaling and backup procedures" }
          ],
          "correctOptionId": "db-q29-b",
          "explanation": "Commitment control ensures database integrity by treating multiple operations as one atomic unit of work that either all complete successfully or all fail. This prevents partial updates that could leave the database in an inconsistent state. It doesn't primarily improve performance through caching (A), doesn't compress data (C), and doesn't eliminate the need for journaling—in fact, journaling is required for commitment control (D)."
        },
        {
          "id": "db-q30",
          "question": "Which SQL statement would be most efficient for updating a large number of rows in an IBM i database table based on complex criteria?",
          "options": [
            { "id": "db-q30-a", "text": "```\nUPDATE CUSTOMER\nSET STATUS = 'I'\nWHERE LASTORDER_DATE < CURRENT DATE - 1 YEAR\n  AND BALANCE = 0\n  AND NOT EXISTS (\n    SELECT 1 FROM ORDERS\n    WHERE ORDERS.CUSTID = CUSTOMER.CUSTID\n    AND ORDERS.ORDER_DATE > CURRENT DATE - 2 YEARS\n  );\n```" },
            { "id": "db-q30-b", "text": "```\nDECLARE C1 CURSOR FOR\n  SELECT CUSTID FROM CUSTOMER\n  WHERE LASTORDER_DATE < CURRENT DATE - 1 YEAR\n    AND BALANCE = 0\n    AND NOT EXISTS (\n      SELECT 1 FROM ORDERS\n      WHERE ORDERS.CUSTID = CUSTOMER.CUSTID\n      AND ORDERS.ORDER_DATE > CURRENT DATE - 2 YEARS\n    )\n  FOR UPDATE;\n\nOPEN C1;\nFETCH NEXT FROM C1 INTO :custId;\n  \nWHILE SQLCODE = 0 DO\n  UPDATE CUSTOMER\n  SET STATUS = 'I'\n  WHERE CURRENT OF C1;\n  \n  FETCH NEXT FROM C1 INTO :custId;\nEND-WHILE;\n\nCLOSE C1;\n```" },
            { "id": "db-q30-c", "text": "```\nBEGIN\n  FOR rec IN (\n    SELECT CUSTID FROM CUSTOMER\n    WHERE LASTORDER_DATE < CURRENT DATE - 1 YEAR\n      AND BALANCE = 0\n      AND NOT EXISTS (\n        SELECT 1 FROM ORDERS\n        WHERE ORDERS.CUSTID = CUSTOMER.CUSTID\n        AND ORDERS.ORDER_DATE > CURRENT DATE - 2 YEARS\n      )\n  ) DO\n    UPDATE CUSTOMER\n    SET STATUS = 'I'\n    WHERE CUSTID = rec.CUSTID;\n  END FOR;\nEND;\n```" },
            { "id": "db-q30-d", "text": "```\nCREATE TABLE TEMP_CUST AS (\n  SELECT CUSTID FROM CUSTOMER\n  WHERE LASTORDER_DATE < CURRENT DATE - 1 YEAR\n    AND BALANCE = 0\n    AND NOT EXISTS (\n      SELECT 1 FROM ORDERS\n      WHERE ORDERS.CUSTID = CUSTOMER.CUSTID\n      AND ORDERS.ORDER_DATE > CURRENT DATE - 2 YEARS\n    )\n) WITH DATA;\n\nUPDATE CUSTOMER\nSET STATUS = 'I'\nWHERE CUSTID IN (SELECT CUSTID FROM TEMP_CUST);\n\nDROP TABLE TEMP_CUST;\n```" }
          ],
          "correctOptionId": "db-q30-a",
          "explanation": "For large-scale updates with complex criteria, a direct UPDATE statement with a WHERE clause (Answer A) is usually the most efficient option on IBM i. It processes the update in a single database operation, allowing the database engine to optimize the execution plan. Answer B uses a cursor, which requires multiple database operations and is less efficient for large-scale updates. Answer C uses a FOR loop syntax that isn't valid in standard SQL on IBM i. Answer D creates a temporary table, which adds unnecessary overhead."
        }
      ]
    }
  ]
}