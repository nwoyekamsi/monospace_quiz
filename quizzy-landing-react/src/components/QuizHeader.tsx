
import React from 'react';
import Logo from './Logo';
import ProgressBar from './ProgressBar';
import { useQuiz } from '../contexts/QuizContext';

const QuizHeader: React.FC = () => {
  const { currentProgress } = useQuiz();

  return (
    <header className="py-6 mb-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="w-10 h-10">
            {/* Placeholder for menu button */}
          </div>
        </div>
        
        <div className="mt-6">
          <ProgressBar progress={currentProgress} />
        </div>
      </div>
    </header>
  );
};

export default QuizHeader;
