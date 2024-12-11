import React from 'react';
import { DateInput } from '../shared/DateInput';

interface CompatibilityFormProps {
  date1: string;
  date2: string;
  onDateChange1: (date: string) => void;
  onDateChange2: (date: string) => void;
  onSubmit: () => void;
}

export function CompatibilityForm({
  date1,
  date2,
  onDateChange1,
  onDateChange2,
  onSubmit,
}: CompatibilityFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DateInput
          id="date1"
          label="Your Birth Date"
          value={date1}
          onChange={onDateChange1}
          accentColor="purple"
        />

        <DateInput
          id="date2"
          label="Your Partner's Birth Date"
          value={date2}
          onChange={onDateChange2}
          accentColor="purple"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
      >
        Calculate Compatibility
      </button>
    </form>
  );
}