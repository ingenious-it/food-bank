import React from "react";
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
              Feed God's Hungry Children Is On A Mission To Abolish Child
              Hunger.
            </h5>
            <p className="card-text">
              <br />
              Millions of children are dying every day from hunger and diseases
              that are made worse by undernutrition. No child should ever go
              hungry or suffer from preventable sickness and disease because
              their basic nutritional needs go unmet. The statistics are
              discouraging, but Feed God’s Hungry Children knows that even the
              smallest gift of compassion can change lives one child at a time.
              You can make a difference in the world and give hope to these
              hopeless children. Please consider supporting the good work of
              Feed God’s Hungry children today, and you can know that you will
              be part of a much better tomorrow.
            </p>
          </div>
        </div>
      </div>
      
      <div className="m-2"  >
      <div
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
      </div>
      </div>
    </div>
  );
};

export default BodyIntro;
