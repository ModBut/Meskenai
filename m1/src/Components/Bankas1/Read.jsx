import { Show } from './Show';

export default function Read({newAccount, setDeleteData, setEditData }) {
    
    return (


        <div className="card mt-5">
            
            <div className="card-body">
            <table style={{
            width: '100%',
            }}>
            <thead>
            <tr>
           
               <th>First Name</th>
               <th>Last Name</th>
               <th>Account Number</th>
               <th>Account Balance</th>
               <th></th>
            </tr>
            </thead>
            <tbody>
                {newAccount
                    .sort((a, b) => a.lastName.localeCompare(b.lastName))
                    .map(newAccount => <tr key={newAccount.id}><Show class="list-group-item" newAccount={newAccount} setDeleteData={setDeleteData} setEditData={setEditData}/></tr>)
                }
            </tbody>
            </table>
        </div> 
        </div>
    )
}