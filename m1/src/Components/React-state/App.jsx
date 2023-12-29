import "./App.scss";
import Blue from "./Components/React-state/Blue";
import Red from "./Components/React-state/Red";
import Squares from "./Components/React-state/Squares";
import randNumber from "./Function/rand";
import "./buttons.scss";
import "./form.scss";
import { useState } from "react";

export default function App() {

    const [circle, setCircle] = useState(true);
    const [randomNumber, setRandomNumber] = useState(randNumber(5, 25));
    const [number, setNumber] = useState(0);
    const [squares, setSquares] = useState([]);
    const [redSquares, setRedSquares] = useState([]);
    const [blueSquares, setBlueSquares] = useState([]);

    const toggleShape = () => {
      setCircle(circle => !circle);
    };

    const changeNumber = () => {
      setRandomNumber(randNumber(5, 25));
    };

    const plus = () => {
      setNumber(n => n + 1);
    }

    const minus = () => {
      setNumber(n => n - 3);
    }

    const add = () => {
      setSquares((s) => [...s, {show: true}
    ]);
    };

    const addRed = () => {
      setRedSquares((r) => [...r, {show: true}])
    }

    const addBlue = () => {
      setBlueSquares((b) => [...b, {show: true}])
    }

    const reset = () => {
      setRedSquares((r) => r.map((r) => ({...r, show: false})))
      setBlueSquares((b) => b.map((b) => ({...b, show: false})))
    }

    return (
    <div className="App">
      <header className="App-header">
        <h1>React State</h1>
        <div className="circle"
        style={{
          borderRadius: circle ? '50%' : '0%',
        }}
      >{randomNumber}</div>
       <div className="buttons">
        <button className="blue" onClick={toggleShape}>Change</button>
        
      <button className="red" onClick={toggleShape}>Change</button>
      <button className="green" onClick={changeNumber}>Random</button>
       </div>
       <div className='number'>
        {number}
       </div>
       <div className="buttons">
        <button className="violet" onClick={plus}>+</button>
        <button className="wine" onClick={minus}>-</button>
       </div>
       <div className='squares'>
        {
        squares.map((s, i) => s.show ? <Squares setSquares={setSquares} square={s} key={i}/> : null
        )}
       </div>
       <div className="buttons">
          <button className="green" onClick={add}>Add</button>
       </div>
       <div className="squares">
          {redSquares.map((r, i) => r.show ? <Red setRedSquares={setRedSquares} redSquare={r} key={i}/> : null
          )}
          {blueSquares.map((b, i) => b.show ? <Blue setBlueSquares={setBlueSquares} blueSquare={b} key={i}/> : null
          )}
       </div>
       <div>
        <button className="red" onClick={addRed}>Add Red</button>
        <button className="blue" onClick={addBlue}>Add Blue</button>
        <button className="violet" onClick={reset}>Reset</button>
       </div>
      </header>
    </div>
  );
}
