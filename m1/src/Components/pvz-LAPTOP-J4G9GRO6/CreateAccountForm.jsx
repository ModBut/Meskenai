import React, { useState } from 'react';

const CreateAccountForm = ({ createAccount }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount(name, surname);
    setName('');
    setSurname('');
  };

  return (
    <div>
      <h2>Sukurti naują sąskaitą</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Vardas:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Pavardė:
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </label>
        <button type="submit">Sukurti sąskaitą</button>
      </form>
    </div>
  );
};

export default CreateAccountForm;