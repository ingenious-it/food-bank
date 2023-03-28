import React,{useRef} from 'react';
import Nav from './navBar';
import './ContactUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiMapPin,FiPhoneCall,FiMail } from "react-icons/fi";
import emailjs from '@emailjs/browser'; // install as  npm i @emailjs/browser
import {motion} from 'framer-motion';



const ContactUs = () => {
    const form = useRef();
    // function is directly from email.js
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_iqk69of', 'template_xa5okfb', form.current, '-fnfSB9B5M7d2gNzO')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
    
              e.target.reset();
          };
        // useRef allow to get a reference to a DOM element or a React component instance and access its properties and methods.
          
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
            <div className="wrap d-flex justify-content-center align-items-center h-100 mt-5 p-5">
               <h1 className='text-white pt-5'>Contact Us</h1>

            </div>
        </div>
          </div>

          <div className='textcontain d-flex ms-5 me-5 text-justify flex-direction-column'>
                <h5 className='mt-5'>We value your feedback and are always looking for ways to 
                improve our products and services. If you have any suggestions or comments, 
                please don't hesitate to let us know. For business inquiries, please include information 
                about your company and the nature of your inquiry. We're always looking for new partnerships 
                and opportunities to collaborate.
                </h5>
                
            </div>
            <hr className='hr1 d-flex ms-5 me-5 mb-5' />
            </motion.div>

            <div>
                <section className='contact d-flex justify-content-center align-items-center flex-column'>
                    <div className='content text-center'>
                        <h2>Contact Us</h2>
                        <p>Thank you for your interest in contacting us! Please use the form below to send us 
                            a message, and we will get back to you as soon as possible.
                        </p>

                    </div>
                    <div className='maincontainer d-flex justify-content-center align-items-center mt-4 w-100'>
                        <div className='contactInfo d-flex flex-column w-50'>

                            <div className='box d-flex'>
                                <div className='icon d-flex justify-content-center align-items-center'><FiMapPin/></div>
                                <div className='text d-flex flex-column ms-3'>
                                    <h3>Address</h3>
                                    <p>123/1,<br/>Minuwangoda road,<br/> Galle.</p>
                                </div>
                            </div>

                            <div className='box d-flex'>
                                <div className='icon d-flex justify-content-center align-items-center'><FiPhoneCall/></div>
                                <div className='text d-flex flex-column ms-3'>
                                    <h3>Phone</h3>
                                    <p>077-258-5689<br/>071-258-5689</p>
                                </div>
                            </div>
 
                            <div className='box d-flex'>
                                <div className='icon d-flex justify-content-center align-items-center'><FiMail/></div>
                                <div className='text d-flex flex-column ms-3'>
                                    <h3>Email</h3>
                                    <p>foodbank22@gmail.com</p>
                                </div>
                            </div>


                        </div>
                        <div className='contactForm rounded'>
                            <form ref={form} onSubmit={sendEmail}>
                                <h2>Send Message</h2>
                                <div className='inputBox w-100 mt-2'>
                                    <input type={"text"} required={"required"} name={"user_name"}/>
                                    <span>Full Name</span>
                                </div>

                                <div className='inputBox w-100 mt-2'>
                                    <input type={"text"} required={"required"} name={"user_email"}/>
                                    <span>Email</span>
                                </div>
                                <div className='inputBox w-100 mt-2'>
                                    <textarea required={"required"} name={"message"}></textarea>
                                    <span>Type your Message..</span>
                                </div>
                                <div className='inputBox w-100 mt-2'>
                                    <input type={"submit"} value={"Send"}/>
                                </div>
                            </form>

                        </div>

                    </div>
                </section>
            </div>

        
      </React.Fragment>
    );
  };
  
  export default ContactUs;