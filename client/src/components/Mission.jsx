import React from "react";
import Nav from "./navBar";
import DFooter from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mission.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";


const Mission = () => {
  const { ref, inView } = useInView();
  const [buttonClicked, setButtonClicked] = useState(false);

  const variants = {
    visible: { scale: 1 },
    hidden: { scale: 0.75 },
  };

  const transition = {
    duration: 2,
    ease: "easeInOut",
  };

  return (
    <React.Fragment>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100vw" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="bg-blue">
          <Nav />
          <section className="d-flex align-items-center justify-content-center">
            <motion.div
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={transition}
            >
              <div className="img-overlay d-flex align-items-center justify-content-center">
                <div className="imgmission rounded"></div>
              </div>
            </motion.div>
            <h2>Read The Mission of Feed God’s Hungry Children</h2>
          </section>
        </div>

        <br />
        <hr></hr>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 ">
                <h1>FOOD BANK Is Changing Lives</h1>
                <h4>Our Mission</h4>
                <p>
                  Our mission is to address food insecurity and hunger by
                  providing a platform that connects food donors with victims in
                  need. We aim to make it easy for people to donate food, as
                  well as monetary donations. Our goal is to create a community
                  of generosity and compassion, where those who have excess food
                  can share it with those who are struggling to put food on the
                  table. We believe that everyone deserves access to nutritious
                  food, and we are committed to helping bridge the gap between
                  those who have and those who need and making that a reality by
                  leveraging technology to help solve this issue. Our vision is
                  a world where hunger is no longer a barrier to human potential
                  and well-being.
                </p>

                <h4>Why FoodBank?</h4>
                <p>
                  Food Bank is proud to be rated so highly by
                  esteemed watchdog organizations like Guidestar and Charity
                  Navigator
                </p>
              </div>
              <div className="col-6 ">
                <div className="imgmission2 rounded mb-3 ms-3"></div>
              </div>

              <div className="img12 bg-dark">
            <div class="img-overlay">
              <h2>
              When you support FOOD BANK, you're joining a movement of countless others with a shared belief that Hunger will end.
              </h2>
              
              

              <button
                type="button"
                className="btn btn-outline-light mb-3 mt-3"
                onClick={() => {
                  setButtonClicked(true);
                  window.location.href = "/donate";
                }}
              >
                 Make a Donation
              </button>


            </div>
          </div>
            </div> 
            </div>
            
          
          
        </section>
        
      </motion.div>
    </React.Fragment>
  );
};

export default Mission;
