import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";
import CompareBar from "../components/CompareBar";

const HomePage = () => {
  const [selected, setSelected] = useState(() => {
    return JSON.parse(localStorage.getItem("selected")) || [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [selected]);

  // toggle the compare item add or remove on list
  const toggleCompare = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const clearSelection = () => setSelected([]);

  //   filter and the display product based on serarch name or barand
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(selected, "selected");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Product Comparison
            </h1>
            <p className="text-sm text-gray-600">
              Compare your favorite products
            </p>
          </div>

          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm text-sm"
            />
          </div>
        </div>
      </header>

      <main
        className={`${
          selected.length >= 2 ? "pb-32" : "pb-8"
        } container mx-auto px-6 py-2`}
      >
        <div className="text-sm text-gray-600 mt-4">
          Showing{" "}
          <span className="font-medium text-blue-600">
            {filteredProducts.length}
          </span>{" "}
          of <span className="font-medium">{products.length}</span> products
        </div>

        {/* when product list empty or search product not fount at this time show this no product found ui */}
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No Products Found
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Sorry, no products match your search. Try adjusting your search
              term or clear the search to see all products.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <ProductGrid
            products={filteredProducts}
            selected={selected}
            onToggleCompare={toggleCompare}
          />
        )}
      </main>

      <CompareBar
        selected={selected}
        products={products}
        onClear={clearSelection}
        onShowComparison={() => navigate("/compare")}
      />
    </div>
  );
};

export default HomePage;
