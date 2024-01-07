

export function Show({newAccount, setDeleteData, setEditData}) {

  

    return (
        <>
        <td></td>
        <td>{newAccount.firstName}</td>
        <td>{newAccount.lastName}</td>
        <td>{newAccount.id}</td>
        <td>{newAccount.accountBalance}</td>
        <td>
        <button className="green" onClick={() => setEditData(newAccount)}>Edit Account Balance</button>
        <button className='red' onClick={() => setDeleteData(newAccount)}>Delete Account</button>
        </td>
       </>
    )
}