import React from 'react';
import './ourteam.css'
import Nav from './navBar';
import {motion} from 'framer-motion';

const Team = () => {
    return (
        <React.Fragment>
                        <motion.div
                                 initial={{width:0}}
                                 animate={{width:"100vw"}}
                                 exit={{x:window.innerWidth, transition:{duration:0.1}}}
            >
        <div className="bg-image-team">
          
          <Nav/>
          <div className='wrap-out d-flex justify-content-center mt-5'>
              <div className="wrap d-flex justify-content-center align-items-center h-100 mt-5 p-5">
                 <h1 className='text-white pt-5'>Meet Our Food Bank Team</h1>
  
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

            <div className='teami m-3 d-flex justify-content-around w-100 mb-5'>
                <div className='w-25'>
                <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasWithBothOptions">
                <figure class="figure">
                    <img src={require('../images/memberimage001.jpg')} class="imgm w-100" alt="member" />
                    <figcaption class="figure-caption"><h5>Mr.John smith</h5></figcaption>
                    </figure>    
                </button>
                </div>
                <div className='w-25'>
                <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasWithBothOptions"><img src={require('../images/memberimage001.jpg')} class="imgm w-100" alt="member" /></button>
                </div>
                <div className='w-25'>
                <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasWithBothOptions"><img src={require('../images/memberimage001.jpg')} class="imgm w-100" alt="member" /></button>
                </div>



            </div>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Jhon smith</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body d-flex  flex-column ">
                    <div className='w-100 m-2 d-flex justify-content-center mb-4'><img className='w-75' src={require('../images/memberimage001.jpg')}  alt="member" /></div>
                    <div>
                    <p>Jogehn Smith is a Senior Software Engineer on our team. John has over 10 years of experience in 
                        software development and specializes in backend technologies. In his role, John is responsible for 
                        designing and implementing the core architecture of our software applications, ensuring they are scalable and efficient.</p>
                    <p>One of John's key strengths is his ability to work collaboratively with other team members.
                         He is an excellent communicator and always seeks feedback from his peers to ensure that the solutions he develops
                          meet the needs of the entire team. John is also passionate about mentoring junior developers and has a proven track
                           record of helping them grow and develop their skills</p>
                    </div>

                </div>
                </div>
        </React.Fragment>

      );
}
 
export default Team;