
import { useState, useEffect } from "react";
import { Quiz, QuizAnswer, QuizResult } from "../models/QuizTypes";
import QuizQuestion from "./QuizQuestion";
import QuizProgress from "./QuizProgress";
import QuizResults from "./QuizResults";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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
  
  useEffect(() => {
    // Reset the quiz when a new quiz is selected
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizCompleted(false);
    setQuizResult(null);
    setStartTime(Date.now());
  }, [quiz.id]);
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  const handleAnswer = (answer: QuizAnswer) => {
    setAnswers([...answers, answer]);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300); // Delay for transition effect
    } else {
      const endTime = Date.now();
      const correctAnswers = answers.filter(answer => answer.isCorrect).length;
      
      const result: QuizResult = {
        totalQuestions: quiz.questions.length,
        correctAnswers: correctAnswers,
        answers: answers,
        timeTaken: endTime - startTime,
        quizId: quiz.id
      };
      
      setQuizResult(result);
      setQuizCompleted(true);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizCompleted(false);
    setQuizResult(null);
    setStartTime(Date.now());
  };
  
  if (quizCompleted && quizResult) {
    return (
      <QuizResults
        result={quizResult}
        quiz={quiz}
        onRestart={restartQuiz}
        onSelectNewQuiz={onBack}
      />
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft size={16} className="mr-2" /> Back to quizzes
        </Button>
        <h2 className="text-3xl font-bold">{quiz.title}</h2>
        <p className="text-muted-foreground">{quiz.description}</p>
      </div>
      
      <QuizProgress 
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={quiz.questions.length}
      />
      
      <QuizQuestion
        question={currentQuestion}
        onAnswer={handleAnswer}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={quiz.questions.length}
      />
      
      <div className="hidden">
        {/* This is a fake button to capture the next click from QuizQuestion when answer is revealed */}
        <Button onClick={handleNextQuestion} id="next-question-button" />
      </div>
    </div>
  );
};

export default QuizContainer;
