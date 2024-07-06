import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import '../css/header2.css'
export const HeaderTwo = () => {
    return(
<div className="contai" style={{backgroundColor:'#FF5C00 '}}>
<nav class="navbar navbar-expand-lg ">
        <div class="container">
      
        <div class="dropdown   navbar-brand">
      
  <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <GiHamburgerMenu /> Categories
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex align-items-center">
  <div className="input-group">
    <span className="input-group-text">
      <CiSearch />
    </span>
    <input type="search" className="form-control border-0" placeholder="Enter your keyword" aria-label="Search" />
  </div>
  <button className="btn btn-outline-dark" type="submit">Search</button>
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