import React, { useState, useEffect } from 'react';
import AccountList from './Components/Bankas/Read';
import CreateAccount from './Components/Bankas/Create';
import axios from 'axios';

const URL = 'http://localhost:3001/accounts';

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [totalClients, setTotalClients] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [storeAccounts, setStoreAccounts] = useState(null);

  useEffect(() => {
    setTotalClients(accounts.length);
    setTotalBalance(accounts.reduce((sum, account) => sum + account.balance, 0));
  }, [accounts]);

  useEffect(() => {
    axios.get(URL)
        .then(res => setAccounts(res.data))
        .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
    setAccounts(accounts.filter((account) => account.id !== id));
  };

  const handleDeposit = (id, amount) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.id === id ? { ...account, balance: account.balance + amount } : account
      )
    );
  };

  const handleWithdraw = (id, amount) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.id === id ? { ...account, balance: account.balance - amount } : account
      )
    );
  };

  useEffect(() => {
    if(storeAccounts) {
        axios.post(URL, storeAccounts)
        .then(res => {
            setAccounts
        })
    }
  })

  const handleCreateAccount = (newAccount) => {
    setStoreAccounts([...accounts, { id: accounts.length + 1, ...newAccount }]);
  };

  return (
    <div>
      <h1>Sąskaitų Valdymo Sistema</h1>
      <p>Klientų skaičius: {totalClients}</p>
      <p>Bendra laikoma suma: {totalBalance}</p>
      <CreateAccount onCreateAccount={handleCreateAccount} />
      <AccountList
        accounts={accounts}
        onDelete={handleDelete}
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
      />
    </div>
  );
};

export default App;