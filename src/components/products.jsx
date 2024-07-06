import React from 'react';
import products from './productimages';
import { NewsLetter } from './newsletter';
import img from '../assets/images/stock.png'
import { useNavigate } from 'react-router-dom';
export const Products = ({cartItem, setCartItem}) => {
const navigate = useNavigate()
    const handleAddToCart = (product) => {
        // Check if the product is already in the cart
        const existingProduct = cartItem.find((item) => item.price === product.price);
      
        if (existingProduct) {
          // If the product exists in the cart, increase its quantity by 1
          existingProduct.quantity += 1;
          setCartItem([...cartItem]);
          console.log({cartItem})
          navigate('/cart')
        } else {
          // If the product is not in the cart, add it with a quantity of 1
          product.quantity = 1;
          setCartItem([...cartItem, product]);
          console.log({cartItem})
          navigate('/cart')
        }
      };
    return(
        <div className="container">
        <h6 className='mt-4 mb-4'>FEATURED PRODUCTS</h6>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
              <div className="">
                  <img src={product.image} className="card-img-top" height={''} alt={product.name} />
                <div className="card-body d-flex justify-content-center flex-column">
              
                  <h6 className="card-title text-success text-center">  <img src={img} /> {product.name}</h6>
                  <p className="card-text text-danger text-center">${product.price}</p>
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
        <NewsLetter />
      </div>
    )
}

