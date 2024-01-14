export function Show({account}) {

    return (
        <>
        <div className="card mt-5">
            <div className="card-body">
            <li className="list-group-item">First Name: {account.firstName}</li>
            <li className="list-group-item">Last Name: {account.lastName}</li>
            <li className="list-group-item">Account Number: {account.id}</li>
            <li className="list-group-item">Account Balance: {account.accountBalance} EUR</li>
            <li className="list-group-item">
            <button className="green">Edit Account Balance</button>
            <button className='red'>Delete Account</button>
            </li>
            </div>
        </div>
       </>
    )
}