
import { QuizSectionData } from '../models/QuizTypes';

export const sampleQuizzes: QuizSectionData[] = [
  {
    id: 'general-knowledge',
    title: 'General Knowledge',
    description: 'Test your general knowledge with these questions.',
    quizzes: [
      {
        id: 'gk-easy',
        title: 'Basic General Knowledge',
        description: 'Easy questions covering various topics.',
        questions: [
          {
            id: 'gk-q1',
            question: 'Which planet is known as the Red Planet?',
            options: [
              { id: 'gk-q1-a', text: 'Venus' },
              { id: 'gk-q1-b', text: 'Mars' },
              { id: 'gk-q1-c', text: 'Jupiter' },
              { id: 'gk-q1-d', text: 'Saturn' },
            ],
            correctOptionId: 'gk-q1-b',
            explanation: 'Mars is called the Red Planet because it appears reddish in color due to iron oxide (rust) on its surface.'
          },
          {
            id: 'gk-q2',
            question: 'Which country is known as the Land of the Rising Sun?',
            options: [
              { id: 'gk-q2-a', text: 'China' },
              { id: 'gk-q2-b', text: 'Thailand' },
              { id: 'gk-q2-c', text: 'Japan' },
              { id: 'gk-q2-d', text: 'South Korea' },
            ],
            correctOptionId: 'gk-q2-c',
            explanation: 'Japan is known as the Land of the Rising Sun because from China, it appears that the sun rises from the direction of Japan.'
          },
          {
            id: 'gk-q3',
            question: 'What is the chemical symbol for gold?',
            options: [
              { id: 'gk-q3-a', text: 'Au' },
              { id: 'gk-q3-b', text: 'Ag' },
              { id: 'gk-q3-c', text: 'Fe' },
              { id: 'gk-q3-d', text: 'Go' },
            ],
            correctOptionId: 'gk-q3-a',
            explanation: 'The chemical symbol for gold is Au, derived from the Latin word "aurum".'
          }
        ]
      }
    ]
  },
  {
    id: 'science',
    title: 'Science',
    description: 'Explore the world of science with these questions.',
    quizzes: [
      {
        id: 'sci-basics',
        title: 'Basic Science',
        description: 'Fundamental concepts in science.',
        questions: [
          {
            id: 'sci-q1',
            question: 'What is the chemical formula for water?',
            options: [
              { id: 'sci-q1-a', text: 'CO2' },
              { id: 'sci-q1-b', text: 'H2O' },
              { id: 'sci-q1-c', text: 'NaCl' },
              { id: 'sci-q1-d', text: 'O2' },
            ],
            correctOptionId: 'sci-q1-b',
            explanation: 'Water consists of two hydrogen atoms and one oxygen atom, hence the formula H2O.'
          },
          {
            id: 'sci-q2',
            question: 'Which gas do plants primarily absorb from the atmosphere?',
            options: [
              { id: 'sci-q2-a', text: 'Oxygen' },
              { id: 'sci-q2-b', text: 'Nitrogen' },
              { id: 'sci-q2-c', text: 'Carbon Dioxide' },
              { id: 'sci-q2-d', text: 'Hydrogen' },
            ],
            correctOptionId: 'sci-q2-c',
            explanation: 'Plants absorb carbon dioxide from the atmosphere for photosynthesis and release oxygen as a byproduct.'
          }
        ]
      }
    ]
  },
  {
    id: 'programming',
    title: 'Programming',
    description: 'Test your programming knowledge.',
    quizzes: [
      {
        id: 'prog-js',
        title: 'JavaScript Basics',
        description: 'Basic concepts in JavaScript programming.',
        questions: [
          {
            id: 'prog-q1',
            question: 'Which symbol is used for single-line comments in JavaScript?',
            options: [
              { id: 'prog-q1-a', text: '//' },
              { id: 'prog-q1-b', text: '/* */' },
              { id: 'prog-q1-c', text: '#' },
              { id: 'prog-q1-d', text: '--' },
            ],
            correctOptionId: 'prog-q1-a',
            explanation: 'In JavaScript, // is used for single-line comments, while /* */ is used for multi-line comments.'
          },
          {
            id: 'prog-q2',
            question: 'Which method is used to add elements at the end of an array in JavaScript?',
            options: [
              { id: 'prog-q2-a', text: 'push()' },
              { id: 'prog-q2-b', text: 'pop()' },
              { id: 'prog-q2-c', text: 'shift()' },
              { id: 'prog-q2-d', text: 'unshift()' },
            ],
            correctOptionId: 'prog-q2-a',
            explanation: 'push() adds one or more elements to the end of an array and returns the new length of the array.'
          }
        ]
      }
    ]
  }
];
