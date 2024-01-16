import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('Remember, Laide loves you so much');
  };

  const dropColors = ['#ff5733', '#33ff57', '#5733ff', '#ff5733', '#33ff57']; // Different colors for drops
  const dropDelay = 100; // Delay between drops in milliseconds

  const animateDrops = (text) => {
    let animatedText = '';
    for (let i = 0; i < text.length; i++) {
      animatedText += `<span style="animation-delay:${i * dropDelay}ms">${text[i]}</span>`;
    }
    return animatedText;
  };

  useEffect(() => {
    const textElement = document.getElementById('messageText');
    const heartElement = document.getElementById('heartIcon');

    if (textElement && heartElement) {
      textElement.innerHTML = animateDrops(message);

      // Adding heart drop animation
      setTimeout(() => {
        heartElement.style.animation = 'heartDrop 0.8s ease-out';
      }, message.length * dropDelay);
    }
  }, [message]);

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    heading: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    message: {
      fontSize: '36px',
      marginTop: '20px',
      color: '#555',
      display: 'inline-block',
      animation: 'drop 0.5s ease-out', // Animation for letter drop
    },
    heartIcon: {
      fontSize: '36px',
      color: 'red',
      marginLeft: '5px',
      animation: 'none', // Initial state with no animation
    },
  };

  return (
    <div className="App" style={styles.container}>
      <h1 style={styles.heading}>Love Reminder</h1>
      <button style={styles.button} onClick={handleButtonClick}>
        Click me
      </button>
      <p id="messageText" style={styles.message}></p>
      <span id="heartIcon" role="img" aria-label="heart" style={styles.heartIcon}>
        ❤️
      </span>
    </div>
  );
}

export default App;
