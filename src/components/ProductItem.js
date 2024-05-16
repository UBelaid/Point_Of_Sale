import React from "react";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item" onClick={() => addToCart(product)}>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price.toFixed(2)}/kg</p>
    </div>
  );
};

export default ProductItem;
