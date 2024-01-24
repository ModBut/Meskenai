import './App.scss';
import './form.scss';
import './buttons.scss';
import { useState } from 'react';
import { useReducer } from 'react';
import counterMasterReducer from './Reducers/counterMasterReducer';
import * as a from './Actions/counterActions';

export default function App() {

    const [input1, setInput1] = useState('');
    const [counter, dispatchCounter] = useReducer(counterMasterReducer, { number: 0, error: '' }); 
 
    const add = () => { 
        const value = parseInt(input1);
        if (isNaN(value)) {
            dispatchCounter( a.error('Please enter a number'))
        } else {
            dispatchCounter(a.add(value))
        }
        setInput1('');
    }

    const remove = () => {
        const value = parseInt(input1);
        if (isNaN(value)) {
            dispatchCounter( a.error('Please enter a number'))
        } else {
            dispatchCounter(a.remove(value))
        }
        setInput1('');
    }


    return (
        <div className="App">
          <header className="App-header">
            <h1>USE REDUCER: {counter.number}</h1>
            {
            counter.error && <h2 style={{color: 'crimson'}}>{counter.error}</h2>
            }
            <div className='buttons'>
                <button className='red' onClick={() => dispatchCounter(a.add1())}>+</button>
                <button className='red' onClick={() => dispatchCounter(a.remove1())}>-</button>
                <button className='red' onClick={() => dispatchCounter(a.set0())}>Reset</button>
                <div className='form small'>
                <input type='text' className='small-white' placeholder='Number' value={input1} onChange={e => setInput1(e.target.value)}/>
                </div>
                <button className='green' onClick={add}>Add</button>
                <button className='green' onClick={remove}>Remove</button>
            </div>
          </header>
        </div>
      );
}