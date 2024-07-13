import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from 'react-paystack';
import { FiPlus } from 'react-icons/fi';
import img from '../assets/images/Card.png';

export const Checkout = ({ cartItem, setCartItem }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
    setCartItem(storedCartItems);
  }, [setCartItem]);

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItem) {
      totalPrice += parseFloat(item.current_price[0].NGN[0]) * item.quantity;
    }
    return totalPrice.toFixed(0);
  };

  const totalAmount = calculateTotalPrice() * 100; // Paystack expects the amount in kobo

  const paystackProps =  {
    email,
    amount: totalAmount,
    publicKey: 'pk_test_9f04ff1cdc541872fbbdb8816c9057d2b6c883a5',
    text: "Pay Now",
    onSuccess: (response) => {
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      setCartItem([]);
      localStorage.removeItem('cartItem');
      navigate('/');
    },
    onClose: () => alert('Payment window closed'),
  };
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  
  return (
    <div className="container mt-5 mb-4">
      <nav style={{ '--bs-breadcrumb-divider': "'>'" }} className='mt-3' aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-reset"><p href="#">Home</p></li>
          <li className="breadcrumb-item active" aria-current="page">Checkout</li>
        </ol>
      </nav>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country</label>
          <select className="form-select" id="Country" required>
            <option value="">United States</option>
            <option value="credit">Nigeria</option>
            <option value="debit">Canada</option>
            <option value="paypal">Portugal</option>
          </select>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="firstName" className="form-label">Full Name (first and last name)</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={(e) => setName(e.target.value)}
              placeholder="Hailey Shipman"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hailey.shipman@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="+1 (346) 972-8012"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="John Smith, 1234 Elm Street"
            required
          />
          <input
            type="text"
            className="form-control mt-2"
            id="address2"
            placeholder="Apt 46, Springfield, IL 62704, USA"
            required
          />
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="Los Angeles"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="California"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="zip" className="form-label">ZIP Code</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="90012"
              required
            />
          </div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="defaultAddress" />
          <label className="form-check-label" htmlFor="defaultAddress">Mark as default address</label>
        </div>
        <div className="mb-3" id="paymentMethod" style={{ width: '30%' }}>
          <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
          <h6>Credit/Debit card</h6>
          <div className="input-group">
            <button className="btn btn-secondary p-2" type="button" id="applyGiftCard">
              <img src={img} width={'20px'} height={'20px'} alt="Card" />
            </button>
            <input
              type="text"
              className="form-control"
              id="pay"
              placeholder="**** **** **** 9947"
              required
            />
          </div>
        </div>
        <div className="mb-3" id="giftCard" style={{ width: '30%' }}>
          <label htmlFor="giftCard" className="form-label">Gift Card</label>
          <div className="input-group">
            <button className="btn btn-secondary p-2" type="button" id="applyGiftCard"><FiPlus /></button>
            <input type="text" className="form-control" id="giftCardInput" placeholder="YN007" />
            <button
              style={{ color: '#FF5C00', backgroundColor: '#000000' }}
              className="btn apply"
              type="button"
              id="applyGiftCardButton"
            >
              Apply
            </button>
          </div>
        </div>


        <div className="d-flex justify-content-center">
          <PaystackButton
           {...paystackProps}
            className="btn submit"
            style={{ backgroundColor: '#FF5C00', color: "white" }}
          />
        </div>
      </form>
    </div>
  );
};
