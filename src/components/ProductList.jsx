import React from 'react';
import ProductCard from './ProductCard'; // Composant pour afficher chaque produit individuellement

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
