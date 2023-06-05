import React from "react";
import products_data from "@/data/product_data.json";
import ProductDetailPage from "@/views/ProductDetailPage";

async function ProductDetail({ params }: { params: { id: number } }) {
  const productId = params.id;

  const productObj = products_data.find((product) => product.id === productId);
  
  return <ProductDetailPage product={productObj} />;
}

export default ProductDetail;
