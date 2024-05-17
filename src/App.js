import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
function App() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=8."
    );
    console.log("res:", response.data);
    setProducts(response.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products.map((prod) => (
        <ProductCard
          title={prod.title}
          category={prod.category}
          description={prod.description}
          image={prod.image}
          price={prod.price}
          rating={prod.rating.rate}
        />
      ))}
    </div>
  );
}

export default App;
