import { fetchProducts } from "@/api/productsApi";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  useEffect(() => {
    fetchProducts()
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return <div>ProductsPage</div>;
};

export default ProductsPage;
