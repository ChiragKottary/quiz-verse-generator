import { QuizSectionData } from '../models/QuizTypes';

export const javascriptAdvancedQuizData: QuizSectionData = {
  id: 'javascript-advanced',
  title: 'JavaScript Advanced',
  description: 'Test your advanced knowledge of JavaScript programming.',
  quizzes: [
    {
      id: 'js-advanced',
      title: 'Advanced JavaScript',
      description: 'Questions covering advanced JavaScript concepts and techniques.',
      questions: [
        {
          id: 'js-adv-q1',
          question: 'What is the output of: console.log(typeof typeof 1);',
          options: [
            { id: 'js-adv-q1-a', text: 'number' },
            { id: 'js-adv-q1-b', text: 'string' },
            { id: 'js-adv-q1-c', text: 'undefined' },
            { id: 'js-adv-q1-d', text: 'object' },
          ],
          correctOptionId: 'js-adv-q1-b',
          explanation: 'typeof 1 returns "number", and typeof "number" returns "string", so the final output is "string".'
        },
        {
          id: 'js-adv-q2',
          question: 'Which of the following correctly creates a Promise that resolves after a specified time?',
          options: [
            { id: 'js-adv-q2-a', text: 'new Timeout(() => resolve(), 1000);' },
            { id: 'js-adv-q2-b', text: 'new Promise((resolve, reject) => setTimeout(resolve, 1000));' },
            { id: 'js-adv-q2-c', text: 'Promise.timeout(1000).then(resolve);' },
            { id: 'js-adv-q2-d', text: 'await delay(1000);' },
          ],
          correctOptionId: 'js-adv-q2-b',
          explanation: 'Creating a Promise that wraps setTimeout is the correct way to create a Promise that resolves after a specified time.'
        },
        {
          id: 'js-adv-q3',
          question: 'What is the purpose of the Symbol type in JavaScript?',
          options: [
            { id: 'js-adv-q3-a', text: 'To create unique object identifiers' },
            { id: 'js-adv-q3-b', text: 'To define mathematical symbols' },
            { id: 'js-adv-q3-c', text: 'To encrypt data in transit' },
            { id: 'js-adv-q3-d', text: 'To create singleton objects' },
          ],
          correctOptionId: 'js-adv-q3-a',
          explanation: 'Symbols in JavaScript are unique and immutable primitive values that can be used as object property keys to avoid name collisions.'
        },
        {
          id: 'js-adv-q4',
          question: 'What is a closure in JavaScript?',
          options: [
            { id: 'js-adv-q4-a', text: 'A way to lock variables from being changed' },
            { id: 'js-adv-q4-b', text: 'A function bundled with its lexical environment' },
            { id: 'js-adv-q4-c', text: 'A method to close unused connections' },
            { id: 'js-adv-q4-d', text: 'A security feature in modern browsers' },
          ],
          correctOptionId: 'js-adv-q4-b',
          explanation: 'A closure is a function bundled together with its lexical environment, allowing access to variables from an outer function even after the outer function has finished execution.'
        },
        {
          id: 'js-adv-q5',
          question: 'What is the correct way to implement a custom iterator in JavaScript?',
          options: [
            { id: 'js-adv-q5-a', text: 'Define a function with the name iterator()' },
            { id: 'js-adv-q5-b', text: 'Define a method named [Symbol.iterator] that returns an object with a next() method' },
            { id: 'js-adv-q5-c', text: 'Use the Iterator constructor' },
            { id: 'js-adv-q5-d', text: 'Extend the Iterator class' },
          ],
          correctOptionId: 'js-adv-q5-b',
          explanation: 'Custom iterators in JavaScript are implemented by defining a method with the key [Symbol.iterator] that returns an object with a next() method.'
        },
        {
          id: 'js-adv-q6',
          question: 'What is the purpose of the Proxy object in JavaScript?',
          options: [
            { id: 'js-adv-q6-a', text: 'To create a server-side proxy' },
            { id: 'js-adv-q6-b', text: 'To intercept and customize operations on objects' },
            { id: 'js-adv-q6-c', text: 'To hide the IP address of the client' },
            { id: 'js-adv-q6-d', text: 'To compress JavaScript code' },
          ],
          correctOptionId: 'js-adv-q6-b',
          explanation: 'The Proxy object enables you to create an object that can intercept and redefine fundamental operations for another object.'
        },
        {
          id: 'js-adv-q7',
          question: 'What is the difference between Map and WeakMap in JavaScript?',
          options: [
            { id: 'js-adv-q7-a', text: 'WeakMap is slower than Map' },
            { id: 'js-adv-q7-b', text: 'Map allows any value as keys, WeakMap only allows strings' },
            { id: 'js-adv-q7-c', text: 'WeakMap keys are weakly referenced and can be garbage collected' },
            { id: 'js-adv-q7-d', text: 'Map is immutable, WeakMap is mutable' },
          ],
          correctOptionId: 'js-adv-q7-c',
          explanation: 'In a WeakMap, the keys are weakly referenced, meaning they can be garbage collected if there are no other references to them, while Map maintains strong references to its keys.'
        },
        {
          id: 'js-adv-q8',
          question: 'What does the "use strict" directive do in JavaScript?',
          options: [
            { id: 'js-adv-q8-a', text: 'Forces the browser to render the page faster' },
            { id: 'js-adv-q8-b', text: 'Enables a stricter variant of JavaScript with improved error checking' },
            { id: 'js-adv-q8-c', text: 'Restricts the use of certain libraries' },
            { id: 'js-adv-q8-d', text: 'Enforces TypeScript-like type checking' },
          ],
          correctOptionId: 'js-adv-q8-b',
          explanation: '"use strict" enables strict mode in JavaScript, which catches common coding errors, prevents some unsafe actions, and disables some confusing features.'
        },
        {
          id: 'js-adv-q9',
          question: 'What is the result of Object.is(NaN, NaN)?',
          options: [
            { id: 'js-adv-q9-a', text: 'true' },
            { id: 'js-adv-q9-b', text: 'false' },
            { id: 'js-adv-q9-c', text: 'undefined' },
            { id: 'js-adv-q9-d', text: 'Error' },
          ],
          correctOptionId: 'js-adv-q9-a',
          explanation: 'Unlike the equality operators, Object.is() considers NaN to be equal to NaN, so it returns true.'
        },
        {
          id: 'js-adv-q10',
          question: 'What is the purpose of the "bind" method in JavaScript?',
          options: [
            { id: 'js-adv-q10-a', text: 'To join two arrays' },
            { id: 'js-adv-q10-b', text: 'To create a new function with a specific "this" context' },
            { id: 'js-adv-q10-c', text: 'To connect to a database' },
            { id: 'js-adv-q10-d', text: 'To bind events to DOM elements' },
          ],
          correctOptionId: 'js-adv-q10-b',
          explanation: 'The bind() method creates a new function that, when called, has its "this" keyword set to the specified value, with a given sequence of arguments preceding any arguments provided when the new function is called.'
        }
      ]
    }
  ]
};
