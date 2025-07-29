const CompareBar = ({ selected, onClear, onShowComparison, products }) => {
  // if less than 2 items selected, don't show the bar
  if (selected.length < 2) return null;

  //  filter selected products for display
  const selectedItems = products.filter((p) => selected.includes(p.id));

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl">
      <div className="container mx-auto px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <span className="font-bold text-gray-900 text-base sm:text-lg lg:text-sm">
                Compare Selected
              </span>
              <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm lg:text-xs font-semibold">
                {selected.length}/3
              </span>
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-3 mt-2 lg:mt-0">
              {selectedItems.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-2 bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm lg:text-xs font-medium text-gray-700 whitespace-nowrap"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 rounded-full object-cover"
                  />
                  {product.name}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 lg:mt-0">
            <button
              onClick={onShowComparison}
              className="bg-green-500 hover:bg-green-600 px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-200 text-sm sm:text-base lg:text-sm whitespace-nowrap w-full sm:w-auto"
            >
              Compare Now
            </button>
            <button
              onClick={onClear}
              className="bg-gray-500 hover:bg-gray-600 px-3 sm:px-4 lg:px-5 py-2 sm:py-2 lg:py-3 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-200 text-sm sm:text-base lg:text-sm whitespace-nowrap w-full sm:w-auto"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompareBar;
