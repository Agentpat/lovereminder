import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loveStatus, setLoveStatus] = useState(null);
  const [answer, setAnswer] = useState('');
  const [submittedAnswers, setSubmittedAnswers] = useState([]);

  const handleButtonClick = () => {
    setMessage('Remember, Laide loves you so much');
    setLoveStatus(null);
    setAnswer('');
  };

  const handleLoveStatusChange = (event) => {
    setLoveStatus(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleAnswerSubmit = () => {
    if (answer) {
      setSubmittedAnswers((prevAnswers) => [...prevAnswers, answer]);
      setAnswer('');
    }
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
      {loveStatus === null && (
        <div className="question">
          <p>Do you love Laide too?</p>
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
      {loveStatus === 'yes' && (
        <div className="love-form">
          <p>Why do you love Laide?</p>
          <textarea
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Type your answer here..."
          />
          <button className='loveformbtn' onClick={handleAnswerSubmit}>Submit</button>
        </div>
      )}
      <div className="submitted-answers">
        <p>Submitted Answers:</p>
        <ul>
          {submittedAnswers.map((submittedAnswer, index) => (
            <li key={index}>{submittedAnswer}</li>
          ))}
        </ul>
      </div>
      <div className="heartIcon" role="img" aria-label="heart">
        ❤️
      </div>
    </div>
  );
}

export default App;
