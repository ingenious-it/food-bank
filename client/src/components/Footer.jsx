import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Footer.css";

import { FaHome } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const DFooter = () => {
  return (
    <footer className="footer_container bg-dark text-white w-100 ">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 ms-5 mt-5 ">
          <div class=" d-flex">
              <div className="divimg">
                <img src="logo.png" height={100} width={100} alt="" />
              </div>
            <div class="text">
              <h3>FOOD BANK</h3>
              <h5>FEED THE NEED</h5>
            </div>
          </div>
          <p class="para">
            Our mission is to address food insecurity and hunger by providing a
            platform that connects food donors with victims in need. Our vision
            is a world where hunger is no longer a barrier to human potential
            and well-being.
          </p>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-5 ms-5">
          <h4 class="mb-4 font-weight-bold themecolor">About</h4>
          <div>
            <p class="para">About Us</p>
            <p class="para">Projects</p>
            <p class="para">Our Team</p>
            <p class="para">Contact Us</p>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-5">
          <h4 class="mb-4 font-weight-bold themecolor">Our Impact</h4>
          <div>
            <p class="para">Mission</p>
            <p class="para">Our Approach</p>
            <p class="para">Programs</p>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-6 mt-5">
          <h4 class="mb-4 font-weight-bold themecolor">Take Action</h4>
          <div>
            <p class="para">Donate Food</p>
            <p class="para">Donate Money</p>
            <p class="para">Propose Victims</p>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-6 mt-5">
          <h4 class="mb-4 font-weight-bold themecolor">Contact Us</h4>
          <p class="para">
            <FaHome class="icon" />
            NewYork,NY2333,USA
          </p>
          <p class="para">
            <FaEnvelope class="icon" />
            foodbank@gmail.com
          </p>
          <p class="para">
            <FaPhoneSquareAlt class="icon" />
            +94-76-568-4665757
          </p>
        </div>
      </div>

      <hr className="hr" />

      <div class="row ms-3">
        <div class="d-flex">
          <div class="info">
          <span class="full">
            <span class="first">
              Copyright @2023 Allright reserved | This is made by{" "}
              <span class="second themecolor">Ingenious</span>
            </span>
          </span>
        </div>
        
        
          
          <div class="icons d-flex justify-content-right">
          <FaFacebookF class="icon" />
          <FaTwitter class="icon" />
          <FaInstagram class="icon" />
        

          </div>
 
        
      </div>
      </div>
    </footer>



  // <footer class="bg-dark text-white pt-5 pb-5 w-100">

    //   <div class="container text-center text-md-left">
    //     <div class="row text-center text-md-left">

    //       <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
    //         <h5 class="text-uppercase mb-4 font-weight-bold text-warning">FOOD BANK</h5>
    //          <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    //           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    //           when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

    //       </div>

    //       <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
    //         <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>

    //       {/* <p>
    //         <a href="#" class="text-white" style="text-decoration:none;">The providers</a>
    //       </p>
    //       <p>
    //         <a href="#" class="text-white" style="text-decoration:none;">The providers</a>
    //       </p>
    //       <p>
    //         <a href="#" class="text-white" style="text-decoration:none;">The providers</a>
    //       </p>
    //       <p>
    //         <a href="#" class="text-white" style="text-decoration:none;">The providers</a>
    //       </p>  */}
    //       </div>

    //       <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
    //         <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Useful links</h5>
    //          <p>
    //         <a href="#" class="text-white">Your Account</a>
    //       </p>
    //       {/* <p>
    //         <a href="#" class="text-white" style="text-decoration:none;">The providers</a>
    //       </p>
    //       <p>
    //         <a href="#" class="text-white" style="text-decoration:none;">The providers</a>
    //       </p>
    //       <p>
    //         <a href="#" class="text-white" style="text-decoration:none;">The providers</a>
    //       </p>   */}
    //       </div>

    //       <div class ="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
    //         <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
    //         <p>
    //         <FaHome class="icon"/>
    //           NewYork,NY2333,USA
    //         </p>
    //         <p>
    //         <FaEnvelope class="icon"/>
    //           foodbank@gmail.com
    //         </p>
    //         <p>
    //         <FaPhoneSquareAlt class="icon"/>
    //           +94-76-568-4665757
    //         </p>
    //         </div>

    // <section className='d-flex justify-content-center justify-content-lg-between '>
    //     <div className='me-5 d-none d-lg-block'>
    //       <span>Get connected with us on social networks:</span>
    //     </div>
    //     <div class="text-center text-md-right">

    //           <ul class="list-unsttyled list-inline">
    //             <li class= "list-inline-item">

    //               <a href="#" class="btn-floating btn-sm text-white" styles="font-size:23px">
    //                   <FaFacebookF class="icon"/>
    //               </a>
    //             </li>
    //             <li class= "list-inline-item">
    //               <a href="#" class="btn-floating btn-sm text-white" styles="font-size:23px">
    //                   <FaTwitter class="icon"/>
    //               </a>
    //             </li>
    //             <li class= "list-inline-item">
    //               <a href="#" class="btn-floating btn-sm text-white" styles="font-size:23px">
    //                   <FaInstagram class="icon"/>
    //               </a>
    //             </li>

    //           </ul>

    //         </div>

    //   </section>
    //         {/* <div class="co-md-5 col-sm-7">
    //         <div class="text-center text-md-right">

    //           <ul class="list-unsttyled list-inline">
    //             <li class= "list-inline-item">

    //               <a href="#" class="btn-floating btn-sm text-white" styles="font-size:23px">
    //                   <FaFacebookF class="icon"/>
    //               </a>
    //             </li>
    //             <li class= "list-inline-item">
    //               <a href="#" class="btn-floating btn-sm text-white" styles="font-size:23px">
    //                   <FaTwitter class="icon"/>
    //               </a>
    //             </li>
    //             <li class= "list-inline-item">
    //               <a href="#" class="btn-floating btn-sm text-white" styles="font-size:23px">
    //                   <FaInstagram class="icon"/>
    //               </a>
    //             </li>

    //           </ul>

    //         </div>

    //       </div> */}

    //       </div>

    //      <hr class= "mb-4"></hr>

    //     <div class="row align-itmes-center">
    //       {/* <div class="col-md-7 col-lg-8">
    //         <p>Copyright @2022 All rights reserved by:
    //          <a href="#">
    //           <strong class="text-warning">The Providers</strong>
    //         </a>
    //         </p>
    //       </div> */}
    //       <div className='bottomd text-center p-4'>
    //     © 2021 Copyright:
    //     <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
    //       ndlcnsnczcv.com
    //     </a>
    //   </div>

    //     </div>

    //   </div>

    // </footer>




  );
};

export default DFooter;

