import React from 'react';
import { Heart } from 'lucide-react';

interface CompatibilityResultProps {
  result: {
    score: number;
    description: string;
  };
}

export function CompatibilityResult({ result }: CompatibilityResultProps) {
  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <Heart className="h-5 w-5 text-purple-500" />
          Compatibility Score
        </h3>
        <span className="text-3xl font-bold text-purple-600">{result.score}/10</span>
      </div>
      <p className="text-gray-700 leading-relaxed">{result.description}</p>
    </div>
  );
}