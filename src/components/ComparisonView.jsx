import { X } from "lucide-react";

const ComparisonView = ({ selected, onClose, onRemove, products }) => {
  // filter selected products for display
  const selectedProducts = products.filter((p) => selected.includes(p.id));

  //   display the count of the remaining items that can be selected
  const remainItemCount = 3 - (selectedProducts?.length || 3);

  console.log(selectedProducts, "selectedProducts");

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-auto">
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Product Comparison
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Compare {selectedProducts.length} of 3 products side by side
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <X className="w-5 h-5" />
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* for mobile */}
        <div className="block lg:hidden space-y-6">
          {selectedProducts.length < 2 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Only {remainItemCount} Item Selected
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                You need at least 2 items to compare. Capacity: 3/3.
              </p>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Add Item
              </button>
            </div>
          ) : (
            selectedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {product.brand}
                      </p>
                      <p className="text-lg sm:text-xl font-semibold text-blue-600">
                        {product.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(product.id)}
                    className="mt-2 sm:mt-0 p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* for pc */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-4 gap-0">
              <div className="bg-gray-50 p-6 border-r border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Products
                </h3>
              </div>
              {selectedProducts.length < 2 ? (
                <div className="col-span-3 bg-white p-6 text-center border-r border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Only {remainItemCount} Item Selected
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    You need at least 2 items to compare. Capacity: 3/3.
                  </p>
                  <button
                    onClick={() => (window.location.href = "/")}
                    className="bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Add Item
                  </button>
                </div>
              ) : (
                selectedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-50 p-6 border-r border-gray-200 last:border-r-0"
                  >
                    <div className="text-center">
                      <div className="flex justify-end mb-4">
                        <button
                          onClick={() => onRemove(product.id)}
                          className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-lg mx-auto mb-4 shadow-md"
                      />
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {product.brand}
                      </p>
                      <p className="text-lg sm:text-xl font-semibold text-blue-600">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {selectedProducts.length >= 2 && (
              <div className="border-t border-gray-200">
                <div className="grid grid-cols-4 gap-0">
                  <div className="bg-white p-6 border-r border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Key Features
                    </h4>
                  </div>
                  {selectedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white p-6 border-r border-gray-200 last:border-r-0"
                    >
                      <div className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;
