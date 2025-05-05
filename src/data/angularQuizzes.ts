import { QuizSectionData } from '../models/QuizTypes';

export const angularQuizData: QuizSectionData = {
  id: 'angular',
  title: 'Angular',
  description: 'Test your knowledge of Angular framework.',
  quizzes: [
    {
      id: 'angular-basics',
      title: 'Angular Development',
      description: 'Questions covering Angular framework fundamentals and advanced features.',
      questions: [
        {
          id: 'ang-q1',
          question: 'What is the Angular decorator used to define a component?',
          options: [
            { id: 'ang-q1-a', text: '@NgModule' },
            { id: 'ang-q1-b', text: '@Component' },
            { id: 'ang-q1-c', text: '@Directive' },
            { id: 'ang-q1-d', text: '@Injectable' },
          ],
          correctOptionId: 'ang-q1-b',
          explanation: '@Component is the decorator that marks a class as an Angular component and provides configuration metadata.'
        },
        {
          id: 'ang-q2',
          question: 'What is the purpose of NgModule in Angular?',
          options: [
            { id: 'ang-q2-a', text: 'To define a service' },
            { id: 'ang-q2-b', text: 'To organize the application into cohesive blocks of functionality' },
            { id: 'ang-q2-c', text: 'To handle HTTP requests only' },
            { id: 'ang-q2-d', text: 'To define routes' },
          ],
          correctOptionId: 'ang-q2-b',
          explanation: 'NgModule helps organize an application into cohesive blocks of functionality by grouping components, directives, pipes, and services.'
        },
        {
          id: 'ang-q3',
          question: 'What is the correct way to define a service in Angular?',
          options: [
            { id: 'ang-q3-a', text: '@Service() class MyService {}' },
            { id: 'ang-q3-b', text: '@Injectable() class MyService {}' },
            { id: 'ang-q3-c', text: '@Provider() class MyService {}' },
            { id: 'ang-q3-d', text: '@NgService() class MyService {}' },
          ],
          correctOptionId: 'ang-q3-b',
          explanation: 'Services in Angular are defined using the @Injectable() decorator, which tells Angular that this service might have dependencies.'
        },
        {
          id: 'ang-q4',
          question: 'Which directive is used for two-way data binding in Angular?',
          options: [
            { id: 'ang-q4-a', text: '[(ngModel)]' },
            { id: 'ang-q4-b', text: '[ngFor]' },
            { id: 'ang-q4-c', text: '*ngIf' },
            { id: 'ang-q4-d', text: '[ngClass]' },
          ],
          correctOptionId: 'ang-q4-a',
          explanation: '[(ngModel)] is the "banana in a box" syntax used for two-way data binding in Angular, allowing data to flow both from component to view and from view to component.'
        },
        {
          id: 'ang-q5',
          question: 'What is the purpose of Angular pipes?',
          options: [
            { id: 'ang-q5-a', text: 'To handle HTTP requests' },
            { id: 'ang-q5-b', text: 'To transform data for display' },
            { id: 'ang-q5-c', text: 'To create navigation paths' },
            { id: 'ang-q5-d', text: 'To inject dependencies' },
          ],
          correctOptionId: 'ang-q5-b',
          explanation: 'Pipes in Angular are used to transform data for display purposes in templates without changing the original data.'
        },
        {
          id: 'ang-q6',
          question: 'Which lifecycle hook is called after Angular has fully initialized a component\'s view?',
          options: [
            { id: 'ang-q6-a', text: 'ngOnInit' },
            { id: 'ang-q6-b', text: 'ngAfterViewInit' },
            { id: 'ang-q6-c', text: 'ngAfterContentInit' },
            { id: 'ang-q6-d', text: 'ngOnChanges' },
          ],
          correctOptionId: 'ang-q6-b',
          explanation: 'ngAfterViewInit is called after Angular has fully initialized a component\'s view and child views.'
        },
        {
          id: 'ang-q7',
          question: 'What is the purpose of ViewChild in Angular?',
          options: [
            { id: 'ang-q7-a', text: 'To access parent components' },
            { id: 'ang-q7-b', text: 'To access a child component, directive, or DOM element' },
            { id: 'ang-q7-c', text: 'To define child routes' },
            { id: 'ang-q7-d', text: 'To create nested forms' },
          ],
          correctOptionId: 'ang-q7-b',
          explanation: 'ViewChild is a property decorator that configures a view query, allowing a component to access a child component, directive, or DOM element.'
        }
      ]
    }
  ]
};
