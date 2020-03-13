import React, { createRef, useEffect } from 'react';
import { play, clear } from './canvas'
import './App.css';

function App() {
  const ref = createRef();

  useEffect(() => {
    console.log('effect')
    play(ref)
    return clear
  })
  
  return (
    <div className="App">
      <canvas ref={ref} id="canvas" ></canvas>
    </div>
  );
}

export default App;
