const ProductCard = ({ product, isSelected, onToggleCompare }) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-md p-5 transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover rounded-xl"
        />
      </div>

      <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
        {product?.icon}
        <span className="uppercase tracking-wider font-medium">
          {product.category}
        </span>
      </div>

      <div className="mb-3">
        <h2 className="text-lg font-semibold text-gray-900 leading-snug">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
      </div>

      <div className="text-xl font-bold text-blue-600 mb-4">
        {product.price}
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {product?.features?.map((feature, idx) => (
          <span
            key={idx}
            className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full cursor-pointer"
          >
            {feature}
          </span>
        ))}
      </div>

      <button
        onClick={() => onToggleCompare(product.id)}
        className={`w-full py-3 rounded-lg font-semibold text-sm transition-colors duration-200 ${
          isSelected
            ? "bg-red-50 text-red-700 border border-red-200 hover:bg-red-100"
            : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
        }`}
      >
        {isSelected ? "Remove from Compare" : "Add to Compare"}
      </button>
    </div>
  );
};

export default ProductCard;
