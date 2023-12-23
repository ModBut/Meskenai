import { useCallback, useEffect, useState } from "react";
import "./App.scss";
import "./buttons.scss";
import ColorCircle from "./Components/029/ColorCircle";
import RandomColor from "./Function/randomColor";

function App() {
  const [counterYellow, setCounterYellow] = useState(0);
  const [counterRed, setCounterRed] = useState(0);
  const [circleColor, setCicrcleColor] = useState("#777777");

  const countYelow = () => {
    setCounterYellow((c) => c + 1);
    // changeColor();
  };

  const countRed = () => {
    setCounterRed((c) => c + 1);
    // changeColor();
  };

  // const changeColor = () => {
  //   setCicrcleColor(RandomColor());
  // };

  const changeColor = useCallback(() => {
    setCicrcleColor(RandomColor());
  }, [setCicrcleColor]);

  useEffect(() => {
    // console.log("useEffect");
    changeColor();
  }, [changeColor, counterRed, counterYellow]);

  const clickBlue = (ja) => console.log(ja + " clickBlue");

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is State and UseEfect</h1>
        <ColorCircle color={circleColor} />
        <div className="buttons">
          <button className="yellow" onClick={countYelow}>
            <h2>{counterYellow}</h2>
          </button>
          <button className="red" onClick={countRed}>
            <h2>{counterRed}</h2>
          </button>
          <button className="blue" onClick={() => clickBlue("ja ja")}>
            <h2>CLICK</h2>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
