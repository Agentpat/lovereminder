import React, { useState} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('Remember, Laide loves you so much');
  };

  const dropColors = ['#ff5733', '#33ff57', '#5733ff', '#ff5733', '#33ff57']; // Different colors for drops
  const dropDelay = 100; // Delay between drops in milliseconds

  const animateDrops = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        style={{
          animation: `drop ${0.5}s ease-out, colorChange ${
            0.5 + index * 0.1
          }s linear`,
          animationDelay: `${index * dropDelay}ms`,
          color: dropColors[index % dropColors.length],
          fontSize: '2em', // Adjust font size as needed
        }}
      >
        {char}
      </span>
    ));
  };

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
      <p id="messageText" style={styles.message}>
        {animateDrops(message)}
      </p>
      <span id="heartIcon" role="img" aria-label="heart" style={styles.heartIcon}>
        ❤️
      </span>
    </div>
  );
}

export default App;
