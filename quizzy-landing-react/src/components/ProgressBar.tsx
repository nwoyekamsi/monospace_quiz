
import React, { useEffect, useRef } from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.setProperty('--progress-width', `${progress}%`);
    }
  }, [progress]);

  return (
    <div className="progress-bar w-full">
      <div
        ref={progressBarRef}
        className="progress-bar-fill"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressBar;
