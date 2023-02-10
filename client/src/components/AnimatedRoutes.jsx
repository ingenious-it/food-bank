import React from 'react';
import { Route,Routes, useLocation } from 'react-router-dom';
import ContactUs from './ContactUs';
import Home from './Home';
import Projects from './Projects';
import {AnimatePresence} from 'framer-motion';

const AnimatedRoutes = () => {
    const location=useLocation();

    return ( 
        <React.Fragment>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            </Routes>
        </AnimatePresence>
        </React.Fragment>
     );
}
 
export default AnimatedRoutes;