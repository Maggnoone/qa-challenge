import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    fetch(`${API_URL}/api/Product`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 data-cy="product-list-title">Product List</h2>
      <ul data-cy="product-list">
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
