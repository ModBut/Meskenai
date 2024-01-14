import React, { useState } from 'react';

const AccountItem = ({ id, firstName, lastName, balance, onDelete, onDeposit, onWithdraw }) => {
  const [transactionAmount, setTransactionAmount] = useState(0);

  const handleDeposit = () => {
    const amount = parseFloat(transactionAmount);
    if (!isNaN(amount) && amount > 0) {
      onDeposit(id, amount);
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(transactionAmount);
    if (!isNaN(amount) && amount > 0 && balance >= amount) {
      onWithdraw(id, amount);
    }
  };

  return (
    <div>
      <p>Vardas: {firstName}</p>
      <p>Pavardė: {lastName}</p>
      <p>Sąskaitos suma: {balance}</p>
      <input
        type="number"
        value={transactionAmount}
        onChange={(e) => setTransactionAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Pridėti lėšų</button>
      <button onClick={handleWithdraw}>Nuskaičiuoti lėšas</button>
      <button onClick={() => onDelete(id)}>Ištrinti</button>
    </div>
  );
};

export default AccountItem;