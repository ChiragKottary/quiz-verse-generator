import { useState } from "react";
import { Quiz } from "../models/QuizTypes";
import { sampleQuizzes } from "../data/sampleQuizzes";
import QuizSelector from "../components/QuizSelector";
import QuizContainer from "../components/QuizContainer";
import { generateQuestions } from "../lib/gemini";

const Index = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [quizSections, setQuizSections] = useState(sampleQuizzes);
  
  const handleSelectQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
  };
  
  const handleBackToSelector = () => {
    setSelectedQuiz(null);
  };

  const handleGenerateNewQuestions = async (quizId: string, topic: string) => {
    try {
      const updatedSections = [...quizSections];
      let targetQuiz: Quiz | null = null;
      let sectionIndex = -1;
      let quizIndex = -1;

      // Find the quiz and its section
      for (let i = 0; i < updatedSections.length; i++) {
        const foundQuizIndex = updatedSections[i].quizzes.findIndex(q => q.id === quizId);
        if (foundQuizIndex !== -1) {
          sectionIndex = i;
          quizIndex = foundQuizIndex;
          targetQuiz = updatedSections[i].quizzes[quizIndex];
          break;
        }
      }

      if (!targetQuiz || sectionIndex === -1 || quizIndex === -1) {
        console.error("Quiz not found");
        return;
      }

      // Generate new questions (10 questions)
      const newQuestions = await generateQuestions({
        topic: topic || targetQuiz.title,
        numberOfQuestions: 10,
        difficulty: 'medium',
        quizId: quizId
      });

      // Update the quiz with new questions
      const updatedQuiz = {
        ...targetQuiz,
        questions: newQuestions
      };

      // Update the quiz in our section
      updatedSections[sectionIndex].quizzes[quizIndex] = updatedQuiz;
      setQuizSections(updatedSections);
    } catch (error) {
      console.error("Error generating new questions:", error);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20 py-10 px-4">
      <div className="max-w-5xl mx-auto quiz-container">
        {selectedQuiz ? (
          <QuizContainer 
            quiz={selectedQuiz} 
            onBack={handleBackToSelector} 
          />
        ) : (
          <QuizSelector 
            sections={quizSections} 
            onSelectQuiz={handleSelectQuiz}
            onGenerateNewQuestions={handleGenerateNewQuestions}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
