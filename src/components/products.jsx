import React from 'react';
import products from './productimages';
import { NewsLetter } from './newsletter';
import img from '../assets/images/stock.png';
import { Phone } from './phone';
import { Tablet } from './tablet';
import { HomeImg } from './home';
import { useNavigate } from 'react-router-dom';
export const Products = () => {
  const navigate = useNavigate()

  const handleCartPage = () => {
    navigate('/cart')
  }
  return (
    <section>
      <div className='d-none d-lg-block'>
        <HomeImg />
      </div>

      <div className="container">
        <h6 className='mt-4 mb-4'>TOP PRODUCTS</h6>
        <div className="row">
          {products.map((product) => (
            <div className="col-6 col-lg-3 col-md-3 col-sm-3 border-height mb-4" key={product.id}>
              <div className="">
                <img src={product.image} 
                 style={{ width: '100%', height: 'auto', padding: '20px' }} 
                className="card-img-top" alt={product.name} />
                <div className="card-body d-flex justify-content-center flex-column">
                  <h6 className="card-title text-dark text-center">
                    <img src={img} className='img-fluid' alt="stock" 
                    style={{ width: '20px', height: '20px', padding: '5px' }} 
                    /> {product.name}
                  </h6>
                  <p className="card-text text-dark text-center">${product.price}</p>
                  <div className='d-flex justify-content-center'>
                    <button
                        onClick={handleCartPage}
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
        <Tablet />
        <NewsLetter />
      </div>
    </section>
  );
};
