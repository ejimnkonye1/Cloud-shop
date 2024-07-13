import React, { useState, useEffect } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/images/Rectangle 17.png'
import img2 from '../assets/images/tab5.png'
import { Link } from 'react-router-dom';



export const Cart = ({cartItem,setCartItem}) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleGoShop = () => {
    navigate('/');
  };

  const calculateUpdatedPrice = (item) => {
    return (parseFloat(item.current_price[0].NGN[0]) * item.quantity).toFixed(0);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItem) {
      totalPrice += parseFloat(item.current_price[0].NGN[0]) * item.quantity;
    }
    return totalPrice.toFixed(0);
  };

  const calculateTotalFinalPrice = () => {
    let totalPrice = calculateTotalPrice();
    const deliveryCharge = 20;
    return (parseFloat(totalPrice) + deliveryCharge).toFixed(0);
  };

  const updateQuantity = (index, increment) => {
    const updatedCart = [...cartItem];
    updatedCart[index].quantity += increment;
    if (updatedCart[index].quantity < 1) {
      // Remove the item from the cart if quantity becomes zero or negative
      updatedCart.splice(index, 1);
    }
    setCartItem(updatedCart);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItem];
    updatedCartItems.splice(index, 1);
    setCartItem(updatedCartItems);
  };

  const ClearCart = () => {
    setCartItem([]);
  };

  useEffect(() => {
    // Retrieve cart items from localStorage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
    setCartItem(storedCartItems);
  }, []);

  useEffect(() => {
    // Update localStorage whenever cartItems change
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);

  return (

   
    <div className='container'>
      <nav style={{ '--bs-breadcrumb-divider': "'>'" }} className='mt-3 container' aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-reset"><p href="#">Home</p></li>
          <li className="breadcrumb-item active" aria-current="page">My shopping cart</li>
        </ol>
      </nav>
   

      <div>
  {cartItem.length === 0 ?(
     <div className="text-center">
     <p>Your cart is empty.</p>
     <Link to="/" className='btn btn-success mb-3'>Return to Shop</Link>
   </div>
  ):(

 <section className="h-100 gradient-custom">
 <div className="container py-1">
   <div className="row d-flex justify-content-center my-4">
     <div className="col-md-12">
       <div className="card mb-4">
         <div className="card-header py-3">
           <h6>Cart Items</h6>
         </div>
         <div className="card-body">
           <table className="table table-stripe">
             <thead>
               <tr>
                 <th>Item details</th>
                 <th className='quantity'>Quantity</th>
                 <th className='act'>Price</th>
                 <th className=''>Total Price</th>
                 <th className='' onClick={() => ClearCart()} style={{cursor:"pointer"}}>Clear Cart</th>
               </tr>
             </thead>
             <tbody>
  {cartItem.map((item, index) => (
    <tr key={index}>
      <td>
        <img src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`} width="50px" height="50px" />
        <span style={{ marginLeft: '10px', color: "#817d7d" }}>{item.name} <span className='x2'>x2</span></span>
      </td>
      <td>
        <div className="d-flex align-items-center mb-2 border" style={{ width: '120px', cursor: 'pointer' }}>
          <div className="border px-3 bg-body-tertiary p-1">
            <FiMinus onClick={() => updateQuantity(index, -1)} />
          </div>
          <div className="form-outline text-center" style={{ flex: '1' }}>
            <strong>{item.quantity}</strong>
          </div>
          <div className="border px-3 bg-body-tertiary p-1">
            <FiPlus onClick={() => updateQuantity(index, +1)} />
          </div>
        </div>
      </td>
      <td style={{ color: '#FF5C00' }}>
        ${item.current_price[0].NGN[0]}
      </td>
      <td className='text-tertiary' style={{ color: "#817d7d" }}>${calculateUpdatedPrice(item)}</td>
      <td style={{ color: "#817d7d" }}>
        <AiOutlineDelete onClick={() => handleRemoveFromCart(index)} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  ))}
</tbody>
           </table>
         </div>
       </div>
     </div>

     <div className="col-md-4">
       <div className="card mb-4">
         <div className="card-header py-3">
           <h5 className="mb-0">Cart Summary</h5>
         </div>
         <div className="card-body">
           <ul className="list-group list-group-flush">
             <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
               Subtotal
               <span>${calculateTotalPrice()}</span>
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center px-0">
               Delivery charges
               <span>$20</span>
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
               <div>
                 <strong>Total amount</strong>
               </div>
               <span><strong>${calculateTotalFinalPrice()}</strong></span>
             </li>
           </ul>
           <hr />
           <div className="d-flex flex-column flex-md-row justify-content-between">
             <button className="btn btn-dark shopping mb-2 mb-md-0"
               onClick={handleGoShop}
             >Continue Shopping</button>
             <button className="btn btn-checkout"
               onClick={handleCheckout}
             >Go to Checkout</button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</section>
  )}
</div>
      
    </div>
  );
};