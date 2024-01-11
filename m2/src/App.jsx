import './form.scss';
import './buttons.scss';
import './App.scss';
import { useState, useCallback } from 'react';
import { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Messages from './Components/039/Messages';

const URL = 'http://localhost:3001/animals';

function App() {

  const [animalInput, setAnimalInput] = useState('');
  const [animalEditInput, setAnimalEditInput] = useState('');
  const [animals, setAnimals] = useState(null);
  const [storeAnimals, setStoreAnimals] = useState(null);
  const [updateAnimals, setUpdateAnimals] = useState(null);
  const [destroyAnimals, setDestroyAnimals] = useState(null);
  const [editStatus, setEditStatus] = useState(null);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((type, text) => {
    const id = uuidv4();
    setMessages(prevMessages => [{id, type, text}, ...prevMessages]);
    setTimeout(() => {
     setMessages(prevMessages => prevMessages.filter(m => m.id !== id));
    }, 3000);
   }, []);


  useEffect(() => {
    axios.get(URL)
      .then(res => {
        console.log(res);
        setAnimals(res.data);
        setError(null);
      })
      .catch(err => {
        console.log(err);
        if (err.response) {
          setError(err.response.status + ' ' + err.response.statusText);
        } else {
          setError(err.message);
        }
      });
  }, []);

  useEffect(() => {
    setAnimalEditInput(animals?.find(animal => animal.id === editStatus)?.name || '');
  }, [editStatus, setAnimalEditInput, animals]);

  useEffect(_ => {
    if (null !== storeAnimals) {
      axios.post(URL, storeAnimals)
        .then(res => {
          setAnimals(a => [{ name: storeAnimals.name, id: res.data.id }, ...a]);
          setAnimalInput('');
          setError(null);
          addMessage(res.data.type, res.data.message);
        })
        .catch(err => console.log(err));
    }
  }, [storeAnimals, addMessage]);

  useEffect(_ => {
    if (null !== destroyAnimals) {
      axios.delete(`${URL}/${destroyAnimals.id}`)
        .then(res => {
          setAnimals(a => a.filter(animal => animal.id !== destroyAnimals.id));
          setError(null);
          addMessage(res.data.type, res.data.message);
        })
        .catch(err => {
          console.log(err);
          addMessage('danger', err.response ? err.response.status + ' ' + err.response.statusText : err.message);
        });
    }
  }, [destroyAnimals, addMessage]);

  useEffect(() => {
    if (null !== updateAnimals) {
      axios.put(`${URL}/${updateAnimals.id}`, updateAnimals)
        .then(res => {
          setAnimals(a => a.map(animal => animal.id === updateAnimals.id ? {...animal, name: updateAnimals.name} : animal));
          setEditStatus(null);
          setError(null);
          addMessage(res.data.type, res.data.message);
        })
        .catch(err => console.log(err));
    }
  }, [updateAnimals, addMessage]);

  const submit = () => {
    setStoreAnimals({name: animalInput});
  }

  const change = animal => {
    if (null === editStatus || editStatus !== animal.id) {
      setEditStatus(animal.id)
    }
    else {
      setUpdateAnimals({name: animalEditInput, id: animal.id})
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Express full of Animals</h1>
        {
          animals && animals.lenght !== 0 && animals.map(animal => (
            <div key={animal.id} className='animal-line'>
              <h3 style={{
              width: '200px',
              margin: '32px 0',
              display: editStatus === animal.id ? 'none' : 'block'
              }}>{animal.name}</h3>
              <div className='form animal-edit' 
              style={{
              width: '200px',
              display: editStatus === animal.id ? 'block' : 'none',
              }}>
              <input type='text' value={animalEditInput} onChange={e => setAnimalEditInput(e.target.value)}/>
              </div>
              <div>
              <button className='red' onClick={() => setDestroyAnimals(animal)}>Let go free</button>
              <button className='green' style={{width: '100px'}}onClick={() => change(animal)}>{editStatus === animal.id ? 'Submit' : 'Change'}</button>
              </div>
            </div>
          ))
        }
        {
          animals && animals.lenght && <p>No Animals Found</p>
        }
        {
          !animals && (error ? <p style={{color: 'crimson'}}>{error}</p> : <p>Animals is loading...</p>)
        }
        <div className='form'>
          <input type='text' placeholder='Enter Animal' value={animalInput} onChange={e => setAnimalInput(e.target.value)}/>
          <div className='buttons'>
            <button className='green' onClick={submit}>Submit</button>
            <button className='red' onClick={() => setAnimalInput('')}>Clear</button>
          </div>
        </div>
      </header>
      <Messages messages={messages}/>
    </div>
  );
}

export default App;
