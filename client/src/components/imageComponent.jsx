import React from "react";
import img from "../images/b1.png";
import Nav from "./navBar";
import "./bgimagestyle.css";
import './hovers.css'

const ImageComp = () => {
  return (
    <React.Fragment>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${img})`,
          width:'100%'
          // height: "75vh",
        }}
      >
        <div className="mask gradient-custom h-100">
      <Nav/>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="p-3">
              <b>
                <p className="text-white mb-0 titlefont m-2 p-2 w-100 textmq">
                  FEED THE NEED
                </p>
              </b>
            </div>
            <div>
              <b>
                <p className="subtext d-flex align-items-center h-25">
                  Together, we can make a better tomorrow a reality
                </p>
              </b>
              <button className="btn text-white btncolor raise w-75 mb-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop">
                Donate  
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageComp;
