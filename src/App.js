import React, { useState, useEffect } from 'react';
import Timer from './functionalTimer';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('montar');
    return () => {
      console.log('desmontar');
    };
  });

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Sumar
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Restar
      </button>
      <button onClick={() => setCount(0)}>Reiniciar</button>
      <Timer></Timer>
    </div>
  );
}

export default App;
