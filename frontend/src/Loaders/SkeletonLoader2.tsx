const SkeletonLoader2 = () => {
  return (
    <div className="animate-pulse p-6 w-full flex justify-evenly">
        <div className="w-3/5">
            {/* Title */}
            <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-4"></div>

            {/* Metadata */}
            <div className="flex items-center gap-4 mb-6">
            <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
            </div>

            {/* Paragraph Lines */}
            <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded-md w-11/12"></div>
            </div>
        </div>

        {/* Author Section */}
        <div className="flex gap-4">
            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col space-y-2">
                <div className="h-4 bg-gray-300 rounded-md w-32"></div>
                <div className="h-4 bg-gray-300 rounded-md w-24"></div>
                <div className="h-4 bg-gray-300 rounded-md w-12"></div>
            </div>
        </div>
    </div>
  );
};

export default SkeletonLoader2;