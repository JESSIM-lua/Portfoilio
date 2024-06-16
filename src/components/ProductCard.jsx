import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{`Temps: ${product.time} heures`}</p>
      <button><a href={product.link} className='button' target='blank'>Lien du projet</a></button>
    </div>
  );
}

export default ProductCard;
