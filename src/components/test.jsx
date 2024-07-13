import React, { useState, useEffect } from 'react';

const Test = () => {
  const [products, setProducts] = useState([]);
  const appId = 'KMHXJZQFPWEQVPG';
  const organizationId = '3da1426372a84aa9a326fc25e5676e72';
  const apiKey = '5ce287134d97472ebf05871059390c5920240712123655231083';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`api/products?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`);
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [appId, organizationId, apiKey]);

  return (
    <div>
      {products.map((product) => (
        <div className='' key={product.unique_id}>
          {/* <img src={product.image_url} alt={product.name} /> */}
          <img src={`/api/images/${product.photos[0]?.url}`} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.current_price[0]?.NGN[0]}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;