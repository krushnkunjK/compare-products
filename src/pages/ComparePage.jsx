import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";
import ComparisonView from "../components/ComparisonView";

const ComparePage = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("selected")) || [];
    setSelected(stored);
  }, []);

  // remove one item from the comparison and updqate the local storage
  const removeOne = (id) => {
    const updated = selected.filter((i) => i !== id);
    setSelected(updated);
    localStorage.setItem("selected", JSON.stringify(updated));
  };

  return (
    <ComparisonView
      selected={selected}
      onClose={() => navigate("/")}
      onRemove={removeOne}
      products={products}
    />
  );
};

export default ComparePage;
