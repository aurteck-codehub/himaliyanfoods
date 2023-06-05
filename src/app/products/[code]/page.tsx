import React from "react";
import products_data from "@/data/product_data.json";
import ProductDetailPage from "@/views/ProductDetailPage";

async function ProductDetail({ params }: { params: { code: string } }) {
  const productId = params.code;

  const productObj = products_data.find(
    (product) => product.product_code === productId
  );

  return <ProductDetailPage product={productObj} />;
}

export default ProductDetail;
