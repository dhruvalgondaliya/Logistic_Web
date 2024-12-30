import { Truck } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Truck className="h-8 w-8 text-orange-500" />
      <span className="text-xl font-bold text-gray-900">LogiTrans</span>
    </div>
  );
}