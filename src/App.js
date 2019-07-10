import React from 'react';
import './App.css';
import Addition1 from './addition1'

function App() {

  const chick = React.createRef()
  const moveBall = (ev) =>{
    const ballX = ev.clientX
    const ballY = ev.clientY

    console.log(ev.style)
    console.log(ballX, ballY)
    console.log(ev, chick.current.getBoundingClientRect())
  }

  console.log(chick)
  return (
    <main>
    <Addition1 ref={chick}/>
    <div className="App">
    <span onClick={moveBall} className="number">1</span>
    <span className="number">2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
    <span>7</span>
    <span>8</span>
    <span>9</span>
    <span>10</span>

    </div>
    </main>
  );
}

export default App;
