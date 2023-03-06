import React from 'react';
import './Login.css';
import Nav from './navBar';
import {motion} from 'framer-motion';


const Login = () => {
    return ( 
    

<React.Fragment>
                    <motion.div
                     initial={{width:0}}
                     animate={{width:"100vw"}}
                     exit={{x:window.innerWidth, transition:{duration:0.1}}}
        >
        <div className="bg-image-login">
          
        <Nav/>
       <div className='form-container mt-5 m-1'>
        <div class="form-box1">
            <div class="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div class="inputbox">
                        {/* <ion-icon name="mail-outline"></ion-icon> */}
                        <input type="Username" required />
                        <label for="">Username</label>
                    </div>
                    <div class="inputbox">
                        {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                        <input type="password" required />
                        <label for="">Password</label>
                    </div>
                    <div class="forget d-flex justify-content-between mt-1">
                       
                        <label for=""><input type="checkbox" />Remember Me</label>
                        <p><a className='text-white' href="#"><p>Forget Password</p></a></p>
                      
                    </div>
                    <button className='button1'>Log in</button>
                    <div class="register">
                        <p>Don't have a account? <a href='/signup'>SignUp</a></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        </motion.div>
        </React.Fragment>
     );
}
 
export default Login;