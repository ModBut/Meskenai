import { Show } from './Show';

export default function Read({newAccount, setDeleteData, setEditData }) {
    return (
        <div className="card mt-5">
            <div className="card-header ">
            <h4>Accounts List</h4>
            </div>
            <div className="card-body">
            <table style={{
            width: '100%',
            }}>
            <thead>
            <tr>
               <th>Serial<br/> Nr.</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Account Number</th>
               <th>Account Balance</th>
               <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    newAccount.map(newAccount => <tr key={newAccount.id}><Show class="list-group-item" newAccount={newAccount} setDeleteData={setDeleteData} setEditData={setEditData}/></tr>)
                }
            </tbody>
            </table>
        </div> 
        </div>
    )
}