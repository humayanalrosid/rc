import React from 'react';

interface DateInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  accentColor?: string;
}

export function DateInput({
  id,
  label,
  value,
  onChange,
  accentColor = 'red'
}: DateInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="date"
        id={id}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-${accentColor}-500 focus:border-transparent transition-shadow`}
      />
    </div>
  );
}