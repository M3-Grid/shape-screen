import React, { useEffect } from 'react';
import { play, clear } from './canvas'
import './App.css';

function App() {

  useEffect(() => {
    console.log('effect')
    play()
    return clear
  })

  return (
    <div className="App">
      <div className="App-Row">
        <button disabled className="rowbtn">Small</button>
        <button disabled className="rowbtn">Medium</button>
        <button disabled className="rowbtn">Large</button>
      </div>
      <div className="App-Row">
        <button disabled className="rowbtn">Solfege</button>
        <button disabled className="rowbtn">Color</button>
        <button disabled className="rowbtn">Months</button>
      </div>
      <div className="App-Row">
        <canvas id="canvas" className="App-Canvas"></canvas>
      </div>
      <div className="App-Row">
        <button disabled className="rowbtn">Grid</button>
        <button className="rowbtn">Invert</button>{/**Registeral */}
        <button className="rowbtn">Invert</button>{/**Functional */}
      </div>
    </div>
  );
}

export default App;
