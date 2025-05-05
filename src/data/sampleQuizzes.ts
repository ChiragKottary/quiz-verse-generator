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

// Organize quizzes by main technology/category
export const sampleQuizzes: QuizSectionData[] = [
  // C# Section
  csharpQuizSection,
  
  // Web Development Section
  {
    ...angularQuizData,
    quizzes: [ ...angularQuizData.quizzes,...angularAdvancedQuizData.quizzes,]
  },
  javascriptAdvancedQuizData,
  
  // Database Section
  {
    ...postgresqlQuizSection,
    quizzes: [...sqldb2quiz.quizzes,...postgresqlQuizSection.quizzes]
  },
  
  // IBM i Development Section
  {
    ...rpgleQuizData,
    quizzes: [...rpgleQuizData.quizzes, ...sqlrpgleQuizData.quizzes, ...ibmiquiz.quizzes]
  }
];

