import React, { useState, useEffect } from 'react';

export default function FunctionalTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function tick() {
    setTimer(prevState => prevState + 1);
  }

  return (
    <div>
      <h3>Timer: {timer}</h3>
    </div>
  );
}
