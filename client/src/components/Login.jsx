import React from "react";
import "./Login.css";
import Nav from "./navBar";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import axios from "axios";
import useAuthToken from "./services/UseAuthToken";
import jwtDecode from "jwt-decode";
const Login = () => {
    const [loginData, setLoginData] = useState({
      username: '',
      password: '',
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
          const response = await axios.post('http://localhost:8080/RegisteredUser/login', loginData);
    
          if (response.status === 200) {
            
            const untoken = response.data.token;
            console.log(untoken);
            // Save token to local storage and perform further actions
            localStorage.setItem('token', untoken);
            const decodedToken = jwtDecode(untoken);
            console.log(decodedToken);
          } else {
            // Login failed
            // Handle error, display error message, etc.
          }
        } catch (error) {
          // Handle network error
        }
      };

  
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
            <div class="form-box1">
              <div class="form-value">
                <form action="">
                  <h2>Login</h2>
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
                      <input type="checkbox" />
                      Remember Me
                    </label>
                    <p>
                      <a className="text-white" href="/forgetpassword">
                        <p>Forget Password</p>
                      </a>
                    </p>
                  </div>
                  <button className="button1"  onClick={HandleLogin}>Log in</button>
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
