import React from 'react';
import './signup.css';
import Nav from './navBar';
import {motion} from 'framer-motion';

const SignUp = () => {
    return ( 
        <React.Fragment>
        <motion.div
         initial={{width:0}}
         animate={{width:"100vw"}}
         exit={{x:window.innerWidth, transition:{duration:0.1}}}
>
<div className="bg-image-signup">

<Nav/>
<div className='form-container mt-5 '>
<div class="form-box1">
<div class="form-value">
    <form action="">
    <h2 className='mt-2'>SignUp</h2>
   
            <div class="inputbox">
              {/* <ion-icon name="mail-outline"></ion-icon>  */}
              <input type="firstname" required />
              <label for="">First Name</label>
            </div>
            <div class="inputbox">
              {/* <!-- <ion-icon name="mail-outline"></ion-icon> --> */}
              <input type="lastname" required />
              <label for="">Last name</label>
            </div>
            <div class="inputbox">
              {/* <!-- <ion-icon name="mail-outline"></ion-icon> --> */}
              <input type="email" required />
              <label for="">Email Address</label>
            </div>
            <div class="inputbox">
              {/* <!-- <ion-icon name="mail-outline"></ion-icon> --> */}
              <input type="contactnumber" required />
              <label for="">Contact Number</label>
            </div>
            <div class="inputbox">
              {/* <!-- <ion-icon name="mail-outline"></ion-icon> --> */}
              <input type="username" required />
              <label for="">User name</label>
            </div>

            <div class="inputbox">
              {/* <!-- <ion-icon name="lock-closed-outline"></ion-icon> --> */}
              <input type="password" required />
              <label for="">Password</label>
            </div>
            <div class="inputbox">
              {/* <!-- <ion-icon name="lock-closed-outline"></ion-icon> --> */}
              <input type="confirmpassword" required />
              <label for="">Confirm Password</label>
            </div>
            
            <div class="forget">
              <label for="">
                 <input type="checkbox" />I agree to the terms of use & Privacy
                policy
              </label>
            </div>
            <div >
            <button className='button1'>Sign Up</button>
            </div>
            <div class="register">
              <p>Already have an account? <a href='/Login'>Login here</a></p>
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
 
export default SignUp;