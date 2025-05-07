import { QuizSectionData } from "@/models/QuizTypes";

export const csharpdotnetquiz: QuizSectionData ={
  "id": "csharp-dotnet-quiz",
  "title": ".NET and C# Development",
  "description": "Test your knowledge of .NET and C# programming concepts, including ASP.NET Core and best practices.",
  "quizzes": [
    {
      "id": "dotnet-concepts",
      "title": ".NET & C# Concepts",
      "description": "Questions covering various aspects of the .NET ecosystem and C# language features.",
      "questions": [
        {
          "id": "dotnet-q1",
          "question": "What is the primary role of the Common Language Runtime (CLR) in .NET?",
          "options": [
            { "id": "dotnet-q1-a", "text": "To compile C# code directly into native machine code." },
            { "id": "dotnet-q1-b", "text": "To provide a rich set of UI controls for desktop applications." },
            { "id": "dotnet-q1-c", "text": "To manage the execution environment for .NET programs, including memory management and security." },
            { "id": "dotnet-q1-d", "text": "To define the syntax rules for the C# language." }
          ],
          "correctOptionId": "dotnet-q1-c",
          "explanation": "The CLR acts as the runtime engine for .NET applications, providing services like garbage collection (memory management), code verification, security enforcement, and Just-In-Time (JIT) compilation."
        },
        {
          "id": "dotnet-q2",
          "question": "Which of the following is a key characteristic of managed code in .NET?",
          "options": [
            { "id": "dotnet-q2-a", "text": "It runs directly on the operating system without an intermediary layer." },
            { "id": "dotnet-q2-b", "text": "Memory management is handled manually by the developer using pointers." },
            { "id": "dotnet-q2-c", "text": "It runs under the control of the Common Language Runtime (CLR)." },
            { "id": "dotnet-q2-d", "text": "It is exclusively used for web development." }
          ],
          "correctOptionId": "dotnet-q2-c",
          "explanation": "Managed code is code whose execution is managed by the CLR. The CLR handles essential services like memory management (garbage collection), type safety, and security."
        },
        {
          "id": "dotnet-q3",
          "question": "In C#, where are instances of Value Types (like int, struct, bool) typically stored?",
          "options": [
            { "id": "dotnet-q3-a", "text": "The managed heap" },
            { "id": "dotnet-q3-b", "text": "The stack" },
            { "id": "dotnet-q3-c", "text": "The Global Assembly Cache (GAC)" },
            { "id": "dotnet-q3-d", "text": "A configuration file" }
          ],
          "correctOptionId": "dotnet-q3-b",
          "explanation": "Value types are typically allocated on the stack, which allows for faster allocation and deallocation. However, if a value type is part of a reference type object or captured in a closure, it might be stored on the heap."
        },
        {
          "id": "dotnet-q4",
          "question": "What is the purpose of a namespace in C#?",
          "options": [
            { "id": "dotnet-q4-a", "text": "To define the memory allocation for variables." },
            { "id": "dotnet-q4-b", "text": "To provide a way to organize code and prevent naming conflicts." },
            { "id": "dotnet-q4-c", "text": "To declare the main entry point of an application." },
            { "id": "dotnet-q4-d", "text": "To handle asynchronous operations." }
          ],
          "correctOptionId": "dotnet-q4-b",
          "explanation": "Namespaces provide a hierarchical way to organize classes, structs, interfaces, enums, and delegates into logical groups, preventing naming collisions between types."
        },
        {
          "id": "dotnet-q5",
          "question": "Which object-oriented principle involves bundling data (attributes) and methods (functions) that operate on the data within a single unit (class), often restricting access to some components?",
          "options": [
            { "id": "dotnet-q5-a", "text": "Inheritance" },
            { "id": "dotnet-q5-b", "text": "Polymorphism" },
            { "id": "dotnet-q5-c", "text": "Encapsulation" },
            { "id": "dotnet-q5-d", "text": "Abstraction" }
          ],
          "correctOptionId": "dotnet-q5-c",
          "explanation": "Encapsulation is the practice of hiding the internal state and implementation details of an object and exposing only necessary functionalities through public methods or properties."
        },
        {
          "id": "dotnet-q6",
          "question": "Which feature in C# allows a class to implement multiple contracts defining methods, properties, and events, but without implementation details (prior to C# 8 default methods)?",
          "options": [
            { "id": "dotnet-q6-a", "text": "Abstract Class" },
            { "id": "dotnet-q6-b", "text": "Static Class" },
            { "id": "dotnet-q6-c", "text": "Sealed Class" },
            { "id": "dotnet-q6-d", "text": "Interface" }
          ],
          "correctOptionId": "dotnet-q6-d",
          "explanation": "Interfaces define a contract (a set of public members) that implementing classes or structs must provide. A class can implement multiple interfaces, enabling a form of multiple inheritance of type."
        },
        {
          "id": "dotnet-q7",
          "question": "What is LINQ (Language Integrated Query) primarily used for in .NET?",
          "options": [
            { "id": "dotnet-q7-a", "text": "Defining the structure of user interfaces." },
            { "id": "dotnet-q7-b", "text": "Querying data from various sources (like collections, databases, XML) using a consistent syntax." },
            { "id": "dotnet-q7-c", "text": "Managing application security and authentication." },
            { "id": "dotnet-q7-d", "text": "Performing low-level memory manipulation." }
          ],
          "correctOptionId": "dotnet-q7-b",
          "explanation": "LINQ provides a unified way to query data regardless of the data source, using C# (or VB.NET) syntax directly integrated into the language."
        },
        {
          "id": "dotnet-q8",
          "question": "What is the primary purpose of the async and await keywords in C#?",
          "options": [
            { "id": "dotnet-q8-a", "text": "To execute code on multiple threads simultaneously in a parallel manner." },
            { "id": "dotnet-q8-b", "text": "To simplify writing and managing asynchronous, non-blocking operations." },
            { "id": "dotnet-q8-c", "text": "To automatically handle memory deallocation for large objects." },
            { "id": "dotnet-q8-d", "text": "To define class constructors and destructors." }
          ],
          "correctOptionId": "dotnet-q8-b",
          "explanation": "Async/await provides a syntactic sugar over Task-based asynchronous programming, making asynchronous code look and feel more like synchronous code while maintaining responsiveness."
        },
        {
          "id": "dotnet-q9",
          "question": "What is an Extension Method in C#?",
          "options": [
            { "id": "dotnet-q9-a", "text": "A method defined inside an abstract class." },
            { "id": "dotnet-q9-b", "text": "A static method that can be called as if it were an instance method of an existing type." },
            { "id": "dotnet-q9-c", "text": "A method that overrides a virtual method from a base class." },
            { "id": "dotnet-q9-d", "text": "A special method used only for database interactions." }
          ],
          "correctOptionId": "dotnet-q9-b",
          "explanation": "Extension methods allow developers to add new methods to existing types without modifying them or creating derived types. They must be static methods in a static class, with the 'this' keyword before the first parameter."
        },
        {
          "id": "dotnet-q10",
          "question": "What is the main difference between an abstract class and an interface in C# (considering versions before C# 8)?",
          "options": [
            { "id": "dotnet-q10-a", "text": "Interfaces can have constructors, abstract classes cannot." },
            { "id": "dotnet-q10-b", "text": "A class can inherit from multiple abstract classes, but only implement one interface." },
            { "id": "dotnet-q10-c", "text": "Abstract classes can contain implemented methods and fields, while interfaces generally cannot contain implementation or fields." },
            { "id": "dotnet-q10-d", "text": "Interfaces are value types, abstract classes are reference types." }
          ],
          "correctOptionId": "dotnet-q10-c",
          "explanation": "Before C# 8, interfaces could only contain declarations (signatures) of methods, properties, events, and indexers. Abstract classes could contain both abstract members (without implementation) and concrete members (with implementation and fields). Also, a class can only inherit from one abstract class but can implement multiple interfaces."
        },
        {
          "id": "dotnet-q11",
          "question": "What .NET feature allows you to inspect the metadata of types (classes, interfaces, etc.) at runtime and invoke their members dynamically?",
          "options": [
            { "id": "dotnet-q11-a", "text": "Garbage Collection" },
            { "id": "dotnet-q11-b", "text": "Reflection" },
            { "id": "dotnet-q11-c", "text": "LINQ" },
            { "id": "dotnet-q11-d", "text": "Delegates" }
          ],
          "correctOptionId": "dotnet-q11-b",
          "explanation": "Reflection provides objects (like Type, MethodInfo, PropertyInfo) that represent assemblies, modules, and types, allowing you to dynamically create instances, invoke methods, and access fields/properties at runtime."
        },
        {
          "id": "dotnet-q12",
          "question": "In ASP.NET Core, what is the role of Middleware?",
          "options": [
            { "id": "dotnet-q12-a", "text": "To define the database schema (Model)." },
            { "id": "dotnet-q12-b", "text": "To render HTML to the browser (View)." },
            { "id": "dotnet-q12-c", "text": "To handle requests and responses by assembling components into a request pipeline." },
            { "id": "dotnet-q12-d", "text": "To manage client-side JavaScript libraries." }
          ],
          "correctOptionId": "dotnet-q12-c",
          "explanation": "Middleware components are assembled into a pipeline to handle HTTP requests and responses. Each component can inspect, modify, or pass the request to the next component, and perform actions before or after the next component executes."
        },
        {
          "id": "dotnet-q13",
          "question": "What problem does the Dependency Injection (DI) pattern primarily aim to solve?",
          "options": [
            { "id": "dotnet-q13-a", "text": "Improve code compilation speed." },
            { "id": "dotnet-q13-b", "text": "Reduce tight coupling between software components." },
            { "id": "dotnet-q13-c", "text": "Automatically generate documentation." },
            { "id": "dotnet-q13-d", "text": "Manage database connection strings securely." }
          ],
          "correctOptionId": "dotnet-q13-b",
          "explanation": "DI is a technique where an object receives its dependencies (other objects it needs to work with) from an external source rather than creating them itself. This reduces coupling and improves modularity, testability, and maintainability."
        },
        {
          "id": "dotnet-q14",
          "question": "What was the main goal behind the creation of .NET Standard?",
          "options": [
            { "id": "dotnet-q14-a", "text": "To replace .NET Framework with a cross-platform version." },
            { "id": "dotnet-q14-b", "text": "To provide a formal specification of .NET APIs intended to be available on all .NET implementations." },
            { "id": "dotnet-q14-c", "text": "To define the syntax for the C# language." },
            { "id": "dotnet-q14-d", "text": "To create a runtime specifically for mobile development (Xamarin)." }
          ],
          "correctOptionId": "dotnet-q14-b",
          "explanation": ".NET Standard is a specification of APIs that all .NET platforms (like .NET Framework, .NET Core/5+, Xamarin) must implement. Targeting .NET Standard allows libraries to be used across different .NET runtimes."
        },
        {
          "id": "dotnet-q15",
          "question": "What is the Global Assembly Cache (GAC)?",
          "options": [
            { "id": "dotnet-q15-a", "text": "A local cache for NuGet packages." },
            { "id": "dotnet-q15-b", "text": "A machine-wide code cache that stores assemblies specifically designated to be shared by several applications on the computer." },
            { "id": "dotnet-q15-c", "text": "A temporary storage location used during compilation." },
            { "id": "dotnet-q15-d", "text": "A tool for analyzing code performance." }
          ],
          "correctOptionId": "dotnet-q15-b",
          "explanation": "The GAC is a central repository on a machine where signed assemblies can be installed to be shared across multiple applications, primarily used in .NET Framework (less common in .NET Core/5+)."
        },
        {
          "id": "aspnet-q16",
          "question": "In ASP.NET Core MVC, what is the primary responsibility of the Controller?",
          "options": [
            { "id": "aspnet-q16-a", "text": "To define the data structure and business logic (Model)." },
            { "id": "aspnet-q16-b", "text": "To render the user interface (View)." },
            { "id": "aspnet-q16-c", "text": "To handle incoming requests, interact with the Model, and select a View to return." },
            { "id": "aspnet-q16-d", "text": "To manage client-side scripting." }
          ],
          "correctOptionId": "aspnet-q16-c",
          "explanation": "Controllers act as the intermediary between the user (request), the data (Model), and the presentation layer (View). They process input, interact with the model, and choose the appropriate view to render."
        },
        {
          "id": "aspnet-q17",
          "question": "Which technology allows for real-time, bi-directional communication between server and client, often used for chat applications or live updates?",
          "options": [
            { "id": "aspnet-q17-a", "text": "Razor Pages" },
            { "id": "aspnet-q17-b", "text": "Entity Framework Core" },
            { "id": "aspnet-q17-c", "text": "SignalR" },
            { "id": "aspnet-q17-d", "text": "Blazor WebAssembly" }
          ],
          "correctOptionId": "aspnet-q17-c",
          "explanation": "SignalR is an ASP.NET Core library that simplifies adding real-time web functionality to applications, enabling server-side code to push content to connected clients instantly."
        },
        {
          "id": "aspnet-q18",
          "question": "What is the primary function of IApplicationBuilder in the Startup.cs (or Program.cs in minimal APIs) of an ASP.NET Core application?",
          "options": [
            { "id": "aspnet-q18-a", "text": "To configure services for Dependency Injection." },
            { "id": "aspnet-q18-b", "text": "To define the HTTP request processing pipeline by configuring middleware." },
            { "id": "aspnet-q18-c", "text": "To set up application configuration sources (like appsettings.json)." },
            { "id": "aspnet-q18-d", "text": "To register available controllers." }
          ],
          "correctOptionId": "aspnet-q18-b",
          "explanation": "The IApplicationBuilder interface is used within the Configure method to specify how the application will respond to HTTP requests by adding and configuring middleware components."
        },
        {
          "id": "aspnet-q19",
          "question": "Which ASP.NET Core feature allows building interactive client-side web UIs with .NET, running C# code directly in the browser via WebAssembly or on the server?",
          "options": [
            { "id": "aspnet-q19-a", "text": "MVC" },
            { "id": "aspnet-q19-b", "text": "Web API" },
            { "id": "aspnet-q19-c", "text": "Razor Pages" },
            { "id": "aspnet-q19-d", "text": "Blazor" }
          ],
          "correctOptionId": "aspnet-q19-d",
          "explanation": "Blazor allows developers to build interactive web UIs using C# instead of JavaScript. It has two hosting models: Blazor Server (runs on the server, communicates via SignalR) and Blazor WebAssembly (runs C# directly in the browser)."
        },
        {
          "id": "testing-q20",
          "question": "In the SOLID principles of object-oriented design, what does the 'L' stand for?",
          "options": [
            { "id": "testing-q20-a", "text": "Layered Architecture Principle" },
            { "id": "testing-q20-b", "text": "Liskov Substitution Principle" },
            { "id": "testing-q20-c", "text": "Loose Coupling Principle" },
            { "id": "testing-q20-d", "text": "Logging and Instrumentation Principle" }
          ],
          "correctOptionId": "testing-q20-b",
          "explanation": "The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program."
        },
        {
          "id": "testing-q21",
          "question": "What is the primary goal of Unit Testing?",
          "options": [
            { "id": "testing-q21-a", "text": "To test the integration between multiple system components." },
            { "id": "testing-q21-b", "text": "To verify that individual, isolated units of source code (like methods) work correctly." },
            { "id": "testing-q21-c", "text": "To perform user acceptance testing in a production-like environment." },
            { "id": "testing-q21-d", "text": "To check the application's performance under load." }
          ],
          "correctOptionId": "testing-q21-b",
          "explanation": "Unit tests focus on testing the smallest testable parts of an application (units) in isolation to ensure they behave as expected."
        },
        {
          "id": "testing-q22",
          "question": "What is the purpose of using a Mocking framework (like Moq or NSubstitute) in .NET unit testing?",
          "options": [
            { "id": "testing-q22-a", "text": "To generate test data automatically." },
            { "id": "testing-q22-b", "text": "To simulate the behavior of dependencies (like database access or external services) in isolation." },
            { "id": "testing-q22-c", "text": "To measure code coverage during tests." },
            { "id": "testing-q22-d", "text": "To deploy the application to a test environment." }
          ],
          "correctOptionId": "testing-q22-b",
          "explanation": "Mocking frameworks allow you to create 'mock' or 'fake' objects that mimic the behavior of real dependencies, enabling you to test a unit of code without relying on its actual dependencies."
        },
        {
          "id": "testing-q23",
          "question": "Which pattern is often used in .NET applications to abstract the data access layer, making it easier to manage data operations and switch underlying data sources?",
          "options": [
            { "id": "testing-q23-a", "text": "Singleton Pattern" },
            { "id": "testing-q23-b", "text": "Factory Pattern" },
            { "id": "testing-q23-c", "text": "Observer Pattern" },
            { "id": "testing-q23-d", "text": "Repository Pattern" }
          ],
          "correctOptionId": "testing-q23-d",
          "explanation": "The Repository pattern mediates between the domain and data mapping layers, acting like an in-memory collection of domain objects, abstracting the details of data storage and retrieval."
        }
      ]
    }
  ]
}