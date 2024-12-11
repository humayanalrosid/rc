import React from 'react';
import { Heart } from 'lucide-react';
import CompatibilityChecker from './components/CompatibilityChecker';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex items-center justify-center font-poppins">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">Relationship Compatibility</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how compatible you are with your partner through numerology.
            Enter both birth dates below to calculate your compatibility score.
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <CompatibilityChecker />
        </div>
      </div>
    </div>
  );
}