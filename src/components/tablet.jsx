import React from 'react';
import img from '../assets/images/stock.png';
import tabletImg from './tabletimg';
import { useNavigate } from 'react-router-dom';
import  img1 from '../assets/images/New.png'
import { Link } from 'react-router-dom';
export const Tablet = ({cartItem, setCartItem}) => {
  const navigate = useNavigate()

  const handleAddToCart = (product) => {

    const existingProduct = cartItem.find((item) => item.name === product.name);

    if (existingProduct) {

      existingProduct.quantity += 1;
      setCartItem([...cartItem]);
      console.log({cartItem})
      navigate('/cart')
    } else {

      product.quantity = 1;
      setCartItem([...cartItem, product]);
      console.log({cartItem})
      navigate('/cart')
    }
  };
  return (
    <div className="container">
      <h6 className='mt-4 mb-4'>Tablets</h6>
      <div className='border-bottom'></div>
      <div className="row">
        {tabletImg.map((product, index) => (
          <div className="col-6 col-md-3 col-sm-6 mb-4" key={product.id}>
            <div className="">
            <div className='pro'>
            <Link to={`/details/${product.id}`}> 
        <img src={product.image} 
          style={{ width: '100%', height: '250px', padding: '20px' }} 
          className={`card-img-top ${index === 0 ? 'indicator' : ''}`} 
          alt={product.name} />
          </Link>
        {index === 3 && (
          <span className="indicator-badge">
            <img src={img1} width={'30px'} />
          </span>
        )}
        </div>

              <div className="card-body d-flex justify-content-center flex-column">
                <h6 className="card-title text-dark text-center">
                  <img src={img} alt="stock"
                  style={{ width: '20px', height: '20px', padding: '5px' }} 
                  /> {product.name}
                </h6>
                <p className="card-text text-dark text-center">${product.price}</p>
                <div className='d-flex justify-content-center'>
                  <button
                  onClick={() => handleAddToCart(product)}
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
