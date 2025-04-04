
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center items-start text-left px-4 md:px-12 py-10 quiz-container animate-fade-in">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        Discover how your marketing<br />campaign stacks up!
      </h1>
      
      <p className="text-lg text-quiz-muted max-w-2xl mb-4">
        This 7-minute quiz is designed to help you determine which phase of marketing maturity 
        your organization is currently in, and provide proven recommendations and next steps for scaling marketing at your organization.
      </p>
      
      <h2 className="text-xl font-medium mb-3 mt-6">What will you get?</h2>
      
      <p className="text-lg text-quiz-muted max-w-2xl mb-8">
        In addition to receiving your marketing maturity benchmark, you will get actionable insights 
        and a resource package to take your marketing program to the next level.
      </p>
      
      <Button onClick={onStart} className="quiz-button flex items-center gap-2 mt-4">
        Get Started!
        <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default QuizIntro;
