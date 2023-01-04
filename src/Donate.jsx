import { useState } from "react";

const Donate = () => {
  const [value, setvalue] = useState("");

  const handleBtnClick = (val) => {
    setvalue(val);
  };
  return (
    <div className="background d-flex justify-content-center align-items-center">
      <div className="div-0 p-3 d-flex flex-column justify-content-around">
        <div className="div-1">
          <p className="choose">Choose Amount</p>
        </div>

        <p className="how">
          How much would you like to donate? As a contributor to Sight For All
          we make sure your donation goes directly to supporting our cause.
          Thank you for your generosity!
        </p>
        <div className="div-2 d-flex align-items-center">
          <p className="RS p-3 m-0">RS</p>
          <div className="w-100">
            <p className="RS p-3 m-0 text-center">{value}</p>
          </div>
        </div>
        <div className="b2">
          <b>
            <div className="d-flex justify-content-evenly align-items-center my-2">
              <button
                className="btn btnstyle"
                onClick={() => handleBtnClick(100)}
              >
               <b>Rs 100</b> 
              </button>
              <button
                className=" btn btnstyle"
                onClick={() => handleBtnClick(200)}
              >
               <b>Rs 200</b> 
              </button>
              <button
                className="btn btnstyle"
                onClick={() => handleBtnClick(500)}
              >
               <b>Rs 500</b> 
              </button>
              <button
                className=" btn btnstyle"
                onClick={() => handleBtnClick(1000)}
              >
               <b>Rs 1000</b> 
              </button>
            </div>
            <div className="d-flex justify-content-evenly align-items-center my-2">
              <button
                className="btn btnstyle"
                onClick={() => handleBtnClick(2000)}
              >
                <b>Rs 2000</b>
              </button>
              <button
                className="btn btnstyle"
                onClick={() => handleBtnClick(5000)}
              >
               <b>Rs 5000</b> 
              </button>
              <button
                className="btn btnstyle"
                onClick={() => handleBtnClick(10000)}
              >
                <b>Rs 10000</b>
              </button>
              <button className="btn btnstyle"><b>Custom Amount</b> </button>
            </div>
          </b>
        </div>
        <div className="">
          <button className="btn dntbtnsyle"><b>Continue -></b></button>
        </div>
        <div className="div-1">
          <p className="sec">Secure Connection</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
