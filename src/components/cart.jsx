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
    price: 499,
  
    quantity: 1
  },
  {
    id: 2,
    name: 'Tablet',
    image: img2,
    price: 300,
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
    return (parseFloat(item.price) * item.quantity).toFixed(0);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of CartItems) {
      totalPrice += parseFloat(item.price) * item.quantity;
    }
    return totalPrice.toFixed(0);
  };

  const calculateTotalFinalPrice = () => {
    let totalPrice = calculateTotalPrice();
    const deliveryCharge = 20;
    return (parseFloat(totalPrice) + deliveryCharge).toFixed(0);
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
          <div className="col-md-12">
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
            <th className='quantity'>Quantity</th>
            <th className='act'>Price</th>
            <th className=''>Total Price</th>
            <th className='act'>Action</th>
          </tr>
        </thead>
        <tbody>
          {CartItems.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.image} alt={item.name} width="50px" height="50px" />
              </td>
              <td>{item.name} <span className='x2'>x2</span></td> 
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
              <td style={{color:'#FF5C00 '}}>${item.price}</td>
              <td className='text-tertiary'>${calculateUpdatedPrice(item)}</td>
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
                  <div className="d-flex flex-wrap">
               <button
             type="button"
             style={{
              flex: '1 1 0', 
              marginRight: '10px', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#FF5C00',
              height:'40px',
              backgroundColor: '#000000',
              whiteSpace: 'nowrap'

            }}
             onClick={handleGoShop}
             className="btn btn-sm btn-block continue mb-3"
             >
            Continue shopping
           </button>
           <button
          type="button"
         onClick={handleCheckout}
         style={{
          flex: '1 1 0', 
          marginLeft: '10px', 
          backgroundColor: '#FF5C00',
          color: 'white',
          padding: '20px',
          height: '40px', 
          borderRadius: '5px', 
          border: 'none', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }}
           className="btn btn-sm btn-block checkout mb-3"
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
