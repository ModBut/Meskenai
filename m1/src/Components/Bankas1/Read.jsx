import { Show } from './Show';

export default function Read({newAccount, setDeleteData}) {
    return (
        <div className="card mt-5">
            <div className="card-header ">
            <h4>Accounts List</h4>
            </div>
            <div className="card-body ">
            <table style={{
            width: '100%',
            }}>
            <thead>
                <tr>
                <th style={{
            border: '1px solid black'
        }}>Serial<br/> Nr.</th>
               <th style={{
            border: '1px solid black'
        }}>First Name</th>
               <th style={{
            border: '1px solid black',
        }}>Last Name</th>
               <th style={{
            border: '1px solid black',
        }}>Account Number</th>
               <th style={{
            border: '1px solid black',
        }}>Account Amount</th>
               <th style={{
            border: '1px solid black',
        }}>Actions</th>
               </tr>
            </thead>
            <tbody>
                
                {
                    newAccount.map(newAccount => <tr key={newAccount.id} style={{
                        border: '1px solid black',
                    }}><Show newAccount={newAccount} setDeleteData={setDeleteData}/></tr>)
                }
                
            </tbody>
            </table>
        </div> 
        </div>
        
    )
}