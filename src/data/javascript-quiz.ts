import { QuizSectionData } from "@/models/QuizTypes";

export const javascriptQuiz: QuizSectionData ={
  "id": "javascript-quiz",
  "title": "JavaScript Concepts",
  "description": "Test your knowledge of various JavaScript topics from fundamentals to advanced concepts.",
  "quizzes": [
    {
      "id": "js-fundamentals",
      "title": "Fundamentals (Hoisting, Scope, Variables, Strict Mode, Data Types, Literals, Eval)",
      "description": "Questions covering the basic building blocks of JavaScript.",
      "questions": [
        {
          "id": "js-q1",
          "question": "What is the result of `console.log(x)` before `var x = 10;` in JavaScript?",
          "options": [
            { "id": "js-q1-a", "text": "`10`" },
            { "id": "js-q1-b", "text": "`ReferenceError`" },
            { "id": "js-q1-c", "text": "`undefined`" },
            { "id": "js-q1-d", "text": "`null`" }
          ],
          "correctOptionId": "js-q1-c",
          "explanation": "Due to hoisting, `var x` declarations are moved to the top of their scope, but the initialization (`= 10`) stays in place. So, `x` is declared but hasn't been assigned a value yet, resulting in `undefined`."
        },
        {
          "id": "js-q2",
          "question": "What is the result of `console.log(y)` before `let y = 10;` in JavaScript?",
          "options": [
            { "id": "js-q2-a", "text": "`10`" },
            { "id": "js-q2-b", "text": "`ReferenceError` (due to Temporal Dead Zone)" },
            { "id": "js-q2-c", "text": "`undefined`" },
            { "id": "js-q2-d", "text": "`null`" }
          ],
          "correctOptionId": "js-q2-b",
          "explanation": "`let` and `const` declarations are hoisted but not initialized. Accessing them before the declaration line results in a `ReferenceError` because they are in the Temporal Dead Zone (TDZ)."
        },
        {
          "id": "js-q3",
          "question": "Which variable declaration keyword(s) are block-scoped?",
          "options": [
            { "id": "js-q3-a", "text": "`var` only" },
            { "id": "js-q3-b", "text": "`let` and `const`" },
            { "id": "js-q3-c", "text": "`var` and `let`" },
            { "id": "js-q3-d", "text": "`const` only" }
          ],
          "correctOptionId": "js-q3-b",
          "explanation": "`let` and `const` introduce block scope, meaning the variable is only accessible within the block (e.g., inside `{}` like in an `if` statement or loop) where it's defined. `var` is function-scoped or globally scoped."
        },
        {
          "id": "js-q4",
          "question": "Which statement about `const` is true?",
          "options": [
            { "id": "js-q4-a", "text": "Variables declared with `const` can be reassigned but not re-declared." },
            { "id": "js-q4-b", "text": "Variables declared with `const` must be initialized at declaration and cannot be reassigned." },
            { "id": "js-q4-c", "text": "`const` creates function-scoped variables." },
            { "id": "js-q4-d", "text": "`const` variables are hoisted and initialized to `undefined`." }
          ],
          "correctOptionId": "js-q4-b",
          "explanation": "`const` declares block-scoped variables that must be initialized and whose binding cannot be reassigned. Note that for objects/arrays declared with `const`, the contents can still be mutated."
        },
        {
          "id": "js-q5",
          "question": "How do you enable Strict Mode for an entire script?",
          "options": [
            { "id": "js-q5-a", "text": "Add `use strict;` at the beginning of the script." },
            { "id": "js-q5-b", "text": "Add `'use strict';` at the beginning of the script." },
            { "id": "js-q5-c", "text": "Add `strict = true;` at the beginning of the script." },
            { "id": "js-q5-d", "text": "Strict Mode is enabled by default in modern browsers." }
          ],
          "correctOptionId": "js-q5-b",
          "explanation": "To enable strict mode for an entire script, the exact string literal `'use strict';` (or `\"use strict\";`) must appear before any other statements in the script."
        },
        {
          "id": "js-q6",
          "question": "What does Strict Mode prevent?",
          "options": [
            { "id": "js-q6-a", "text": "Using `let` and `const`." },
            { "id": "js-q6-b", "text": "Using arrow functions." },
            { "id": "js-q6-c", "text": "Accidentally creating global variables by assigning to undeclared variables." },
            { "id": "js-q6-d", "text": "Using `try...catch` blocks." }
          ],
          "correctOptionId": "js-q6-c",
          "explanation": "Strict mode changes certain JavaScript semantics, making some silent errors throw exceptions (like assigning to undeclared variables) and prohibiting syntax likely to be defined in future ECMAScript versions."
        },
        {
          "id": "js-q7",
          "question": "Which of the following is NOT a primitive data type in JavaScript?",
          "options": [
            { "id": "js-q7-a", "text": "`string`" },
            { "id": "js-q7-b", "text": "`number`" },
            { "id": "js-q7-c", "text": "`object`" },
            { "id": "js-q7-d", "text": "`boolean`" }
          ],
          "correctOptionId": "js-q7-c",
          "explanation": "JavaScript has several primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`. `object` is a complex data type."
        },
        {
          "id": "js-q8",
          "question": "What is the result of `typeof null`?",
          "options": [
            { "id": "js-q8-a", "text": "`\"null\"`" },
            { "id": "js-q8-b", "text": "`\"undefined\"`" },
            { "id": "js-q8-c", "text": "`\"object\"`" },
            { "id": "js-q8-d", "text": "`\"NaN\"`" }
          ],
          "correctOptionId": "js-q8-c",
          "explanation": "This is a well-known quirk in JavaScript. Due to historical reasons, `typeof null` returns `'object'`, even though `null` represents the intentional absence of any object value and is considered a primitive."
        },
        {
          "id": "js-q9",
          "question": "What is the result of `typeof function(){}`?",
          "options": [
            { "id": "js-q9-a", "text": "`\"object\"`" },
            { "id": "js-q9-b", "text": "`\"function\"`" },
            { "id": "js-q9-c", "text": "`\"undefined\"`" },
            { "id": "js-q9-d", "text": "`\"syntaxError\"`" }
          ],
          "correctOptionId": "js-q9-b",
          "explanation": "The `typeof` operator returns `'function'` for functions. Although functions are technically objects in JavaScript, `typeof` has a specific return value for them."
        },
        {
          "id": "js-q10",
          "question": "What is the primary advantage of using `Map` over a plain JavaScript `Object` for key-value pairs?",
          "options": [
            { "id": "js-q10-a", "text": "`Map` keys can be any data type (including objects), while `Object` keys are typically strings (or Symbols)." },
            { "id": "js-q10-b", "text": "`Map` has a built-in `length` property, while `Object` does not." },
            { "id": "js-q10-c", "text": "`Map` insertion order is not guaranteed." },
            { "id": "js-q10-d", "text": "`Map` cannot store functions as values." }
          ],
          "correctOptionId": "js-q10-a",
          "explanation": "`Map` allows keys of any type and maintains insertion order. Plain objects convert keys to strings (except Symbols) and don't guarantee order (though modern engines often preserve it)."
        },
        {
          "id": "js-q11",
          "question": "What is the primary characteristic of a `Set`?",
          "options": [
            { "id": "js-q11-a", "text": "It stores key-value pairs like `Map`." },
            { "id": "js-q11-b", "text": "It stores only unique values of any type." },
            { "id": "js-q11-c", "text": "It is an ordered list like an Array." },
            { "id": "js-q11-d", "text": "It can only store primitive data types." }
          ],
          "correctOptionId": "js-q11-b",
          "explanation": "`Set` objects are collections of values where each value must be unique. It can store any type of value, primitive or object."
        },
        {
          "id": "js-q12",
          "question": "When would you typically choose a `Set` over an `Array`?",
          "options": [
            { "id": "js-q12-a", "text": "When you need to store key-value pairs." },
            { "id": "js-q12-b", "text": "When you need efficient checking for the existence of an item and ensure uniqueness." },
            { "id": "js-q12-c", "text": "When you need to access elements by index frequently." },
            { "id": "js-q12-d", "text": "When you need methods like `push` and `pop`." }
          ],
          "correctOptionId": "js-q12-b",
          "explanation": "`Set` provides optimized methods (like `has()`) for checking if an element exists and automatically handles uniqueness, making it ideal for these scenarios compared to iterating through an `Array`."
        },
        {
          "id": "js-q13",
          "question": "What is the primary reason `eval()` is generally discouraged in JavaScript?",
          "options": [
            { "id": "js-q13-a", "text": "It only works in Strict Mode." },
            { "id": "js-q13-b", "text": "It can execute arbitrary code, posing a security risk, and often performs poorly." },
            { "id": "js-q13-c", "text": "It cannot access variables outside its own scope." },
            { "id": "js-q13-d", "text": "It has been deprecated in modern JavaScript." }
          ],
          "correctOptionId": "js-q13-b",
          "explanation": "`eval()` executes a string as JavaScript code, which is a major security concern if the string comes from an untrusted source. It also hinders JavaScript engine optimizations, leading to slower performance."
        },
        {
          "id": "js-q14",
          "question": "What is the purpose of Template Literals (using backticks `` ` ``)?",
          "options": [
            { "id": "js-q14-a", "text": "To define regular expressions." },
            { "id": "js-q14-b", "text": "To allow embedded expressions (interpolation) and multi-line strings easily." },
            { "id": "js-q14-c", "text": "To create HTML templates for web components." },
            { "id": "js-q14-d", "text": "To enforce Strict Mode within a block." }
          ],
          "correctOptionId": "js-q14-b",
          "explanation": "Template literals provide syntax for string interpolation (`${expression}`) and allow strings to span multiple lines without needing special characters like `\\n`."
        },
        {
          "id": "js-q15",
          "question": "What is an IIFE (Immediately Invoked Function Expression)?",
          "options": [
            { "id": "js-q15-a", "text": "A function that is declared but never called." },
            { "id": "js-q15-b", "text": "A function that is defined and executed immediately after creation." },
            { "id": "js-q15-c", "text": "A function used exclusively for event listeners." },
            { "id": "js-q15-d", "text": "An alias for an arrow function." }
          ],
          "correctOptionId": "js-q15-b",
          "explanation": "An IIFE is a common pattern where a function expression is created and then immediately called, often used to create a private scope."
        },
        {
          "id": "js-q16",
          "question": "What is a primary benefit of using IIFEs?",
          "options": [
            { "id": "js-q16-a", "text": "To improve performance significantly over regular functions." },
            { "id": "js-q16-b", "text": "To create private scopes and avoid polluting the global namespace." },
            { "id": "js-q16-c", "text": "To enable `async`/`await` syntax." },
            { "id": "js-q16-d", "text": "To automatically handle errors." }
          ],
          "correctOptionId": "js-q16-b",
          "explanation": "Variables declared inside an IIFE are not accessible from the outside global scope, helping to prevent naming conflicts and keep the global namespace clean."
        },
        {
          "id": "js-q17",
          "question": "Which data type would `Symbol()` create?",
          "options": [
            { "id": "js-q17-a", "text": "`string`" },
            { "id": "js-q17-b", "text": "`object`" },
            { "id": "js-q17-c", "text": "`symbol`" },
            { "id": "js-q17-d", "text": "`number`" }
          ],
          "correctOptionId": "js-q17-c",
          "explanation": "The `Symbol()` function returns a value of type `symbol`, which is guaranteed to be unique and is often used as object property keys."
        },
        {
          "id": "js-q18",
          "question": "What is the result of `console.log(z)` after the following code: `function test() { var z = 5; } test();`?",
          "options": [
            { "id": "js-q18-a", "text": "`5`" },
            { "id": "js-q18-b", "text": "`undefined`" },
            { "id": "js-q18-c", "text": "`ReferenceError`" },
            { "id": "js-q18-d", "text": "`null`" }
          ],
          "correctOptionId": "js-q18-c",
          "explanation": "The variable `z` is declared with `var` inside the `test` function, making it function-scoped. It is not accessible in the global scope outside the function, leading to a `ReferenceError`."
        }
      ]
    },
    {
      "id": "js-functions",
      "title": "Functions (Regular vs Arrow, Arguments, `this`, Call/Bind/Apply, Currying, Generators, Pure)",
      "description": "Questions focusing on different types of functions and function-related concepts.",
      "questions": [
        {
          "id": "js-q19",
          "question": "What is a key difference between regular functions and arrow functions regarding the `this` keyword?",
          "options": [
            { "id": "js-q19-a", "text": "Arrow functions have their own `this` binding depending on how they are called." },
            { "id": "js-q19-b", "text": "Regular functions lexically inherit `this` from their surrounding scope." },
            { "id": "js-q19-c", "text": "Arrow functions lexically inherit `this` from their surrounding scope; regular functions have their own `this`." },
            { "id": "js-q19-d", "text": "Neither type of function uses the `this` keyword." }
          ],
          "correctOptionId": "js-q19-c",
          "explanation": "Regular functions get their `this` value based on how they are called (e.g., object method, direct call, constructor). Arrow functions do not have their own `this`; they capture the `this` value from their enclosing lexical context."
        },
        {
          "id": "js-q20",
          "question": "Can you use the `new` keyword to instantiate an arrow function?",
          "options": [
            { "id": "js-q20-a", "text": "Yes, just like regular functions." },
            { "id": "js-q20-b", "text": "No, arrow functions cannot be used as constructors." },
            { "id": "js-q20-c", "text": "Only if the arrow function returns an object." },
            { "id": "js-q20-d", "text": "Only in non-strict mode." }
          ],
          "correctOptionId": "js-q20-b",
          "explanation": "Arrow functions lack their own `this` binding and do not have a `prototype` property, making them unsuitable for use as constructors with the `new` keyword. Attempting to do so will result in a TypeError."
        },
        {
          "id": "js-q21",
          "question": "What is the `arguments` object in JavaScript functions?",
          "options": [
            { "id": "js-q21-a", "text": "An array containing all the parameters passed to the function." },
            { "id": "js-q21-b", "text": "An array-like object available inside regular functions containing all arguments passed." },
            { "id": "js-q21-c", "text": "An object available only in arrow functions." },
            { "id": "js-q21-d", "text": "A reserved keyword that cannot be used." }
          ],
          "correctOptionId": "js-q21-b",
          "explanation": "The `arguments` object is available within regular functions and provides access to all arguments passed to the function, regardless of the number of parameters defined. It's array-like but not a true array."
        },
        {
          "id": "js-q22",
          "question": "Is the `arguments` object available inside arrow functions?",
          "options": [
            { "id": "js-q22-a", "text": "Yes, it works the same as in regular functions." },
            { "id": "js-q22-b", "text": "No, arrow functions do not have their own `arguments` object." },
            { "id": "js-q22-c", "text": "Yes, but it only contains named parameters." },
            { "id": "js-q22-d", "text": "Only if the arrow function uses the rest parameter (`...args`)." }
          ],
          "correctOptionId": "js-q22-b",
          "explanation": "Arrow functions do not have their own `arguments` binding. If you need access to all arguments within an arrow function, you should use rest parameters (`...args`)."
        },
        {
          "id": "js-q23",
          "question": "In the context of an object method `obj.myMethod()`, what does `this` refer to inside `myMethod` if it's a regular function?",
          "options": [
            { "id": "js-q23-a", "text": "The global object (`window` or `global`)." },
            { "id": "js-q23-b", "text": "The `obj` object." },
            { "id": "js-q23-c", "text": "`undefined` (in strict mode)." },
            { "id": "js-q23-d", "text": "The function's prototype." }
          ],
          "correctOptionId": "js-q23-b",
          "explanation": "When a regular function is called as a method of an object, its `this` value is set to the object the method is called on (the object before the dot)."
        },
        {
          "id": "js-q24",
          "question": "How does `call()` differ from `apply()` when setting the `this` value for a function?",
          "options": [
            { "id": "js-q24-a", "text": "`call()` passes arguments as an array, `apply()` passes them individually." },
            { "id": "js-q24-b", "text": "`apply()` passes arguments as an array, `call()` passes them individually." },
            { "id": "js-q24-c", "text": "`call()` cannot set the `this` value, only `apply()` can." },
            { "id": "js-q24-d", "text": "They are identical in function and syntax." }
          ],
          "correctOptionId": "js-q24-b",
          "explanation": "Both `call()` and `apply()` allow you to invoke a function with a specified `this` context. The difference lies in how subsequent arguments are passed: `call()` takes arguments one by one, while `apply()` takes arguments as an array (or array-like object)."
        },
        {
          "id": "js-q25",
          "question": "What does the `bind()` method do?",
          "options": [
            { "id": "js-q25-a", "text": "Immediately calls the function with a specified `this` value and arguments." },
            { "id": "js-q25-b", "text": "Creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called." },
            { "id": "js-q25-c", "text": "Attaches an event listener to an element." },
            { "id": "js-q25-d", "text": "Merges two functions together." }
          ],
          "correctOptionId": "js-q25-b",
          "explanation": "`bind()` creates a *new* function (a bound function) with a permanently set `this` value and optionally pre-set initial arguments. It doesn't call the original function immediately."
        },
        {
          "id": "js-q26",
          "question": "What defines a \"Pure Function\"?",
          "options": [
            { "id": "js-q26-a", "text": "A function that performs I/O operations." },
            { "id": "js-q26-b", "text": "A function that modifies variables outside its own scope (causes side effects)." },
            { "id": "js-q26-c", "text": "A function that always returns the same output for the same input and has no side effects." },
            { "id": "js-q26-d", "text": "A function that does not accept any arguments." }
          ],
          "correctOptionId": "js-q26-c",
          "explanation": "Pure functions are deterministic (same input yields same output) and have no observable side effects (like modifying external state, logging to console, making network requests)."
        },
        {
          "id": "js-q27",
          "question": "What is Currying in JavaScript?",
          "options": [
            { "id": "js-q27-a", "text": "Combining multiple functions into one." },
            { "id": "js-q27-b", "text": "The technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument." },
            { "id": "js-q27-c", "text": "Automatically caching the results of a function." },
            { "id": "js-q27-d", "text": "A way to handle asynchronous operations." }
          ],
          "correctOptionId": "js-q27-b",
          "explanation": "Currying breaks down a function accepting multiple arguments into a chain of functions each accepting a single argument, returning a new function until all arguments are supplied."
        },
        {
          "id": "js-q28",
          "question": "How is a Generator Function declared in JavaScript?",
          "options": [
            { "id": "js-q28-a", "text": "Using the `generator` keyword." },
            { "id": "js-q28-b", "text": "Using the `async` keyword." },
            { "id": "js-q28-c", "text": "Using `function* functionName()`." },
            { "id": "js-q28-d", "text": "By returning an iterator object." }
          ],
          "correctOptionId": "js-q28-c",
          "explanation": "Generator functions are defined using the `function*` syntax (an asterisk after the `function` keyword)."
        },
        {
          "id": "js-q29",
          "question": "What keyword is used inside a Generator Function to pause execution and return a value?",
          "options": [
            { "id": "js-q29-a", "text": "`return`" },
            { "id": "js-q29-b", "text": "`await`" },
            { "id": "js-q29-c", "text": "`pause`" },
            { "id": "js-q29-d", "text": "`yield`" }
          ],
          "correctOptionId": "js-q29-d",
          "explanation": "The `yield` keyword pauses the generator function's execution and returns the specified value to the caller. Execution resumes from that point when the generator's `next()` method is called again."
        },
        {
          "id": "js-q30",
          "question": "What does the `next()` method return when called on a generator object?",
          "options": [
            { "id": "js-q30-a", "text": "Just the yielded value." },
            { "id": "js-q30-b", "text": "An object with `value` and `done` properties." },
            { "id": "js-q30-c", "text": "`true` or `false`." },
            { "id": "js-q30-d", "text": "The generator function itself." }
          ],
          "correctOptionId": "js-q30-b",
          "explanation": "Calling `next()` on a generator's iterator returns an object like `{ value: yieldedValue, done: false }` until the generator finishes, at which point it returns `{ value: returnValue, done: true }`."
        },
        {
          "id": "js-q31",
          "question": "In non-strict mode, if a regular function is called directly (e.g., `myFunc()`), what does `this` typically refer to?",
          "options": [
            { "id": "js-q31-a", "text": "The function itself." },
            { "id": "js-q31-b", "text": "`undefined`." },
            { "id": "js-q31-c", "text": "The global object (`window` in browsers)." },
            { "id": "js-q31-d", "text": "`null`." }
          ],
          "correctOptionId": "js-q31-c",
          "explanation": "In non-strict mode, direct function calls (not as methods or with `new`) result in `this` being bound to the global object (`window` in browsers, `global` in Node.js)."
        },
        {
          "id": "js-q32",
          "question": "In strict mode, if a regular function is called directly (e.g., `myFunc()`), what is the value of `this`?",
          "options": [
            { "id": "js-q32-a", "text": "The function itself." },
            { "id": "js-q32-b", "text": "`undefined`." },
            { "id": "js-q32-c", "text": "The global object (`window` in browsers)." },
            { "id": "js-q32-d", "text": "`null`." }
          ],
          "correctOptionId": "js-q32-b",
          "explanation": "Strict mode changes the default binding for direct function calls. Instead of defaulting to the global object, `this` is set to `undefined`."
        },
        {
          "id": "js-q33",
          "question": "Which method (`call`, `bind`, or `apply`) is most suitable for calling a function with an unknown number of arguments provided as an array?",
          "options": [
            { "id": "js-q33-a", "text": "`call`" },
            { "id": "js-q33-b", "text": "`bind`" },
            { "id": "js-q33-c", "text": "`apply`" },
            { "id": "js-q33-d", "text": "None of the above." }
          ],
          "correctOptionId": "js-q33-c",
          "explanation": "`apply()` accepts the arguments to be passed to the function as a single array, making it ideal when the arguments are already in an array or are dynamic."
        },
        {
          "id": "js-q34",
          "question": "Consider `const greet = name => \"Hello \" + name;`. What is the value of `this` inside `greet`?",
          "options": [
            { "id": "js-q34-a", "text": "The global object." },
            { "id": "js-q34-b", "text": "`undefined`." },
            { "id": "js-q34-c", "text": "Determined by how `greet` is called." },
            { "id": "js-q34-d", "text": "Inherited lexically from the scope where `greet` was defined." }
          ],
          "correctOptionId": "js-q34-d",
          "explanation": "Arrow functions capture the `this` value from their surrounding lexical scope at the time they are created. They do not have their own `this` binding."
        },
        {
          "id": "js-q35",
          "question": "What is a potential benefit of using pure functions?",
          "options": [
            { "id": "js-q35-a", "text": "They are easier to reason about, test, and memoize." },
            { "id": "js-q35-b", "text": "They allow direct manipulation of the DOM." },
            { "id": "js-q35-c", "text": "They inherently handle asynchronous operations better." },
            { "id": "js-q35-d", "text": "They have privileged access to browser APIs." }
          ],
          "correctOptionId": "js-q35-a",
          "explanation": "Because pure functions are deterministic and have no side effects, they are predictable, easy to unit test (no complex setup needed), and their results can be cached (memoization) reliably."
        }
      ]
    },
    {
      "id": "js-dom-events",
      "title": "DOM & Events (Listeners, Propagation, Delegation, Manipulation)",
      "description": "Questions about interacting with the Document Object Model and handling browser events.",
      "questions": [
        {
          "id": "js-q36",
          "question": "Which method is commonly used to attach an event handler to a DOM element?",
          "options": [
            { "id": "js-q36-a", "text": "`element.attachEvent(eventName, handler)`" },
            { "id": "js-q36-b", "text": "`element.addEventListener(eventName, handler)`" },
            { "id": "js-q36-c", "text": "`element.on(eventName, handler)`" },
            { "id": "js-q36-d", "text": "`element.setEvent(eventName, handler)`" }
          ],
          "correctOptionId": "js-q36-b",
          "explanation": "`addEventListener` is the standard and most flexible way to register an event handler. `attachEvent` was an older IE-specific method. `on` is common in libraries like jQuery but not a native DOM method."
        },
        {
          "id": "js-q37",
          "question": "What are the two main phases of event propagation in the DOM?",
          "options": [
            { "id": "js-q37-a", "text": "Start and End" },
            { "id": "js-q37-b", "text": "Async and Sync" },
            { "id": "js-q37-c", "text": "Capturing and Bubbling" },
            { "id": "js-q37-d", "text": "Request and Response" }
          ],
          "correctOptionId": "js-q37-c",
          "explanation": "DOM events typically travel down the DOM tree from the window to the target (capturing phase) and then back up from the target to the window (bubbling phase)."
        },
        {
          "id": "js-q38",
          "question": "By default, how do most browser events propagate?",
          "options": [
            { "id": "js-q38-a", "text": "Capturing phase only." },
            { "id": "js-q38-b", "text": "Bubbling phase only." },
            { "id": "js-q38-c", "text": "First capturing, then bubbling." },
            { "id": "js-q38-d", "text": "Neither, they only trigger on the target element." }
          ],
          "correctOptionId": "js-q38-c",
          "explanation": "The standard event flow involves both phases: capturing down to the target, then bubbling back up. Event listeners can choose which phase to listen on (default is bubbling)."
        },
        {
          "id": "js-q39",
          "question": "What does `event.stopPropagation()` do?",
          "options": [
            { "id": "js-q39-a", "text": "Prevents the default action of the event (e.g., form submission)." },
            { "id": "js-q39-b", "text": "Stops the event from propagating further up or down the DOM tree." },
            { "id": "js-q39-c", "text": "Removes the event listener." },
            { "id": "js-q39-d", "text": "Triggers the event immediately." }
          ],
          "correctOptionId": "js-q39-b",
          "explanation": "`stopPropagation` prevents the event from continuing its journey through the capturing or bubbling phases to ancestor or descendant elements."
        },
        {
          "id": "js-q40",
          "question": "What is Event Delegation?",
          "options": [
            { "id": "js-q40-a", "text": "Attaching a separate event listener to every child element." },
            { "id": "js-q40-b", "text": "Attaching a single event listener to a common ancestor element to manage events for multiple descendant elements." },
            { "id": "js-q40-c", "text": "Passing event handling logic to a web worker." },
            { "id": "js-q40-d", "text": "Delaying event handling using `setTimeout`." }
          ],
          "correctOptionId": "js-q40-b",
          "explanation": "Event delegation leverages event bubbling. By listening on a parent, you can check the `event.target` to determine which child element originated the event, reducing the number of listeners needed."
        },
        {
          "id": "js-q41",
          "question": "Which DOM manipulation method is generally safer and often preferred over `innerHTML` to prevent XSS attacks when inserting text content?",
          "options": [
            { "id": "js-q41-a", "text": "`outerHTML`" },
            { "id": "js-q41-b", "text": "`textContent`" },
            { "id": "js-q41-c", "text": "`innerText`" },
            { "id": "js-q41-d", "text": "`appendChild` with a text node" }
          ],
          "correctOptionId": "js-q41-b",
          "explanation": "`textContent` treats the assigned string purely as text, automatically escaping any HTML characters. `innerHTML` parses the string as HTML, which can execute embedded scripts if the content isn't properly sanitized."
        },
        {
          "id": "js-q42",
          "question": "How can you select an element with the ID `myElement` using DOM methods?",
          "options": [
            { "id": "js-q42-a", "text": "`document.select(\"#myElement\")`" },
            { "id": "js-q42-b", "text": "`document.getElement(\"myElement\")`" },
            { "id": "js-q42-c", "text": "`document.getElementById(\"myElement\")`" },
            { "id": "js-q42-d", "text": "`document.querySelector(\"myElement\")`" }
          ],
          "correctOptionId": "js-q42-c",
          "explanation": "`getElementById` is the specific and usually most efficient method for selecting an element by its unique ID."
        },
        {
          "id": "js-q43",
          "question": "How can you select the first element matching the CSS selector `.myClass`?",
          "options": [
            { "id": "js-q43-a", "text": "`document.getElementByClassName(\"myClass\")[0]`" },
            { "id": "js-q43-b", "text": "`document.querySelectorAll(\".myClass\")[0]`" },
            { "id": "js-q43-c", "text": "`document.querySelector(\".myClass\")`" },
            { "id": "js-q43-d", "text": "Both b and c are valid ways." }
          ],
          "correctOptionId": "js-q43-d",
          "explanation": "`querySelector` directly returns the first matching element. `querySelectorAll` returns a NodeList of all matches, and accessing the element at index `[0]` gives the first one. `getElementByClassName` also returns a collection."
        },
        {
          "id": "js-q44",
          "question": "Which method creates a new DOM element?",
          "options": [
            { "id": "js-q44-a", "text": "`document.createElement(tagName)`" },
            { "id": "js-q44-b", "text": "`document.buildElement(tagName)`" },
            { "id": "js-q44-c", "text": "`document.newElement(tagName)`" },
            { "id": "js-q44-d", "text": "`document.makeElement(tagName)`" }
          ],
          "correctOptionId": "js-q44-a",
          "explanation": "`document.createElement()` is the standard DOM method for creating a new element specified by its tag name (e.g., 'div', 'p', 'span')."
        },
        {
          "id": "js-q45",
          "question": "What does `event.preventDefault()` typically do?",
          "options": [
            { "id": "js-q45-a", "text": "Stops event propagation." },
            { "id": "js-q45-b", "text": "Removes the element from the DOM." },
            { "id": "js-q45-c", "text": "Cancels the browser's default action for that event (e.g., prevents a link from navigating)." },
            { "id": "js-q45-d", "text": "Hides the element that triggered the event." }
          ],
          "correctOptionId": "js-q45-c",
          "explanation": "`preventDefault` tells the browser not to perform the default behavior associated with the event, such as submitting a form when a submit button is clicked or following a link when an anchor tag is clicked."
        }
      ]
    },
    {
      "id": "js-async",
      "title": "Asynchronous JavaScript (Callbacks, Promises, Async/Await)",
      "description": "Questions covering techniques for handling asynchronous operations.",
      "questions": [
        {
          "id": "js-q46",
          "question": "What is \"Callback Hell\"?",
          "options": [
            { "id": "js-q46-a", "text": "A situation where callbacks are nested multiple levels deep, making code hard to read and maintain." },
            { "id": "js-q46-b", "text": "When a callback function throws an error." },
            { "id": "js-q46-c", "text": "Using callbacks instead of Promises." },
            { "id": "js-q46-d", "text": "A callback function that never returns." }
          ],
          "correctOptionId": "js-q46-a",
          "explanation": "Callback hell (or the 'pyramid of doom') refers to the difficulty in reading and managing code with deeply nested asynchronous callbacks, often leading to complex error handling and control flow."
        },
        {
          "id": "js-q47",
          "question": "What is a Promise in JavaScript?",
          "options": [
            { "id": "js-q47-a", "text": "A guarantee that a function will execute within a certain time." },
            { "id": "js-q47-b", "text": "An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value." },
            { "id": "js-q47-c", "text": "A type of synchronous function." },
            { "id": "js-q47-d", "text": "An alias for the `setTimeout` function." }
          ],
          "correctOptionId": "js-q47-b",
          "explanation": "Promises provide a cleaner way to handle asynchronous operations compared to callbacks, representing a value that may be available now, or in the future, or never (if it fails)."
        },
        {
          "id": "js-q48",
          "question": "What are the three states of a Promise?",
          "options": [
            { "id": "js-q48-a", "text": "`pending`, `resolved`, `rejected`" },
            { "id": "js-q48-b", "text": "`pending`, `fulfilled`, `rejected`" },
            { "id": "js-q48-c", "text": "`waiting`, `complete`, `failed`" },
            { "id": "js-q48-d", "text": "`initial`, `running`, `finished`" }
          ],
          "correctOptionId": "js-q48-b",
          "explanation": "A Promise starts in the `pending` state. It can then transition to either the `fulfilled` state (representing successful completion) or the `rejected` state (representing failure)."
        },
        {
          "id": "js-q49",
          "question": "Which method is used to handle the successful fulfillment of a Promise?",
          "options": [
            { "id": "js-q49-a", "text": "`.catch()`" },
            { "id": "js-q49-b", "text": "`.finally()`" },
            { "id": "js-q49-c", "text": "`.then()`" },
            { "id": "js-q49-d", "text": "`.resolve()`" }
          ],
          "correctOptionId": "js-q49-c",
          "explanation": "The `.then()` method takes one or two arguments: a callback function for the fulfillment case and an optional callback function for the rejection case."
        },
        {
          "id": "js-q50",
          "question": "Which method is used to handle the rejection (failure) of a Promise?",
          "options": [
            { "id": "js-q50-a", "text": "`.catch()`" },
            { "id": "js-q50-b", "text": "`.finally()`" },
            { "id": "js-q50-c", "text": "`.then()` (can take a second argument for rejection)" },
            { "id": "js-q50-d", "text": "Both a and c are valid ways." }
          ],
          "correctOptionId": "js-q50-d",
          "explanation": "Rejections can be handled either by passing a second callback function to `.then(onFulfilled, onRejected)` or by chaining a `.catch(onRejected)` method, which is syntactic sugar for `.then(undefined, onRejected)`."
        },
        {
          "id": "js-q51",
          "question": "What does the `.finally()` method of a Promise do?",
          "options": [
            { "id": "js-q51-a", "text": "It executes only if the Promise is fulfilled." },
            { "id": "js-q51-b", "text": "It executes only if the Promise is rejected." },
            { "id": "js-q51-c", "text": "It executes regardless of whether the Promise is fulfilled or rejected." },
            { "id": "js-q51-d", "text": "It converts a Promise back to a pending state." }
          ],
          "correctOptionId": "js-q51-c",
          "explanation": "The `.finally()` callback is executed when the Promise settles (either fulfilled or rejected), making it useful for cleanup operations that need to happen regardless of the outcome."
        },
        {
          "id": "js-q52",
          "question": "How do you create a new Promise?",
          "options": [
            { "id": "js-q52-a", "text": "`new Promise(callback)`" },
            { "id": "js-q52-b", "text": "`Promise.create(executor)`" },
            { "id": "js-q52-c", "text": "`new Promise(executorFunction(resolve, reject))`" },
            { "id": "js-q52-d", "text": "`Promise.new(resolve, reject)`" }
          ],
          "correctOptionId": "js-q52-c",
          "explanation": "The `Promise` constructor takes an executor function as an argument. This executor function itself receives two arguments: `resolve` and `reject` functions, which are called to change the promise's state."
        },
        {
          "id": "js-q53",
          "question": "What does `Promise.all(iterable)` do?",
          "options": [
            { "id": "js-q53-a", "text": "Returns the result of the first Promise in the iterable to settle." },
            { "id": "js-q53-b", "text": "Returns a single Promise that fulfills when all Promises in the iterable have fulfilled, or rejects if any Promise rejects." },
            { "id": "js-q53-c", "text": "Executes all Promises sequentially." },
            { "id": "js-q53-d", "text": "Converts all values in the iterable to Promises." }
          ],
          "correctOptionId": "js-q53-b",
          "explanation": "`Promise.all` is useful for aggregating the results of multiple asynchronous operations that can run concurrently. It fails fast if any of the input promises reject."
        },
        {
          "id": "js-q54",
          "question": "What does `Promise.race(iterable)` do?",
          "options": [
            { "id": "js-q54-a", "text": "Returns a Promise that fulfills or rejects as soon as one of the Promises in the iterable fulfills or rejects." },
            { "id": "js-q54-b", "text": "Ensures all Promises run at the same speed." },
            { "id": "js-q54-c", "text": "Rejects if any two Promises finish at the same time." },
            { "id": "js-q54-d", "text": "Fulfills only if all Promises fulfill." }
          ],
          "correctOptionId": "js-q54-a",
          "explanation": "`Promise.race` is useful when you need the result of the first asynchronous operation to complete, regardless of whether it fulfills or rejects."
        },
        {
          "id": "js-q55",
          "question": "What is the purpose of the `async` keyword before a function declaration?",
          "options": [
            { "id": "js-q55-a", "text": "It makes the function execute synchronously." },
            { "id": "js-q55-b", "text": "It ensures the function always returns a Promise and allows the use of `await` within it." },
            { "id": "js-q55-c", "text": "It marks the function for garbage collection." },
            { "id": "js-q55-d", "text": "It automatically adds `try...catch` blocks." }
          ],
          "correctOptionId": "js-q55-b",
          "explanation": "Declaring a function with `async` implicitly wraps the return value in a resolved Promise (unless it explicitly returns a Promise) and enables the use of the `await` keyword inside the function body."
        },
        {
          "id": "js-q56",
          "question": "What does the `await` keyword do?",
          "options": [
            { "id": "js-q56-a", "text": "It immediately resolves a Promise." },
            { "id": "js-q56-b", "text": "It pauses the execution of an `async` function until a Promise settles (fulfills or rejects)." },
            { "id": "js-q56-c", "text": "It converts a callback function into a Promise." },
            { "id": "js-q56-d", "text": "It runs a function on a separate thread." }
          ],
          "correctOptionId": "js-q56-b",
          "explanation": "`await` can only be used inside an `async` function. It waits for the Promise on its right-hand side to settle and then returns the fulfilled value (or throws the rejection reason)."
        },
        {
          "id": "js-q57",
          "question": "What is a key difference in syntax and flow between `.then()` chaining and `async`/`await`?",
          "options": [
            { "id": "js-q57-a", "text": "`async`/`await` allows writing asynchronous code that looks more synchronous, avoiding `.then()` chains." },
            { "id": "js-q57-b", "text": "`.then()` chaining is generally faster than `async`/`await`." },
            { "id": "js-q57-c", "text": "`async`/`await` does not require Promises." },
            { "id": "js-q57-d", "text": "Error handling is impossible with `async`/`await`." }
          ],
          "correctOptionId": "js-q57-a",
          "explanation": "`async`/`await` provides syntactic sugar that makes asynchronous code resemble synchronous code, often improving readability compared to nested `.then()` calls."
        },
        {
          "id": "js-q58",
          "question": "How do you typically handle errors in `async` functions when using `await`?",
          "options": [
            { "id": "js-q58-a", "text": "Using `.catch()` on the `async` function call." },
            { "id": "js-q58-b", "text": "Using traditional `try...catch` blocks around `await` expressions." },
            { "id": "js-q58-c", "text": "Both a and b are common patterns." },
            { "id": "js-q58-d", "text": "Errors are automatically ignored in `async` functions." }
          ],
          "correctOptionId": "js-q58-c",
          "explanation": "Rejected Promises awaited within a `try` block will be caught by the corresponding `catch` block. Alternatively, if errors aren't caught inside the `async` function, the Promise returned by the `async` function will reject, allowing `.catch()` to be used on the call site."
        },
        {
          "id": "js-q59",
          "question": "If you `await` a non-Promise value, what happens?",
          "options": [
            { "id": "js-q59-a", "text": "It throws an error." },
            { "id": "js-q59-b", "text": "It converts the value into an immediately resolved Promise." },
            { "id": "js-q59-c", "text": "It waits indefinitely." },
            { "id": "js-q59-d", "text": "It returns `undefined`." }
          ],
          "correctOptionId": "js-q59-b",
          "explanation": "The `await` operator effectively wraps the non-Promise value in `Promise.resolve()`, so the `async` function continues execution almost immediately with that value."
        },
        {
          "id": "js-q60",
          "question": "Can you use `await` outside of an `async` function (at the top level)?",
          "options": [
            { "id": "js-q60-a", "text": "No, never." },
            { "id": "js-q60-b", "text": "Yes, always." },
            { "id": "js-q60-c", "text": "Yes, with Top-Level Await support in modern JavaScript modules." },
            { "id": "js-q60-d", "text": "Only inside `try...catch` blocks." }
          ],
          "correctOptionId": "js-q60-c",
          "explanation": "Historically, `await` was only allowed inside `async` functions. However, Top-Level Await is now a feature supported in ES modules, allowing `await` directly within the module scope."
        },
        {
          "id": "js-q61",
          "question": "What problem do Promises primarily solve compared to traditional callbacks?",
          "options": [
            { "id": "js-q61-a", "text": "They eliminate asynchronous operations." },
            { "id": "js-q61-b", "text": "They provide better performance for CPU-bound tasks." },
            { "id": "js-q61-c", "text": "They help manage asynchronous operations more cleanly, avoiding \"Callback Hell\" and providing better error handling." },
            { "id": "js-q61-d", "text": "They allow direct memory manipulation." }
          ],
          "correctOptionId": "js-q61-c",
          "explanation": "Promises offer a more structured way to handle async results and errors through chaining (`.then`, `.catch`), making code more readable and manageable than deeply nested callbacks."
        },
        {
          "id": "js-q62",
          "question": "What is the return value of an `async` function?",
          "options": [
            { "id": "js-q62-a", "text": "The value returned by the `return` statement inside it." },
            { "id": "js-q62-b", "text": "Always `undefined`." },
            { "id": "js-q62-c", "text": "Always a Promise." },
            { "id": "js-q62-d", "text": "The value of the last `await` expression." }
          ],
          "correctOptionId": "js-q62-c",
          "explanation": "An `async` function always returns a Promise. If the function returns a value, the Promise resolves with that value. If it throws an error, the Promise rejects with that error."
        },
        {
          "id": "js-q63",
          "question": "Consider `Promise.resolve(5).then(val => val * 2)`. What does this Promise chain resolve to?",
          "options": [
            { "id": "js-q63-a", "text": "`5`" },
            { "id": "js-q63-b", "text": "`10`" },
            { "id": "js-q63-c", "text": "`undefined`" },
            { "id": "js-q63-d", "text": "A Promise object." }
          ],
          "correctOptionId": "js-q63-b",
          "explanation": "`.then()` receives the resolved value of the previous Promise (5), executes the callback, and the returned value (10) becomes the resolved value of the Promise returned by `.then()`."
        },
        {
          "id": "js-q64",
          "question": "Consider `Promise.reject(\"Error\").catch(err => console.log(err))`. What is logged?",
          "options": [
            { "id": "js-q64-a", "text": "`undefined`" },
            { "id": "js-q64-b", "text": "Nothing is logged." },
            { "id": "js-q64-c", "text": "`\"Error\"`" },
            { "id": "js-q64-d", "text": "An unhandled rejection error occurs." }
          ],
          "correctOptionId": "js-q64-c",
          "explanation": "The `.catch()` block handles the rejection from `Promise.reject()`. The rejection reason (\"Error\") is passed as an argument to the `catch` callback, which then logs it."
        },
        {
          "id": "js-q65",
          "question": "What is `Promise.allSettled(iterable)` useful for?",
          "options": [
            { "id": "js-q65-a", "text": "Same as `Promise.all`, but faster." },
            { "id": "js-q65-b", "text": "Waiting for all promises to settle (either fulfill or reject) without short-circuiting on the first rejection." },
            { "id": "js-q65-c", "text": "Rejecting if any promise rejects, fulfilling otherwise." },
            { "id": "js-q65-d", "text": "Returning the result of the fastest promise." }
          ],
          "correctOptionId": "js-q65-b",
          "explanation": "`Promise.allSettled` waits for all input Promises to complete, regardless of their outcome. It returns a Promise that resolves with an array of objects describing the outcome of each input Promise."
        }
      ]
    },
    {
      "id": "js-oop",
      "title": "Object-Oriented / Prototypal JS (Prototype, Inheritance, Constructor, Class)",
      "description": "Questions about JavaScript's prototypal inheritance model and class syntax.",
      "questions": [
        {
          "id": "js-q66",
          "question": "What is the `prototype` property primarily used for in JavaScript?",
          "options": [
            { "id": "js-q66-a", "text": "Storing instance-specific data." },
            { "id": "js-q66-b", "text": "On constructor functions, defining properties and methods that will be inherited by instances created with that constructor." },
            { "id": "js-q66-c", "text": "Linking an object to its parent in the prototype chain." },
            { "id": "js-q66-d", "text": "Defining static methods." }
          ],
          "correctOptionId": "js-q66-b",
          "explanation": "Every function has a `prototype` property, which is an object. When the function is used as a constructor with `new`, the newly created object inherits properties from this `prototype` object."
        },
        {
          "id": "js-q67",
          "question": "What is the `__proto__` property (or `Object.getPrototypeOf()`) used for?",
          "options": [
            { "id": "js-q67-a", "text": "Defining methods on a constructor function." },
            { "id": "js-q67-b", "text": "Accessing the internal prototype object that an object inherits from (its link in the prototype chain)." },
            { "id": "js-q67-c", "text": "Creating a new object instance." },
            { "id": "js-q67-d", "text": "Checking if an object has a specific property." }
          ],
          "correctOptionId": "js-q67-b",
          "explanation": "`__proto__` (now discouraged, use `Object.getPrototypeOf()`) allows accessing the object from which the current object directly inherits. This forms the basis of the prototype chain."
        },
        {
          "id": "js-q68",
          "question": "How does prototypal inheritance work in JavaScript?",
          "options": [
            { "id": "js-q68-a", "text": "Objects inherit directly from other objects through the prototype chain." },
            { "id": "js-q68-b", "text": "Classes inherit from other classes using the `extends` keyword only." },
            { "id": "js-q68-c", "text": "Objects copy all properties from their parent." },
            { "id": "js-q68-d", "text": "Inheritance is not supported in JavaScript." }
          ],
          "correctOptionId": "js-q68-a",
          "explanation": "JavaScript uses prototypal inheritance. When trying to access a property on an object, if the object doesn't have it directly, the JavaScript engine looks up the prototype chain until it finds the property or reaches the end (null)."
        },
        {
          "id": "js-q69",
          "question": "What is a Constructor Function?",
          "options": [
            { "id": "js-q69-a", "text": "A function designed to be called with `new` to create and initialize objects." },
            { "id": "js-q69-b", "text": "Any function that returns an object." },
            { "id": "js-q69-c", "text": "An alias for a class declaration." },
            { "id": "js-q69-d", "text": "A function used only for event handling." }
          ],
          "correctOptionId": "js-q69-a",
          "explanation": "By convention, constructor functions start with a capital letter and are intended to be invoked using the `new` operator to create instances of a certain type of object."
        },
        {
          "id": "js-q70",
          "question": "When using a Constructor Function `function Car(make) { this.make = make; }`, how are instances created?",
          "options": [
            { "id": "js-q70-a", "text": "`Car(\"Toyota\")`" },
            { "id": "js-q70-b", "text": "`new Car(\"Toyota\")`" },
            { "id": "js-q70-c", "text": "`Object.create(Car, { make: \"Toyota\" })`" },
            { "id": "js-q70-d", "text": "`Car.create(\"Toyota\")`" }
          ],
          "correctOptionId": "js-q70-b",
          "explanation": "The `new` keyword is essential when calling a constructor function to ensure a new object is created, `this` is bound correctly, the prototype chain is set up, and the new object is returned."
        },
        {
          "id": "js-q71",
          "question": "How can inheritance be achieved between two Constructor Functions (e.g., `Sedan` inheriting from `Car`)?",
          "options": [
            { "id": "js-q71-a", "text": "By setting `Sedan.prototype = Car.prototype`." },
            { "id": "js-q71-b", "text": "By calling `Car.call(this, ...)` inside `Sedan` and setting `Sedan.prototype = Object.create(Car.prototype)`." },
            { "id": "js-q71-c", "text": "By simply declaring `function Sedan(make, doors) extends Car { ... }`." },
            { "id": "js-q71-d", "text": "By copying all properties manually." }
          ],
          "correctOptionId": "js-q71-b",
          "explanation": "This pattern correctly sets up prototypal inheritance: `Car.call(this, ...)` ensures parent constructor logic runs for the instance, and `Object.create(Car.prototype)` sets up the prototype chain so `Sedan` instances inherit from `Car.prototype`."
        },
        {
          "id": "js-q72",
          "question": "Why is it generally better to add shared methods to the `prototype` rather than directly inside the Constructor Function?",
          "options": [
            { "id": "js-q72-a", "text": "It makes the methods private." },
            { "id": "js-q72-b", "text": "It saves memory; methods are created once on the prototype instead of on every instance." },
            { "id": "js-q72-c", "text": "It allows methods to be `async`." },
            { "id": "js-q72-d", "text": "It's required by Strict Mode." }
          ],
          "correctOptionId": "js-q72-b",
          "explanation": "Defining methods on the prototype means all instances share the same function object via the prototype chain, whereas defining them inside the constructor creates a separate copy of the function for each instance."
        },
        {
          "id": "js-q73",
          "question": "What does the `new` keyword do internally when calling a constructor function?",
          "options": [
            { "id": "js-q73-a", "text": "Creates a new empty object, sets its internal prototype, binds `this` to the new object, calls the constructor, and returns the object (unless the constructor returns its own object)." },
            { "id": "js-q73-b", "text": "Simply calls the function and returns its result." },
            { "id": "js-q73-c", "text": "Creates a copy of the constructor function's prototype." },
            { "id": "js-q73-d", "text": "Allocates memory without initializing the object." }
          ],
          "correctOptionId": "js-q73-a",
          "explanation": "The `new` operator orchestrates the object creation process: creating the object, linking its prototype, binding `this` for the constructor call, and returning the newly created object."
        },
        {
          "id": "js-q74",
          "question": "What is the `class` syntax introduced in ES6 primarily considered to be?",
          "options": [
            { "id": "js-q74-a", "text": "A completely new object-oriented system, different from prototypes." },
            { "id": "js-q74-b", "text": "Syntactic sugar over JavaScript's existing prototypal inheritance." },
            { "id": "js-q74-c", "text": "A way to define web components." },
            { "id": "js-q74-d", "text": "A replacement for functions." }
          ],
          "correctOptionId": "js-q74-b",
          "explanation": "ES6 classes provide a clearer, more familiar syntax for object creation and inheritance but fundamentally operate on top of JavaScript's prototypal inheritance mechanism."
        },
        {
          "id": "js-q75",
          "question": "How is inheritance achieved using the `class` syntax?",
          "options": [
            { "id": "js-q75-a", "text": "`class Child : Parent { ... }`" },
            { "id": "js-q75-b", "text": "`class Child inherits Parent { ... }`" },
            { "id": "js-q75-c", "text": "`class Child extends Parent { ... }`" },
            { "id": "js-q75-d", "text": "`class Child implements Parent { ... }`" }
          ],
          "correctOptionId": "js-q75-c",
          "explanation": "The `extends` keyword is used in class declarations to create a subclass that inherits from a parent class."
        },
        {
          "id": "js-q76",
          "question": "What is the purpose of the `super()` keyword inside a class constructor?",
          "options": [
            { "id": "js-q76-a", "text": "To call the constructor of the parent class." },
            { "id": "js-q76-b", "text": "To refer to static methods of the parent class." },
            { "id": "js-q76-c", "text": "To create an instance of the parent class." },
            { "id": "js-q76-d", "text": "To access the class's prototype." }
          ],
          "correctOptionId": "js-q76-a",
          "explanation": "In a subclass constructor, `super()` must be called before using `this`. It executes the parent class's constructor, initializing the inherited parts of the object."
        },
        {
          "id": "js-q77",
          "question": "Where are methods placed when defined inside a `class` declaration (outside the constructor)?",
          "options": [
            { "id": "js-q77-a", "text": "Directly on each instance object." },
            { "id": "js-q77-b", "text": "On the `prototype` of the class." },
            { "id": "js-q77-c", "text": "As static methods on the class itself." },
            { "id": "js-q77-d", "text": "In the global scope." }
          ],
          "correctOptionId": "js-q77-b",
          "explanation": "Methods defined directly within the `class` body (but outside the `constructor`) become methods on the class's `prototype` object, making them shared among all instances."
        },
        {
          "id": "js-q78",
          "question": "What does `Object.create(proto)` do?",
          "options": [
            { "id": "js-q78-a", "text": "Creates a new object with the specified prototype object (`proto`)." },
            { "id": "js-q78-b", "text": "Creates a copy of the `proto` object." },
            { "id": "js-q78-c", "text": "Calls the constructor function `proto`." },
            { "id": "js-q78-d", "text": "Defines a new property on `proto`." }
          ],
          "correctOptionId": "js-q78-a",
          "explanation": "`Object.create()` provides a direct way to create a new object whose internal prototype is set to the specified object, facilitating prototypal inheritance."
        }
      ]
    },
    {
      "id": "js-advanced",
      "title": "Advanced/ES6+ & Memory (Proxy, Symbol, Iterator, Freeze/Seal, DefineProperty, Leaks, GC, Memoization, Mutability)",
      "description": "Questions covering more advanced JavaScript features, ES6+, and memory management.",
      "questions": [
        {
          "id": "js-q79",
          "question": "What is the primary purpose of the `Proxy` object?",
          "options": [
            { "id": "js-q79-a", "text": "To create immutable objects." },
            { "id": "js-q79-b", "text": "To define custom behavior for fundamental operations (like property lookup, assignment, function invocation) on an object." },
            { "id": "js-q79-c", "text": "To improve the performance of object property access." },
            { "id": "js-q79-d", "text": "To connect to network proxies." }
          ],
          "correctOptionId": "js-q79-b",
          "explanation": "Proxies allow you to create a wrapper around an object (the target) and intercept operations performed on it using handlers (traps), enabling metaprogramming scenarios like validation, logging, or virtualization."
        },
        {
          "id": "js-q80",
          "question": "What is a key use case for `Symbol`?",
          "options": [
            { "id": "js-q80-a", "text": "Replacing strings for all object keys." },
            { "id": "js-q80-b", "text": "Creating unique property keys to avoid name collisions, often used for \"internal\" properties or implementing protocols." },
            { "id": "js-q80-c", "text": "Generating random numbers." },
            { "id": "js-q80-d", "text": "Defining constants." }
          ],
          "correctOptionId": "js-q80-b",
          "explanation": "Symbols provide unique, non-string property keys, useful for adding properties to objects without risking clashes with existing or future string keys, especially when dealing with third-party code or built-in mechanisms."
        },
        {
          "id": "js-q81",
          "question": "What protocol does an object need to implement to be iterable with `for...of` loops?",
          "options": [
            { "id": "js-q81-a", "text": "The Enumerable protocol." },
            { "id": "js-q81-b", "text": "The Iterable protocol (by having a `Symbol.iterator` method that returns an iterator)." },
            { "id": "js-q81-c", "text": "The Collection protocol." },
            { "id": "js-q81-d", "text": "The Generator protocol." }
          ],
          "correctOptionId": "js-q81-b",
          "explanation": "An object is iterable if it implements the method associated with the `Symbol.iterator` key. This method must return an iterator object, which has a `next()` method."
        },
        {
          "id": "js-q82",
          "question": "What is a common cause of memory leaks in JavaScript web applications?",
          "options": [
            { "id": "js-q82-a", "text": "Using `let` instead of `var`." },
            { "id": "js-q82-b", "text": "Unintentional closures holding references to large objects or detached DOM elements." },
            { "id": "js-q82-c", "text": "Using too many Promises." },
            { "id": "js-q82-d", "text": "Declaring functions using the `function` keyword." }
          ],
          "correctOptionId": "js-q82-b",
          "explanation": "Memory leaks occur when allocated memory is no longer needed but isn't released. Common causes include forgotten timers/intervals, closures capturing unnecessary variables (especially DOM nodes removed from the tree), and accidental global variables."
        },
        {
          "id": "js-q83",
          "question": "What is the general principle behind most modern JavaScript Garbage Collectors (like V8's)?",
          "options": [
            { "id": "js-q83-a", "text": "Reference Counting" },
            { "id": "js-q83-b", "text": "Mark-and-Sweep (or variations like Mark-Compact)" },
            { "id": "js-q83-c", "text": "Manual memory management using `malloc` and `free`." },
            { "id": "js-q83-d", "text": "Least Recently Used (LRU) cache eviction." }
          ],
          "correctOptionId": "js-q83-b",
          "explanation": "Mark-and-sweep algorithms work by identifying reachable objects (starting from roots like the global object) and marking them. Unmarked objects are considered garbage and are swept (memory reclaimed)."
        },
        {
          "id": "js-q84",
          "question": "What typically triggers Garbage Collection in JavaScript?",
          "options": [
            { "id": "js-q84-a", "text": "Calling `gc()` explicitly." },
            { "id": "js-q84-b", "text": "Every time a function returns." },
            { "id": "js-q84-c", "text": "When memory allocation pressure occurs (e.g., trying to allocate memory when insufficient space is readily available)." },
            { "id": "js-q84-d", "text": "After a specific time interval (e.g., every 5 seconds)." }
          ],
          "correctOptionId": "js-q84-c",
          "explanation": "Garbage collection is usually triggered automatically by the JavaScript engine based on heuristics, often related to memory allocation attempts or reaching certain memory thresholds."
        },
        {
          "id": "js-q85",
          "question": "What is Memoization?",
          "options": [
            { "id": "js-q85-a", "text": "A technique for encrypting data stored in memory." },
            { "id": "js-q85-b", "text": "An optimization technique where the results of expensive function calls are cached and returned for the same inputs later." },
            { "id": "js-q85-c", "text": "The process of converting code to machine language." },
            { "id": "js-q85-d", "text": "A way to handle memory leaks." }
          ],
          "correctOptionId": "js-q85-b",
          "explanation": "Memoization improves performance by storing the results of pure function calls and reusing the cached result when the same inputs occur again, avoiding redundant computations."
        },
        {
          "id": "js-q86",
          "question": "Which of the following data types is generally considered Immutable in JavaScript?",
          "options": [
            { "id": "js-q86-a", "text": "`Object`" },
            { "id": "js-q86-b", "text": "`Array`" },
            { "id": "js-q86-c", "text": "`String`" },
            { "id": "js-q86-d", "text": "`Map`" }
          ],
          "correctOptionId": "js-q86-c",
          "explanation": "Primitive types (string, number, boolean, null, undefined, symbol, bigint) are immutable. Operations that seem to modify them (like string concatenation) actually create new values."
        },
        {
          "id": "js-q87",
          "question": "Which of the following data types is generally considered Mutable in JavaScript?",
          "options": [
            { "id": "js-q87-a", "text": "`Number`" },
            { "id": "js-q87-b", "text": "`Boolean`" },
            { "id": "js-q87-c", "text": "`Array`" },
            { "id": "js-q87-d", "text": "`null`" }
          ],
          "correctOptionId": "js-q87-c",
          "explanation": "Objects, including Arrays, Maps, and Sets, are mutable. Their properties or elements can be changed after creation."
        },
        {
          "id": "js-q88",
          "question": "What does `Object.freeze(obj)` do?",
          "options": [
            { "id": "js-q88-a", "text": "Prevents adding new properties to `obj`." },
            { "id": "js-q88-b", "text": "Prevents deleting existing properties from `obj`." },
            { "id": "js-q88-c", "text": "Prevents modifying existing properties of `obj` (makes them non-writable) and prevents adding/deleting properties." },
            { "id": "js-q88-d", "text": "Creates a deep copy of `obj`." }
          ],
          "correctOptionId": "js-q88-c",
          "explanation": "`Object.freeze()` provides the highest level of immutability among these methods, making properties non-writable and non-configurable, and preventing extensions (adding/deleting)."
        },
        {
          "id": "js-q89",
          "question": "How does `Object.seal(obj)` differ from `Object.freeze(obj)`?",
          "options": [
            { "id": "js-q89-a", "text": "`seal` allows modifying existing properties, while `freeze` does not." },
            { "id": "js-q89-b", "text": "`freeze` allows adding new properties, while `seal` does not." },
            { "id": "js-q89-c", "text": "`seal` prevents adding/deleting properties but allows modifying existing ones; `freeze` prevents adding/deleting/modifying." },
            { "id": "js-q89-d", "text": "They are identical." }
          ],
          "correctOptionId": "js-q89-c",
          "explanation": "`seal` prevents adding new properties and marks existing ones as non-configurable (cannot be deleted), but their values can still be changed if they are writable. `freeze` goes further by also making existing properties non-writable."
        },
        {
          "id": "js-q90",
          "question": "What capability does `Object.defineProperty(obj, prop, descriptor)` provide?",
          "options": [
            { "id": "js-q90-a", "text": "A shorthand for assigning a value to a property." },
            { "id": "js-q90-b", "text": "Precise control over the definition of a property, including its value, writability, enumerability, and configurability." },
            { "id": "js-q90-c", "text": "A way to delete properties securely." },
            { "id": "js-q90-d", "text": "A method to freeze only a single property." }
          ],
          "correctOptionId": "js-q90-b",
          "explanation": "`Object.defineProperty` allows defining or modifying a property with fine-grained control over its attributes using a property descriptor object."
        },
        {
          "id": "js-q91",
          "question": "In the descriptor object used with `Object.defineProperty`, what does `enumerable: false` mean?",
          "options": [
            { "id": "js-q91-a", "text": "The property cannot be modified." },
            { "id": "js-q91-b", "text": "The property cannot be deleted." },
            { "id": "js-q91-c", "text": "The property will not show up during `for...in` enumeration or `Object.keys()`." },
            { "id": "js-q91-d", "text": "The property can only hold numeric values." }
          ],
          "correctOptionId": "js-q91-c",
          "explanation": "Enumerable properties are included in loops like `for...in` and methods like `Object.keys()`, `Object.values()`, `Object.entries()`, and `JSON.stringify()`. Setting `enumerable: false` hides the property from these operations."
        },
        {
          "id": "js-q92",
          "question": "In the descriptor object used with `Object.defineProperty`, what does `configurable: false` prevent?",
          "options": [
            { "id": "js-q92-a", "text": "Preventing the property from being modified." },
            { "id": "js-q92-b", "text": "Preventing the property from being deleted and preventing its attributes (writable, enumerable, configurable) from being changed later." },
            { "id": "js-q92-c", "text": "Preventing the property from being enumerated." },
            { "id": "js-q92-d", "text": "Preventing the property from being accessed." }
          ],
          "correctOptionId": "js-q92-b",
          "explanation": "A non-configurable property cannot be deleted, and its attributes (except `value` and `writable`, under certain conditions) cannot be changed. It's a one-way street; you cannot make a non-configurable property configurable again."
        },
        {
          "id": "js-q93",
          "question": "What is Cascading in the context of JavaScript methods (often seen in libraries like jQuery or with builders)?",
          "options": [
            { "id": "js-q93-a", "text": "A security vulnerability." },
            { "id": "js-q93-b", "text": "When methods on an object return `this` (the object instance) to allow chaining multiple method calls together (e.g., `obj.method1().method2()`)." },
            { "id": "js-q93-c", "text": "How styles are applied in CSS." },
            { "id": "js-q93-d", "text": "Nesting `try...catch` blocks." }
          ],
          "correctOptionId": "js-q93-b",
          "explanation": "Method cascading (or chaining) is a pattern where methods return the object they were called on, allowing subsequent method calls on the same object in a fluent, single statement."
        },
        {
          "id": "js-q94",
          "question": "If `const arr = [1, 2]; Object.freeze(arr);`, can you do `arr[0] = 10;`?",
          "options": [
            { "id": "js-q94-a", "text": "Yes, `freeze` doesn't affect array elements." },
            { "id": "js-q94-b", "text": "No, `freeze` prevents modification of existing properties (indices are properties)." },
            { "id": "js-q94-c", "text": "Only in non-strict mode." },
            { "id": "js-q94-d", "text": "Yes, but `arr.push(3)` would fail." }
          ],
          "correctOptionId": "js-q94-b",
          "explanation": "`Object.freeze()` makes existing properties (including numeric indices in arrays) non-writable. Attempting to modify `arr[0]` will fail silently in non-strict mode or throw a TypeError in strict mode."
        },
        {
          "id": "js-q95",
          "question": "If `const obj = { a: 1 }; Object.seal(obj);`, can you do `obj.a = 10;`?",
          "options": [
            { "id": "js-q95-a", "text": "Yes, `seal` allows modification of existing properties." },
            { "id": "js-q95-b", "text": "No, `seal` prevents modification." },
            { "id": "js-q95-c", "text": "Only if `obj.a` was defined with `writable: true`." },
            { "id": "js-q95-d", "text": "No, because `a` is now sealed." }
          ],
          "correctOptionId": "js-q95-a",
          "explanation": "`Object.seal()` prevents adding/deleting properties and makes existing properties non-configurable, but it does *not* make them non-writable by default. Therefore, `obj.a = 10` is allowed."
        },
        {
          "id": "js-q96",
          "question": "What is the result of `const s1 = Symbol('desc'); const s2 = Symbol('desc'); s1 === s2;`?",
          "options": [
            { "id": "js-q96-a", "text": "`true`" },
            { "id": "js-q96-b", "text": "`false`" },
            { "id": "js-q96-c", "text": "`TypeError`" },
            { "id": "js-q96-d", "text": "`undefined`" }
          ],
          "correctOptionId": "js-q96-b",
          "explanation": "Every call to `Symbol()` creates a unique symbol, even if they have the same description. Therefore, `s1` and `s2` are distinct symbols and are not equal."
        },
        {
          "id": "js-q97",
          "question": "What happens if you try to add a property to an object frozen with `Object.freeze()` in strict mode?",
          "options": [
            { "id": "js-q97-a", "text": "The property is added successfully." },
            { "id": "js-q97-b", "text": "The operation fails silently." },
            { "id": "js-q97-c", "text": "A `TypeError` is thrown." },
            { "id": "js-q97-d", "text": "The object becomes un-frozen." }
          ],
          "correctOptionId": "js-q97-c",
          "explanation": "`Object.freeze()` prevents extensions to the object. In strict mode, attempting to add a property to a non-extensible object results in a `TypeError`."
        }
      ]
    },
    {
      "id": "js-error-handling",
      "title": "Error Handling",
      "description": "Questions about handling runtime errors in JavaScript.",
      "questions": [
        {
          "id": "js-q98",
          "question": "What is the purpose of the `try...catch` statement?",
          "options": [
            { "id": "js-q98-a", "text": "To define asynchronous functions." },
            { "id": "js-q98-b", "text": "To execute code that might throw an error and provide a block to handle the error if one occurs." },
            { "id": "js-q98-c", "text": "To loop through object properties." },
            { "id": "js-q98-d", "text": "To declare constants." }
          ],
          "correctOptionId": "js-q98-b",
          "explanation": "The `try` block contains code that may potentially throw an error. If an error occurs within the `try` block, execution jumps to the `catch` block, allowing the program to handle the error gracefully instead of crashing."
        },
        {
          "id": "js-q99",
          "question": "Which block in a `try...catch...finally` statement executes regardless of whether an error was thrown or caught?",
          "options": [
            { "id": "js-q99-a", "text": "`try`" },
            { "id": "js-q99-b", "text": "`catch`" },
            { "id": "js-q99-c", "text": "`finally`" },
            { "id": "js-q99-d", "text": "None, execution stops after `catch`." }
          ],
          "correctOptionId": "js-q99-c",
          "explanation": "The `finally` block is optional but, if present, its code will always execute after the `try` and potentially `catch` blocks complete, regardless of whether an exception was thrown or caught. It's often used for cleanup code."
        },
        {
          "id": "js-q100",
          "question": "If an error occurs in the `try` block, and there is a matching `catch` block, where does execution jump to?",
          "options": [
            { "id": "js-q100-a", "text": "The `finally` block (if present), then continues after the `try...catch...finally`." },
            { "id": "js-q100-b", "text": "The beginning of the `catch` block." },
            { "id": "js-q100-c", "text": "The code immediately following the `try...catch...finally` statement." },
            { "id": "js-q100-d", "text": "The script terminates." }
          ],
          "correctOptionId": "js-q100-b",
          "explanation": "When an error is thrown in the `try` block, the JavaScript engine immediately looks for a corresponding `catch` block. If found, control transfers to the first statement within that `catch` block."
        }
      ]
    }
  ]
}