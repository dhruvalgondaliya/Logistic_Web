import React from 'react';
import { Globe } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-8 w-8 text-teal-600" />
      <span className="text-2xl font-bold text-teal-600">Loraic</span>
    </div>
  );
}