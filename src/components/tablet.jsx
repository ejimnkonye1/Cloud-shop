
import React from 'react';
import img from '../assets/images/stock.png'
import { useNavigate } from 'react-router-dom';
import tabletImg from './tabletimg';
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
        return(
            <div className="container">
            <h6 className='mt-4 mb-4'>Tablets</h6>
            <div className="row">
              {tabletImg.map((product) => (
                <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
                  <div className="">
                      <img src={product.image} className="card-img-top" height={''} alt={product.name} />
                    <div className="card-body d-flex justify-content-center flex-column">
                  
                      <h6 className="card-title text-dark text-center">  <img src={img} /> {product.name}</h6>
                      <p className="card-text text-dark text-center">${product.price}</p>
                      <div className='d-flex justify-content-center'>
                      <button className=' rounded btn btn-dark'
                      onClick={() => handleAddToCart(product)}
                      >Add to cart</button>
                      </div>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
       
            
          </div>
        )
    }