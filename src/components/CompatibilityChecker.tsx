import React, { useState } from 'react';
import { calculateCompatibility } from '../utils/compatibilityCalculations';
import { CompatibilityForm } from './compatibility/CompatibilityForm';
import { CompatibilityResult } from './compatibility/CompatibilityResult';

export default function CompatibilityChecker() {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [result, setResult] = useState<{ score: number; description: string } | null>(null);

  const handleCheck = () => {
    if (date1 && date2) {
      const compatibility = calculateCompatibility(date1, date2);
      setResult(compatibility);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <CompatibilityForm
          date1={date1}
          date2={date2}
          onDateChange1={setDate1}
          onDateChange2={setDate2}
          onSubmit={handleCheck}
        />
        {result && <CompatibilityResult result={result} />}
      </div>
    </div>
  );
}