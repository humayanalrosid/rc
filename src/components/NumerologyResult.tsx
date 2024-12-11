import React from 'react';
import { Star, Heart, Brain, User, Calendar } from 'lucide-react';
import { NumberCard } from './numerology/NumberCard';
import {
  getLifePathDescription,
  getDestinyDescription,
  getSoulUrgeDescription,
} from '../utils/numerologyDescriptions';

interface NumerologyResultProps {
  numbers: {
    lifePath: number;
    destiny: number;
    soulUrge: number;
    personality: number;
    birthDay: number;
  };
}

export default function NumerologyResult({ numbers }: NumerologyResultProps) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NumberCard
          title="Life Path Number"
          number={numbers.lifePath}
          description={getLifePathDescription(numbers.lifePath)}
          icon={<Star className="h-6 w-6 text-purple-500" />}
        />
        
        <NumberCard
          title="Destiny Number"
          number={numbers.destiny}
          description={getDestinyDescription(numbers.destiny)}
          icon={<Calendar className="h-6 w-6 text-blue-500" />}
        />
        
        <NumberCard
          title="Soul Urge Number"
          number={numbers.soulUrge}
          description={getSoulUrgeDescription(numbers.soulUrge)}
          icon={<Heart className="h-6 w-6 text-red-500" />}
        />
        
        <NumberCard
          title="Personality Number"
          number={numbers.personality}
          description="Your outer personality and how others perceive you initially."
          icon={<User className="h-6 w-6 text-green-500" />}
        />
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Brain className="h-6 w-6 text-purple-600" />
          Your Numerology Summary
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Your Life Path Number {numbers.lifePath} combines with your Destiny Number {numbers.destiny} 
          to create a unique journey of personal growth and achievement. Your Soul Urge Number {numbers.soulUrge} 
          reveals your inner desires and motivations, while your Personality Number {numbers.personality} 
          shows how you present yourself to the world.
        </p>
      </div>
    </div>
  );
}