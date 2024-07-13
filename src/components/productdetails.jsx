import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`api/products/${id}`, {
          params: {
            organization_id: '3da1426372a84aa9a326fc25e5676e72',
            Appid: 'KMHXJZQFPWEQVPG',
            Apikey: '5ce287134d97472ebf05871059390c5920240712123655231083'
          }
        });
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <ul>
        <li>
          <strong>Unique ID:</strong> {product.unique_id}
        </li>
        <li>
          <strong>URL Slug:</strong> {product.url_slug}
        </li>
        <li>
          <strong>Availability:</strong> {product.is_available? 'In Stock' : 'Out of Stock'}
        </li>
        <li>
          <strong>Service:</strong> {product.is_service? 'Yes' : 'No'}
        </li>
      </ul>
      {product.photos && (
        <img src={`https://api.timbu.cloud/api/images/${product.photos[0].url}`} alt={product.name} />
      )}
    </div>
  );
};

export default Details;