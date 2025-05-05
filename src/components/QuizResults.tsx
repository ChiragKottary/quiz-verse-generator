
import { useEffect, useState } from "react";
import { QuizResult, Quiz } from "../models/QuizTypes";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

interface QuizResultsProps {
  result: QuizResult;
  quiz: Quiz;
  onRestart: () => void;
  onSelectNewQuiz: () => void;
}

const QuizResults = ({ result, quiz, onRestart, onSelectNewQuiz }: QuizResultsProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  const score = Math.round((result.correctAnswers / result.totalQuestions) * 100);
  const scoreColor = score >= 80 ? "text-green-500" : score >= 50 ? "text-amber-500" : "text-red-500";
  const minutes = Math.floor(result.timeTaken / 60000);
  const seconds = ((result.timeTaken % 60000) / 1000).toFixed(0);
  const timeFormatted = `${minutes}m ${seconds}s`;

  useEffect(() => {
    if (score >= 70) {
      setShowConfetti(true);
      createConfetti();
    }
  }, [score]);

  const createConfetti = () => {
    const colors = ["#8B5CF6", "#EC4899", "#F59E0B", "#10B981"];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        const size = Math.random() * 12 + 6;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : `${Math.random() * 4 + 2}px`;
        
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          document.body.removeChild(confetti);
        }, 5000);
      }, i * 20);
    }
    
    // Add animation style
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 fade-in">
      <h2 className="text-3xl font-bold mb-6 text-center">Quiz Complete!</h2>
      
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-36 h-36 mb-4">
          <div className="absolute inset-0 rounded-full bg-gray-100"></div>
          <div 
            className="absolute inset-0 rounded-full border-8 border-primary"
            style={{ 
              clipPath: `polygon(50% 50%, 50% 0, ${score >= 25 ? '100% 0' : '50% 0'}, ${score >= 50 ? '100% 100%' : score >= 25 ? '100% 50%' : '50% 0'}, ${score >= 75 ? '0 100%' : score >= 50 ? '50% 100%' : score >= 25 ? '100% 50%' : '50% 0'}, ${score >= 100 ? '0 0' : score >= 75 ? '0 50%' : score >= 50 ? '50% 100%' : score >= 25 ? '100% 50%' : '50% 0'}, 50% 0)`
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-4xl font-bold ${scoreColor}`}>{score}%</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold">
          You scored {result.correctAnswers} out of {result.totalQuestions}
        </h3>
        <p className="text-gray-600 mt-1">Time taken: {timeFormatted}</p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-medium mb-3">Quiz Summary</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Total Questions:</span>
            <span className="font-medium">{result.totalQuestions}</span>
          </li>
          <li className="flex justify-between">
            <span>Correct Answers:</span>
            <span className="font-medium text-green-600">{result.correctAnswers}</span>
          </li>
          <li className="flex justify-between">
            <span>Incorrect Answers:</span>
            <span className="font-medium text-red-600">{result.totalQuestions - result.correctAnswers}</span>
          </li>
          <li className="flex justify-between">
            <span>Accuracy:</span>
            <span className={`font-medium ${scoreColor}`}>{score}%</span>
          </li>
        </ul>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="outline" 
          className="flex-1 flex items-center justify-center gap-2" 
          onClick={onRestart}
        >
          <RefreshCcw size={16} />
          Restart Quiz
        </Button>
        <Button 
          className="flex-1" 
          onClick={onSelectNewQuiz}
        >
          Try Another Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;
