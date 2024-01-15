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


  return (
    <>
      <Container>
        <div className="card mt-5" style={{ margin: "0" }}>
          <Create setStoreAccounts={setStoreAccounts} show={showCreateModal} handleClose={handleClose} />
          <Stack direction="horizontal" gap="2" className="mb-4">
            <h3 className="me-auto m-3">Sąskaitų sąrašas</h3>
            <button className='button-lina'>Tuščios</button>
            <button className='button-lina'>Turinčios lėšų</button>
            <button className='button-lina'>Visos</button>
            <button className='deepblue m-3' onClick={() => setShowCreateModal(true)}>
              + Sukurti naują sąskaitą
            </button>
          </Stack>
          <div className="me-auto m-3">Bendras sąskaitų skaičius: {totalAccounts}</div>
          <div className="me-auto m-3">Bendras sąskaitų likutis: {totalBalance} €</div>
          {accounts && accounts.length !== 0 ? (
            <ul className="list-group list-group">
              {accounts
                .sort((a, b) => a.lastName.localeCompare(b.lastName))
                .map((account) => (
                  <li key={account.id} className="list-group list-group">
                    <div className="list-group-item">Vardas: {account.firstName}</div>
                    <div className="list-group-item">Pavardė: {account.lastName}</div>
                    <div className="list-group-item">Sąskaitos numeris: {account.id}</div>
                    <div className="list-group-item">Sąskaitos suma: {account.accountBalance} €</div>
                    <Edit show={showEditModal} handleClose={handleClose} setUpdateAccount={setUpdateAccount} account={account} addMessage={addMessage}/>
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