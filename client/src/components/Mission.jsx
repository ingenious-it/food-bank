import React from 'react';
import Nav from './navBar';
import DFooter from './Footer';
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
                <div class="img-overlay ">
                    <div className ="imgmission rounded "></div>
                    
                <div className='wrap-out d-flex justify-content-center mt-6'>
            <div className="wrap d-flex justify-content-center align-items-center h-100 mt-5 p-5">
               <h2 className='text-white pt-5'>Read The Mission of Feed God’s Hungry Children</h2>

            </div>
                </div>

                </div>
                </div>

                
                <section>
              


                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-6  p-4 ">
                            <h1>Feed God's Hungry Children Is Changing Lives</h1>
                            <h4>Our Mission</h4>
                            <p>
                            Feed God’s Hungry Children reaches out to hurting children and 
                            their families all over the world by providing food, clothing, and spiritual education. 
                            You can be a part of helping and healing these forgotten and hurting children.
                            </p>

                            <h4>Why FGHC?</h4>
                            <p>
                            Feed God’s Hungry Children is proud to be rated so highly
                             by esteemed watchdog organizations like Guidestar and Charity Navigator
                            </p>

                        </div>
                        <div class="col-6  p-4">
                        <div className ="imgmission2 rounded "></div>


                        </div>
                    </div>
                    </div>
                </section>





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