import { useEffect, useState } from "react";
import "./App.scss";
import "./buttons.scss";
import "./form.scss"


export default function App() {

  const [cat, setCat] = useState('');
  const [dog, setDog] = useState('');
  const [bird, setBird] = useState('');

  useEffect(() => {
    const animals = JSON.parse(localStorage.getItem('animals'));
    if (null !== animals) {
      setCat(animals.cat);
      setDog(animals.dog);
      setBird(animals.bird);
    }
  }, []);

  const addCat = () => {
    localStorage.setItem('cat', cat);
  }

  const removeCat = () => {
    localStorage.removeItem('cat');
  }

  const getCat = () => {
    setCat(localStorage.getItem('cat'));
  }

  const clear = () => {
    localStorage.clear();
  }
  
  const addDog = () => {
    localStorage.setItem('dog', dog);
  }

  const removeDog = () => {
    localStorage.removeItem('dog');
  }

  const addBird = () => {
    localStorage.setItem('bird', bird);
  }

  const removeBird = () => {
    localStorage.removeItem('bird');
  }

  const addAll = () => {
    localStorage.setItem('animals', JSON.stringify({cat, dog, bird}));
  }

    return (
    <div className="App">
      <header className="App-header">
        <h1>This is Local Storage</h1>
        <div className="form">
        <label>Cat</label>
        <input type='text' name='cat' value={cat} onChange={e => setCat(e.target.value)}/>
        <label>Dog</label>
        <input type='text' name='dog'value={dog} onChange={e => setDog(e.target.value)}/>
        <label>Bird</label>
        <input type='text' name='bird' value={bird} onChange={e => setBird(e.target.value)}/>
        <div className="buttons">
          <button className="red" onClick={addCat}>Add Cat</button>
          <button className="orange" onClick={removeCat}>Remove Cat</button>
          <button className="plum" onClick={getCat}>Get Cat</button>
          <button className="violet" onClick={addDog}>Add Dog</button>
          <button className="blue" onClick={removeDog}>Remove Dog</button>
          <button className="wine" onClick={addBird}>Add Bird</button>
          <button className="green" onClick={removeBird}>Remove Bird</button>

          <button className='blue' onClick={addAll}>Add All</button>

          <button className="green" onClick={clear}>Clear</button>
        </div>
        </div>
        
      </header>
    </div>
  );
}