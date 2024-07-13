import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/productdetails.css'
import img from '../assets/images/1.jpg'

const Details = ({cartItem, setCartItem}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
 
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://timbu-get-single-product.reavdev.workers.dev/${id}`, {
          params: {
            organization_id: '3da1426372a84aa9a326fc25e5676e72',
            Appid: 'KMHXJZQFPWEQVPG',
            Apikey: '5ce287134d97472ebf05871059390c5920240712123655231083'
          }
        });
        setProduct(response.data);
        console.log(response.data.photos)
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  const updateQuantity = (increment) => {
    setQuantity(quantity + increment);
  };

  const handleAddToCart = (product) => {
    const existingProduct = cartItem.find((item) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += quantity;
      setCartItem([...cartItem]);
      console.log({ cartItem })
      navigate('/cart')
    } else {
      product.quantity = quantity;
      setCartItem([...cartItem, product]);
      console.log({ cartItem })
      navigate('/cart')
    }
  };

  return (
    <div className="product-details">
      {product.image && <img src={product.image} alt={product.name} />}

      <div className="product-page">
        <div className="carousel-container">
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {product.photos && product.photos.map((photo, index) => (
              <div key={index}>
                <img src={`/api/images/${photo.url}`} alt={product.name} className='img-fluid' width={'200px'} height={'400px'} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
        {product.current_price && <p className="product-price">${product?.current_price}</p>}

          <p className="product-description">{product.description} </p>

          {/* <div className="quantity-selector">
            <button
              onClick={() => updateQuantity(-1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="qun">{quantity}</span>
            <button onClick={() => updateQuantity(1)}>+</button>
          </div> */}
          {/* <button className="add-to-cart btn btn-dark"
            type="button"
            onClick={() => handleAddToCart(product)}
          >Add to Cart</button> */}
        </div>
      </div>
    </div>
  );
};

export default Details;