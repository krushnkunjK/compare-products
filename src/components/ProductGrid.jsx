import ProductCard from "./ProductCard";

const ProductGrid = ({ products, selected, onToggleCompare }) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSelected={selected.includes(product.id)}
          onToggleCompare={onToggleCompare}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
