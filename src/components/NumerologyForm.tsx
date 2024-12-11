import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface NumerologyFormProps {
  onSubmit: (data: { birthDate: string; name: string }) => void;
}

export default function NumerologyForm({ onSubmit }: NumerologyFormProps) {
  const [birthDate, setBirthDate] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ birthDate, name });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Enter your full name"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <div className="relative">
          <input
            type="date"
            id="birthDate"
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Get Your Reading
      </button>
    </form>
  );
}