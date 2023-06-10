import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

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
              <img src="logo1.png" height={80} width={100} alt="" />
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
          <h4 class="mb-4 font-weight-bold text-warning">About</h4>
          <div>
            

            <div>
            <p class="para">
              <a href="/">Home</a>
            </p>
            <p class="para">
              <a href="/Projects">Projects</a>
            </p>
            <p class="para">
              <a href="/ourteam">Our Team</a>
            </p>
            <p class="para">
              <a href="/ContactUs">Contact Us</a>
            </p>
          </div>

          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-5">
          <h4 class="mb-4 font-weight-bold text-warning">Our Impact</h4>
          <div>
            <p class="para">
              <a href="/Mission">Mission</a>
            </p>
            <p class="para">
              <a href="/whyFoodBank">Our Approach</a>
            </p>
            <p class="para">
              <a href="/projects">Programs</a>
            </p>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-6 mt-5">
          <h4 class="mb-4 font-weight-bold text-warning">Take Action</h4>
          <div>
           

            <div>
            <p class="para">
              <a href="/Donate">Donate Food</a>
            </p>
            <p class="para">
              <a href="/Donate">Donate Money</a>
            </p>
            <p class="para">
              <a href="/propose">Propose Victims</a>
            </p>
          </div>

          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-6 mt-5">
          <h4 class="mb-4 font-weight-bold text-warning">Contact Us</h4>
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
                <span class="second text-warning">Ingenious</span>
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
  );
};

export default DFooter;
