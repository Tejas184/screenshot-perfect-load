
import React from 'react';
import { Loader } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-deep-navy bg-stars bg-cover bg-center flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
          You can't afford to choose the wrong web developer
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Because if you do? It means tens of thousands of dollars down the drain. Months of lost opportunity. And starting over from scratch.
        </p>
        <div className="animate-spin text-neon-purple">
          <Loader size={48} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
