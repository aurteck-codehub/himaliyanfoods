import React from "react";
import CategoryPage from "@/views/CategoryPage";

import category_data from "@/data/category_data.json";
import products_data from "@/data/product_data.json";

async function CategoryProductList({ params }: { params: { code: string } }) {
  const categoryCode: string = params.code;
  const categoryObj = category_data.find(
    (category) => category.code === categoryCode
  );
  const productObj = products_data.filter(
    (product) => product.category_code === categoryCode
  );

  const result = {
    category: categoryObj,
    products: productObj,
  };

  return <CategoryPage result={result} />;
}

export default CategoryProductList;
