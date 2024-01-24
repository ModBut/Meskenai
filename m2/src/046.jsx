import './App.scss';
import './form.scss';
import './buttons.scss';
import { useState } from 'react';
import { useReducer } from 'react';
import counterReducer from './Components/046/counterReducer';


export default function App() {

    const [counter1, setCounter1] = useState(0);
    const [input1, setInput1] = useState(0);

    const [counter2, dispatchCounter2] = useReducer(counterReducer, 0); 

    const plus = () => dispatchCounter2({ type: 'add_1' });

    const minus = () => dispatchCounter2({ type: 'remove_1' })

    const reset = () => dispatchCounter2({ type: 'set_0' });

    const add = () => { 
        const value = parseInt(input1);
        let action;
        if (isNaN(value)) {
            action = {
                type: 'error'
            };
        } else {
            action = {
                type: 'add',
                payload: value
            };
        }
        dispatchCounter2(action);
        setInput1(0);
    }

    return (
        <div className="App">
          <header className="App-header">
            <h1>USE STATE: {counter1}</h1>
            <div className='buttons'>
                <button className='blue' onClick={() => setCounter1(c => c + 1)}>+</button>
                <button className='blue' onClick={() => setCounter1(c => c - 1)}>-</button>
                <button className='blue' onClick={() => setCounter1(0)}>Reset</button>
            </div>
            <h1>USE REDUCER: {counter2}</h1>
            <div className='buttons'>
                <button className='red' onClick={plus}>+</button>
                <button className='red' onClick={minus}>-</button>
                <button className='red' onClick={reset}>Reset</button>
                <div className='form'>
                <input type='text' className='small-white' value={input1} onChange={e => setInput1(e.target.value)}/>
                </div>
                <button className='green' onClick={add}>Add</button>
            </div>
          </header>
        </div>
      );
}