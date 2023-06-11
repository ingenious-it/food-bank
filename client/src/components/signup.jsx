import React, { useState } from 'react';
import './signup.css';
import Nav from './navBar';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrUserAdmin } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role,SetRole]= useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  
    // Check if the username is already taken
    axios.get(`http://localhost:8080/RegisteredUser/exists/${username}`)
      .then((response) => {
        if (response.data) {
          toast.error("Username is already taken");
        } else {
          // Proceed with form submission
          const newUser = {
            firstName,
            lastName,
            email,
            contactNumber,
            username,
            password,
            confirmPassword,
            role
          };
  
          axios.post('http://localhost:8080/RegisteredUser/saveUser', newUser)
            .then((response) => {
              console.log(response);
              toast.success("Form submitted successfully");
              window.location.href = "/";

            })
            .catch((error) => {
              console.log(error);
              toast.error("An error occurred while sending data");
            });
  
          setFirstName("");
          setLastName("");
          setEmail("");
          setContactNumber("");
          setUsername("");
          setPassword("");
          setConfirmPassword("");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occurred while checking username availability");
      });
  };
  
    return ( 
        <React.Fragment>
              <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
/>
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
                  <h2 className='mt-2 text-center'>SignUp</h2>

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

                  <label for="role" class="dropd">Choose a Role:</label>
                  <select name="roles" id="role" onChange={(e) => SetRole(e.target.value)} class="transparent-dropdown">
                    <option value='DataSupplier' >DataSupplier</option>
                    <option value='Donator'>Donator</option>
                    <option value='Both' >Both</option>
                      
                </select>  
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