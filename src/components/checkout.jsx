import { useNavigate } from "react-router-dom"
import { FiPlus, FiMinus } from 'react-icons/fi';
import img from '../assets/images/Card.png'
export const Checkout = () => {
    const navigate  = useNavigate()
    const onsubmit = () => {
        alert('payment successful check ur email for your order details')
        // navigate('/')
    }
    return(
        <div className="container mt-5 mb-4">
               <nav style={{ '--bs-breadcrumb-divider': "'>'" }} className='mt-3' aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item text-reset"><p href="#">Home</p></li>
    <li className="breadcrumb-item active" aria-current="page">Checkout</li>
  </ol>
</nav>
        <form onsubmit={onsubmit}>
     
        <div className="mb-3">
        <label htmlFor="country" className="form-label">Country</label>
            <select className="form-select" id="Country" required>
              <option value="">United States</option>
              <option value="credit">Nigeria</option>
              <option value="debit">Canada</option>
              <option value="paypal">Portugal</option>
            </select>
          </div>
          <div className="row mb-3" >
            <div className="col-md-12">
              <label htmlFor="firstName" className="form-label">Full Name (first and last name)</label>
              <input type="text" className="form-control" id="firstName" placeholder="Hailey Shipman" required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phoneNumber" placeholder="+1 (346) 972-8012" required />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" placeholder="John Smith, 1234 Elm Street" required />
            <input type="text" className="form-control mt-2" id="address" placeholder="Apt 46, Springfield, IL 62704, USA" required />
          </div>
        
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" placeholder="Los Angeles" required />
            </div>
            <div className="col-md-4">
              <label htmlFor="zip" className="form-label">State</label>
              <input type="text" className="form-control" id="state" placeholder="California" required />
            </div>
            <div className="col-md-4">
              <label htmlFor="zip" className="form-label">ZIP Code</label>
              <input type="text" className="form-control" id="zip" placeholder="90012" required />
            </div>
          </div>
          <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="defaultAddress" />
          <label className="form-check-label" htmlFor="defaultAddress">Mark as default address</label>
        </div>
          <div className="mb-3" style={{ width: '30%' }}>
            <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
           <h6>Credit/Debit card</h6>
           <div className="input-group ">
           <button className="btn btn-secondary p-2 " type="button" id="applyGiftCard"> <img src={img} width={'20px'} height={'20px'} /></button>
           <input type="text" className="form-control" id="pay" placeholder="**** **** **** 9947" required />
           </div>
          </div>
          <div className="mb-3 " style={{ width: '30%' }}>
          <label htmlFor="giftCard" className="form-label">Gift Card</label>
          <div className="input-group">
          <button className="btn btn-secondary p-2 " type="button" id="applyGiftCard"> <FiPlus /></button>
            <input type="text" className="form-control" id="giftCard" placeholder="YN007" />
            <button
            style={{color:'#FF5C00', backgroundColor:'#000000'}}
            className="btn" type="button"
            
            id="applyGiftCard">Apply</button>
          </div>
        </div>
       <div className="d-flex justify-content-center">
        
       <button type="submit" 
       style={{backgroundColor:'#FF5C00', color:"white"}}
       className="btn ">Payment</button>
       </div>
        </form>
      </div>
    )
}