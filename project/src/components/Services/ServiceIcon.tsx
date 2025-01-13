
interface ServiceIconProps {
  children: string;
}

export default function ServiceIcon({ children }: ServiceIconProps) {
  return (
    <div className="relative">
      <div className="w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 bg-orange-500 rounded-lg transform rotate-12 hover:rotate-infinity hover:bg-orange-500 transition-all duration-300 ease-in-out" />
        <div className="absolute inset-0 bg-teal-500 rounded-lg transform -rotate-12 hover:rotate-infinity hover:bg-teal-500 transition-all duration-300 ease-in-out" />
        <div className="relative text-orange-500">
          {children}
        </div>
      </div>
    </div>
  );
}
