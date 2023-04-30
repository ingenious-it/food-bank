import React, { useState } from 'react';
import './signup.css';
import Nav from './navBar';
import { motion } from 'framer-motion';
import axios from 'axios';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      contactNumber,
      username,
      password,
      confirmPassword,
    };

    axios.post('/api/users/saveUser', newUser)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
<form onSubmit={handleSubmit}>
                  <h2 className='mt-2'>SignUp</h2>

                  <div class="inputbox">
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    <label>First Name</label>
                  </div>
                  <div class="inputbox">
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    <label>Last Name</label>
                  </div>
                  <div class="inputbox">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>Email Address</label>
                  </div>
                  <div class="inputbox">
                    <input type="tel" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
                    <label>Contact Number</label>
                  </div>
                  <div class="inputbox">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label>User Name</label>
                  </div>

                  <div class="inputbox">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label>Password</label>
                  </div>
                  <div class="inputbox">
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <label>Confirm Password</label>
                  </div>

                  <div class="forget">
                    <label>
                      <input type="checkbox" required />I agree to the terms of use & Privacy
                      policy
                    </label>
                  </div>
                  <div>
                    <button className='button1' type="submit">Sign Up</button>
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