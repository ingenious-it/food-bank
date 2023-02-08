import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/navBar';
import AdminDash from './components/admin';
import ImageComp from './components/imageComponent';
import BodyIntro from './components/introbody';
import DonatePrompt from './components/moneyDonation/box'

function App() {
  return (
    // <div className='alert alert-danger'>Hello World
    <React.Fragment>
      {/* <Nav /> */}
      <ImageComp />
      <BodyIntro/>
      <DonatePrompt/>
</React.Fragment>

  );
}

export default App;
