
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`rounded-md bg-quiz-accent flex items-center justify-center ${sizeClasses[size]}`}>
        <span className="font-sans font-bold text-black text-lg md:text-xl">Q</span>
      </div>
      <span className="font-sans font-bold text-xl md:text-2xl text-white">Quizzy</span>
    </div>
  );
};

export default Logo;
