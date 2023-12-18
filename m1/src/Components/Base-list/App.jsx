import "./App.scss";
import "./Components/Base-list/Base-list.css";
import DogsApskritimai from "./Components/Base-list/DogsApskritimai";
import DogsKvadratai from "./Components/Base-list/DogsKvadratai";
import Indeksas from "./Components/Base-list/Indeksai";

function App() {
  const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];

  const SortDogs = dogs.sort((a, b) => b.length - a.length);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Base List</h1>
        <div className="kvadratai">
          {dogs.map((dogs, i) => (
            <DogsKvadratai key={i} dogs={dogs} />
          ))}
        </div>
        <ol className="apskritimai">
          {SortDogs.map((dogs, i) => (
            <li key={i}>
              <DogsApskritimai dogs={dogs} />
            </li>
          ))}
        </ol>
        <div>
          {dogs.map((dogs, i) => (
            <Indeksas key={i} dogs={dogs} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
