import "./App.scss";
import "./buttons.scss";
import { useState } from "react";

export default function App() {
  const randomColor = () =>
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  const [counter, setCounter] = useState(0);
  const [squares, setSquares] = useState([]);

  const plus = () => {
    setCounter((c) => c + 1);
    console.log("plus", counter);
  };

  const reset = () => {
    setCounter(0);
    console.log("reset", counter);
  };

  const addSquare = () => {
    setSquares((s) => [...s, randomColor()]);
  };

  const resetSquares = () => {
    setSquares([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is STATE</h1>
        <h2>{counter}</h2>
        <div className="buttons">
          <button className="blue" onClick={plus}>
            +
          </button>
          <button className="violet" onClick={reset}>
            0
          </button>
        </div>
        {/* <button className="red" onClick={plus}>
          +
        </button>
        <button className="yellow" onClick={reset}>
          0
        </button>
        <button className="green" onClick={plus}>
          +
        </button> */}
        <div className="squares">
          {squares.map((square, i) => (
            <div
              className="square spin"
              style={{
                backgroundColor: square + "66",
                border: "1px solid" + square,
              }}
              key={i}
            >
              {square}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="green" onClick={addSquare}>
            ADD SQUARE
          </button>
          <button className="yellow" onClick={resetSquares}>
            RESET
          </button>
        </div>
      </header>
    </div>
  );
}
