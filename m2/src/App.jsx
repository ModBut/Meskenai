import './App.scss';
import './form.scss';
import './buttons.scss';
import useLocalStorage from './Hooks/useLocalStorage';

export default function App() {

    const [racoons, setRacoons, meskenai, setMeskenai] = useLocalStorage('racoons', 'meskenai', 0);

    return (
        <div className="App">
          <header className="App-header">
            <h1>CUSTOM HOOK</h1>
            <h2>Now we have {racoons} Racoons</h2>
            <div className='buttons'>
            <button className='green' onClick={() => setRacoons(r => r + 1)}>+</button>
            </div>
            <h2>Dabar mes turim tiek {meskenai} Meskenu</h2>
            <div className='buttons'>
            <button className='green' onClick={() => setMeskenai(m => m + 1)}>+</button>
            </div>
          </header>
        </div>
      );
}