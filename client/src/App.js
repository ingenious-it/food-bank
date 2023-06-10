import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/navBar';
import AdminDash from './components/admin';
import ImageComp from './components/imageComponent';
import BodyIntro from './components/introbody';
import DonatePrompt from './components/moneyDonation/box'
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import DFooter from './components/Footer';
import Modal from './components/Modal';


function App() {
  return (
    // <div className='alert alert-danger'>Hello World
    <React.Fragment>
      <BrowserRouter>
       <AnimatedRoutes/>
       <Modal/>


      </BrowserRouter>
      <DFooter/>
    </React.Fragment>

  );
}

export default App;
