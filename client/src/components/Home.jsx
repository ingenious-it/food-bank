import React from "react";
import ImageComp from "./imageComponent";
import BodyIntro from "./introbody";
import "./Home.css";
import DCards from "./CardsHome";
import { motion } from "framer-motion";
import DonatePrompt from "./moneyDonation/box";
import { useInView } from "react-intersection-observer";
//allows to detect when an element is in view, and then trigger an animation.

const Home = () => {
  const { ref, inView } = useInView();

  const variants = {
    visible: { x: 0 },
    hidden: { x: 250 },
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
        <ImageComp />
        <BodyIntro />

        <div>
          <div className="img11 bg-dark">
            <div class="img-overlay">
              <h1>
                How do you end hunger? You start with nutritious wholesome
                foods.
              </h1>
              <p>
                One can provide support by making a monetary contribution,
                donating food items, or offering suggestions for aiding victims
              </p>
              <button type="button" class="btn btn-outline-light mb-3 mt-3">
                View Our Programs
              </button>
            </div>
          </div>

         
          <section className="m-3 text-center">
            <br></br>
            <h6>
            The Food Bank is a concept where people can donate money and food to help those who are 
            impacted by the food crisis. People can donate food or money through this app, as well as 
            identify those who are affected by the food crisis. The system's objective is to make food 
            donations more effective and efficient while also developing a user-friendly platform to donate. 
            In that regard, the system aids in persuading individuals to perform these social tasks.
            </h6>
            <br></br>
          </section>

          <div className="imgx bg-dark">
            <div class="img-overlay"></div>
          </div>

          <section>
            <div className="aimage d-flex justify-content-between align-items-center m-4 p-4">
              <div>
                <h1>Why Is Food Bank Helping to Solve Hunger</h1>
                <br />
                <p>
                  To end Food Scarcity, we must work together to bring food to
                  the victims who need it most.
                  <br />
                  Every donation counts and can make a difference in the lives
                  of those who are struggling to put food on the table.
                </p>
                <br></br>
                <button type="button" class="btn btn-primary">
                  LEARN WHY
                </button>
              </div>
              {/* <div className='m-2'>
                        <motion.div animate={{x:[300,-50]}}>  
                    < img class="sideImg rounded float-end " src={require('../images/img1.jpeg')}/>
                      </motion.div>   
                    </div>  */}
              <div className="m-2" ref={ref}>
                <motion.div
                  animate={inView ? "visible" : "hidden"}
                  variants={variants}
                  transition={transition}
                >
                  <img
                    className="sideImg rounded float-end"
                    src={require("../images/img1.jpeg")}
                    alt="example"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <div className="img12 bg-dark">
            <div class="img-overlay">
              <h1>
                A little generosity can go a long way. What you give today will
                help prevent Hunger in the lives of many tomorrow.
              </h1>
              <p>
                We're on a mission to #Stop Hunger! Join our network of heroes
                and begin changing lives today.
              </p>
              <button type="button" class="btn btn-outline-light mb-3 mt-3">
                Sign Up Now
              </button>
            </div>
          </div>

          <DCards />
          <section className=" ms-5 text-center" >
            <h2>
            "We make a living by what we get,but we make a life by what we give."</h2>
            <br></br> 
            <h3>- Winston Churchil</h3>
            
          </section>
          <br></br>
          <hr></hr>
        </div>
      </motion.div>
      <section>
        <h2 className="text-center fw-bold mb-3">Frequently Asked Questions</h2>
        <div className="d-flex justify-content-center">
          <div class="accordion  mb-3 " id="accordionPanelsStayOpenExample">
            <div class="accordion-item mb-1 ">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button bg-dark text-white icon-white "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  What is Food Bank?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  The food bank is a wonderful charitable app that serves as a
                  lifeline to countless individuals and families who struggle
                  with food insecurity. It is a donation app that allows people
                  to donate money and food items to those in need. The mission
                  of a food bank is to collect and distribute food to those who
                  are hungry and in need of assistance. By doing so, they
                  provide support to families and individuals who may be facing
                  difficult circumstances.
                </div>
              </div>
            </div>
            <div class="accordion-item mb-1">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed bg-dark text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  How can we contribute?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  There are two ways you can contribute to our cause of helping
                  those in need: donating food or donating money. If you choose
                  to donate food, you can bring it directly to our warehouse, or
                  our representatives can arrange to collect it from you.
                  Additionally, if you know of any individuals or families who
                  could benefit from our assistance, you can propose them as
                  potential recipients of our aid. We appreciate any and all
                  support towards our mission to make a positive impact on the
                  lives of those facing hardship.
                </div>
              </div>
            </div>
            <div class="accordion-item mb-1">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed bg-dark text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  How can we propose victims?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  You can enter information on those who need help (victims of
                  the food crisis). You need to have a user account to enter the
                  victims' information.Once the data is submitted, the system
                  checks whether entered details are existing information or
                  not. If not, those details save to the system as the new
                  victim who needs a donation.
                </div>
              </div>
            </div>
            <div class="accordion-item mb-1">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed bg-dark text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  How the Food Donations are happenning?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  You can donate food whether you are registered users or
                  not. you have the option of donating food in your name by
                  including your information or anonymously. Once a you are
                  granted access to give, you can browse the food products that
                  can be donated as well as the locations of the warehouses. The
                  donor must next input the donation dates and choose a specific
                  warehouse. Additionally, a donor has the choice of donating on
                  their own or having an organization pick it up. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
