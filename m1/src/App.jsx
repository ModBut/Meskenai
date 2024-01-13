import "./App.scss";
// import './buttons.scss';
import './form.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Create from "./Components/Bankas2/Create";
import { useState, useCallback } from "react";
import { useEffect } from "react";
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { Stack } from "react-bootstrap";
// import Delete from "./Components/Bankas2/Delete";
import Edit from "./Components/Bankas2/Edit";
import Messages from "./Components/Bankas2/Message";

const URL = 'http://localhost:3001/account';

function App() {

  const [accounts, setAccounts] = useState([]);
  const [storeAccounts, setStoreAccounts] = useState(null);
  const [showCreateModal, setShowCreatetModal] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [destroyAccount, setDestroyAccount] = useState(null);
  const [updateAccount, setUpdateAccount] = useState(null);
  // const [editStatus, setEditStatus] = useState(null);
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

  // useEffect(() => {
  //   setTransactionAmount(accounts?.find(account => account.id === editStatus)?.account || 0);
  //   }, [editStatus, setTransactionAmount, accounts]);


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

  useEffect(() => {
    if (null !== updateAccount) {
      axios.put(`${URL}/${updateAccount.id}`, updateAccount)
      .then(() => {
        setAccounts(a => a.map(account => account.id === updateAccount.id ? {...account, account: updateAccount.account} : account))
      })
      .catch(err => console.log(err));
    }
  }, [updateAccount]);

  const handleClose = () => {
    setShowCreatetModal(false);
    setShowEditModal(false);
  }

  useEffect(() => {
    setTotalClients(accounts.length);
  }, [accounts]);

  return (
        <>
            <Container className="my-4">
            <div className='card mt-5'>
           <Create setStoreAccounts={setStoreAccounts} show={showCreateModal} handleClose={handleClose}/>
            <Stack direction='horizontal' gap='2' className="mb-4">
                <h3 className="me-auto m-3">Saskaitų sąrašas</h3>
                
                <button onClick={() => setShowCreatetModal(true)} className="m-3">
                + Sukurti naują sąskaitą
                </button>
                
              </Stack>
              <div className="me-auto m-3">Bendras sąskaitų skaičius: {totalClients}</div>
              <div className="me-auto m-3">Bendras sąskaitų likutis:</div>
                {accounts
                .sort((a, b) => a.lastName.localeCompare(b.lastName))
                    .map(account =>  
                    <ul className="list-group list-group ">
                      <div key={account.id} className="mb-3"> 
                        <div className="list-group-item">Vardas: {account.firstName}</div>
                        <div className="list-group-item">Pavardė: {account.lastName}</div>
                        <div className="list-group-item">Sąskaitos numeris: {account.id}</div>
                        {/* <div className="list-group-item">Account Balance: {account.accountBalance} €</div> */}
                        <Stack gap='2' className="mb-4">
                        {/* <button  onClick={() => setShowEditModal(true)}>Edit Account Balance</button> */}
                        <Edit setUpdateAccount={setUpdateAccount} addMessage={addMessage}
                        show={showEditModal} handleClose={handleClose}/>
                        <button onClick={() => setDestroyAccount(account)}>Ištrinti sąskaitą</button>
                        {/* <Delete account={account} show={showDeleteModal} setDestroyAccount={setDestroyAccount} handleClose={setShowDeleteModal}/> */}
                        </Stack>
                        </div>
                        </ul>
                    )
                      }
                      {
                       accounts && !accounts.length && accounts.sort((a, b) => a.lastName.localeCompare(b.lastName)) 
                      }   
                      {
                     accounts && !accounts.length && <p>No Accounts Found</p>
                      }
            <Messages messages={messages}/>
            </div>
            </Container>
            </>
      )
}

export default App;