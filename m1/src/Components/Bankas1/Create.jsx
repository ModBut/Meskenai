import { useState } from "react";

export default function Create({setCreateData}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [accountBalance, setAccountBalance] = useState(0);

    

    const handleSubmit = () => {
        setCreateData(
            {
            firstName,
            lastName,
            accountBalance,
            });
        setFirstName('');
        setLastName('');
        setAccountBalance(0);
    }

    return (
        <div className="card">
            <div className="card-header">
          <h4>Create New Account</h4>
            </div>
        <div className="card-body">
           <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type='text' name="firstName" className="ms-3" value={firstName} onChange={e => setFirstName(e.target.value)} required/>
           </div>
            <div className="mb-3">
             <label className="form-label">Last Name</label>
             <input type="text" name="lastName" className="ms-3" value={lastName} onChange={e => setLastName(e.target.value)} required/>
            </div>
            <div className="buttons">
             <button className="blue" onClick={handleSubmit}>Add New Account</button>
             </div>
       </div>
        </div>
    )
}