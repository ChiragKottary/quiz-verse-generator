
import { useState, useEffect } from "react";
import { QuizQuestion as QuizQuestionType, QuizAnswer } from "../models/QuizTypes";
import QuizOption from "./QuizOption";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (answer: QuizAnswer) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion = ({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
}: QuizQuestionProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    // Reset state when question changes
    setSelectedOptionId(null);
    setIsRevealed(false);
    setFadeIn(true);
  }, [question.id]);

  const handleOptionSelect = (optionId: string) => {
    if (isRevealed) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId) return;
    
    setIsRevealed(true);
    
    const isCorrect = selectedOptionId === question.correctOptionId;
    
    onAnswer({
      questionId: question.id,
      selectedOptionId,
      isCorrect,
    });
  };

  const handleNext = () => {
    setFadeIn(false);
    // Trigger the hidden next button in the parent component
    setTimeout(() => {
      const nextButton = document.getElementById("next-question-button");
      if (nextButton) nextButton.click();
    }, 100);
  };

  return (
    <div className={cn("quiz-card p-1", fadeIn ? "fade-in" : "opacity-0")}>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </h3>
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-6">{question.question}</h2>
        
        <div className="space-y-3">
          {question.options.map((option) => (
            <QuizOption
              key={option.id}
              option={option}
              isSelected={selectedOptionId === option.id}
              isCorrect={isRevealed && option.id === question.correctOptionId}
              isRevealed={isRevealed}
              onSelect={() => handleOptionSelect(option.id)}
              disabled={isRevealed}
            />
          ))}
        </div>
        
        {isRevealed && question.explanation && (
          <div className={cn(
            "mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200",
            "text-blue-800 text-sm animate-fade-in"
          )}>
            <p className="font-medium mb-1">Explanation:</p>
            <p>{question.explanation}</p>
          </div>
        )}
        
        <div className="mt-8 flex justify-end">
          {isRevealed ? (
            <Button 
              onClick={handleNext} 
              className="flex items-center gap-2"
            >
              Next Question <ArrowRight size={16} />
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              disabled={!selectedOptionId}
            >
              Submit Answer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
