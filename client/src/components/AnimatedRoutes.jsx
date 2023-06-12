import React from 'react';
import { Route,Routes, useLocation } from 'react-router-dom';
import ContactUs from './ContactUs';
import Home from './Home';
import Projects from './Projects';
import {AnimatePresence} from 'framer-motion';
import Mission from './Mission';
import Why from './whyFoodBank';
import Propose from './Propose';
import Login from './Login';
import SignUp from './signup';
import Donate from './Donate';
import Team from './ourteam';
import ForgetPassword from './ForgetPassword';
import DonatePrompt from "./moneyDonation/box";
import PayPalPrompt from "./moneyDonation/payPalIntegration";
import ResetPassword from './ResetPassword';

const AnimatedRoutes = () => {
    const location=useLocation();

    return ( 
        <React.Fragment>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/ourteam' element={<Team/>}/>
            <Route path='/mission' element={<Mission/>}/>
            <Route path='/whyFoodBank' element={<Why/>}/>
            <Route path='/propose' element={<Propose/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            <Route path='/donate' element={<Donate/>}/>
            <Route path='/checkout'  element={<PayPalPrompt/>} />
              <Route path='/reset_password' element = {<ResetPassword/>} />


              <Route path="/money-donate" element={<DonatePrompt />} />

            </Routes>
        </AnimatePresence>
        </React.Fragment>
     );
}
 
export default AnimatedRoutes;