import { QuizSectionData } from "@/models/QuizTypes";

export const dotnetcsharpquiz : QuizSectionData ={
  "id": "dotnet-csharp-quiz-100",
  "title": ".NET and C# Comprehensive Quiz",
  "description": "A comprehensive quiz covering various aspects of .NET and C# development.",
  "quizzes": [
    {
      "id": "dotnet-basic-concepts",
      "title": "Basic Concepts (1-20)",
      "description": "Questions covering the fundamental building blocks and concepts of the .NET platform and C# language.",
      "questions": [
        {
          "id": "dotnet-q1",
          "question": "What is the core execution engine for .NET applications?",
          "options": [
            { "id": "dotnet-q1-a", "text": ".NET SDK" },
            { "id": "dotnet-q1-b", "text": "Common Language Runtime (CLR)" },
            { "id": "dotnet-q1-c", "text": "Base Class Library (BCL)" },
            { "id": "dotnet-q1-d", "text": "C# Compiler (Roslyn)" }
          ],
          "correctOptionId": "dotnet-q1-b",
          "explanation": "The CLR provides the runtime environment, managing execution, memory (GC), security, and other core services for .NET applications."
        },
        {
          "id": "dotnet-q2",
          "question": "Which component of the CLR is responsible for converting Intermediate Language (IL) code into native machine code just before execution?",
          "options": [
            { "id": "dotnet-q2-a", "text": "Garbage Collector (GC)" },
            { "id": "dotnet-q2-b", "text": "Just-In-Time (JIT) Compiler" },
            { "id": "dotnet-q2-c", "text": "Common Type System (CTS)" },
            { "id": "dotnet-q2-d", "text": "Class Loader" }
          ],
          "correctOptionId": "dotnet-q2-b",
          "explanation": "The JIT compiler translates the platform-agnostic IL code into machine-specific native code at runtime, typically on a method-by-method basis as needed."
        },
        {
          "id": "dotnet-q3",
          "question": "What distinguishes managed code from unmanaged code in the .NET context?",
          "options": [
            { "id": "dotnet-q3-a", "text": "Managed code is written only in C#, while unmanaged code is written in C++." },
            { "id": "dotnet-q3-b", "text": "Managed code execution is overseen by the CLR, including automatic memory management." },
            { "id": "dotnet-q3-c", "text": "Unmanaged code runs faster because it bypasses the CLR." },
            { "id": "dotnet-q3-d", "text": "Managed code requires explicit memory deallocation using `delete`." }
          ],
          "correctOptionId": "dotnet-q3-b",
          "explanation": "Managed code runs under the control of the CLR, benefiting from services like garbage collection, type safety, and security. Unmanaged code runs outside the CLR's control and requires manual memory management."
        },
        {
          "id": "dotnet-q4",
          "question": "What is the typical file extension for a C# source code file?",
          "options": [
            { "id": "dotnet-q4-a", "text": ".cs" },
            { "id": "dotnet-q4-b", "text": ".csharp" },
            { "id": "dotnet-q4-c", "text": ".dll" },
            { "id": "dotnet-q4-d", "text": ".vb" }
          ],
          "correctOptionId": "dotnet-q4-a",
          "explanation": ".cs is the standard file extension for C# source files. .dll is for compiled assemblies, and .vb is for Visual Basic .NET."
        },
        {
          "id": "dotnet-q5",
          "question": "Which keyword is used to include a namespace in a C# file, allowing types within that namespace to be used without full qualification?",
          "options": [
            { "id": "dotnet-q5-a", "text": "namespace" },
            { "id": "dotnet-q5-b", "text": "include" },
            { "id": "dotnet-q5-c", "text": "using" },
            { "id": "dotnet-q5-d", "text": "import" }
          ],
          "correctOptionId": "dotnet-q5-c",
          "explanation": "The `using` directive allows you to use types defined in another namespace without specifying the full namespace path each time."
        },
        {
          "id": "dotnet-q6",
          "question": "Which of the following is a Value Type in C#?",
          "options": [
            { "id": "dotnet-q6-a", "text": "string" },
            { "id": "dotnet-q6-b", "text": "object" },
            { "id": "dotnet-q6-c", "text": "int" },
            { "id": "dotnet-q6-d", "text": "StringBuilder" }
          ],
          "correctOptionId": "dotnet-q6-c",
          "explanation": "Value types include primitive types (int, float, bool, char), structs, and enums. `string`, `object`, and `StringBuilder` are reference types."
        },
        {
          "id": "dotnet-q7",
          "question": "Where are instances of Reference Types (like `class` instances) primarily allocated in memory?",
          "options": [
            { "id": "dotnet-q7-a", "text": "The stack" },
            { "id": "dotnet-q7-b", "text": "The managed heap" },
            { "id": "dotnet-q7-c", "text": "The Global Assembly Cache (GAC)" },
            { "id": "dotnet-q7-d", "text": "Read-only memory" }
          ],
          "correctOptionId": "dotnet-q7-b",
          "explanation": "Objects (instances of classes and other reference types) are allocated on the managed heap, which is managed by the Garbage Collector."
        },
        {
          "id": "dotnet-q8",
          "question": "What is the primary function of the Garbage Collector (GC) in .NET?",
          "options": [
            { "id": "dotnet-q8-a", "text": "To compile C# code to IL." },
            { "id": "dotnet-q8-b", "text": "To enforce type safety at runtime." },
            { "id": "dotnet-q8-c", "text": "To automatically reclaim memory occupied by objects that are no longer reachable." },
            { "id": "dotnet-q8-d", "text": "To load assemblies into memory." }
          ],
          "correctOptionId": "dotnet-q8-c",
          "explanation": "The GC automatically manages memory by identifying objects on the heap that are no longer referenced by the application and freeing the memory they occupy."
        },
        {
          "id": "dotnet-q9",
          "question": "Which block in a `try-catch-finally` statement is guaranteed to execute, regardless of whether an exception occurred or was caught?",
          "options": [
            { "id": "dotnet-q9-a", "text": "try" },
            { "id": "dotnet-q9-b", "text": "catch" },
            { "id": "dotnet-q9-c", "text": "finally" },
            { "id": "dotnet-q9-d", "text": "Only `try` and `catch` execute." }
          ],
          "correctOptionId": "dotnet-q9-c",
          "explanation": "The `finally` block executes after the `try` block (and `catch` block, if an exception was caught) completes. It's used for cleanup code that must run regardless of exceptions."
        },
        {
          "id": "dotnet-q10",
          "question": "What keyword is used to define a class that cannot be inherited from?",
          "options": [
            { "id": "dotnet-q10-a", "text": "static" },
            { "id": "dotnet-q10-b", "text": "abstract" },
            { "id": "dotnet-q10-c", "text": "sealed" },
            { "id": "dotnet-q10-d", "text": "virtual" }
          ],
          "correctOptionId": "dotnet-q10-c",
          "explanation": "The `sealed` keyword prevents other classes from deriving (inheriting) from the class marked as sealed."
        },
        {
          "id": "dotnet-q11",
          "question": "What access modifier restricts access to the containing class and any derived classes within the same assembly?",
          "options": [
            { "id": "dotnet-q11-a", "text": "private" },
            { "id": "dotnet-q11-b", "text": "public" },
            { "id": "dotnet-q11-c", "text": "internal" },
            { "id": "dotnet-q11-d", "text": "protected internal" }
          ],
          "correctOptionId": "dotnet-q11-d",
          "explanation": "`protected internal` allows access from derived classes (like `protected`) OR from any code within the same assembly (like `internal`)."
        },
        {
          "id": "dotnet-q12",
          "question": "What is the purpose of the `Main` method in a C# console or desktop application?",
          "options": [
            { "id": "dotnet-q12-a", "text": "To declare global variables." },
            { "id": "dotnet-q12-b", "text": "To define the application's entry point." },
            { "id": "dotnet-q12-c", "text": "To handle all exceptions." },
            { "id": "dotnet-q12-d", "text": "To initialize the Garbage Collector." }
          ],
          "correctOptionId": "dotnet-q12-b",
          "explanation": "The CLR looks for a static `Main` method as the starting point for executing an application."
        },
        {
          "id": "dotnet-q13",
          "question": "Which C# keyword defines a type that groups related constants (enumerators)?",
          "options": [
            { "id": "dotnet-q13-a", "text": "struct" },
            { "id": "dotnet-q13-b", "text": "class" },
            { "id": "dotnet-q13-c", "text": "enum" },
            { "id": "dotnet-q13-d", "text": "interface" }
          ],
          "correctOptionId": "dotnet-q13-c",
          "explanation": "An `enum` (enumeration) defines a set of named constants, typically representing related values like days of the week or status codes."
        },
        {
          "id": "dotnet-q14",
          "question": "What does the Common Type System (CTS) define?",
          "options": [
            { "id": "dotnet-q14-a", "text": "The syntax rules of the C# language." },
            { "id": "dotnet-q14-b", "text": "How types are declared, used, and managed in the CLR." },
            { "id": "dotnet-q14-c", "text": "The standard set of libraries available to all .NET languages." },
            { "id": "dotnet-q14-d", "text": "The process for compiling code to native executables." }
          ],
          "correctOptionId": "dotnet-q14-b",
          "explanation": "The CTS provides a common model for types (like classes, structs, interfaces, value types, reference types) ensuring that types created in one .NET language can be consumed by another."
        },
        {
          "id": "dotnet-q15",
          "question": "What is boxing in C#?",
          "options": [
            { "id": "dotnet-q15-a", "text": "Converting a reference type to a value type." },
            { "id": "dotnet-q15-b", "text": "Converting a value type to a reference type (like `object`)." },
            { "id": "dotnet-q15-c", "text": "Encapsulating data within a class using private fields." },
            { "id": "dotnet-q15-d", "text": "Handling exceptions using a `try-catch` block." }
          ],
          "correctOptionId": "dotnet-q15-b",
          "explanation": "Boxing is the process of converting a value type instance (stored on the stack or inline) into an object instance (stored on the heap), typically when it needs to be treated as a reference type."
        },
        {
          "id": "dotnet-q16",
          "question": "Which keyword is used to explicitly call a constructor from another constructor within the same class?",
          "options": [
            { "id": "dotnet-q16-a", "text": "base" },
            { "id": "dotnet-q16-b", "text": "this" },
            { "id": "dotnet-q16-c", "text": "new" },
            { "id": "dotnet-q16-d", "text": "super" }
          ],
          "correctOptionId": "dotnet-q16-b",
          "explanation": "Using `: this(...)` after a constructor's parameter list allows you to chain constructors within the same class, often used to reduce code duplication."
        },
        {
          "id": "dotnet-q17",
          "question": "What is the role of the Common Language Specification (CLS)?",
          "options": [
            { "id": "dotnet-q17-a", "text": "To ensure interoperability between different .NET languages." },
            { "id": "dotnet-q17-b", "text": "To specify the exact memory layout of objects." },
            { "id": "dotnet-q17-c", "text": "To define the graphical user interface elements." },
            { "id": "dotnet-q17-d", "text": "To manage database connections." }
          ],
          "correctOptionId": "dotnet-q17-a",
          "explanation": "The CLS defines a subset of the CTS and rules that .NET languages should adhere to if they want their components to be usable by components written in other .NET languages."
        },
        {
          "id": "dotnet-q18",
          "question": "Which C# feature allows a single class definition to be split across multiple source files?",
          "options": [
            { "id": "dotnet-q18-a", "text": "Nested classes" },
            { "id": "dotnet-q18-b", "text": "Partial classes" },
            { "id": "dotnet-q18-c", "text": "Generic classes" },
            { "id": "dotnet-q18-d", "text": "Static classes" }
          ],
          "correctOptionId": "dotnet-q18-b",
          "explanation": "The `partial` keyword allows the definition of a class, struct, or interface to be split into multiple `.cs` files, which are then combined by the compiler."
        },
        {
          "id": "dotnet-q19",
          "question": "What access modifier makes a member accessible only within its own class?",
          "options": [
            { "id": "dotnet-q19-a", "text": "public" },
            { "id": "dotnet-q19-b", "text": "internal" },
            { "id": "dotnet-q19-c", "text": "protected" },
            { "id": "dotnet-q19-d", "text": "private" }
          ],
          "correctOptionId": "dotnet-q19-d",
          "explanation": "`private` is the most restrictive access level, limiting access strictly to the code within the defining class."
        },
        {
          "id": "dotnet-q20",
          "question": "What is the purpose of the `try` block in exception handling?",
          "options": [
            { "id": "dotnet-q20-a", "text": "To contain the code that might throw an exception." },
            { "id": "dotnet-q20-b", "text": "To handle a specific type of exception." },
            { "id": "dotnet-q20-c", "text": "To execute cleanup code." },
            { "id": "dotnet-q20-d", "text": "To re-throw an existing exception." }
          ],
          "correctOptionId": "dotnet-q20-a",
          "explanation": "The `try` block encloses the code segment where an exception might occur. If an exception happens within this block, the runtime looks for a matching `catch` block."
        }
      ]
    },
    {
      "id": "dotnet-intermediate-concepts",
      "title": "Intermediate Concepts (21-40)",
      "description": "Questions covering object-oriented principles, delegates, LINQ, async programming, and more.",
      "questions": [
        {
          "id": "dotnet-q21",
          "question": "Which type of polymorphism is achieved using method overloading (methods with the same name but different parameters)?",
          "options": [
            { "id": "dotnet-q21-a", "text": "Runtime polymorphism (Dynamic)" },
            { "id": "dotnet-q21-b", "text": "Compile-time polymorphism (Static)" },
            { "id": "dotnet-q21-c", "text": "Ad-hoc polymorphism" },
            { "id": "dotnet-q21-d", "text": "Parametric polymorphism" }
          ],
          "correctOptionId": "dotnet-q21-b",
          "explanation": "Method overloading is resolved at compile time based on the method signature (name and parameter types), hence it's considered compile-time or static polymorphism."
        },
        {
          "id": "dotnet-q22",
          "question": "Which keyword allows a method in a derived class to provide a specific implementation for a method defined as `virtual` in its base class?",
          "options": [
            { "id": "dotnet-q22-a", "text": "new" },
            { "id": "dotnet-q22-b", "text": "sealed" },
            { "id": "dotnet-q22-c", "text": "override" },
            { "id": "dotnet-q22-d", "text": "base" }
          ],
          "correctOptionId": "dotnet-q22-c",
          "explanation": "The `override` keyword is used in a derived class to provide a new implementation for a `virtual` or `abstract` method inherited from a base class, enabling runtime polymorphism."
        },
        {
          "id": "dotnet-q23",
          "question": "What is a delegate in C# primarily used for?",
          "options": [
            { "id": "dotnet-q23-a", "text": "Defining the structure of data (like a class or struct)." },
            { "id": "dotnet-q23-b", "text": "Representing references to methods with a specific parameter list and return type." },
            { "id": "dotnet-q23-c", "text": "Managing memory allocation for value types." },
            { "id": "dotnet-q23-d", "text": "Querying collections of objects." }
          ],
          "correctOptionId": "dotnet-q23-b",
          "explanation": "Delegates are type-safe function pointers, allowing methods to be passed as arguments, stored in variables, and used in event handling."
        },
        {
          "id": "dotnet-q24",
          "question": "Which built-in generic delegates are commonly used for methods that take parameters but don't return a value, and for methods that take parameters and return a value, respectively?",
          "options": [
            { "id": "dotnet-q24-a", "text": "`Func<>` and `Action<>`" },
            { "id": "dotnet-q24-b", "text": "`Action<>` and `Func<>`" },
            { "id": "dotnet-q24-c", "text": "`Predicate<>` and `EventHandler<>`" },
            { "id": "dotnet-q24-d", "text": "`Delegate<>` and `MulticastDelegate<>`" }
          ],
          "correctOptionId": "dotnet-q24-b",
          "explanation": "`Action<>` delegates represent methods that perform an action but return `void`. `Func<>` delegates represent methods that take parameters (optional) and return a value (specified by the last type parameter)."
        },
        {
          "id": "dotnet-q25",
          "question": "What does \"deferred execution\" mean in the context of LINQ?",
          "options": [
            { "id": "dotnet-q25-a", "text": "The query is executed immediately when defined." },
            { "id": "dotnet-q25-b", "text": "The query execution is postponed until the results are actually enumerated (e.g., in a `foreach` loop or by calling `.ToList()`)." },
            { "id": "dotnet-q25-c", "text": "The query runs on a background thread automatically." },
            { "id": "dotnet-q25-d", "text": "The query compiles only at runtime." }
          ],
          "correctOptionId": "dotnet-q25-b",
          "explanation": "Many LINQ operators use deferred execution. Defining the query builds an execution plan, but the query isn't actually run against the data source until the results are requested."
        },
        {
          "id": "dotnet-q26",
          "question": "Which LINQ operator is used to filter a sequence based on a specified condition?",
          "options": [
            { "id": "dotnet-q26-a", "text": "Select" },
            { "id": "dotnet-q26-b", "text": "OrderBy" },
            { "id": "dotnet-q26-c", "text": "Where" },
            { "id": "dotnet-q26-d", "text": "GroupBy" }
          ],
          "correctOptionId": "dotnet-q26-c",
          "explanation": "The `Where` operator filters a sequence, returning only those elements that satisfy a given predicate (a function returning true or false)."
        },
        {
          "id": "dotnet-q27",
          "question": "Can a C# class inherit from multiple abstract classes?",
          "options": [
            { "id": "dotnet-q27-a", "text": "Yes, always." },
            { "id": "dotnet-q27-b", "text": "No, C# supports only single class inheritance." },
            { "id": "dotnet-q27-c", "text": "Yes, but only if the abstract classes have no implemented methods." },
            { "id": "dotnet-q27-d", "text": "Only if they are defined in the same assembly." }
          ],
          "correctOptionId": "dotnet-q27-b",
          "explanation": "C# enforces single inheritance for classes (a class can only derive directly from one base class), although a class can implement multiple interfaces."
        },
        {
          "id": "dotnet-q28",
          "question": "Which keyword is used in conjunction with the `IDisposable` interface to ensure that the `Dispose` method is called automatically?",
          "options": [
            { "id": "dotnet-q28-a", "text": "try" },
            { "id": "dotnet-q28-b", "text": "finally" },
            { "id": "dotnet-q28-c", "text": "using" },
            { "id": "dotnet-q28-d", "text": "lock" }
          ],
          "correctOptionId": "dotnet-q28-c",
          "explanation": "The `using` statement provides a convenient syntax that ensures `Dispose()` is called on an `IDisposable` object when the code block is exited, even if exceptions occur."
        },
        {
          "id": "dotnet-q29",
          "question": "What is a potential problem when multiple threads access and modify shared data concurrently without proper synchronization?",
          "options": [
            { "id": "dotnet-q29-a", "text": "Deadlock" },
            { "id": "dotnet-q29-b", "text": "Race condition" },
            { "id": "dotnet-q29-c", "text": "Stack overflow" },
            { "id": "dotnet-q29-d", "text": "Memory leak" }
          ],
          "correctOptionId": "dotnet-q29-b",
          "explanation": "A race condition occurs when the outcome of a computation depends on the non-deterministic timing of concurrent threads accessing shared resources, potentially leading to incorrect results."
        },
        {
          "id": "dotnet-q30",
          "question": "What is the primary benefit of using `async` and `await` for I/O-bound operations?",
          "options": [
            { "id": "dotnet-q30-a", "text": "It makes the operations run significantly faster." },
            { "id": "dotnet-q30-b", "text": "It frees up the calling thread to do other work while waiting for the operation to complete, improving responsiveness." },
            { "id": "dotnet-q30-c", "text": "It automatically retries failed operations." },
            { "id": "dotnet-q30-d", "text": "It simplifies writing parallel computations." }
          ],
          "correctOptionId": "dotnet-q30-b",
          "explanation": "Async/await allows threads to be released back to the thread pool during long-running I/O operations (like network requests or file access), preventing thread starvation and improving application scalability and UI responsiveness."
        },
        {
          "id": "dotnet-q31",
          "question": "What is Entity Framework primarily used for in .NET applications?",
          "options": [
            { "id": "dotnet-q31-a", "text": "Building user interfaces." },
            { "id": "dotnet-q31-b", "text": "Performing object-relational mapping (ORM) between .NET objects and relational databases." },
            { "id": "dotnet-q31-c", "text": "Handling real-time communication." },
            { "id": "dotnet-q31-d", "text": "Managing application configuration." }
          ],
          "correctOptionId": "dotnet-q31-b",
          "explanation": "Entity Framework (EF) is an ORM that simplifies data access by allowing developers to work with databases using .NET objects, abstracting away much of the underlying SQL."
        },
        {
          "id": "dotnet-q32",
          "question": "How is an extension method defined in C#?",
          "options": [
            { "id": "dotnet-q32-a", "text": "As an instance method within the class it extends." },
            { "id": "dotnet-q32-b", "text": "As a static method within a static class, with the `this` modifier on the first parameter." },
            { "id": "dotnet-q32-c", "text": "Using the `extension` keyword before the method definition." },
            { "id": "dotnet-q32-d", "text": "By inheriting from a special `ExtensionBase` class." }
          ],
          "correctOptionId": "dotnet-q32-b",
          "explanation": "Extension methods must be static methods in a static class. The `this` modifier before the first parameter indicates which type the method extends, allowing it to be called as if it were an instance method."
        },
        {
          "id": "dotnet-q33",
          "question": "When awaiting a `Task` within a `try-catch` block, how are exceptions from the asynchronous operation typically caught?",
          "options": [
            { "id": "dotnet-q33-a", "text": "They bypass the `catch` block entirely." },
            { "id": "dotnet-q33-b", "text": "They are caught by the `catch` block as if the operation were synchronous." },
            { "id": "dotnet-q33-c", "text": "They are always wrapped in an `AggregateException`." },
            { "id": "dotnet-q33-d", "text": "They must be handled using a separate `ContinueWith` block." }
          ],
          "correctOptionId": "dotnet-q33-b",
          "explanation": "The `await` keyword unwraps the exception from the faulted Task and re-throws it, allowing standard `try-catch` blocks to handle exceptions from awaited asynchronous operations seamlessly."
        },
        {
          "id": "dotnet-q34",
          "question": "What is the purpose of the `event` keyword when declaring a delegate field in a class?",
          "options": [
            { "id": "dotnet-q34-a", "text": "It restricts invocation of the delegate to within the containing class." },
            { "id": "dotnet-q34-b", "text": "It allows multiple methods to subscribe (+=) and unsubscribe (-=) from the delegate." },
            { "id": "dotnet-q34-c", "text": "It marks the delegate for garbage collection." },
            { "id": "dotnet-q34-d", "text": "Both a and b." }
          ],
          "correctOptionId": "dotnet-q34-d",
          "explanation": "The `event` keyword provides encapsulation for delegates, exposing only the necessary add (`+=`) and remove (`-=`) operations publicly while restricting direct invocation and assignment from outside the class."
        },
        {
          "id": "dotnet-q35",
          "question": "Which LINQ operator transforms each element of a sequence into a new form?",
          "options": [
            { "id": "dotnet-q35-a", "text": "Where" },
            { "id": "dotnet-q35-b", "text": "Select" },
            { "id": "dotnet-q35-c", "text": "Aggregate" },
            { "id": "dotnet-q35-d", "text": "Skip" }
          ],
          "correctOptionId": "dotnet-q35-b",
          "explanation": "The `Select` operator projects each element of a sequence into a new form, often used to extract specific properties or create new objects based on the original elements."
        },
        {
          "id": "dotnet-q36",
          "question": "What is the role of the `Task` and `Task<TResult>` types in the Task Parallel Library (TPL)?",
          "options": [
            { "id": "dotnet-q36-a", "text": "To define user interface components." },
            { "id": "dotnet-q36-b", "text": "To represent an asynchronous operation." },
            { "id": "dotnet-q36-c", "text": "To manage database transactions." },
            { "id": "dotnet-q36-d", "text": "To configure application logging." }
          ],
          "correctOptionId": "dotnet-q36-b",
          "explanation": "`Task` represents an async operation that doesn't return a value, while `Task<TResult>` represents one that returns a value of type TResult. They are central to the async/await pattern."
        },
        {
          "id": "dotnet-q37",
          "question": "What does the `lock` keyword in C# help prevent?",
          "options": [
            { "id": "dotnet-q37-a", "text": "Stack overflow exceptions." },
            { "id": "dotnet-q37-b", "text": "Null reference exceptions." },
            { "id": "dotnet-q37-c", "text": "Race conditions by ensuring only one thread enters a critical section of code at a time." },
            { "id": "dotnet-q37-d", "text": "Deadlocks by automatically ordering resource acquisition." }
          ],
          "correctOptionId": "dotnet-q37-c",
          "explanation": "The `lock` statement acquires a mutual-exclusion lock for a given object, ensuring that only one thread can execute the code block within the lock at any given time, thus protecting shared resources."
        },
        {
          "id": "dotnet-q38",
          "question": "In Entity Framework, what is the \"Code First\" approach?",
          "options": [
            { "id": "dotnet-q38-a", "text": "Generating database schema from existing C# classes (POCOs)." },
            { "id": "dotnet-q38-b", "text": "Generating C# classes from an existing database schema." },
            { "id": "dotnet-q38-c", "text": "Writing SQL queries directly within C# code." },
            { "id": "dotnet-q38-d", "text": "Defining the database schema using XML files." }
          ],
          "correctOptionId": "dotnet-q38-a",
          "explanation": "Code First allows developers to define their data model using C# classes and then have EF create the database schema based on those classes, often using migrations to manage schema changes."
        },
        {
          "id": "dotnet-q39",
          "question": "Can an interface contain static methods in modern C# (C# 8.0 and later)?",
          "options": [
            { "id": "dotnet-q39-a", "text": "No, interfaces can only contain abstract instance methods." },
            { "id": "dotnet-q39-b", "text": "Yes, interfaces can contain static methods, properties, and events." },
            { "id": "dotnet-q39-c", "text": "Only if the interface is marked as `static`." },
            { "id": "dotnet-q39-d", "text": "Only private static methods are allowed." }
          ],
          "correctOptionId": "dotnet-q39-b",
          "explanation": "Starting with C# 8.0, interfaces can include static members (methods, properties, events), as well as default interface implementations for instance members."
        },
        {
          "id": "dotnet-q40",
          "question": "What happens if an exception is thrown inside an `async void` method?",
          "options": [
            { "id": "dotnet-q40-a", "text": "The exception is silently ignored." },
            { "id": "dotnet-q40-b", "text": "The exception can be caught using a standard `try-catch` around the call site." },
            { "id": "dotnet-q40-c", "text": "The exception typically crashes the application process because there's no `Task` to attach it to." },
            { "id": "dotnet-q40-d", "text": "The exception is automatically logged by the CLR." }
          ],
          "correctOptionId": "dotnet-q40-c",
          "explanation": "Exceptions escaping an `async void` method cannot be caught conventionally and usually propagate directly to the `SynchronizationContext` active when the method started, often leading to application termination. Avoid `async void` except for event handlers."
        }
      ]
    },
    {
      "id": "dotnet-advanced-concepts",
      "title": "Advanced Concepts (41-60)",
      "description": "Questions covering Reflection, DI, GC internals, security, and other advanced topics.",
      "questions": [
        {
          "id": "dotnet-q41",
          "question": "What does Reflection allow you to do at runtime?",
          "options": [
            { "id": "dotnet-q41-a", "text": "Modify compiled IL code directly." },
            { "id": "dotnet-q41-b", "text": "Inspect assembly metadata, discover types, and invoke members dynamically." },
            { "id": "dotnet-q41-c", "text": "Optimize garbage collection behavior." },
            { "id": "dotnet-q41-d", "text": "Interact with unmanaged code libraries." }
          ],
          "correctOptionId": "dotnet-q41-b",
          "explanation": "Reflection enables querying metadata about types and members at runtime and interacting with them dynamically (e.g., creating instances, invoking methods, getting/setting properties)."
        },
        {
          "id": "dotnet-q42",
          "question": "In the context of ASP.NET Core, what is a middleware component?",
          "options": [
            { "id": "dotnet-q42-a", "text": "A class that defines database models." },
            { "id": "dotnet-q42-b", "text": "A software component that handles HTTP requests or responses, chained together to form a pipeline." },
            { "id": "dotnet-q42-c", "text": "A client-side JavaScript library for UI interactions." },
            { "id": "dotnet-q42-d", "text": "A tool for unit testing controllers." }
          ],
          "correctOptionId": "dotnet-q42-b",
          "explanation": "Middleware forms the request processing pipeline in ASP.NET Core. Each component can inspect or modify the request/response and pass control to the next component or short-circuit the pipeline."
        },
        {
          "id": "dotnet-q43",
          "question": "What is the main benefit of using Dependency Injection (DI)?",
          "options": [
            { "id": "dotnet-q43-a", "text": "It increases coupling between components." },
            { "id": "dotnet-q43-b", "text": "It simplifies the process of creating instances of objects and managing their dependencies, promoting loose coupling and testability." },
            { "id": "dotnet-q43-c", "text": "It automatically generates boilerplate code." },
            { "id": "dotnet-q43-d", "text": "It improves the performance of database queries." }
          ],
          "correctOptionId": "dotnet-q43-b",
          "explanation": "DI frameworks manage the creation and provision of dependencies, making classes easier to test in isolation (by injecting mocks) and reducing dependencies between concrete implementations."
        },
        {
          "id": "dotnet-q44",
          "question": "What is the difference between Scoped, Singleton, and Transient service lifetimes in ASP.NET Core's DI container?",
          "options": [
            { "id": "dotnet-q44-a", "text": "They all refer to the same lifetime: one instance per application." },
            { "id": "dotnet-q44-b", "text": "Singleton: one instance per application. Scoped: one instance per request. Transient: new instance each time requested." },
            { "id": "dotnet-q44-c", "text": "Singleton: new instance each time requested. Scoped: one instance per application. Transient: one instance per request." },
            { "id": "dotnet-q44-d", "text": "Singleton: one instance per request. Scoped: new instance each time requested. Transient: one instance per application." }
          ],
          "correctOptionId": "dotnet-q44-b",
          "explanation": "These lifetimes control how long a service instance lives: Singleton (app lifetime), Scoped (request lifetime in web apps), Transient (created every time it's requested)."
        },
        {
          "id": "dotnet-q45",
          "question": "Which .NET implementation is cross-platform (Windows, macOS, Linux) and optimized for performance and cloud scenarios?",
          "options": [
            { "id": "dotnet-q45-a", "text": ".NET Framework" },
            { "id": "dotnet-q45-b", "text": ".NET Core (and subsequent versions like .NET 5, .NET 6, etc.)" },
            { "id": "dotnet-q45-c", "text": "Xamarin" },
            { "id": "dotnet-q45-d", "text": ".NET Standard" }
          ],
          "correctOptionId": "dotnet-q45-b",
          "explanation": ".NET Core (now just .NET 5, 6, 7...) was designed from the ground up to be cross-platform, modular, and high-performance, making it suitable for modern application development, including web and cloud."
        },
        {
          "id": "dotnet-q46",
          "question": "Which generation of the Garbage Collector holds short-lived objects?",
          "options": [
            { "id": "dotnet-q46-a", "text": "Generation 0" },
            { "id": "dotnet-q46-b", "text": "Generation 1" },
            { "id": "dotnet-q46-c", "text": "Generation 2" },
            { "id": "dotnet-q46-d", "text": "Large Object Heap (LOH)" }
          ],
          "correctOptionId": "dotnet-q46-a",
          "explanation": "The .NET GC is generational. New, small objects are allocated in Gen 0. Objects surviving a Gen 0 collection are promoted to Gen 1, and those surviving a Gen 1 collection move to Gen 2. Gen 0 is collected most frequently."
        },
        {
          "id": "dotnet-q47",
          "question": "How can you define custom metadata on types, methods, properties, etc., in C#?",
          "options": [
            { "id": "dotnet-q47-a", "text": "Using XML documentation comments." },
            { "id": "dotnet-q47-b", "text": "Using Attributes." },
            { "id": "dotnet-q47-c", "text": "Using #pragma directives." },
            { "id": "dotnet-q47-d", "text": "Using configuration files." }
          ],
          "correctOptionId": "dotnet-q47-b",
          "explanation": "Attributes (classes deriving from `System.Attribute`) provide a declarative way to add metadata to code elements, which can then be queried using Reflection."
        },
        {
          "id": "dotnet-q48",
          "question": "What is the intermediate language code generated by the C# compiler called?",
          "options": [
            { "id": "dotnet-q48-a", "text": "Native Code" },
            { "id": "dotnet-q48-b", "text": "Assembly Language" },
            { "id": "dotnet-q48-c", "text": "CIL (Common Intermediate Language) or MSIL (Microsoft Intermediate Language)" },
            { "id": "dotnet-q48-d", "text": "Java Bytecode" }
          ],
          "correctOptionId": "dotnet-q48-c",
          "explanation": ".NET compilers translate source code into CIL/MSIL, a CPU-agnostic instruction set, which is later compiled into native code by the JIT compiler."
        },
        {
          "id": "dotnet-q49",
          "question": "What requirement must an assembly meet to be installed in the Global Assembly Cache (GAC)?",
          "options": [
            { "id": "dotnet-q49-a", "text": "It must be written in C#." },
            { "id": "dotnet-q49-b", "text": "It must target .NET Standard." },
            { "id": "dotnet-q49-c", "text": "It must have a strong name (signed with a key pair)." },
            { "id": "dotnet-q49-d", "text": "It must be smaller than 1MB." }
          ],
          "correctOptionId": "dotnet-q49-c",
          "explanation": "The GAC requires assemblies to be strongly named to ensure uniqueness and prevent conflicts. Strong naming involves signing the assembly with a private key."
        },
        {
          "id": "dotnet-q50",
          "question": "What is the difference between Authentication and Authorization in web security?",
          "options": [
            { "id": "dotnet-q50-a", "text": "They are the same thing." },
            { "id": "dotnet-q50-b", "text": "Authentication verifies who the user is; Authorization determines what they are allowed to do." },
            { "id": "dotnet-q50-c", "text": "Authorization verifies who the user is; Authentication determines what they are allowed to do." },
            { "id": "dotnet-q50-d", "text": "Authentication encrypts data; Authorization decrypts data." }
          ],
          "correctOptionId": "dotnet-q50-b",
          "explanation": "Authentication (AuthN) is about identity verification (proving you are who you say you are). Authorization (AuthZ) is about permissions (determining if you have access to a specific resource or action)."
        },
        {
          "id": "dotnet-q51",
          "question": "What is the purpose of the Large Object Heap (LOH) in .NET garbage collection?",
          "options": [
            { "id": "dotnet-q51-a", "text": "To store objects smaller than 85,000 bytes." },
            { "id": "dotnet-q51-b", "text": "To manage memory for static objects." },
            { "id": "dotnet-q51-c", "text": "To handle memory allocation for large objects (typically >= 85,000 bytes) separately to avoid fragmentation of the main heaps." },
            { "id": "dotnet-q51-d", "text": "To store objects that have survived multiple GC cycles." }
          ],
          "correctOptionId": "dotnet-q51-c",
          "explanation": "Large objects are allocated on the LOH. Collecting and compacting the LOH is expensive, so these objects are handled differently from smaller objects on the generational heaps."
        },
        {
          "id": "dotnet-q52",
          "question": "How can you invoke a private method of another class using Reflection?",
          "options": [
            { "id": "dotnet-q52-a", "text": "It's impossible; private members are strictly inaccessible." },
            { "id": "dotnet-q52-b", "text": "By casting the object instance to `dynamic`." },
            { "id": "dotnet-q52-c", "text": "By using `Type.GetMethod()` with appropriate `BindingFlags` (like `NonPublic | Instance`) and then calling `MethodInfo.Invoke()`." },
            { "id": "dotnet-q52-d", "text": "By temporarily changing the method's access level in memory." }
          ],
          "correctOptionId": "dotnet-q52-c",
          "explanation": "Reflection allows bypassing access modifiers, but it requires explicitly searching for non-public members using `BindingFlags` and then using the `Invoke` method on the retrieved `MethodInfo` object."
        },
        {
          "id": "dotnet-q53",
          "question": "In ASP.NET Core's request pipeline, does the order in which middleware components are added matter?",
          "options": [
            { "id": "dotnet-q53-a", "text": "No, the framework determines the optimal order." },
            { "id": "dotnet-q53-b", "text": "Yes, the order defines the sequence in which requests and responses are processed." },
            { "id": "dotnet-q53-c", "text": "Only for authentication middleware." },
            { "id": "dotnet-q53-d", "text": "Only in development environments." }
          ],
          "correctOptionId": "dotnet-q53-b",
          "explanation": "Middleware executes sequentially in the order it's added to the pipeline. Order is crucial as components may depend on actions taken by previous components (e.g., authentication must run before authorization)."
        },
        {
          "id": "dotnet-q54",
          "question": "What is constructor injection in the context of DI?",
          "options": [
            { "id": "dotnet-q54-a", "text": "Injecting dependencies by setting public properties." },
            { "id": "dotnet-q54-b", "text": "Injecting dependencies by passing them as arguments to a class's constructor." },
            { "id": "dotnet-q54-c", "text": "Injecting dependencies using a service locator pattern." },
            { "id": "dotnet-q54-d", "text": "Manually creating dependencies within the constructor." }
          ],
          "correctOptionId": "dotnet-q54-b",
          "explanation": "Constructor injection is the most common DI pattern, where a class declares its dependencies as parameters in its constructor, making dependencies explicit and ensuring the object is fully initialized upon creation."
        },
        {
          "id": "dotnet-q55",
          "question": "Which .NET implementation is primarily used for building native mobile applications for iOS, Android, and Windows?",
          "options": [
            { "id": "dotnet-q55-a", "text": ".NET Framework" },
            { "id": "dotnet-q55-b", "text": ".NET Core" },
            { "id": "dotnet-q55-c", "text": "Xamarin (now part of .NET MAUI)" },
            { "id": "dotnet-q55-d", "text": ".NET Standard" }
          ],
          "correctOptionId": "dotnet-q55-c",
          "explanation": "Xamarin allows C# developers to build cross-platform native mobile apps. It's now evolved into .NET MAUI (Multi-platform App UI), which is part of the unified .NET platform (.NET 6 and later)."
        },
        {
          "id": "dotnet-q56",
          "question": "What is a Finalizer (or destructor syntax `~ClassName()`) used for in C#?",
          "options": [
            { "id": "dotnet-q56-a", "text": "To explicitly release managed resources." },
            { "id": "dotnet-q56-b", "text": "To provide a backup mechanism for releasing unmanaged resources if `Dispose` wasn't called." },
            { "id": "dotnet-q56-c", "text": "To initialize static members of a class." },
            { "id": "dotnet-q56-d", "text": "To signal the end of an asynchronous operation." }
          ],
          "correctOptionId": "dotnet-q56-b",
          "explanation": "Finalizers are called non-deterministically by the GC before an object's memory is reclaimed. They should only be used for releasing unmanaged resources as a safety net, as `IDisposable.Dispose` is the preferred method."
        },
        {
          "id": "dotnet-q57",
          "question": "How can you retrieve all custom attributes of a specific type applied to a class or method using Reflection?",
          "options": [
            { "id": "dotnet-q57-a", "text": "`memberInfo.GetCustomAttributes(typeof(MyAttribute), true)`" },
            { "id": "dotnet-q57-b", "text": "`memberInfo.Attributes.OfType<MyAttribute>()`" },
            { "id": "dotnet-q57-c", "text": "`Attribute.GetAttributes(memberInfo)`" },
            { "id": "dotnet-q57-d", "text": "`Reflection.GetAttributes<MyAttribute>(memberInfo)`" }
          ],
          "correctOptionId": "dotnet-q57-a",
          "explanation": "`GetCustomAttributes` is the standard Reflection method used to retrieve attributes applied to code elements like classes, methods, properties, etc. The second parameter often controls whether to search the inheritance chain."
        },
        {
          "id": "dotnet-q58",
          "question": "What is an Assembly Manifest in .NET?",
          "options": [
            { "id": "dotnet-q58-a", "text": "A list of all classes within the assembly." },
            { "id": "dotnet-q58-b", "text": "Metadata describing the assembly itself (version, culture, dependencies, contained types, etc.)." },
            { "id": "dotnet-q58-c", "text": "The IL code for the assembly's methods." },
            { "id": "dotnet-q58-d", "text": "A configuration file deployed alongside the assembly." }
          ],
          "correctOptionId": "dotnet-q58-b",
          "explanation": "The manifest is part of the assembly metadata, containing essential information the CLR needs to load and manage the assembly, including its identity, version, dependencies, and exported types."
        },
        {
          "id": "dotnet-q59",
          "question": "What potential issue does installing many assemblies into the GAC solve, but what new issue might it introduce?",
          "options": [
            { "id": "dotnet-q59-a", "text": "Solves: Disk space usage; Introduces: Faster loading times." },
            { "id": "dotnet-q59-b", "text": "Solves: \"DLL Hell\" (versioning conflicts); Introduces: Deployment complexity." },
            { "id": "dotnet-q59-c", "text": "Solves: Security vulnerabilities; Introduces: Performance bottlenecks." },
            { "id": "dotnet-q59-d", "text": "Solves: Need for strong naming; Introduces: Interoperability problems." }
          ],
          "correctOptionId": "dotnet-q59-b",
          "explanation": "The GAC allows multiple versions of an assembly to coexist, helping solve versioning issues (\"DLL Hell\"). However, managing GAC deployments adds complexity compared to simple application-local deployments."
        },
        {
          "id": "dotnet-q60",
          "question": "What does CORS stand for, and why is it important in web applications?",
          "options": [
            { "id": "dotnet-q60-a", "text": "Cross-Origin Resource Sharing; it's a security mechanism that restricts web pages from making requests to a different domain than the one that served the page." },
            { "id": "dotnet-q60-b", "text": "Cross-Origin Resource Sharing; it's a browser security feature that allows controlled access to resources located outside of a given domain." },
            { "id": "dotnet-q60-c", "text": "Centralized Object Request Service; it's a pattern for microservice communication." },
            { "id": "dotnet-q60-d", "text": "Compiled Object Runtime System; it's part of the .NET execution engine." }
          ],
          "correctOptionId": "dotnet-q60-b",
          "explanation": "Browsers enforce the Same-Origin Policy for security. CORS is a mechanism using HTTP headers that allows a server to indicate origins (domains) other than its own from which a browser should permit loading resources."
        }
      ]
    },
    {
      "id": "dotnet-aspnet-core",
      "title": "Framework-Specific (ASP.NET Core) (61-80)",
      "description": "Questions specific to the ASP.NET Core framework for web development.",
      "questions": [
        {
          "id": "dotnet-q61",
          "question": "In the MVC pattern, what is the primary responsibility of the Model?",
          "options": [
            { "id": "dotnet-q61-a", "text": "Handling user input and routing requests." },
            { "id": "dotnet-q61-b", "text": "Generating the HTML markup sent to the browser." },
            { "id": "dotnet-q61-c", "text": "Representing the application's data and business logic." },
            { "id": "dotnet-q61-d", "text": "Managing client-side state." }
          ],
          "correctOptionId": "dotnet-q61-c",
          "explanation": "The Model encapsulates the application's state, data, and business rules. Controllers interact with the Model to retrieve or update data before selecting a View."
        },
        {
          "id": "dotnet-q62",
          "question": "Which ASP.NET Core approach is generally preferred for simpler, page-focused scenarios where the logic is tightly coupled to the view?",
          "options": [
            { "id": "dotnet-q62-a", "text": "MVC (Model-View-Controller)" },
            { "id": "dotnet-q62-b", "text": "Web API" },
            { "id": "dotnet-q62-c", "text": "Razor Pages" },
            { "id": "dotnet-q62-d", "text": "Blazor Server" }
          ],
          "correctOptionId": "dotnet-q62-c",
          "explanation": "Razor Pages provides a page-based model where the UI (`.cshtml`) and its code-behind (`.cshtml.cs`) are closely linked, simplifying development for many page-centric web applications compared to the full MVC pattern."
        },
        {
          "id": "dotnet-q63",
          "question": "How are validation rules typically defined for model properties in ASP.NET Core?",
          "options": [
            { "id": "dotnet-q63-a", "text": "Using XML configuration files." },
            { "id": "dotnet-q63-b", "text": "Using Data Annotation attributes (e.g., `[Required]`, `[StringLength]`) on model properties." },
            { "id": "dotnet-q63-c", "text": "By writing custom JavaScript for each input field." },
            { "id": "dotnet-q63-d", "text": "Within the controller action methods using `if` statements." }
          ],
          "correctOptionId": "dotnet-q63-b",
          "explanation": "Data Annotations provide a declarative way to specify validation rules directly on model properties. The framework automatically enforces these rules during model binding."
        },
        {
          "id": "dotnet-q64",
          "question": "What is the primary use case for SignalR in ASP.NET Core?",
          "options": [
            { "id": "dotnet-q64-a", "text": "Long-running background tasks." },
            { "id": "dotnet-q64-b", "text": "Object-relational mapping." },
            { "id": "dotnet-q64-c", "text": "Adding real-time web functionality (e.g., live updates, chat)." },
            { "id": "dotnet-q64-d", "text": "User authentication and authorization." }
          ],
          "correctOptionId": "dotnet-q64-c",
          "explanation": "SignalR simplifies adding real-time bidirectional communication between server and clients, enabling features like live dashboards, notifications, and collaborative applications."
        },
        {
          "id": "dotnet-q65",
          "question": "What is a key difference between Blazor Server and Blazor WebAssembly hosting models?",
          "options": [
            { "id": "dotnet-q65-a", "text": "Blazor Server runs C# code on the server, Blazor WebAssembly runs it in the browser." },
            { "id": "dotnet-q65-b", "text": "Blazor Server requires JavaScript, Blazor WebAssembly does not." },
            { "id": "dotnet-q65-c", "text": "Blazor WebAssembly requires a constant connection to the server." },
            { "id": "dotnet-q65-d", "text": "Blazor Server applications have better offline capabilities." }
          ],
          "correctOptionId": "dotnet-q65-a",
          "explanation": "Blazor Server executes component logic on the server and sends UI updates over SignalR. Blazor WebAssembly downloads the .NET runtime and application code to the browser to run directly via WebAssembly."
        },
        {
          "id": "dotnet-q66",
          "question": "Which is NOT a common strategy for versioning Web APIs in ASP.NET Core?",
          "options": [
            { "id": "dotnet-q66-a", "text": "Versioning through URL path (e.g., `/api/v1/products`)" },
            { "id": "dotnet-q66-b", "text": "Versioning through query string (e.g., `/api/products?api-version=1.0`)" },
            { "id": "dotnet-q66-c", "text": "Versioning through HTTP headers (e.g., `X-Api-Version: 1.0`)" },
            { "id": "dotnet-q66-d", "text": "Versioning through the HTTP method (e.g., using GET for v1, POST for v2)" }
          ],
          "correctOptionId": "dotnet-q66-d",
          "explanation": "HTTP methods (GET, POST, PUT, DELETE) define the action to be performed on a resource, not the API version. URL, query string, and headers are common versioning approaches."
        },
        {
          "id": "dotnet-q67",
          "question": "Which `IApplicationBuilder` extension method is used to add a terminal middleware component that short-circuits the pipeline?",
          "options": [
            { "id": "dotnet-q67-a", "text": "Use()" },
            { "id": "dotnet-q67-b", "text": "Map()" },
            { "id": "dotnet-q67-c", "text": "Run()" },
            { "id": "dotnet-q67-d", "text": "UseMiddleware()" }
          ],
          "correctOptionId": "dotnet-q67-c",
          "explanation": "`Run` adds a terminal middleware delegate. It does not call the `next` delegate, effectively ending the pipeline for that request."
        },
        {
          "id": "dotnet-q68",
          "question": "What is the purpose of Areas in ASP.NET Core MVC?",
          "options": [
            { "id": "dotnet-q68-a", "text": "To define caching policies." },
            { "id": "dotnet-q68-b", "text": "To partition a large application into smaller functional groupings." },
            { "id": "dotnet-q68-c", "text": "To manage user sessions." },
            { "id": "dotnet-q68-d", "text": "To configure dependency injection." }
          ],
          "correctOptionId": "dotnet-q68-b",
          "explanation": "Areas provide a way to organize related functionality (controllers, views, models) within a larger MVC application, improving structure and maintainability."
        },
        {
          "id": "dotnet-q69",
          "question": "Which type of session state storage is suitable for web farms (multiple servers) without requiring \"sticky sessions\"?",
          "options": [
            { "id": "dotnet-q69-a", "text": "In-memory session state" },
            { "id": "dotnet-q69-b", "text": "Distributed session state (e.g., using Redis or SQL Server)" },
            { "id": "dotnet-q69-c", "text": "Static variables in controllers" },
            { "id": "dotnet-q69-d", "text": "Client-side cookies only" }
          ],
          "correctOptionId": "dotnet-q69-b",
          "explanation": "Distributed session state stores session data in an external location accessible by all servers (like a distributed cache or database), allowing any server to handle subsequent requests from a user."
        },
        {
          "id": "dotnet-q70",
          "question": "What is Response Caching in ASP.NET Core?",
          "options": [
            { "id": "dotnet-q70-a", "text": "Caching data retrieved from a database." },
            { "id": "dotnet-q70-b", "text": "Storing the full HTTP response based on request headers, allowing subsequent requests to be served directly from the cache." },
            { "id": "dotnet-q70-c", "text": "Caching user authentication tokens." },
            { "id": "dotnet-q70-d", "text": "Managing client-side browser cache." }
          ],
          "correctOptionId": "dotnet-q70-b",
          "explanation": "Response Caching middleware stores generated responses in a server-side cache (or sets appropriate HTTP headers for client/proxy caching) to improve performance for identical subsequent requests."
        },
        {
          "id": "dotnet-q71",
          "question": "What is the role of Routing middleware in ASP.NET Core?",
          "options": [
            { "id": "dotnet-q71-a", "text": "To authenticate users." },
            { "id": "dotnet-q71-b", "text": "To match incoming request URLs to application endpoints (like controller actions or Razor pages)." },
            { "id": "dotnet-q71-c", "text": "To compress HTTP responses." },
            { "id": "dotnet-q71-d", "text": "To serve static files." }
          ],
          "correctOptionId": "dotnet-q71-b",
          "explanation": "Routing inspects the request URL and other context information to determine which piece of application code (endpoint) should handle the request."
        },
        {
          "id": "dotnet-q72",
          "question": "In Razor Pages, where is the C# code logic associated with a page typically located?",
          "options": [
            { "id": "dotnet-q72-a", "text": "In a separate Controller class." },
            { "id": "dotnet-q72-b", "text": "Directly within the `.cshtml` file using `@functions { }`." },
            { "id": "dotnet-q72-c", "text": "In the associated PageModel class (`.cshtml.cs` file)." },
            { "id": "dotnet-q72-d", "text": "In a global `AppLogic.cs` file." }
          ],
          "correctOptionId": "dotnet-q72-c",
          "explanation": "The PageModel class follows a convention (`PageName.cshtml.cs`) and contains the handler methods (e.g., `OnGet`, `OnPost`) and properties associated with the Razor Page."
        },
        {
          "id": "dotnet-q73",
          "question": "What does `ModelState.IsValid` check in an ASP.NET Core controller action or Razor Page handler?",
          "options": [
            { "id": "dotnet-q73-a", "text": "If the user is authenticated." },
            { "id": "dotnet-q73-b", "text": "If the incoming model data passed all validation rules (e.g., Data Annotations)." },
            { "id": "dotnet-q73-c", "text": "If the database connection is open." },
            { "id": "dotnet-q73-d", "text": "If the request uses HTTPS." }
          ],
          "correctOptionId": "dotnet-q73-b",
          "explanation": "`ModelState.IsValid` returns true if the model binding process was successful and all validation attributes applied to the model properties were satisfied."
        },
        {
          "id": "dotnet-q74",
          "question": "What transport protocol does SignalR prefer for the best performance and features, falling back to others if necessary?",
          "options": [
            { "id": "dotnet-q74-a", "text": "Long Polling" },
            { "id": "dotnet-q74-b", "text": "Server-Sent Events (SSE)" },
            { "id": "dotnet-q74-c", "text": "WebSockets" },
            { "id": "dotnet-q74-d", "text": "Forever Frame" }
          ],
          "correctOptionId": "dotnet-q74-c",
          "explanation": "SignalR negotiates the best available transport. WebSockets provide the most efficient, true full-duplex communication but may be blocked by some network infrastructure, requiring fallbacks like SSE or Long Polling."
        },
        {
          "id": "dotnet-q75",
          "question": "What technology allows Blazor WebAssembly applications to run .NET code directly in the browser?",
          "options": [
            { "id": "dotnet-q75-a", "text": "ActiveX" },
            { "id": "dotnet-q75-b", "text": "JavaScriptCore" },
            { "id": "dotnet-q75-c", "text": "WebAssembly (Wasm)" },
            { "id": "dotnet-q75-d", "text": "Silverlight" }
          ],
          "correctOptionId": "dotnet-q75-c",
          "explanation": "Blazor WebAssembly compiles C# code and the .NET runtime to WebAssembly, a binary instruction format that runs natively in modern web browsers."
        },
        {
          "id": "dotnet-q76",
          "question": "What is the purpose of Tag Helpers in ASP.NET Core Razor views/pages?",
          "options": [
            { "id": "dotnet-q76-a", "text": "To define database schemas." },
            { "id": "dotnet-q76-b", "text": "To enable server-side C# code to participate in creating and rendering HTML elements." },
            { "id": "dotnet-q76-c", "text": "To manage client-side package dependencies." },
            { "id": "dotnet-q76-d", "text": "To perform unit testing on Razor views." }
          ],
          "correctOptionId": "dotnet-q76-b",
          "explanation": "Tag Helpers provide a way to use server-side logic to generate HTML, often resulting in cleaner and more HTML-like syntax within Razor files compared to traditional HTML Helpers."
        },
        {
          "id": "dotnet-q77",
          "question": "Which middleware should typically be placed early in the ASP.NET Core pipeline to catch exceptions that occur in later middleware?",
          "options": [
            { "id": "dotnet-q77-a", "text": "Authentication Middleware" },
            { "id": "dotnet-q77-b", "text": "Routing Middleware" },
            { "id": "dotnet-q77-c", "text": "Static File Middleware" },
            { "id": "dotnet-q77-d", "text": "Exception Handling Middleware" }
          ],
          "correctOptionId": "dotnet-q77-d",
          "explanation": "Exception handling middleware (like `UseExceptionHandler` or `UseDeveloperExceptionPage`) needs to be registered early so it can wrap the execution of subsequent middleware and catch any unhandled exceptions."
        },
        {
          "id": "dotnet-q78",
          "question": "How do you typically register services (like database contexts or custom services) for Dependency Injection in ASP.NET Core?",
          "options": [
            { "id": "dotnet-q78-a", "text": "In the `Configure` method of `Startup.cs` (or `Program.cs`)." },
            { "id": "dotnet-q78-b", "text": "In the `ConfigureServices` method of `Startup.cs` (or directly in `Program.cs` using `builder.Services`)." },
            { "id": "dotnet-q78-c", "text": "Using attributes on the service classes." },
            { "id": "dotnet-q78-d", "text": "In a separate `services.xml` configuration file." }
          ],
          "correctOptionId": "dotnet-q78-b",
          "explanation": "The `ConfigureServices` method (in older `Startup.cs`) or the top-level statements in `Program.cs` (using `WebApplicationBuilder.Services`) is where services are configured and added to the DI container."
        },
        {
          "id": "dotnet-q79",
          "question": "What is the purpose of the `[ApiController]` attribute in ASP.NET Core?",
          "options": [
            { "id": "dotnet-q79-a", "text": "To mark a class as a Razor Page model." },
            { "id": "dotnet-q79-b", "text": "To enable API-specific behaviors like automatic model validation and problem details for errors." },
            { "id": "dotnet-q79-c", "text": "To configure SignalR hubs." },
            { "id": "dotnet-q79-d", "text": "To define areas within an MVC application." }
          ],
          "correctOptionId": "dotnet-q79-b",
          "explanation": "Applying `[ApiController]` to a controller enables opinionated behaviors useful for building Web APIs, such as automatically triggering model validation and returning standardized error responses."
        },
        {
          "id": "dotnet-q80",
          "question": "What is the primary benefit of using asynchronous actions (`async Task<IActionResult>`) in ASP.NET Core controllers?",
          "options": [
            { "id": "dotnet-q80-a", "text": "It makes database queries faster." },
            { "id": "dotnet-q80-b", "text": "It improves server scalability by releasing request threads during I/O operations." },
            { "id": "dotnet-q80-c", "text": "It simplifies error handling." },
            { "id": "dotnet-q80-d", "text": "It enables client-side caching." }
          ],
          "correctOptionId": "dotnet-q80-b",
          "explanation": "By using `async Task` actions and awaiting I/O-bound operations, ASP.NET Core can efficiently handle more concurrent requests because threads are not blocked waiting for I/O, improving throughput and scalability."
        }
      ]
    },
    {
      "id": "dotnet-testing-practices",
      "title": "Testing & Best Practices (81-100)",
      "description": "Questions covering software testing methodologies, SOLID principles, security, and performance.",
      "questions": [
        {
          "id": "dotnet-q81",
          "question": "What is the main characteristic of a Unit Test?",
          "options": [
            { "id": "dotnet-q81-a", "text": "It tests the application's integration with external services like databases." },
            { "id": "dotnet-q81-b", "text": "It tests a small, isolated piece of code (e.g., a method or class) independently of its dependencies." },
            { "id": "dotnet-q81-c", "text": "It requires deploying the application to a server." },
            { "id": "dotnet-q81-d", "text": "It simulates user interaction through the UI." }
          ],
          "correctOptionId": "dotnet-q81-b",
          "explanation": "Unit tests focus on verifying the logic of individual components in isolation, often using mocks or stubs to replace external dependencies."
        },
        {
          "id": "dotnet-q82",
          "question": "Which of the following is a popular mocking framework for .NET?",
          "options": [
            { "id": "dotnet-q82-a", "text": "xUnit" },
            { "id": "dotnet-q82-b", "text": "NUnit" },
            { "id": "dotnet-q82-c", "text": "Moq" },
            { "id": "dotnet-q82-d", "text": "Selenium" }
          ],
          "correctOptionId": "dotnet-q82-c",
          "explanation": "Moq (and others like NSubstitute) are mocking libraries used to create mock objects for dependencies during unit testing. xUnit and NUnit are unit testing frameworks."
        },
        {
          "id": "dotnet-q83",
          "question": "The 'S' in SOLID principles stands for:",
          "options": [
            { "id": "dotnet-q83-a", "text": "Simple Code Principle" },
            { "id": "dotnet-q83-b", "text": "Single Responsibility Principle" },
            { "id": "dotnet-q83-c", "text": "Static Class Principle" },
            { "id": "dotnet-q83-d", "text": "Service Locator Principle" }
          ],
          "correctOptionId": "dotnet-q83-b",
          "explanation": "The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have only one job or responsibility."
        },
        {
          "id": "dotnet-q84",
          "question": "What is the goal of the Open/Closed Principle (O in SOLID)?",
          "options": [
            { "id": "dotnet-q84-a", "text": "Software entities should be open for extension but closed for modification." },
            { "id": "dotnet-q84-b", "text": "Code should be open source." },
            { "id": "dotnet-q84-c", "text": "Connections should be opened and closed quickly." },
            { "id": "dotnet-q84-d", "text": "Classes should have open access to their members." }
          ],
          "correctOptionId": "dotnet-q84-a",
          "explanation": "This principle encourages designing software entities (classes, modules) so that their behavior can be extended (e.g., through inheritance or composition) without modifying their existing source code."
        },
        {
          "id": "dotnet-q85",
          "question": "What is Continuous Integration (CI)?",
          "options": [
            { "id": "dotnet-q85-a", "text": "Integrating user feedback continuously during development." },
            { "id": "dotnet-q85-b", "text": "The practice of frequently merging developers' code changes into a central repository, followed by automated builds and tests." },
            { "id": "dotnet-q85-c", "text": "Continuously deploying every code change directly to production." },
            { "id": "dotnet-q85-d", "text": "Integrating multiple programming languages in one project." }
          ],
          "correctOptionId": "dotnet-q85-b",
          "explanation": "CI aims to detect integration errors early by automating the build and testing process each time code is checked into the shared repository."
        },
        {
          "id": "dotnet-q86",
          "question": "Which security vulnerability involves executing malicious scripts in the context of a user's browser, often by injecting script into application output?",
          "options": [
            { "id": "dotnet-q86-a", "text": "SQL Injection" },
            { "id": "dotnet-q86-b", "text": "Cross-Site Scripting (XSS)" },
            { "id": "dotnet-q86-c", "text": "Cross-Site Request Forgery (CSRF)" },
            { "id": "dotnet-q86-d", "text": "Insecure Deserialization" }
          ],
          "correctOptionId": "dotnet-q86-b",
          "explanation": "XSS occurs when an attacker injects malicious client-side scripts into web pages viewed by other users. Proper input validation and output encoding are crucial defenses."
        },
        {
          "id": "dotnet-q87",
          "question": "What is a common performance bottleneck in data-driven .NET applications?",
          "options": [
            { "id": "dotnet-q87-a", "text": "Using `async`/`await` excessively." },
            { "id": "dotnet-q87-b", "text": "Inefficient database queries or excessive database calls (e.g., N+1 problem)." },
            { "id": "dotnet-q87-c", "text": "Compiling code too often." },
            { "id": "dotnet-q87-d", "text": "Overuse of static classes." }
          ],
          "correctOptionId": "dotnet-q87-b",
          "explanation": "Database interactions are often performance hotspots. Poorly written queries, missing indexes, or making numerous small queries instead of fewer larger ones (like in the N+1 scenario) can severely impact performance."
        },
        {
          "id": "dotnet-q88",
          "question": "What is the primary benefit of using the Repository pattern?",
          "options": [
            { "id": "dotnet-q88-a", "text": "It centralizes data access logic, decoupling it from the business logic and making it easier to test and maintain." },
            { "id": "dotnet-q88-b", "text": "It guarantees faster database performance." },
            { "id": "dotnet-q88-c", "text": "It eliminates the need for a database entirely." },
            { "id": "dotnet-q88-d", "text": "It simplifies UI development." }
          ],
          "correctOptionId": "dotnet-q88-a",
          "explanation": "The Repository pattern abstracts the data persistence mechanism, providing a collection-like interface for accessing domain objects and isolating data access concerns."
        },
        {
          "id": "dotnet-q89",
          "question": "In Entity Framework Core, what command is typically used to generate a new migration script based on changes to the model?",
          "options": [
            { "id": "dotnet-q89-a", "text": "Update-Database" },
            { "id": "dotnet-q89-b", "text": "Add-Migration <MigrationName>" },
            { "id": "dotnet-q89-c", "text": "Scaffold-DbContext" },
            { "id": "dotnet-q89-d", "text": "Ensure-Created" }
          ],
          "correctOptionId": "dotnet-q89-b",
          "explanation": "`Add-Migration` compares the current model snapshot with the previous one (or creates the first one) and generates C# code representing the changes needed to update the database schema."
        },
        {
          "id": "dotnet-q90",
          "question": "Which Visual Studio tool allows you to step through code execution, inspect variables, and diagnose issues at runtime?",
          "options": [
            { "id": "dotnet-q90-a", "text": "Test Explorer" },
            { "id": "dotnet-q90-b", "text": "Solution Explorer" },
            { "id": "dotnet-q90-c", "text": "Debugger" },
            { "id": "dotnet-q90-d", "text": "NuGet Package Manager" }
          ],
          "correctOptionId": "dotnet-q90-c",
          "explanation": "The Debugger is an essential tool for developers to analyze code behavior, set breakpoints, examine variable values, and step through execution flow line by line."
        },
        {
          "id": "dotnet-q91",
          "question": "What does the Interface Segregation Principle (I in SOLID) suggest?",
          "options": [
            { "id": "dotnet-q91-a", "text": "Interfaces should be as large as possible." },
            { "id": "dotnet-q91-b", "text": "Clients should not be forced to depend on interfaces they do not use." },
            { "id": "dotnet-q91-c", "text": "All classes should implement the `IDisposable` interface." },
            { "id": "dotnet-q91-d", "text": "Use interfaces instead of abstract classes always." }
          ],
          "correctOptionId": "dotnet-q91-b",
          "explanation": "This principle promotes creating smaller, more specific interfaces rather than large, general-purpose ones, so that implementing classes only need to be concerned with the methods relevant to them."
        },
        {
          "id": "dotnet-q92",
          "question": "What is Continuous Deployment (CD)?",
          "options": [
            { "id": "dotnet-q92-a", "text": "Deploying code manually after each sprint." },
            { "id": "dotnet-q92-b", "text": "Automatically deploying code changes that pass the CI pipeline to a testing or production environment." },
            { "id": "dotnet-q92-c", "text": "Designing deployment scripts." },
            { "id": "dotnet-q92-d", "text": "Documenting the deployment process." }
          ],
          "correctOptionId": "dotnet-q92-b",
          "explanation": "CD extends Continuous Integration by automating the deployment of validated code changes to one or more environments, enabling faster release cycles."
        },
        {
          "id": "dotnet-q93",
          "question": "How can you help prevent SQL Injection vulnerabilities in .NET?",
          "options": [
            { "id": "dotnet-q93-a", "text": "By concatenating user input directly into SQL query strings." },
            { "id": "dotnet-q93-b", "text": "By using parameterized queries or ORMs like Entity Framework that handle parameterization." },
            { "id": "dotnet-q93-c", "text": "By validating user input only on the client-side." },
            { "id": "dotnet-q93-d", "text": "By disabling database logging." }
          ],
          "correctOptionId": "dotnet-q93-b",
          "explanation": "Parameterized queries treat user input as data values rather than executable code, preventing malicious input from altering the structure of the SQL query. ORMs typically use parameterization by default."
        },
        {
          "id": "dotnet-q94",
          "question": "Which tool is specifically designed for analyzing memory usage and diagnosing memory leaks or GC pressure in .NET applications?",
          "options": [
            { "id": "dotnet-q94-a", "text": "Visual Studio Debugger" },
            { "id": "dotnet-q94-b", "text": "SQL Server Management Studio" },
            { "id": "dotnet-q94-c", "text": "Visual Studio Memory Usage tool (Profiler) or PerfView" },
            { "id": "dotnet-q94-d", "text": "Postman" }
          ],
          "correctOptionId": "dotnet-q94-c",
          "explanation": "Visual Studio's built-in profiler (Memory Usage tool) and more advanced tools like PerfView allow developers to take memory snapshots, analyze object allocations, and investigate GC behavior to find memory issues."
        },
        {
          "id": "dotnet-q95",
          "question": "What is the Dependency Inversion Principle (D in SOLID)?",
          "options": [
            { "id": "dotnet-q95-a", "text": "Low-level modules should depend on high-level modules." },
            { "id": "dotnet-q95-b", "text": "High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions." },
            { "id": "dotnet-q95-c", "text": "Invert the order of parameters in methods." },
            { "id": "dotnet-q95-d", "text": "Depend only on concrete classes, not interfaces." }
          ],
          "correctOptionId": "dotnet-q95-b",
          "explanation": "This principle encourages depending on abstractions (interfaces or abstract classes) rather than concrete implementations, promoting loose coupling and flexibility."
        },
        {
          "id": "dotnet-q96",
          "question": "What is the purpose of the Unit of Work pattern, often used alongside the Repository pattern?",
          "options": [
            { "id": "dotnet-q96-a", "text": "To manage transactions and coordinate changes across multiple repositories as a single atomic operation." },
            { "id": "dotnet-q96-b", "text": "To define the structure of unit tests." },
            { "id": "dotnet-q96-c", "text": "To handle user interface logic." },
            { "id": "dotnet-q96-d", "text": "To optimize individual database queries." }
          ],
          "correctOptionId": "dotnet-q96-a",
          "explanation": "The Unit of Work pattern maintains a list of objects affected by a business transaction and coordinates the writing out of changes and the resolution of concurrency problems, often managing a database transaction."
        },
        {
          "id": "dotnet-q97",
          "question": "Besides the Debugger, what other Visual Studio Profiling tool can help identify CPU bottlenecks?",
          "options": [
            { "id": "dotnet-q97-a", "text": "Memory Usage tool" },
            { "id": "dotnet-q97-b", "text": "CPU Usage tool" },
            { "id": "dotnet-q97-c", "text": "Database tool" },
            { "id": "dotnet-q97-d", "text": "Application Timeline" }
          ],
          "correctOptionId": "dotnet-q97-b",
          "explanation": "The CPU Usage tool analyzes which functions are consuming the most CPU time, helping developers pinpoint performance bottlenecks in their code."
        },
        {
          "id": "dotnet-q98",
          "question": "Which testing framework is developed by Microsoft and integrated into Visual Studio?",
          "options": [
            { "id": "dotnet-q98-a", "text": "NUnit" },
            { "id": "dotnet-q98-b", "text": "xUnit" },
            { "id": "dotnet-q98-c", "text": "MSTest" },
            { "id": "dotnet-q98-d", "text": "JUnit" }
          ],
          "correctOptionId": "dotnet-q98-c",
          "explanation": "MSTest is Microsoft's testing framework, tightly integrated with Visual Studio's Test Explorer. NUnit and xUnit are popular third-party alternatives."
        },
        {
          "id": "dotnet-q99",
          "question": "What is a common strategy for managing sensitive configuration values (like API keys or connection strings) in ASP.NET Core development?",
          "options": [
            { "id": "dotnet-q99-a", "text": "Hardcoding them directly in source code." },
            { "id": "dotnet-q99-b", "text": "Storing them in `appsettings.json` and committing it to source control." },
            { "id": "dotnet-q99-c", "text": "Using the Secrets Manager tool for local development and environment variables or Azure Key Vault for deployed environments." },
            { "id": "dotnet-q99-d", "text": "Emailing them to the development team." }
          ],
          "correctOptionId": "dotnet-q99-c",
          "explanation": "Storing secrets outside of source control is crucial for security. Secrets Manager (dev), environment variables, Azure Key Vault, or similar secure configuration providers are recommended."
        },
        {
          "id": "dotnet-q100",
          "question": "Which principle suggests that a class should have only one reason to change?",
          "options": [
            { "id": "dotnet-q100-a", "text": "Open/Closed Principle" },
            { "id": "dotnet-q100-b", "text": "Liskov Substitution Principle" },
            { "id": "dotnet-q100-c", "text": "Interface Segregation Principle" },
            { "id": "dotnet-q100-d", "text": "Single Responsibility Principle" }
          ],
          "correctOptionId": "dotnet-q100-d",
          "explanation": "The Single Responsibility Principle (SRP) promotes creating classes that are focused on a single responsibility or concern, leading to more maintainable and understandable code."
        }
      ]
    }
  ]
}