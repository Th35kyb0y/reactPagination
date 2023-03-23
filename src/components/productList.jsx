import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className='pc'>
      {products.map((product) => (
        <div key={product.id}>
            <img src={product.thumbnail}  />
          <h5>{product.title}</h5>
<p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;