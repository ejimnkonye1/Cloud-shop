import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import img from '../assets/images/logo.png'
export const Footer = () => {
    return(
       
<footer class="text-center text-lg-start  bg-body-dark text-muted" style={{backgroundColor:'black',}}>

  <section class="d-flex justify-content-center justify-content-lg-between p-4 ">
   
  
  
  
  </section>

  <section class="text-white">
    <div class="container text-center text-md-start mt-5">
    
    <div class="row mt-3">
  <div class="col-md-1 col-lg-1 col-xl-1 mx-auto mt-2 ">
    <img src={img} style={{ width: '100px', height: '100px' }} />
   
  
  </div>
  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    <h6 class="text-uppercase fw-bold mb-4">
      Contact
    </h6>
    <p>
      <IoCallOutline /> +234 817 9988 734
    </p>
    <p>
      <CiLocationOn /> Computer village, Ikeja, Lagos
    </p>
    <p>
      <CiMail /> Adhil_Ellen@gmail.com
    </p>
  </div>
  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >
    <h6 class="text-uppercase fw-bold mb-4">
      Quick Links
    </h6>
    <p>
      <a href="#!" class="text-reset" >About Us</a>
    </p>
    <p>
      <a href="#!" class="text-reset">Blog</a>
    </p>
    <p>
      <a href="#!" class="text-reset">Shop</a>
    </p>
    <p>
      <a href="#!" class="text-reset">Contact Us</a>
    </p>
  </div>
  <div class="col-md-3 col-lg-2 col-xl-2 text-white mx-auto mb-4">
    <h6 class="text-uppercase text-white fw-bold mb-4">
      Follow Us On
    </h6>
    <p>
      <FaInstagram style={{color:'red'}} /> Instagram
    </p>
    <p>
      <FaFacebook style={{color:'blue'}} /> Facebook
    </p>
    <p>
      <AiFillTwitterCircle style={{color:'blue'}} /> Twitter
    </p>
    <p>
      <FaTiktok  style={{color:"red"}}/> Tiktok
    </p>
  </div>
  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    <h6 class="text-uppercase fw-bold mb-4">Policies</h6>
    <p>
      <a href="#!" class="text-reset">Privacy policy</a>
    </p>
    <p>
      <a href="#!" class="text-reset">Terms of Service</a>
    </p>
  </div>
</div>
  
    </div>
  </section>
 

  <div class="text-center text-white p-4" >
  Hilzella © 2024 All rights reserved
  </div>

</footer>

    )
}