import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('Remember, Laide loves you so much');
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
      fontSize: '18px',
      marginTop: '20px',
      color: '#555',
    },
  };

  return (
    <div className="App" style={styles.container}>
      <h1 style={styles.heading}>Love Reminder</h1>
      <button style={styles.button} onClick={handleButtonClick}>
        Click me
      </button>
      <p style={styles.message}>{message}</p>
    </div>
  );
}

export default App;
