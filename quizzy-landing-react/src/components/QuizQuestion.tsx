
import React from 'react';
import QuizOption from './QuizOption';
import { useQuiz, QuizQuestion as QuizQuestionType } from '../contexts/QuizContext';

interface QuizQuestionProps {
  question: QuizQuestionType;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question }) => {
  const { answers, selectAnswer } = useQuiz();
  const selectedOptionId = answers[question.id];

  return (
    <div className="animate-fade-in max-w-4xl mx-auto w-full">
      <h2 className="text-2xl md:text-3xl font-medium mb-8">
        {question.question}
      </h2>
      
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option) => (
          <QuizOption
            key={option.id}
            option={option}
            isSelected={selectedOptionId === option.id}
            onSelect={() => selectAnswer(question.id, option.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
