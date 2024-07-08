import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/images/Rectangle 17.png'
import img2 from '../assets/images/tab5.png'

const CartItems = [
  {
    id: 1,
    name: 'iphone',
    image: img1,
    price: 499.99,
    quantity: 1
  },
  {
    id: 2,
    name: 'Tablet',
    image: img2,
    price: 299.99,
    quantity: 2
  }
];

export const Cart = () => {

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleGoShop = () => {
    navigate('/');
  };

  const calculateUpdatedPrice = (item) => {
    return (parseFloat(item.price) * item.quantity).toFixed(2);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of CartItems) {
      totalPrice += parseFloat(item.price) * item.quantity;
    }
    return totalPrice.toFixed(2);
  };

  const calculateTotalFinalPrice = () => {
    let totalPrice = calculateTotalPrice();
    const deliveryCharge = 20;
    return (parseFloat(totalPrice) + deliveryCharge).toFixed(2);
  };

  return (
    <div className='container'>
      <nav style={{ '--bs-breadcrumb-divider': "'>'" }} className='mt-3 container' aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-reset"><p href="#">Home</p></li>
          <li className="breadcrumb-item active" aria-current="page">My shopping cart</li>
        </ol>
      </nav>

      <section className="h-100 gradient-custom">
        <div className="container py-1">
          <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
  <div className="card mb-4">
    <div className="card-header py-3">
      <h6>Cart Items</h6>
    </div>
    <div className="card-body">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
            <th className='act'>Action</th>
          </tr>
        </thead>
        <tbody>
          {CartItems.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.image} alt={item.name} width="50px" height="50px" />
              </td>
              <td>{item.name}</td>
              <td>
                <div className="d-flex align-items-center mb-2 border" style={{ width: '120px', cursor: 'pointer' }}>
                  <div className="border px-3 bg-body-tertiary p-1">
                    <FiMinus />
                  </div>
                  <div className="form-outline text-center" style={{ flex: '1' }}>
                    <strong>{item.quantity}</strong>
                  </div>
                  <div className="border px-3 bg-body-tertiary p-1">
                    <FiPlus />
                  </div>
                </div>
              </td>
              <td>${item.price}</td>
              <td>${calculateUpdatedPrice(item)}</td>
              <td>
                <AiOutlineDelete />
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
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      style={{
                        width: '48%', /* Adjusted width to accommodate space */
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#FF5C00',
                        backgroundColor: '#000000'
                      }}
                      onClick={handleGoShop}
                      className="btn btn-sm btn-lg btn-block mb-3"
                    >
                      Continue shopping
                    </button>
                    <button
                      type="button"
                      onClick={handleCheckout}
                      style={{
                        width: '48%', /* Adjusted width to accommodate space */
                        backgroundColor: '#FF5C00',
                        color: 'white',
                        padding: '20px',
                        height: '40px', /* Adjusted height value */
                        borderRadius: '5px', /* Optional: Rounded corners */
                        border: 'none', /* Optional: Remove border */
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                      }}
                      className="btn btn-sm btn-lg btn-block mb-3"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

;
