import { QuizSectionData } from '../models/QuizTypes';
import { csharpQuizSection } from './csharpQuizzes';
import { postgresqlQuizSection } from './postgresqlQuizzes';
import { javascriptAdvancedQuizData } from './javascriptAdvancedQuizzes';
import { angularQuizData } from './angularQuizzes';
import { angularAdvancedQuizData } from './angularAdvancedQuizzes';
import { rpgleQuizData } from './rpgleQuizzes';
import { sqlrpgleQuizData } from './sqlrpgleQuizzes';
import { ibmiquiz } from './ibm-i-quiz';
import { sqldb2quiz } from './sql-db2-quiz';
import { csharpdotnetquiz } from './csharp-dotnet-quiz';
import { javascriptQuiz } from './javascript-quiz';
import { dotnetcsharpquiz } from './dotnet-csharp-quiz-100';
import { htmlqqq } from './html-questions';

// Organize quizzes by main technology/category
export const sampleQuizzes: QuizSectionData[] = [
  // C# Section
  {
    ...csharpQuizSection,
    quizzes: [ ...csharpQuizSection.quizzes,...csharpdotnetquiz.quizzes,...dotnetcsharpquiz.quizzes]
  }
  ,
  
  // Web Development Section
  {
    ...angularQuizData,
    quizzes: [ ...angularQuizData.quizzes,...angularAdvancedQuizData.quizzes,]
  },

  {
    ...javascriptAdvancedQuizData,
    quizzes: [ ...javascriptAdvancedQuizData.quizzes,...javascriptQuiz.quizzes,]
  },

  
  
  // Database Section
  {
    ...postgresqlQuizSection,
    quizzes: [...sqldb2quiz.quizzes,...postgresqlQuizSection.quizzes]
  },
  {
    ...htmlqqq,
    quizzes: [htmlqqq]
  },
  
  // IBM i Development Section
  {
    ...rpgleQuizData,
    quizzes: [...rpgleQuizData.quizzes, ...sqlrpgleQuizData.quizzes, ...ibmiquiz.quizzes]
  }
];

