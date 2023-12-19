import "./App.scss";

function App() {
  const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];

  const SortDogs = dogs.sort((a, b) => b.length - a.length);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Base List</h1>
        <div className="dogs">
          {dogs.map((dog, i) => (
            <div className="dog" key={i}>
              {dog}
            </div>
          ))}
        </div>
        <ol className="dogs">
          {SortDogs.map((dogs, i) => (
            <div className="dog circle" key={i}>
              <li>{dogs}</li>
            </div>
          ))}
        </ol>
        <div className="dogs">
          {dogs.map((dog, i) => (
            <div className={"dog " + (i % 2 ? "circle" : "square")} key={i}>
              {dog}
            </div>
          ))}
        </div>

        <div className="dogs">
          {dogs.map((dog, i) =>
            dog[0] === dog[0].toUpperCase() ? null : (
              <div className="dog" key={i}>
                {dog}
              </div>
            )
          )}
        </div>
        {/* <div className="dogs">
          {dogs.map((dogs, i) =>
            dogs.length(
              <div className="dog" key={i}>
                {dogs}
              </div>
            )
          )}
        </div> */}
      </header>
    </div>
  );
}

export default App;
