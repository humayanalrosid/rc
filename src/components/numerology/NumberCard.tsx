import React from 'react';

interface NumberCardProps {
  title: string;
  number: number;
  description: string;
  icon: React.ReactNode;
}

export function NumberCard({ title, number, description, icon }: NumberCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="flex items-center gap-4 mb-3">
        <span className="text-4xl font-bold text-purple-600">{number}</span>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}