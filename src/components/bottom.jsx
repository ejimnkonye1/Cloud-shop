import { FaHome, FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import img from '../assets/images/bi.jpg'
import { Link } from 'react-router-dom';
export const Bottom = () => {
    return(
   
    <nav className="navbar fixed-bottom navbar-expand-md navbar-light bg-light d-md-none">
      <div className="container-fluid">
        <div className="row w-100 justify-content-around">
          <div className="col-3 text-center">
          <Link to='/'>
            <IoHomeOutline  size={24} />
            </Link>
          </div>
          <div className="col-3 text-center">
            <div className='circle-image'>
            <img src={img} className='circle-image' />
            </div>
           
          </div>
          <div className="col-3 text-center">
            <FiMessageSquare size={24} />
          </div>
          <div className="col-3 text-center">
          <div className="carticon ">
          <Link to='/cart'>
          <IoCartOutline  className="cartout"/>
          <span className="count">2</span>
          </Link>
          </div>
          </div>
        
        </div>
      </div>
    </nav>
    )
}