import { cn } from "@/lib/utils";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  correctAnswers?: number;
  incorrectAnswers?: number;
}

const QuizProgress = ({ currentQuestion, totalQuestions, correctAnswers = 0, incorrectAnswers = 0 }: QuizProgressProps) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-1 text-sm text-gray-500">
        <span>Question {currentQuestion + 1} of {totalQuestions}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary progress-bar-fill rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizProgress;
