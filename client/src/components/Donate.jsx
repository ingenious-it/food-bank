import React from 'react';
import Nav from './navBar';
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
        <div className="bg-image-donate">
          
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
            <div className='scontainer p-3 text-justify'>
                <h1>YOU CAN MAKE A DIFFERENCE</h1>
                <hr className='w-25'/>
                <p><b>Join us in our mission to make a lasting impact on families and communities by harnessing the transformative potential of education.</b></p>
                <p>With the appropriate resources and education, a significant portion of preventable and treatable blindness in developing nations can be mitigated.</p>
            </div>
            <div className='scontainer2 bg-dark text-white p-3 '>
                <h2>Your tax deductible donation is needed more than ever.</h2>
                <hr className='w-25 '/>
                <p>As a registered nonprofit organization, all donations meeting the necessary requirements are eligible for tax deductions. To ensure that you receive the appropriate documentation, kindly provide us with your name and address</p>
            </div>


          </div>
          </div>

          <div className='d-flex justify-content-center mt-5'>
            <div className='d-flex justify-content-center w-75 flex-column'>
                    <div className='text-center'>
                    <h1>How would you like to Donate?</h1>
                    <p>In our efforts to alleviate hunger and improve food security, every contribution counts. By making a donation, no matter the amount, you can directly impact the lives of individuals and communities facing food insecurity. Together, we can work towards reducing hunger and ensuring that everyone has access to nutritious meals.</p>

                    </div>
                    <div className='d-flex w- justify-content-center align-items-center' >
                    <div className='btgroup  d-flex justify-content-between mt-4 mb-5'>
                    <button 
                    className="btn btn-outline-light text-white btncolor mb-2 ps-5 pe-5 me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">
                    Donate Once </button>
                    {/* <button className="btn text-white btncolor mb-2 ps-5 pe-5">
                    Donate Monthly </button> */}
                    <button className="btn text-white btncolor mb-2 ps-5 pe-5 ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
                        setOpenFoodModal(true);
                    }}>
                    Donate Food </button>
                    </div>

                    {openFoodModal && <FoodModal1/>}

                    </div>

  

            </div>
         </div>



            </motion.div>
            
        </React.Fragment>
     );
}
 
export default Donate;