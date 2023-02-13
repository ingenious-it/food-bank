import React from "react";
const BodyIntro = () => {
  return (
    <div className=" mb-3 w-100 m-4 p-3">
      <div className="row g-5">
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
      <div
        className="btn-group d-flex justify-content-evenly m-2  p-2  rounded-bottom "
        role="group"
        ariaLabel="Basic outlined example"
      >
        <button
          type="button"
          className="btn bg-danger text-white"
          style={{ fontSize: "25px" }}
        >
          Let's Get You Started
        </button>
        <button
          type="button"
          className="btn bg-danger  text-white"
          style={{ fontSize: "25px" }}
        >
          Join our awesome giving community
        </button>
        <button
          type="button"
          className="btn bg-danger "
          style={{ fontSize: "25px" }}
        >
          <button className="btn btn-warning rounded-pill">
            <h1> ❤️ Give now</h1>
          </button>
        </button>
      </div>
    </div>
  );
};

export default BodyIntro;
