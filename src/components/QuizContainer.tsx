import { useState, useEffect } from "react";
import { Quiz, QuizAnswer, QuizResult, QuizQuestion as QuizQuestionType } from "../models/QuizTypes";
import QuizQuestion from "./QuizQuestion";
import QuizProgress from "./QuizProgress";
import QuizResults from "./QuizResults";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { shuffleArray } from "@/lib/utils";

interface QuizContainerProps {
  quiz: Quiz;
  onBack: () => void;
}

const QuizContainer = ({ quiz, onBack }: QuizContainerProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestionType[]>([]);
  
  useEffect(() => {
    // Shuffle the questions when the quiz starts
    setShuffledQuestions(shuffleArray([...quiz.questions]));
    setStartTime(Date.now());
    setAnswers([]);
    setQuizCompleted(false);
    setQuizResult(null);
  }, [quiz.id, quiz.questions]);

  const handleAnswer = (answer: QuizAnswer) => {
    setAnswers([...answers, answer]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz is completed
      const correctAnswers = answers.filter(a => a.isCorrect).length;
      
      setQuizCompleted(true);
      setQuizResult({
        totalQuestions: shuffledQuestions.length,
        correctAnswers: correctAnswers,
        answers: [...answers],
        timeTaken: Date.now() - startTime,
        quizId: quiz.id
      });
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizCompleted(false);
    setQuizResult(null);
    setStartTime(Date.now());
    // Re-shuffle questions for a fresh experience
    setShuffledQuestions(shuffleArray([...quiz.questions]));
  };

  const updateQuestion = (newQuestion: QuizQuestionType) => {
    const updatedQuestions = [...shuffledQuestions];
    updatedQuestions[currentQuestionIndex] = newQuestion;
    setShuffledQuestions(updatedQuestions);
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="fade-in space-y-8">
      <div className="flex justify-between items-center">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2" 
          onClick={onBack}
        >
          <ArrowLeft size={16} /> Back to Quiz Selection
        </Button>
        
        <h1 className="text-2xl font-bold">{quiz.title}</h1>
      </div>
      
      {!quizCompleted ? (
        <>
          <QuizProgress 
            currentQuestion={currentQuestionIndex}
            totalQuestions={shuffledQuestions.length}
            correctAnswers={answers.filter(a => a.isCorrect).length}
            incorrectAnswers={answers.filter(a => !a.isCorrect).length}
          />
          
          {currentQuestion && (
            <QuizQuestion
              key={`${currentQuestion.id}-${currentQuestionIndex}`}
              question={currentQuestion}
              onAnswer={handleAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={shuffledQuestions.length}
              onUpdateQuestion={updateQuestion}
              quizId={quiz.id}
              quizTopic={quiz.title}
            />
          )}
          
          {answers.length > currentQuestionIndex && (
            <div className="flex justify-center">
              <Button 
                id="next-question-button"
                onClick={handleNextQuestion}
                size="lg"
                className="w-full max-w-md"
              >
                {currentQuestionIndex < shuffledQuestions.length - 1 
                  ? "Next Question" 
                  : "Complete Quiz"
                }
              </Button>
            </div>
          )}
        </>
      ) : (
        quizResult && (
          <QuizResults 
            result={quizResult}
            quiz={quiz}
            onRestart={handleRestartQuiz}
            onSelectNewQuiz={onBack}
          />
        )
      )}
    </div>
  );
};

export default QuizContainer;
