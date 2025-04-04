
import React from 'react';
import { QuizProvider } from '../contexts/QuizContext';
import QuizContainer from '../components/QuizContainer';
import { marketingQuizQuestions } from '../data/quizQuestions';

const Index = () => {
  return (
    <QuizProvider questions={marketingQuizQuestions}>
      <QuizContainer />
    </QuizProvider>
  );
};

export default Index;
