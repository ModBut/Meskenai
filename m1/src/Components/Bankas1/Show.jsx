export function Show({newAccount, setDeleteData}) {

    return (
        <>
        <td></td>
        <td style={{
            borderLeft: '1px solid black'
        }}>{newAccount.firstName}</td>
        <td style={{
            borderLeft: '1px solid black'
        }}>{newAccount.lastName}</td>
        <td style={{
            borderLeft: '1px solid black'
        }}>{newAccount.id}</td>
        <td style={{
            borderLeft: '1px solid black'
        }}><div style={{
            width: '40px',
            height: '30px',
            border: '1px solid black'
        }}></div></td>
        <td style={{
            borderLeft: '1px solid black'
        }}>
        <button className="green">Edit</button>
        <button className="green">Edit</button>
        <button className='red' onClick={() => setDeleteData(newAccount)}>Delete</button>
        </td>
       </>
    )
}