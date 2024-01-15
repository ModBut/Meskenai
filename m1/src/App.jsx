import React, { useState, useEffect } from 'react';
import AccountList from './Components/pvz/AccountList';
import CreateAccount from './Components/pvz/CreateAccount';

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [totalClients, setTotalClients] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    setTotalClients(accounts.length);
    setTotalBalance(accounts.reduce((sum, account) => sum + account.balance, 0));
  }, [accounts]);

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

  const handleCreateAccount = (newAccount) => {
    setAccounts([...accounts, { id: accounts.length + 1, ...newAccount }]);
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