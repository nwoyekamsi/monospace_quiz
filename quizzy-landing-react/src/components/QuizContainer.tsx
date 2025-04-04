
import React, { useState } from 'react';
import QuizIntro from './QuizIntro';
import QuizHeader from './QuizHeader';
import QuizQuestion from './QuizQuestion';
import QuizNavigation from './QuizNavigation';
import QuizResults from './QuizResults';
import Footer from './Footer';
import { useQuiz } from '../contexts/QuizContext';

const QuizContainer: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const { currentQuestionIndex, questions, isComplete } = useQuiz();

  const handleStart = () => {
    setShowIntro(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col min-h-screen">
      {!showIntro && <QuizHeader />}
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {showIntro ? (
          <QuizIntro onStart={handleStart} />
        ) : isComplete ? (
          <QuizResults />
        ) : (
          <div className="quiz-container p-6 md:p-10">
            <QuizQuestion question={currentQuestion} />
            <QuizNavigation />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizContainer;
