import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import '../css/header2.css'
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const HeaderTwo = () => {
  
    return(
<div className="contai" style={{backgroundColor:'#FF5C00 '}}>
<nav class="navbar navbar-expand-lg ">
        <div class="container">
      
        <div className="dropdown navbar-brand">
            <Dropdown>
                <Dropdown.Toggle as="div" className="custom-dropdown-toggle">
                    <button className="btn btn-dark" type="button">
                        <GiHamburgerMenu /> Categories
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
      


          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex align-items-center">
  <div className="input-group">
    <span className="input-group-text">
      <CiSearch />
    </span>
    <input type="search"
    style={{width:'400px'}}
    className="form-control border-0" placeholder="Enter your keyword" aria-label="Search" />
    <button className="btn btn-dark" type="submit">Search</button>
  </div>

</form>



          
          
          </div>
           
          <div  className="d-flex ">
            <VscAccount className="acct me-5" />
          <div className="carticon ">
          <IoCartOutline  className="cartout"/>
          <span className="count">0</span>
          </div>
          

          </div>
        </div>
      </nav>
</div>
    )
}