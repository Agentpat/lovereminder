import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('Remember, Laide loves you so much');
  };

  const animateDrops = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="animated-letter">
        {char}
      </span>
    ));
  };

  return (
    <div className="container">
      <h1 className="heading">Love Reminder</h1>
      <button className="button" onClick={handleButtonClick}>
        Click me
      </button>
      <p className="message">{animateDrops(message)}</p>
      <span className="heartIcon" role="img" aria-label="heart">
        ❤️
      </span>
    </div>
  );
}

export default App;
