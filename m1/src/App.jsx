import "./App.scss";
import './buttons.scss';
import './form.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Create from "./Components/Bankas2/Create";
import { useState, useCallback } from "react";
import { useEffect } from "react";
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { Stack } from "react-bootstrap";
import Edit from "./Components/Bankas2/Edit";
import Messages from "./Components/Bankas2/Message";

const URL = 'http://localhost:3001/account';

function App() {

  const [accounts, setAccounts] = useState([]);
  const [storeAccounts, setStoreAccounts] = useState(null);
  const [showCreateModal, setShowCreatetModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [destroyAccount, setDestroyAccount] = useState(null);
  // const [updateAccount, setUpdateAccount] = useState(null);
  const [messages, setMessages] = useState([]);
  const [totalClients, setTotalClients] = useState(0);


  const addMessage = useCallback((type, text) => {
    const id = uuidv4();
    setMessages(prevMessages => [{id, type, text}, ...prevMessages]);
    setTimeout(() => {
     setMessages(prevMessages => prevMessages.filter(m => m.id !== id));
    }, 4000);
   }, []);

  useEffect(() => {
    axios.get(URL)
      .then(res => setAccounts(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if(null !== storeAccounts) {
      axios.post(URL, storeAccounts)
        .then(res => {
          setAccounts(a => [{account: storeAccounts.account, id: res.data.id}, ...a]);
          addMessage(res.data.type, res.data.message);
        })
        .catch(err => console.log(err));
    }
  }, [storeAccounts, addMessage]);

  useEffect(_ => {
    if (null !== destroyAccount) {
      axios.delete(`${URL}/${destroyAccount.id}`)
        .then(res => {
          setAccounts(a => a.filter(account => account.id !== destroyAccount.id));
          addMessage(res.data.type, res.data.message);
        })
        .catch(err => {
          console.log(err);
          addMessage('danger', err.response ? err.response.status + ' ' + err.response.statusText : err.message);
        })
    }
  }, [destroyAccount, addMessage]);

  // useEffect(() => {
  //   if (updateAccount !== null) {
  //     axios.put(`${URL}/${updateAccount.id}`, updateAccount)
  //       .then((res) => {
  //         setAccounts((a) => a.map((account) => account.id === updateAccount.id ? { ...account, name: updateAccount.name } : account
  //         ));
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [updateAccount]);

  useEffect(() => {
    setTotalClients(accounts.length);
  }, [accounts]);

  const sortedAccounts = accounts.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
  const handleClose = () => {
    setShowCreatetModal(false);
    setShowEditModal(false);
  }

  return (
        <>
        <Container className="my-4">
            <div className='card mt-5' style={{margin: '0'}}>
           <Create setStoreAccounts={setStoreAccounts} show={showCreateModal} handleClose={handleClose}/>
            <Stack direction='horizontal' gap='2' className="mb-4">
                <h3 className="me-auto m-3">Saskaitų sąrašas</h3>
                <button className='deepblue m-3' onClick={() => setShowCreatetModal(true)}>
                + Sukurti naują sąskaitą
                </button>
              </Stack>
              <div className="me-auto m-3">Bendras sąskaitų skaičius: {totalClients}</div>
              <div className="me-auto m-3">Bendras sąskaitų likutis:</div>
                {sortedAccounts && sortedAccounts.length !== 0 && sortedAccounts
                    .map(account =>  
                    <ul className="list-group list-group">
                      <div key={account.id}> 
                        <div className="list-group-item">Vardas: {account.firstName}</div>
                        <div className="list-group-item">Pavardė: {account.lastName}</div>
                        <div className="list-group-item">Sąskaitos numeris: {account.id}</div>
                        <Edit show={showEditModal} handleClose={handleClose}/>
                        <div className="delete-button">
                        <button onClick={() => setShowEditModal(true)}>Koreguoti sąskaitos likutį</button>
                        <button className='red' onClick={() => setDestroyAccount(account)}>Ištrinti sąskaitą</button>
                        </div>
                        </div>
                        </ul>
                    )
                      }
                      {
                       accounts && !accounts.length && accounts.sort((a, b) => a.lastName.localeCompare(b.lastName)) 
                      }   
                      {
                      accounts && !accounts.length && <p style={{paddingLeft: '18px'}}>Sąrašas tuščias</p>
                      }
            <Messages messages={messages}/>
            
            </div>
            </Container>
            </>
      )
}

export default App;