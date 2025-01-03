import { Check } from 'lucide-react';

interface PricingFeatureProps {
  text: string;
}

export default function PricingFeature({ text }: PricingFeatureProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
        <Check className="w-3 h-3 text-teal-600" />
      </div>
      <span className="text-gray-600">{text}</span>
    </div>
  );
}