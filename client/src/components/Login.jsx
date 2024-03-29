import React from "react";
import "./Login.css";
import Nav from "./navBar";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import axios from "axios";
import useAuthToken from "./services/UseAuthToken";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const HandleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission and page refresh

    try {
      const response = await axios.post(
        "http://localhost:8080/RegisteredUser/login",
        loginData
      );

      if (response.status === 200 ) {
        
        if(response.data.token != null)
        {
          const untoken = response.data.token;
        localStorage.setItem("token", untoken);
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        window.location.href = "/";
        //right 
        }
        else{
        // Login failed
        // Handle error, display error message, etc.
          console.log("lOGIN vfd")
          toast.error("Invalid username or password");
        }
       
      } else {

       
      }
    } catch (error) {
     
      // Handle network error
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
            <div class="form-box1">
              <div class="form-value">
                <form action="">
                  <h2 className='mt-2 text-center'>Login</h2>
                  <div class="inputbox">
                    {/* <ion-icon name="mail-outline"></ion-icon> */}
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={loginData.username}
                      onChange={handleInputChange}
                      required
                    />
                    <label for="">Username</label>
                  </div>
                  <div class="inputbox">
                    {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={loginData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <label for="">Password</label>
                  </div>
                  <div class="forget d-flex justify-content-between mt-1">
                    <label for="">
                      {/* <input type="checkbox"  /> */}
                      
                    </label>
                    <p>
                      <a className="text-white" href="/forgetpassword">
                        <p>Forget Password</p>
                      </a>
                    </p>
                  </div>
                  <button className="button1" onClick={HandleLogin}>
                    Log in
                  </button>
                  <div class="register">
                    <p>
                      Don't have an account? <a href="/signup">SignUp</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Login;
