import React, { useState } from "react";
import "./ForgetPassword.css";
import Nav from "./navBar";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

const ResetPassword = () => {

 const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


//   const handleEmailChange = (e) => {  // <-- Change 'event' to 'e'
//     e.preventDefault();
//     // Check if passwords match
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }
//     const newUser = {
     
//       password,
//       confirmPassword,
//     };
//     axios.post('http://localhost:8080/RegisteredUser/saveUser', newUser)
//     .then((response) => {
//       console.log(response);
//       toast.success(" submitted successfully");
//     })
//     .catch((error) => {
//       console.log(error);
//       toast.error("An error");
//     });

//     setPassword("");
//     setConfirmPassword("");

// };

const handleResetpassword = async (e) => {
  e.preventDefault();
  const url = window.location.href;
  const token = url.substring(url.lastIndexOf('=')+1);
  try{
    const response = await axios.post(
      "http://localhost:8080/RegisteredUser/resetpassword",
      { token : token,
        password : password },
      {
        headers: { "content-type": "application/json" }
      }

    )

    alert("password reset succesfully")
    navigate("/login")
  }catch (error) {
    console.log(error);
    // Handle network or request error
  }

}


  return (
    <React.Fragment>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100vw" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="bg-image-login">
          <Nav />
          <div className="form-container mt-5 m-1">
            <div class="form-box2">
              <div class="form-value">
                <form action="">
                  <h2>Reset password?</h2>
                  <p>Type here New Password</p>
                  <div class="inputbox">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label>New Password</label>
                  </div>
                  <div class="inputbox">
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <label>Confirm Password</label>
                  </div>

                  <button className="button1" onClick={handleResetpassword}>
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default ResetPassword;
