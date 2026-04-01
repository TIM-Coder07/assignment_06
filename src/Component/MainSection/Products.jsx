import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ handelCart }) => {
  const [productData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {productData.map((data) => (
        <ProductsCard key={data.id} product={data} handelCart={handelCart} />
      ))}
    </div>
  );
};

export default Products;
