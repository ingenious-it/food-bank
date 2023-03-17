import React from 'react';
import Nav from './navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './whyFoodBank.css';
import {motion} from 'framer-motion';

const Why = () => {
    return ( 
        <React.Fragment>
             <motion.div
                                 initial={{width:0}}
                                 animate={{width:"100vw"}}
                                 exit={{x:window.innerWidth, transition:{duration:0.1}}}
            >
                 
           <div className="bg-img-why bg-dark">
               <Nav/>
               <div class="img-overlay">
                       <h1>General Information</h1>
               </div>
                
                </div>

                <div className='main-container text-center'>
                    <h2>Why Food Bank?</h2>

                    
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-6  p-4" align="justify">
                            <p>Millions of people in Sri Lanka are suffering from hunger and malnutrition,
                                 which can lead to preventable illnesses and even death.
                                  It is heartbreaking to see people in our country struggle to find enough food to eat, 
                                  while their basic nutritional needs go unmet. The statistics are discouraging, but there is hope</p>

                        </div>
                        <div class="col-6  p-4" align="justify">
                        <p>By supporting organizations like Food Bank, we can help provide food to those who need it most. 
                            Every small act of kindness can make a difference in the lives of these vulnerable people. 
                            Please consider supporting the efforts of Feed the people Sri Lanka today, and together we can create a better future for all of our people</p>


                        </div>
                    </div>
                    </div>
                    <hr/>
                    <p>Help us change lives here in Sri Lanka. Click below for more information about our projects</p>
                    <h3>Here is some more general information on our programs.</h3>


                    <div className='maincontainer m-5'>
                <div class="row ">
                        <div class="col">
                            <div class="card h-80 shadow p-3  rounded  text-dark">
                            <img src={require('../images/image14.png')} class="card-img-top" alt="project1" />
                            <div class="card-body">
                                <h5 class="card-title">Project Title 1</h5>
                                <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                            
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-80 shadow p-3  rounded  text-dark">
                            <img src={require('../images/image16.png')} class="card-img-top" alt="project2"/>
                            <div class="card-body">
                                <h5 class="card-title">Project Title 2</h5>
                                <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-80 shadow p-3  rounded  text-dark">
                            <img src={require('../images/image17.png')} class="card-img-top" alt="project3"/>
                            <div class="card-body">
                                <h5 class="card-title">Project Title 3</h5>
                                <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-80 shadow p-3  rounded  text-dark">
                            <img src={require('../images/image15.png')} class="card-img-top" alt="project4"/>
                            <div class="card-body">
                                <h5 class="card-title">Project Title 4</h5>
                                <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                
                            </div>
                            </div>
                        </div>
                
                </div>
                </div>






                </div>
                </motion.div>
            
        </React.Fragment>
     );
}
 
export default Why;