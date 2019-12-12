import React, { useState, useEffect } from 'react';

export default function FunctionalTimer() {
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState('hello!');

  useEffect(() => {
    let interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function tick() {
    setTimer(prevState => prevState + 1);
  }

  useEffect(() => {
    if (timer === 10) {
      setMessage('bye!');
    }
  }, [timer]);

  return (
    <div>
      <h3>Timer: {timer}</h3>
      <h4>{message}</h4>
    </div>
  );
}
