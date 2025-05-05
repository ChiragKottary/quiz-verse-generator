import { useState, useEffect } from "react";
import { QuizQuestion as QuizQuestionType, QuizAnswer } from "../models/QuizTypes";
import QuizOption from "./QuizOption";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
    
    onAnswer({
      questionId: question.id,
      selectedOptionId,
      isCorrect: selectedOptionId === question.correctOptionId,
    });
  };

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      const nextButton = document.getElementById("next-question-button");
      if (nextButton) nextButton.click();
    }, 100);
  };

  return (
    <Card className={cn("quiz-card border-2", fadeIn ? "fade-in" : "opacity-0")}>
      <CardHeader className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </p>
          {isRevealed && (
            <Badge 
              variant={selectedOptionId === question.correctOptionId ? "secondary" : "destructive"}
              className={selectedOptionId === question.correctOptionId ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
            >
              {selectedOptionId === question.correctOptionId ? "Correct" : "Incorrect"}
            </Badge>
          )}
        </div>
        <h2 className="text-2xl font-semibold text-foreground">{question.question}</h2>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-3">
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
          <div className="slide-in overflow-hidden rounded-lg bg-blue-50 border border-blue-200 p-4 text-blue-900">
            <p className="font-medium mb-1">Explanation:</p>
            <p className="text-sm text-blue-800">{question.explanation}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-end pt-6">
        {isRevealed ? (
          <Button 
            onClick={handleNext} 
            className="flex items-center gap-2 min-w-[140px]"
          >
            Next Question <ArrowRight size={16} />
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit} 
            disabled={!selectedOptionId}
            className="min-w-[140px]"
          >
            Submit Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizQuestion;
