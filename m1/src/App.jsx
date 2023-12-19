import "./App.scss";
import BigSq1 from "./Components/025/028/BigSq1";
import BigSq2 from "./Components/025/028/BigSq2";
import Sq from "./Components/025/028/Sq";
import GetRandomInt from "./Function/rand";
import RandomColor from "./Function/randomColor";
import "./buttons.scss";
import { useEffect, useState } from "react";

export default function App() {
  const [squares, setSquares] = useState([]);

  const [sq2, setSq2] = useState("#444444");
  const [sq1, setSq1] = useState("#444444");
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log("Squares are changed");
    if (sync) {
      setSquares((s) => s.map((s) => ({ ...s, show: true })));
      setSync(true);
    }
  }, [squares]);

  const add = () => {
    setSquares((s) => [
      ...s,
      { color: RandomColor(), id: GetRandomInt(1000, 30000000), show: true },
    ]);
  };

  const reset = () => {
    setSquares((s) => s.map((s) => ({ ...s, show: false })));
  };

  const syncSpin = () => {
    setSquares((s) => s.map((s) => ({ ...s, show: false })));
    setSync(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is STATE part 2</h1>
        <div className="squares">
          {squares.map((s, i) =>
            s.show ? <Sq setSquares={setSquares} square={s} key={i} /> : null
          )}
        </div>
        <div className="buttons">
          <button className="red" onClick={add}>
            +
          </button>
          <button className="blue" onClick={reset}>
            0
          </button>
          <button
            className="green"
            onClick={(_) =>
              setSquares((s) => s.map((s) => ({ ...s, show: true })))
            }
          >
            *
          </button>
          <button className="yellow" onClick={syncSpin}>
            sync
          </button>
        </div>
        <div className="squares">
          <BigSq1 sq1={sq1} setSq1={setSq2} />
          <BigSq2 sq2={sq2} setSq2={setSq1} />
        </div>
      </header>
    </div>
  );
}
