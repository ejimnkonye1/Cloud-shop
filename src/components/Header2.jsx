import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import '../css/header2.css'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect , useState} from "react";
export const HeaderTwo = ({cartItem}) => {
  const [show, setShow] = useState(true);
  const cartItemcount = cartItem.length
console.log('cartcount:', cartItemcount)
  useEffect(() => {
   
    setShow(true);
  }, []);
    return(
      
<div className="contai" style={{backgroundColor:'#FF5C00 ', height:''}}>
<nav className="navbar navbar-expand-lg d-none d-sm-none d-lg-block">
        <div className="container">
      
        <div className="dropdown navbar-brand">
            <Dropdown >
            <Dropdown.Toggle as="div" className="custom-dropdown-toggle nocaret">
  <button className="btn btn-dark" type="button">
    <GiHamburgerMenu /> <span className="cat">Categories</span>
  </button>
   </Dropdown.Toggle>

                <Dropdown.Menu className="mt-2">
                    <Dropdown.Item href="#" className="border-bottom">Smart wristwatch</Dropdown.Item>
                    <Dropdown.Item href="#" className="phone border-bottom">Phones and Tablets</Dropdown.Item>
                    <Dropdown.Item href="#" className="border-bottom">Computers</Dropdown.Item>
                    <Dropdown.Item href="#" className="border-bottom">Fashion</Dropdown.Item>
                    <Dropdown.Item href="#"className="border-bottom">Footwears</Dropdown.Item>
                    <Dropdown.Item href="#"className="border-bottom">Jewelry</Dropdown.Item>
                    <Dropdown.Item href="#"className="border-bottom">Accessories</Dropdown.Item>
                    <Dropdown.Item href="#"className="border-bottom">Furniture</Dropdown.Item>
                    <Dropdown.Item href="#">Beauty</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div> 
      


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex align-items-center">
<div className="search-container">
  <CiSearch className="search-icon" />

  <input 
    type="search"
    className="form-control search-key" 
    placeholder="Enter your keyword" 
    aria-label="Search" 
  />
  <div className="input-group">
  <button className="btn btn-dark search-btn " type="submit">Search</button>
  </div>

</div>


</form>



          
          
          </div>
           
          <div  className="d-flex ">
            <VscAccount className="acct me-5" />
          <div className="carticon ">
            <Link to='/cart'>
            <IoCartOutline  className="cartout"/>
          <span className="count">{cartItemcount}</span>
          </Link>
          </div>
          

          </div>
        </div>
      </nav>
</div>
    )
}