import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loveStatus, setLoveStatus] = useState(null);
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleButtonClick = () => {
    setMessage('Remember, Laide loves you so much');
    setLoveStatus(null);
    setSubmitted(false);
    setAnswer('');
  };

  const handleLoveStatusChange = (event) => {
    setLoveStatus(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    // Simulate sending the answer to the specified email
    const email = 'olaideakosile@gmail.com';
    console.log(`Answer: ${answer} submitted to ${email}`);
    setSubmitted(true);
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
        CLICK ME
      </button>
      <p className="message">{animateDrops(message)}</p>
      {loveStatus === null && !submitted && (
        <div className="question">
          <p>Do you love him too?</p>
          <label>
            <input
              type="radio"
              name="loveStatus"
              value="yes"
              onChange={handleLoveStatusChange}
            />{' '}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="loveStatus"
              value="no"
              onChange={handleLoveStatusChange}
            />{' '}
            No
          </label>
        </div>
      )}
      {loveStatus === 'yes' && !submitted && (
        <div className="love-form">
          <p>Tell him how much you love him:</p>
          <textarea
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Type your message here..."
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {submitted && (
        <p className="submission-message">
          Your answer has been submitted. ❤️
        </p>
      )}
      <span className="heartIcon" role="img" aria-label="heart">
        ❤️
      </span>
    </div>
  );
}

export default App;
