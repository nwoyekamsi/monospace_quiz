
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

// Define the question and answer types
export interface QuizOption {
  id: string;
  title: string;
  description: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

// Define the context type
interface QuizContextType {
  currentQuestionIndex: number;
  questions: QuizQuestion[];
  answers: Record<string, string>;
  isComplete: boolean;
  currentProgress: number;
  selectAnswer: (questionId: string, optionId: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  restartQuiz: () => void;
}

// Create the context
const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Define the provider props
interface QuizProviderProps {
  children: ReactNode;
  questions: QuizQuestion[];
}

// Create the provider component
export const QuizProvider: React.FC<QuizProviderProps> = ({ 
  children, 
  questions 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const currentProgress = questions.length > 0 
    ? Math.round(((currentQuestionIndex) / questions.length) * 100) 
    : 0;

  const selectAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const nextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Check if an answer was selected for the current question
    if (!answers[currentQuestion.id]) {
      toast.error("Please select an answer before proceeding");
      return;
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Quiz is complete
      setIsComplete(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsComplete(false);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        questions,
        answers,
        isComplete,
        currentProgress,
        selectAnswer,
        nextQuestion,
        prevQuestion,
        restartQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

// Create a hook to use the quiz context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
