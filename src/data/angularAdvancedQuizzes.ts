import { QuizSectionData } from '../models/QuizTypes';

export const angularAdvancedQuizData: QuizSectionData = {
  "id": "angular-advanced",
  "title": "Advanced Angular Development",
  "description": "Test your knowledge of advanced Angular concepts and techniques.",
  "quizzes": [
    {
      "id": "angular-advanced-features",
      "title": "Advanced Angular Concepts",
      "description": "Questions covering advanced Angular topics like RxJS, change detection, and performance optimization.",
      "questions": [
        {
          "id": "ang-q8",
          "question": "What is the purpose of ChangeDetectionStrategy.OnPush in Angular?",
          "options": [
            { "id": "ang-q8-a", "text": "To detect changes on all components automatically" },
            { "id": "ang-q8-b", "text": "To optimize performance by checking only when input properties change" },
            { "id": "ang-q8-c", "text": "To force Angular to check for changes at all times" },
            { "id": "ang-q8-d", "text": "To trigger change detection in the parent component only" }
          ],
          "correctOptionId": "ang-q8-b",
          "explanation": "ChangeDetectionStrategy.OnPush tells Angular to check for changes only when input properties of the component change, improving performance by reducing unnecessary checks."
        },
        {
          "id": "ang-q9",
          "question": "What is the role of RxJS in Angular applications?",
          "options": [
            { "id": "ang-q9-a", "text": "To handle user interactions" },
            { "id": "ang-q9-b", "text": "To manage HTTP requests only" },
            { "id": "ang-q9-c", "text": "To manage asynchronous events and data streams" },
            { "id": "ang-q9-d", "text": "To manage component state" }
          ],
          "correctOptionId": "ang-q9-c",
          "explanation": "RxJS (Reactive Extensions for JavaScript) is used to handle asynchronous operations, such as HTTP requests, events, and other data streams, by using observable patterns."
        },
        {
          "id": "ang-q10",
          "question": "What does the 'async' pipe do in Angular?",
          "options": [
            { "id": "ang-q10-a", "text": "It automatically subscribes to an observable and renders its values in the template" },
            { "id": "ang-q10-b", "text": "It allows Angular to manage component lifecycle" },
            { "id": "ang-q10-c", "text": "It converts promises to observables" },
            { "id": "ang-q10-d", "text": "It checks if the observable has emitted any values" }
          ],
          "correctOptionId": "ang-q10-a",
          "explanation": "The 'async' pipe automatically subscribes to an observable, and when the observable emits a value, it is rendered in the template. It also handles unsubscription automatically."
        },
        {
          "id": "ang-q11",
          "question": "Which of the following is true about Angular's Lazy Loading?",
          "options": [
            { "id": "ang-q11-a", "text": "It only loads components as needed, improving initial load time" },
            { "id": "ang-q11-b", "text": "It loads all modules in advance to avoid delay" },
            { "id": "ang-q11-c", "text": "It is only applicable for services, not components" },
            { "id": "ang-q11-d", "text": "It forces a full-page reload on route navigation" }
          ],
          "correctOptionId": "ang-q11-a",
          "explanation": "Lazy loading in Angular allows you to load specific modules only when they are needed, improving the initial loading time of the application."
        },
        {
          "id": "ang-q12",
          "question": "What is the role of the Angular Router's 'resolve' property?",
          "options": [
            { "id": "ang-q12-a", "text": "To pre-fetch data before the route is activated" },
            { "id": "ang-q12-b", "text": "To define which components are loaded dynamically" },
            { "id": "ang-q12-c", "text": "To trigger authentication for routes" },
            { "id": "ang-q12-d", "text": "To define custom error handling for route navigation" }
          ],
          "correctOptionId": "ang-q12-a",
          "explanation": "'resolve' is used in Angular Router to pre-fetch data before a route is activated, ensuring that the required data is available before the view is rendered."
        },
        {
          "id": "ang-q13",
          "question": "Which of the following is true about Angular's `ngOnDestroy` lifecycle hook?",
          "options": [
            { "id": "ang-q13-a", "text": "It is used for cleaning up resources before the component is destroyed" },
            { "id": "ang-q13-b", "text": "It is called before Angular initializes a component" },
            { "id": "ang-q13-c", "text": "It is automatically triggered when a user clicks on a component" },
            { "id": "ang-q13-d", "text": "It is used to trigger change detection manually" }
          ],
          "correctOptionId": "ang-q13-a",
          "explanation": "'ngOnDestroy' is a lifecycle hook that is called just before Angular destroys a component, making it the perfect place to clean up subscriptions, timers, and other resources."
        },
        {
          "id": "ang-q14",
          "question": "What is the purpose of the `trackBy` function in Angular’s `ngFor` directive?",
          "options": [
            { "id": "ang-q14-a", "text": "It helps to identify which items to display in a loop" },
            { "id": "ang-q14-b", "text": "It optimizes rendering performance by tracking items in the list" },
            { "id": "ang-q14-c", "text": "It sorts the items before displaying them" },
            { "id": "ang-q14-d", "text": "It binds values to the template from an array" }
          ],
          "correctOptionId": "ang-q14-b",
          "explanation": "The 'trackBy' function allows Angular to track each item in an `ngFor` loop more efficiently, improving rendering performance by minimizing unnecessary DOM manipulations."
        },
        {
          "id": "ang-q15",
          "question": "What is the purpose of Angular's Zone.js?",
          "options": [
            { "id": "ang-q15-a", "text": "To handle HTTP requests" },
            { "id": "ang-q15-b", "text": "To manage component styles" },
            { "id": "ang-q15-c", "text": "To intercept and monitor asynchronous operations for change detection" },
            { "id": "ang-q15-d", "text": "To compile templates" }
          ],
          "correctOptionId": "ang-q15-c",
          "explanation": "Zone.js is used by Angular to create an execution context that tracks asynchronous operations, enabling automatic change detection when these operations complete."
        },
        {
          "id": "ang-q16",
          "question": "What is Tree-Shaking in Angular?",
          "options": [
            { "id": "ang-q16-a", "text": "A technique to organize component hierarchy" },
            { "id": "ang-q16-b", "text": "A build optimization that removes unused code" },
            { "id": "ang-q16-c", "text": "A method to handle DOM events" },
            { "id": "ang-q16-d", "text": "A way to manage component state" }
          ],
          "correctOptionId": "ang-q16-b",
          "explanation": "Tree-shaking is a build optimization technique that removes unused code from the final bundle, reducing the application size."
        },
        {
          "id": "ang-q17",
          "question": "What is the difference between ViewChild and ContentChild in Angular?",
          "options": [
            { "id": "ang-q17-a", "text": "ViewChild queries elements in the component's template, ContentChild queries projected content" },
            { "id": "ang-q17-b", "text": "They are identical decorators with different names" },
            { "id": "ang-q17-c", "text": "ViewChild is for components, ContentChild is for directives" },
            { "id": "ang-q17-d", "text": "ViewChild is deprecated, ContentChild is the new version" }
          ],
          "correctOptionId": "ang-q17-a",
          "explanation": "ViewChild queries elements/components in the component's template, while ContentChild queries elements/components that are projected into the component (ng-content)."
        },
        {
          "id": "ang-q18",
          "question": "What is the purpose of Angular's InjectionToken?",
          "options": [
            { "id": "ang-q18-a", "text": "To create unique tokens for dependency injection" },
            { "id": "ang-q18-b", "text": "To handle user authentication" },
            { "id": "ang-q18-c", "text": "To manage route guards" },
            { "id": "ang-q18-d", "text": "To validate form inputs" }
          ],
          "correctOptionId": "ang-q18-a",
          "explanation": "InjectionToken creates unique tokens for dependency injection, especially useful for injecting literals and interfaces which otherwise cannot be used as injection tokens."
        },
        {
          "id": "ang-q19",
          "question": "What is Angular's Ivy renderer?",
          "options": [
            { "id": "ang-q19-a", "text": "A deprecated rendering engine" },
            { "id": "ang-q19-b", "text": "A third-party rendering library" },
            { "id": "ang-q19-c", "text": "Angular's next-generation compilation and rendering pipeline" },
            { "id": "ang-q19-d", "text": "A testing framework for Angular" }
          ],
          "correctOptionId": "ang-q19-c",
          "explanation": "Ivy is Angular's next-generation compilation and rendering pipeline that provides better build times, smaller bundle sizes, and improved debugging capabilities."
        },
        {
          "id": "ang-q20",
          "question": "What is the purpose of Angular's NgZone.runOutsideAngular()?",
          "options": [
            { "id": "ang-q20-a", "text": "To execute code without triggering change detection" },
            { "id": "ang-q20-b", "text": "To run code in a separate thread" },
            { "id": "ang-q20-c", "text": "To execute code with higher priority" },
            { "id": "ang-q20-d", "text": "To bypass Angular's security" }
          ],
          "correctOptionId": "ang-q20-a",
          "explanation": "NgZone.runOutsideAngular() allows you to execute code outside Angular's zone, preventing unnecessary change detection cycles and improving performance."
        }
      ]
    }
  ]
};
