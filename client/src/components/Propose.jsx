import React from 'react';
import Nav from './navBar';
import {motion} from 'framer-motion';
import './Donate.css'
import { useState } from 'react';
import ProposeModal1 from './ProposeModal1';

const Propose = () => {
 const [openProposeModal,setOpenProposeModal]=useState(false);

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
               <h1 className='text-white pt-5'>Propose Victims</h1>
               <h2 className='text-white'>Are You Ready to Help?</h2>

            </div>
        </div>
          </div>

          <div className='d-flex justify-content-center'>
          <div className='lcontainer d-flex justify-content-around mt-5 w-75 '>
            <div className='scontainer p-3'>
                <h1>YOU CAN MAKE A DIFFERENCE</h1>
                <hr className='w-25'/>
                <p><b>Together, we can overcome the food crisis and provide a brighter future for affected individuals and communities.</b></p>
               <p> As a humanitarian organization helping victims of the food crisis, values any information provided about affected 
                   individuals or communities. Your contribution is confidential and won't be shared with external parties. 
                   Please share any relevant information to assist us in providing support to those in need.</p>
            </div>
            <div className='scontainer2 bg-dark text-white p-3 '>
                <h2>“You have not lived today until you have done something for someone who can never repay you” </h2>
                <hr className='w-25 '/>
             <p>Never stop doing little things for others. Sometimes, those little things occupy the biggest part of their heart. </p>
                 <p> JOIN US IN MAKING DIFFERENCE... </p> 
            </div>

          </div>
          </div>

          <div className='d-flex justify-content-center mt-5'>
            <div className='d-flex justify-content-center w-75 flex-column'>
                    <div className='text-center'>
                    <h1>Help us by providing Information about victims</h1>
                    <p>We guarantee that any information you provide regarding victims of the food crisis will remain confidential and will not be 
                        shared with any external parties, as we value your contribution."</p>

                    <p>"Confidentiality is a virtue of the loyal, as loyalty is the virtue of faithfulness." </p>
                    </div>

                    <div className='d-flex justify-content-center mt-4 mb-5'>
                    
                    <button className="btn text-white btncolor mb-2 ps-5 pe-5" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
                        setOpenProposeModal(true);
                    }}>
                    Propose Victim </button>
                    </div>

                    {openProposeModal && <ProposeModal1/>}

            </div>
         </div>



            </motion.div>
            
        </React.Fragment>
     );
}
 
export default Propose;