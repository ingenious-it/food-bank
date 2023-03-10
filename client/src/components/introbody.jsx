import React from "react";
import './Home.css';
import { AiFillHeart } from 'react-icons/ai';

const BodyIntro = () => {
  return (
    <div className=" mb-3 w-100  p-3">
      <div className="row g-4 align-items-center">
        <div className="col-md-4">
          <img src="b1.png" className="img-fluid rounded-5 p-3" alt="b1.png" />
        </div>
        <div className="col-md-8">
          <div className="card-body m-4 p-4">
            <h5 className="card-title">
              Food Bank Is On A Mission To Abolish
              Hunger.
            </h5>
            <p className="card-text" align="justify">
              <br />
              Millions of people in Sri Lanka are suffering from hunger and malnutrition,
              which can lead to preventable illnesses and even death. 
              It is heartbreaking to see people in our country struggle to find enough food to eat,
              while their basic nutritional needs go unmet. The statistics are discouraging, but there is hope.
              By supporting organizations like Food Bank, we can help provide food to those who need it most. 
              Every small act of kindness can make a difference in the lives of these vulnerable people. 
              Please consider supporting the efforts of Feed the people Sri Lanka today, 
              and together we can create a better future for all of our people.

            </p>
          </div>
        </div>
      </div>
      
      <div className="m-2 d-flex justify-content-center"  >
       {/* <div
        className="btn-group w-100 d-flex justify-content-evenly  p-1 rounded-bottom "
        role="group"
        ariaLabel="Basic outlined example"
      >
        <button
          type="button"
          className="btn text-white bg-dark"
          style={{ fontSize: "23px" }}
        >
          Let's Get You Started
        </button>
        <button
          type="button"
          className="btn text-white btncolor"
          style={{ fontSize: "23px" }}
        >
          Join our awesome giving community
        </button>
        <button
          type="button"
          className="btn bg-dark "
          style={{ fontSize: "25px" }}
        >
          <button className="btn btn-outline-warning text-white rounded-pill">
            <h3 className="ps-2 pe-2"> <AiFillHeart/> Give now</h3>
          </button>
        </button>
      </div>  */}
      <div className="dbuttongrp btncolor w-75 text-white rounded p-2 d-flex justify-content-around">
        <div className="d-flex align-items-center justify-content-center"><h3>Let's Get You Started</h3></div>
        <div className="d-flex align-items-center justify-content-center"><h4>Join our giving community</h4></div>
        <div className="d-flex align-items-center justify-content-center"><button type="button" class="btn btn-outline-light ps-5 pe-5 w-100"><AiFillHeart className="me-1"/> Give now</button></div>
      </div>
      </div> 
    </div>
  );
};

export default BodyIntro;
