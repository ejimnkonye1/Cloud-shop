import React, { useEffect, useState } from 'react';
// import products from './productimages';
import { NewsLetter } from './newsletter';
import img from '../assets/images/stock.png';
import { Phone } from './phone';
import { Tablet } from './tablet';
import { HomeImg } from './home';
import { useNavigate } from 'react-router-dom';
import { Ads } from './ads';
import  img1 from '../assets/images/New.png'
import axios from 'axios';
import Test from './test';
import { Link } from 'react-router-dom';
export const Products = ({cartItem,setCartItem}) => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
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
    <section>
      <Ads />
      <div className='d-none d-lg-block'>
        <HomeImg />
      </div>

      <div className="container">
        <h6 className='mt-4 mb-4 '>TOP PRODUCTS</h6>
        <div className='border-bottom'></div>
        <div className="row">
  {products.map((product, index) => (
    <div className="col-6 col-lg-3 col-md-3 col-sm-3 border-height mb-4" key={product.id}>
      <div className="">
        <div className='pro'>
        <Link to={`/details/${product.id}`}> 
        <img src={`/api/images/${product.photos[0]?.url}`} alt={product.name} 
          style={{ width: '100%', height: '250px', padding: '20px' }} 
          className={`card-img-top ${index === 0 ? 'indicator' : ''}`} 
           />
           </Link>
        {index === 0 && (
          <span className="indicator-badge">
            <img src={img1} width={'30px'} />
          </span>
        )}
        </div>
        <div className="card-body d-flex justify-content-center flex-column">
          <h6 className="card-title text-dark text-center">
            <img src={img} className='img-fluid' alt="stock" 
            style={{ width: '20px', height: '20px', padding: '5px' }} 
            /> {product.name}
          </h6>
          <p className="card-text text-dark text-center">${product.current_price[0]?.NGN[0]}</p>
          <div className='d-flex justify-content-center'>
            <button
            
            className='cart-button btn-sm rounded btn btn-dark' >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        <Phone />
        <Tablet cartItem={cartItem} setCartItem={setCartItem} />
        <NewsLetter />
        <Test />
      </div>
    </section>
  );
};
