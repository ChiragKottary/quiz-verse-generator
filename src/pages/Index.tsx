
import { useState } from "react";
import { Quiz } from "../models/QuizTypes";
import { sampleQuizzes } from "../data/sampleQuizzes";
import QuizSelector from "../components/QuizSelector";
import QuizContainer from "../components/QuizContainer";

const Index = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  
  const handleSelectQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
  };
  
  const handleBackToSelector = () => {
    setSelectedQuiz(null);
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
            sections={sampleQuizzes} 
            onSelectQuiz={handleSelectQuiz} 
          />
        )}
      </div>
    </div>
  );
};

export default Index;
