import React from 'react';
import Nav from './navBar';
import {motion} from 'framer-motion';
import './Projects.css';


const Projects = () => {
    return ( 
        <React.Fragment>
            <motion.div
                                 initial={{width:0}}
                                 animate={{width:"100vw"}}
                                 exit={{x:window.innerWidth, transition:{duration:0.1}}}
            >
        <div className="bg-image-projects">
          
          <Nav/>
          <div className='wrap-out d-flex justify-content-center mt-5'>
              <div className="wrap d-flex justify-content-center align-items-center h-100 mt-5 p-5">
                 <h1 className='text-white pt-5'>Our Project & Programs</h1>
  
              </div>
          </div>
        </div>
        <div className='textcontain d-flex ms-5 me-5 text-justify flex-direction-column'>
                <h5 className='mt-5'>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting.</h5>
                
            </div>
            <hr className='hr1 d-flex ms-5 me-5 mb-5' />
            </motion.div>

            <div className='maincontainer m-5'>
                <div class="row ">
                        <div class="col">
                            <div class="card1 h-80 shadow p-3  rounded  text-white">
                            <img src={require('../images/image14.png')} class="card-img-top" alt="project1" />
                            <div class="card-body">
                                <h5 class="card-title">Project Title 1</h5>
                                <p class="card-text">There are many variations of passages of Lorem Ipsum available,
                                 but the majority have suffered alteration in some form, by injected humour, 
                                 or randomised words which don't look even slightly believable</p>
                                                {/* <!-- Button trigger modal --> */}
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectmodal1">
                                See More...
                                </button>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card2 h-100 shadow p-3  rounded  text-white">
                            <img src={require('../images/image16.png')} class="card-img-top" alt="project2"/>
                            <div class="card-body">
                                <h5 class="card-title">Project Title 2</h5>
                                <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectmodal1">
                                See More...
                                </button>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card1 h-100 shadow p-3  rounded  text-white">
                            <img src={require('../images/image17.png')} class="card-img-top" alt="project3"/>
                            <div class="card-body">
                                <h5 class="card-title">Project Title 3</h5>
                                <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectmodal1">
                                See More...
                                </button>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card2 h-100 shadow p-3  rounded  text-white">
                            <img src={require('../images/image15.png')} class="card-img-top" alt="project4"/>
                            <div class="card-body">
                                <h5 class="card-title">Project Title 4</h5>
                                <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectmodal1">
                                See More...
                                </button>
                            </div>
                            </div>
                        </div>
                
                </div>
                


               {/* modal for project1 */}
                <div class="modal fade" id="projectmodal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Project title1</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                    obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
                    the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                    by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        
            </div>

        </React.Fragment>
     );
}
 
export default Projects;