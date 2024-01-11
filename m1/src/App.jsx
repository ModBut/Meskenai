import "./App.scss";
// import './buttons.scss';
import './form.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Create from "./Components/Bankas2/Create";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { Stack } from "react-bootstrap";
// import Delete from "./Components/Bankas2/Delete";


const URL = 'http://localhost:3001/account';

function App() {

  const [accounts, setAccounts] = useState(null);
  const [storeAccounts, setStoreAccounts] = useState(null);
  const [showCreateModal, setShowCreatetModal] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [destroyAccount, setDestroyAccount] = useState(null);


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
        })
        .catch(err => console.log(err));
    }
  }, [storeAccounts]);

  useEffect(_ => {
    if (null !== destroyAccount) {
      axios.delete(`${URL}/${destroyAccount.id}`)
        .then(res => {
          setAccounts(a => a.filter(account => account.id !== destroyAccount.id));

        })
        .catch(err => console.log(err));
    }
  }, [destroyAccount]);

      return (
        <>
            <div className="card-body">
            <Container className="my-4">
           <Create setStoreAccounts={setStoreAccounts} show={showCreateModal} handleClose={() => setShowCreatetModal(false)}/>
            <Stack direction='horizontal' gap='2' className="mb-4">
                <h3 className="me-auto">Saskaitu sarasas</h3>
                <button onClick={() => setShowCreatetModal(true)}>
                + Create New Account
                </button>
              </Stack>
                {accounts && accounts.length !== 0 && accounts
                    // .sort((a, b) => a.lastName.localeCompare(b.lastName))
                    .map(account => ( 
                    <ul className="list-group list-group ">
                      <div key={account.id} className="list-group-item">
                        <div className="list-group-item">First Name: {account.firstName}</div>
                        <div className="list-group-item">Last Name: {account.lastName}</div>
                        <div className="list-group-item">Account Number: {account.id}</div>
                        <div className="list-group-item">Account Balance: {account.accountBalance} EUR</div>
                        <Stack  gap='2' className="mb-4 me-auto">
                        <button>Edit Account Balance</button>
                        <button onClick={() => setDestroyAccount(account)}>Delete Account</button>
                        </Stack>
                        </div>
                      </ul>
                    ))
                }
                {
                    accounts && !accounts.length && <p>No Accounts Found</p>
                }
            
            {/* <Delete account={accounts} setDestroyAccount={setDestroyAccount} show={showDeleteModal} handleClose={() => setShowDeleteModal(false)}/> */}
            </Container>
            </div>
            </>
      )
}

export default App;