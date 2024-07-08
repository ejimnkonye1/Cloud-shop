import React from 'react';
import img from '../assets/images/stock.png';
import phoneImg from './phoneimg';
import { useNavigate } from 'react-router-dom';
export const Phone = () => {
  const navigate = useNavigate()

  const handleCartPage = () => {
    navigate('/cart')
  }
  return (
    <div className="container">
      <h6 className='mt-4 mb-4'>PHONES</h6>
      <div className="row">
        {phoneImg.map((product) => (
          <div className="col-6 col-md-3 col-sm-6 mb-4" key={product.id}>
            <div className="">
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.name} 
                style={{ width: '100%', height: 'auto', padding: '20px' }} 
              />
              <div className="card-body d-flex justify-content-center flex-column">
                <h6 className="card-title text-dark text-center">
                  <img src={img} alt="stock" style={{ width: '20px', height: '20px', padding: '5px' }} /> {product.name}
                </h6>
                <p className="card-text text-dark text-center">${product.price}</p>
                <div className='d-flex justify-content-center'>
                  <button 
                  onClick={handleCartPage}
                  className='btn-sm rounded btn btn-dark' >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
