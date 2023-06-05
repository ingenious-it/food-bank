import React from 'react';
import Nav from './navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mission.css';
import {motion} from 'framer-motion';


 const Mission = () => {
    return ( 
    <React.Fragment>
            <motion.div
                                 initial={{width:0}}
                                 animate={{width:"100vw"}}
                                 exit={{x:window.innerWidth, transition:{duration:0.1}}}
            >
                 
       <div className="bg-img-mission bg-dark">
       <Nav/>
                <div class="img-overlay1 d-flex justify-content-center">
                <div className="wrap-out d-flex justify-content-center mt-5 ">
            <div className="wrap d-flex justify-content-center align-items-center text-center h-100 mt-5 p-5">
              <h1 className="text-white pt-5 ">Read the mission of Food Bank</h1>
            </div>
          </div>
                  
                </div>

        </div>
                
                
                <br/>

                
          
                    <div class="">
                    <div class="lcontain d-flex justify-content-around w-100">
                        <div className='w-50 m-5'>
                            <h1>FOOD BANK Is Changing Lives</h1>
                            <h4>Our Mission</h4>
                            <p>
                            Our mission is to address food insecurity and hunger by providing a platform that connects food donors with victims in need. 
                            We aim to make it easy for people to donate food, as well as monetary donations.
                             Our goal is to create a community of generosity and compassion, where those who have excess food can share it with those who are struggling to put food on the table. 
                             We believe that everyone deserves access to nutritious food, and we are committed to helping bridge the gap between those who have and those who need 
                             and making that a reality by leveraging technology to help solve this issue.
                             Our vision is a world where hunger is no longer a barrier to human potential and well-being.
                            </p>

                            <h4>Why FGHC?</h4>
                            <p>
                            Feed God’s Hungry Children is proud to be rated so highly
                             by esteemed watchdog organizations like Guidestar and Charity Navigator
                            </p>

                        </div>
                        <div className='w-50 m-5'>
                        <div className ="imgmission2 rounded "></div>


                        </div>
                    </div>
                    </div>
              





            </motion.div>

            {/* <div>
            <div class="d-flex">
            <div class="split left">
                <div class="centered">
                    <h1>Why Is Feed God's Hungry
                        Children Helping To Solve Children 
                        Hunger
                    </h1><br></br>
                    <p>To end Child Hunger, we must work together to bring
                        nutritious food to the children who need it most.
                    </p><br></br>
                    
                </div>
            </div>

            <div class="split right">
                <div class="centered">
                    <motion.div animate={{x:[300,-100]}}>
                    <img class="sideImg rounded float-end"></img>
                    </motion.div>
                    
                </div>
            </div>
        </div>
        
      
        
    </div>
     */}




        </React.Fragment>
     );
 }
  
 export default Mission;