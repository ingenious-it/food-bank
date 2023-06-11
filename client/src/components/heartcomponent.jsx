import React, { useState, useRef } from 'react';
import heartIco from '../images/heart.png';
import './heartcomponent.css';

const Hearts = () => {
  const speechbRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);
  const [speechbPosition, setSpeechbPosition] = useState({ x: -1000, y: 0 });
  const [direction, setDirection] = useState(1);

  const handleStepClick = (step) => {
    if (step !== activeStep) {
      const newDirection = step > activeStep ? 1 : -1;
      setActiveStep(step);
      setDirection(newDirection);
      // setSpeechbPosition({ x: 0, y: 0 }); // Reset speech bubble position
      setTimeout(() => {
        spreadHearts();
        moveSpeechb(step);
      }, 20);

      updateSpeechbText(step); // Update speech bubble text
    }
  };

  const moveSpeechb = (step) => {
    const progressBarRect = document.querySelector('.main ul').getBoundingClientRect();
    const speechb = speechbRef.current;
    const speechbRect = speechb.getBoundingClientRect();
    const speechbWidth = speechbRect.width;
    const stepWidth = progressBarRect.width / 11; // Assuming 7 steps in the progress bar

    const newXPos = progressBarRect.left + (step - 1) * stepWidth;
    const clampedXPos = Math.max(progressBarRect.left, Math.min(newXPos, progressBarRect.right - speechbWidth));
    setSpeechbPosition({ x: clampedXPos, y: 0 });
  };
  const spreadHearts = () => {
    const heartsContainer = document.querySelector('.hearts-container');
    heartsContainer.innerHTML = '';
  
    const speechb = speechbRef.current;
    const speechbRect = speechb.getBoundingClientRect();
  
    const startingXPos = speechbRect.left + speechbRect.width / 2;
    const startingYPos = speechbRect.top + speechbRect.height / 2;
  
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heartsContainer.appendChild(heart);
  
      const xPos = startingXPos + (Math.random() - 0.5) * speechbRect.width;
      const yPos = startingYPos + (Math.random() - 0.5) * speechbRect.height;
      const animationDelay = Math.random() * 2;
  
      heart.style.left = `${xPos}px`;
      heart.style.top = `${yPos}px`;
      heart.style.animationDelay = `${animationDelay}s`;
    }
  
    // Move the speechb message horizontally
    //const stepWidth = 90 / 7; // Assuming 7 steps in the progress bar
    const newXPos = startingXPos + (activeStep - 1) * direction;
  
    // Check if the new position is within the progress bar area
    const progressBarRect = document.querySelector('.main ul').getBoundingClientRect();
    const speechbWidth = speechbRect.width;
    const minXPos = progressBarRect.left;
    const maxXPos = progressBarRect.left + progressBarRect.width - speechbWidth;
  
    // Limit the new position within the progress bar area
    const clampedXPos = Math.max(minXPos, Math.min(newXPos, maxXPos));
    speechb.style.left = `${clampedXPos}px`;
  
    setTimeout(() => {
      heartsContainer.innerHTML = ''; // Remove all the hearts
    }, 2000); // Adjust the timeout value as needed
  };
  

  const updateSpeechbText = (step) => {
    let newText = '';
    switch (step) {
      case 1:
        newText = 'You can help 50 children';
        break;
      case 2:
        newText = 'You can help 250 children';
        break;
      case 3:
        newText = 'You can help 500 children';
        break;
      case 4:
        newText = 'You can help 1000 children';
        break;
      case 5:
        newText = 'You can help 5000 children';
        break;
      case 6:
        newText = 'You can help 10000 children';
        break;
      case 7:
        newText = 'You can help 20000 children';
        break;
      default:
        newText = '';
    }
    const speechb = speechbRef.current;
    speechb.textContent = newText;
  };

  return (
    <div className="main12">
      <div className="head">
        <p className="head1">Animated Step Progress Bar</p>
      </div>

      <div className="c">
        <div
          className="speechb"
          ref={speechbRef}
          style={{ left: `${speechbPosition.x}px`, top: `${speechbPosition.y}px` }}
        >
          You can help&nbsp;
          <img className="imgHeart" src={heartIco} alt="" />&nbsp;for children
        </div>
      </div>

      <ul>
        <li onClick={() => handleStepClick(1)}>
          <div className={`progress one ${activeStep === 1 ? 'active' : ''}`}>
            <span>1</span>
          </div>
          <p>$10</p>
        </li>
        <li onClick={() => handleStepClick(2)}>
          <div className={`progress two ${activeStep === 2 ? 'active' : ''}`}>
            <span>2</span>
          </div>
          <p>$50</p>
        </li>
        {/* Rest of the list items */}
        <li onClick={() => handleStepClick(3)}>
          <div className={`progress three ${activeStep === 3 ? 'active' : ''}`}>
            <span>3</span>
          </div>
          <p>$100</p>
        </li>
        <li onClick={() => handleStepClick(4)}>
          <div className={`progress four ${activeStep === 4 ? 'active' : ''}`}>
            <span>4</span>
          </div>
          <p>$200</p>
        </li>
        <li onClick={() => handleStepClick(5)}>
          <div className={`progress five ${activeStep === 5 ? 'active' : ''}`}>
            <span>5</span>
          </div>
          <p>$1000</p>
        </li>
        <li onClick={() => handleStepClick(6)}>
          <div className={`progress six ${activeStep === 6 ? 'active' : ''}`}>
            <span>6</span>
          </div>
          <p>$2000</p>
        </li>
        <li onClick={() => handleStepClick(7)}>
          <div className={`progress seven ${activeStep === 7 ? 'active' : ''}`}>
            <span>7</span>
          </div>
          <p>$5000</p>
        </li>
      </ul>

      <div className="hearts-container"></div>
    </div>
  );
};

export default Hearts;
