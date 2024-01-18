import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import './buttons.scss';
import './form.scss';
import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Stack } from "react-bootstrap";
import Create from "./Components/Bankas2/Create";
import Edit from "./Components/Bankas2/Edit";
import Messages from "./Components/Bankas2/Message";

const URL = "http://localhost:3001/account";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [storeAccounts, setStoreAccounts] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [destroyAccount, setDestroyAccount] = useState(null);
  const [updateAccount, setUpdateAccount] = useState(null);
  const [messages, setMessages] = useState([]);
  const [totalAccounts, setTotalAccounts] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [showEmptyAccounts, setShowEmptyAccounts] = useState(true);
  const [showNonEmptyAccounts, setShowNonEmptyAccounts] = useState(true);


  const addMessage = useCallback((type, text) => {
    const id = uuidv4();
    setMessages((prevMessages) => [{ id, type, text }, ...prevMessages]);
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.filter((m) => m.id !== id));
    }, 4000);
  }, []);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setAccounts(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (storeAccounts !== null) {
      axios
        .post(URL, storeAccounts)
        .then((res) => {
          setAccounts((a) => [{ ...storeAccounts, id: res.data.id }, ...a]);
          addMessage(res.data.type, res.data.message);
        })
        .catch((err) => console.log(err));
    }
  }, [storeAccounts, addMessage]);

  useEffect(() => {
    if (destroyAccount !== null) {
      axios
        .delete(`${URL}/${destroyAccount.id}`)
        .then((res) => {
          setAccounts((a) => a.filter((account) => account.id !== destroyAccount.id));
          addMessage(res.data.type, res.data.message);
        })
        .catch((err) => {
          console.log(err);
          addMessage("danger", err.response ? err.response.status + " " + err.response.statusText : err.message);
        });
    }
  }, [destroyAccount, addMessage]);

  useEffect(() => {
    if (updateAccount !== null) {
      axios
        .put(`${URL}/${updateAccount.id}`, updateAccount)
        .then(() => {
          setAccounts((a) =>
            a.map((account) => (account.id === updateAccount.id ? { ...account, accountBalance: updateAccount.accountBalance } : account))
          );
        })
        .catch((err) => console.log(err));
    }
  }, [updateAccount]);

  useEffect(() => {
    setTotalAccounts(accounts.length);
    setTotalBalance(accounts.reduce((sum, account) => sum + account.accountBalance, 0));
  }, [accounts]);

  const handleClose = () => {
    setShowCreateModal(false);
    setShowEditModal(false);
  };

  const handleDestroy = (account) => {
    if (account.accountBalance === 0) {
      setDestroyAccount(account);
    } else {
      addMessage("danger", "Sąskaitos turinčios lėšų ištrinti negalima!");
    }
  };

  const refresh = () => window.location.reload(true)

  return (
    <>
      <Container>
        <div className="card mt-3" style={{ margin: "0" }}>
          <Create setStoreAccounts={setStoreAccounts} show={showCreateModal} handleClose={handleClose} />
          <Stack direction="horizontal" gap="2" className="mb-4" style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
          <span style={{fontWeight: 'bold', margin: '5px 0 5px 18px'}}>Statistika:</span>
          <div style={{fontWeight: 'bold', margin: '0 0 5px 18px'}}>Bendras sąskaitų skaičius: <span className="account-list">{totalAccounts}</span></div>
          <div style={{fontWeight: 'bold', marginLeft: '18px'}}>Bendra sąskaitų suma: <span className="account-list">{totalBalance} €</span></div>
          </div>
          <div>
            <button className='button-lina' onClick={() => setShowEmptyAccounts(!showEmptyAccounts)}>Tuščios sąskaitos</button>
            <button className='button-lina' onClick={() => setShowNonEmptyAccounts(!showNonEmptyAccounts)}>Sąskaitos su lėšomis</button>
            <button type='button'className='button-lina' onClick={refresh}>Visos sąskaitos</button>
            <button type='button' className='deepblue' onClick={() => setShowCreateModal(true)}>
              + Sukurti naują sąskaitą
            </button>
            </div>
          </Stack>
          
          {accounts && accounts.length !== 0 ? (
            <ul className="list-group list-group">
              {accounts
                .filter((account) => (showEmptyAccounts && account.accountBalance > 0) || (showNonEmptyAccounts && account.accountBalance === 0))
                .sort((a, b) => a.lastName.localeCompare(b.lastName))
                .map((account) => (
                  <li key={account.id} className="list-group list-group">
                    <div className="list-group-item">Vardas: <span className="account-list">{account.firstName}</span></div>
                    <div className="list-group-item">Pavardė: <span className="account-list">{account.lastName}</span></div>
                    <div className="list-group-item">Sąskaitos numeris: <span className="account-list">{account.id}</span></div>
                    <div className="list-group-item">Sąskaitos suma: <span className="account-list">{account.accountBalance} €</span></div>
                    {account && (
                      <Edit
                        show={showEditModal}
                        handleClose={handleClose}
                        setUpdateAccount={setUpdateAccount}
                        account={account}
                        addMessage={addMessage}
                        updateAccount={updateAccount}
                      />
                    )}
                    <div className="delete-button">
                      <button onClick={() => setShowEditModal(true)} className="button-lina">
                        Koreguoti sąskaitos likutį
                      </button>
                      <button className="red" onClick={() => handleDestroy(account)}>
                        Ištrinti sąskaitą
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            <p style={{ paddingLeft: "18px" }}>Sąrašas tuščias</p>
          )}
          <Messages messages={messages} />
        </div>
        </Container>
    </>
  );
}

export default App;