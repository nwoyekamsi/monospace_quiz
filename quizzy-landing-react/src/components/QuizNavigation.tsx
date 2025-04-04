
import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const QuizNavigation: React.FC = () => {
  const { 
    currentQuestionIndex, 
    questions, 
    nextQuestion, 
    prevQuestion,
    answers
  } = useQuiz();
  
  const currentQuestion = questions[currentQuestionIndex];
  const hasAnswer = currentQuestion && answers[currentQuestion.id];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handlePrevClick = () => {
    console.log("Previous button clicked");
    if (!isFirstQuestion) {
      prevQuestion();
    }
  };

  return (
    <div className="flex justify-between items-center mt-8">
      <Button
        onClick={handlePrevClick}
        disabled={isFirstQuestion}
        variant="outline"
        className="flex items-center gap-2 text-white border-white/20 hover:bg-white/10"
      >
        <ArrowLeft className="h-4 w-4" />
        Previous
      </Button>
      
      <Button
        onClick={nextQuestion}
        className="quiz-button"
        disabled={!hasAnswer}
      >
        {isLastQuestion ? 'Submit Results' : 'Next'}
        {!isLastQuestion && <ArrowRight className="h-4 w-4 ml-2" />}
      </Button>
    </div>
  );
};

export default QuizNavigation;
