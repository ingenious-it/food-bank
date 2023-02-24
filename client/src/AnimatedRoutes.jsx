import React from 'react';
import { Route,Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Why from './components/navBarComponents/whyFoodBank';
import Propose from './components/Propose';
import Projects from './components/navBarComponents/Projects';
import ContactUs from './components/navBarComponents/ContactUs';
import DonatePrompt from './components/moneyDonation/box';
import Home from './components/homePageElements/Home';
import Mission from './components/navBarComponents/Mission';
import SignUp from './components/login/signup';
import Login from './components/login/Login';
import Donate from './components/foodDonate/Donate';



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
                <Route path='/moneyDonate' element={<DonatePrompt/>}/>
            </Routes>
        </AnimatePresence>
        </React.Fragment>
     );
}
 
export default AnimatedRoutes;