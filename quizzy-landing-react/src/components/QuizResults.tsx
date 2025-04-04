
import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { Button } from '@/components/ui/button';
import { RefreshCw, Download } from 'lucide-react';

const QuizResults: React.FC = () => {
  const { answers, questions, restartQuiz } = useQuiz();
  
  // Calculate the score based on answers
  const answeredQuestions = Object.keys(answers).length;
  const score = Math.round((answeredQuestions / questions.length) * 100);
  
  // Determine readiness level based on score
  let readinessLevel = "Low";
  let message = "Your campaign needs significant preparation before launching.";
  let tips = [
    "Define your target audience clearly",
    "Create a detailed marketing strategy",
    "Set up proper tracking for campaign metrics"
  ];
  
  if (score >= 70) {
    readinessLevel = "High";
    message = "Your campaign looks ready to launch! Just a few final touches needed.";
    tips = [
      "Review your campaign analytics setup",
      "Consider A/B testing key elements",
      "Prepare a post-campaign analysis plan"
    ];
  } else if (score >= 40) {
    readinessLevel = "Medium";
    message = "You've made good progress, but there are some important areas to address.";
    tips = [
      "Refine your audience segmentation",
      "Develop more targeted messaging",
      "Optimize your landing pages for conversion"
    ];
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 animate-fade-in">
      <div className="quiz-container p-8 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Your Campaign Readiness Score
        </h2>
        
        <div className="mb-8 flex flex-col items-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-quiz-accent via-cyan-400 to-quiz-accent flex items-center justify-center mb-4">
            <span className="text-4xl font-bold text-black">{score}%</span>
          </div>
          <p className="text-xl font-medium">
            Readiness Level: <span className="text-quiz-accent">{readinessLevel}</span>
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Summary</h3>
          <p className="text-quiz-muted">{message}</p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Recommended Next Steps</h3>
          <ul className="list-disc pl-5 text-quiz-muted">
            {tips.map((tip, index) => (
              <li key={index} className="mb-2">{tip}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <Button 
            className="quiz-button flex items-center gap-2"
            variant="outline"
          >
            <Download className="h-4 w-4" />
            Download Report
          </Button>
          
          <Button onClick={restartQuiz} className="quiz-button flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Restart Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
