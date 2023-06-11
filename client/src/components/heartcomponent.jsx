import React, { useState } from 'react';
import "./heartcomponent.css";

const Hearts = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [speechbContent, setSpeechbContent] = useState("You can help for child");
  const [animationClass, setAnimationClass] = useState("");

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const handleOfferClick = (count) => {
    switch (count) {
      case 1:
        setSpeechbContent("You chose to help with $10");
        break;
      case 2:
        setSpeechbContent("You chose to help with $50");
        break;
      case 3:
        setSpeechbContent("You chose to help with $100");
        break;
      case 4:
        setSpeechbContent("You chose to help with $200");
        break;
      case 5:
        setSpeechbContent("You chose to help with $1000");
        break;
      case 6:
        setSpeechbContent("You chose to help with $5000");
        break;
      case 7:
        setSpeechbContent("You chose to help with $10000");
        break;
      default:
        setSpeechbContent("You can help for child");
    }
    
    setAnimationClass("animate-speechb");
    setTimeout(() => {
      setAnimationClass("");
    }, 1000);
  };

  return (
    <div className="main">
      <div className="head">
        <p className="head1">Animated Step Progress Bar</p>
      </div>
      <div className="c">
        <div className={`speechb ${animationClass}`}>
          {speechbContent}&nbsp;<img className="imgHeart" src="heart.png" alt="" />&nbsp;
        </div>
      </div>

      <ul>
        <li className={selectedItem === 0 ? 'active' : ''} onClick={() => handleItemClick(1)}>
          <div className="progress one">
            <p>1</p>
            {selectedItem >= 1 && <i className="uil uil-check"></i>}
          </div>
          <p className="text">$10</p>
        </li>
        <li className={selectedItem === 1 ? 'active' : ''} onClick={() => handleItemClick(2)}>
          <div className="progress two">
            <p>2</p>
            {selectedItem >= 2 && <i className="uil uil-check"></i>}
          </div>
          <p className="text">$50</p>
        </li>
        <li className={selectedItem === 2 ? 'active' : ''} onClick={() => handleItemClick(3)}>
          <div className="progress three">
            <p>3</p>
            {selectedItem >= 3 && <i className="uil uil-check"></i>}
          </div>
          <p className="text">$100</p>
        </li>
        <li className={selectedItem === 3 ? 'active' : ''} onClick={() => handleItemClick(4)}>
          <div className="progress four">
            <p>4</p>
            {selectedItem >= 4 && <i className="uil uil-check"></i>}
          </div>
          <p className="text">$200</p>
        </li>
        <li className={selectedItem === 4 ? 'active' : ''} onClick={() => handleItemClick(5)}>
          <div className="progress five">
            <p>5</p>
            {selectedItem >= 5 && <i className="uil uil-check"></i>}
          </div>
          <p className="text">$1000</p>
        </li>
        <li className={selectedItem === 5 ? 'active' : ''} onClick={() => handleItemClick(6)}>
          <div className="progress six">
            <p>6</p>
            {selectedItem >= 6 && <i className="uil uil-check"></i>}
          </div>
          <p className="text">$5000</p>
        </li>
        <li className={selectedItem === 6 ? 'active' : ''} onClick={() => handleItemClick(7)}>
          <div className="progress seven">
            <p>7</p>
            {selectedItem >= 7 && <i className="uil uil-check"></i>}
          </div>
          <p className="text">$10000</p>
        </li>
      </ul>
    </div>
  );
};

export default Hearts;
