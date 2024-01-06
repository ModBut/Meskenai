import React, { useState } from 'react';

const AccountList = ({ accounts, addFunds, withdrawFunds, deleteAccount }) => {
  const [amount, setAmount] = useState(0);

  const handleAddFunds = (index) => {
    addFunds(index, amount);
    setAmount(0);
  };

  const handleWithdrawFunds = (index) => {
    withdrawFunds(index, amount);
    setAmount(0);
  };

  return (
    <div>
      <h2>Sąskaitų sąrašas</h2>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>
            {account.Vardas} {account.Pavarde} - {account.SaskaitosSuma}
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
            <button onClick={() => handleAddFunds(index)}>Pridėti lėšų</button>
            <button onClick={() => handleWithdrawFunds(index)}>Nuskaičiuoti lėšas</button>
            <button onClick={() => deleteAccount(index)}>Ištrinti</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;