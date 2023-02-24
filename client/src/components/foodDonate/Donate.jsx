import React from 'react';
import Nav from '../navBar/navBar';
import {motion} from 'framer-motion';
import './Donate.css'
import { useState } from 'react';
import FoodModal1 from './FoodModal1';

const Donate = () => {
 const [openFoodModal,setOpenFoodModal]=useState(false);

    return ( 
        <React.Fragment>
                    <motion.div
                     initial={{width:0}}
                     animate={{width:"100vw"}}
                     exit={{x:window.innerWidth, transition:{duration:0.1}}}
        >
        <div className="bg-image-contact">
          
        <Nav/>

        <div className='wrap-out d-flex justify-content-center mt-5'>
            <div className="wrap d-flex justify-content-center align-items-center h-100 mt-5 p-5 flex-column">
               <h1 className='text-white pt-5'>Donate</h1>
               <h2 className='text-white'>Are You Ready to Help?</h2>

            </div>
        </div>
          </div>

          <div className='d-flex justify-content-center'>
          <div className='lcontainer d-flex justify-content-around mt-5 w-75 '>
            <div className='scontainer p-3'>
                <h1>YOU CAN MAKE A DIFFERENCE</h1>
                <hr className='w-25'/>
                <p><b>Help us continue our vital work and change the lives of families and communities through the transformative power of education.</b></p>
                <p>Much of the blindness experienced in developing countries is easily prevented or treated with the right resources and education.</p>
            </div>
            <div className='scontainer2 bg-dark text-white p-3 '>
                <h2>Your tax deductible donation is needed more than ever.</h2>
                <hr className='w-25 '/>
                <p>All donations of $2 or more are tax deductible – please ensure you provide us with your name and address so we can post a receipt to you.</p>
            </div>


          </div>
          </div>

          <div className='d-flex justify-content-center mt-5'>
            <div className='d-flex justify-content-center w-75 flex-column'>
                    <div className='text-center'>
                    <h1>How would you like to donate?</h1>
                    <p>By making a greater contribution of $100, $250 or $1,000, much more can be achieved through the education of eye care professionals and the upgrading of eye centres to sustainably address preventable blindness. Our donation portal is safe and secure.</p>

                    </div>

                    <div className='btgroup d-flex justify-content-between mt-4 mb-5'>
                    <button className="btn text-white btncolor mb-2 ps-5 pe-5">
                    Donate Once </button>
                    <button className="btn text-white btncolor mb-2 ps-5 pe-5">
                    Donate Monthly </button>
                    <button className="btn text-white btncolor mb-2 ps-5 pe-5" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
                        setOpenFoodModal(true);
                    }}>
                    Donate Food </button>
                    </div>

                    {openFoodModal && <FoodModal1/>}

            </div>
         </div>



            </motion.div>
            
        </React.Fragment>
     );
}
 
export default Donate;