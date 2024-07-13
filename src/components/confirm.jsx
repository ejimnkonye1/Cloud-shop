import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmPayment = ({ setCartItem }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, totalPrice } = location.state || {};

  const payWithPaystack = () => {
    if (window.PaystackPop) {
      let handler = window.PaystackPop.setup({
        key: 'pk_test_9f04ff1cdc541872fbbdb8816c9057d2b6c883a5', // Replace with your public key
        email: name,
        currency: 'NGN',
        amount: totalPrice * 100,
        ref: '' + Math.floor(Math.random() * 1000000000 + 1),
        onClose: function () {
          alert('Window closed.');
        },
        callback: function (response) {
          let message = 'Payment complete! Reference: ' + response.reference;
          alert(message);
          setCartItem([]);
          localStorage.removeItem('cartItem');
          navigate('/');
        },
      });
      handler.openIframe();
    } else {
      console.error('PaystackPop is not available');
    }
  };

  React.useEffect(() => {
    payWithPaystack();
  }, []);

  return (
    <div>
      <h2>Confirming Payment...</h2>
    </div>
  );
};

export default ConfirmPayment;
