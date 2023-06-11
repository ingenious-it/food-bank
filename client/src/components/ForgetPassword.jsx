import React, { useState } from "react";
import "./ForgetPassword.css";
import Nav from "./navBar";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    // Check if the email is valid using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
  
    try {
      const response = await axios.post(
        "http://localhost:8080/RegisteredUser/forgotpassword",
        { email },
        {
          headers: { "content-type": "application/json" }
        }
      );
  
      console.log(response.data);
      alert("Password reset link sent successfully,check your mail");
      //toast.ersuccessror("Password reset link sent successfully,check your mail");
    } catch (error) {
      console.log(error);
      // Handle network or request error
    }
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
                  <h2>Forget password?</h2>
                  <p className="p1">We will send you reset instructions</p>
                  <div class="inputbox">
                    {/* <ion-icon name="mail-outline"></ion-icon> */}
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />

                    <label for="">Email Address</label>
                  </div>

                  <button className="button1" disabled={!isEmailValid}
                  onClick={handleSubmit}
                  >
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

export default ForgetPassword;
