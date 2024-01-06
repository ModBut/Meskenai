import React, { useState } from 'react';
import AccountList from './Components/pvz/AccountList';
import CreateAccountForm from './Components/pvz/CreateAccountForm';

const App = () => {
  const [accounts, setAccounts] = useState([]);

  const addFunds = (index, amount) => {
    const updatedAccounts = [...accounts];
    updatedAccounts[index].SaskaitosSuma += amount;
    setAccounts(updatedAccounts);
  };

  const withdrawFunds = (index, amount) => {
    const updatedAccounts = [...accounts];
    updatedAccounts[index].SaskaitosSuma -= amount;
    setAccounts(updatedAccounts);
  };

  const deleteAccount = (index) => {
    const updatedAccounts = [...accounts];
    updatedAccounts.splice(index, 1);
    setAccounts(updatedAccounts);
  };

  const createAccount = (name, surname) => {
    const newAccount = {
      Vardas: name,
      Pavarde: surname,
      SaskaitosSuma: 0
    };
    setAccounts([...accounts, newAccount]);
  };

  return (
    <div>
      <h1>Banko sistema</h1>
      <CreateAccountForm createAccount={createAccount} />
      <AccountList
        accounts={accounts}
        addFunds={addFunds}
        withdrawFunds={withdrawFunds}
        deleteAccount={deleteAccount}
      />
    </div>
  );
};

export default App;