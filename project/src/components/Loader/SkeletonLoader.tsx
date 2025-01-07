
export function SkeletonLoader() {
    return (
      <div className="space-y-8 py-10">
        {/* Skeleton for Image */}
        <div className="w-full h-72 bg-gray-300 animate-pulse rounded-md"></div>
  
        {/* Skeleton for Text */}
        <div className="w-full h-8 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="w-3/4 h-6 bg-gray-300 animate-pulse rounded-md"></div>
  
        {/* Skeleton for Button */}
        <div className="w-40 h-10 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
    );
  }
  