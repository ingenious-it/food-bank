import React from 'react';
import { Route,Routes, useLocation } from 'react-router-dom';
import ContactUs from './ContactUs';
import Home from './Home';
import Projects from './components/Projects';
import {AnimatePresence} from 'framer-motion';
import Mission from './components/Mission';
import Why from './components/navBarComponents/whyFoodBank';
import Propose from './components/Propose';
import Login from './Login';
import SignUp from './signup';
import Donate from './Donate';

const AnimatedRoutes = () => {
    const location=useLocation();

    return ( 
        <React.Fragment>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/mission' element={<Mission/>}/>
            <Route path='/whyFoodBank' element={<Why/>}/>
            <Route path='/propose' element={<Propose/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/donate' element={<Donate/>}/>
            </Routes>
        </AnimatePresence>
        </React.Fragment>
     );
}
 
export default AnimatedRoutes;