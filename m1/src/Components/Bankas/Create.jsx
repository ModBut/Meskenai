import React, { useState } from 'react';

const CreateAccount = ({ onCreateAccount }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleCreateAccount = () => {
    if (firstName && lastName) {
      onCreateAccount({ firstName, lastName, balance: 0 });
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div>
      <h2>Nauja sąskaita</h2>
      <label>Vardas:</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <label>Pavardė:</label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <button onClick={handleCreateAccount}>Sukurti sąskaitą</button>
    </div>
  );
};

export default CreateAccount;