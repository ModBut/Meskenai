// import "./App.scss";
import "./buttons.scss";
import "./Bank.scss"
import { useEffect, useState } from "react";
import Account from "./Components/Banktas-ver1/Acount";



export default function App() {

  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({ 
    firstName: '', 
    lastName: '',
    accountNumber: '',
    amount: ''
  });

  // useEffect(() => {
  //   if (newAccount) {

  //   }
  // }, {accountNumber})

  const createAccount = () => {
    setAccounts((prevAccounts) => [
      ...prevAccounts,
      { ...newAccount, id: prevAccounts.length + 1},
    ]);
    setNewAccount({ 
    firstName: '', 
    lastName: '',
    accountNumber: '',
    amount: ''  
  });
  };


    return (
    <div className="App">
      <header className="App-header">
        <h1>Bankas</h1>
        <div className="form">
          
            <th>First Name</th>
            <th>Last Name</th>
            <th>Account Number</th>
            <th>Account amount</th>
            <th>Action</th>
          
          </div>
          <div className="list">
          {accounts.map((account) => (
            <Account
            key={account.id}
            account={account}/>
          ))}
        </div>
        <div className="form">
        
        <label>First Name</label>
        <input type="text" name="firstName" value={newAccount.firstName}
            onChange={(e) => setNewAccount({ ...newAccount, firstName: e.target.value })}/>
        <label>Last Name</label>
        <input type="text" name="lastName" value={newAccount.lastName}
            onChange={(e) => setNewAccount({ ...newAccount, lastName: e.target.value })}/>
            </div>
        {/* <label>Account Number</label>
        <input type="number" name="accountNumber" value={newAccount.accountNumber}
            onChange={(e) => setNewAccount({ ...newAccount, accountNumber: e.target.value })}/>
        <label>Amount</label>
        <input type="number" name="amount" value={newAccount.amount}
            onChange={(e) => setNewAccount({ ...newAccount, amount: e.target.value })}/>   */}
        <div className="buttons">
        <button className='blue' onClick={createAccount}>Add Account</button>
        </div>      
        
        
      </header>
    </div>
  );
}