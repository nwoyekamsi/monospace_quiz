
import React from 'react';
import { QuizOption as QuizOptionType } from '../contexts/QuizContext';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface QuizOptionProps {
  option: QuizOptionType;
  isSelected: boolean;
  onSelect: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ option, isSelected, onSelect }) => {
  return (
    <div 
      className={cn('quiz-option group', isSelected && 'selected')}
      onClick={onSelect}
      data-selected={isSelected}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-5 h-5 rounded border flex items-center justify-center transition-all",
          isSelected ? "border-quiz-accent bg-quiz-accent" : "border-white/30 group-hover:border-quiz-accent"
        )}>
          {isSelected && <Check className="h-3 w-3 text-black" />}
        </div>
        <h3 className="quiz-option-title">{option.title}</h3>
      </div>
      {option.description && (
        <p className="quiz-option-description pl-8">{option.description}</p>
      )}
    </div>
  );
};

export default QuizOption;
