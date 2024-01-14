import { Stack } from "react-bootstrap"


export default function Read({setDestroyAccount, account}) {

    return (

        <>
        <ul className="list-group list-group ">
                      <div className="mb-3"> 
                        <div className="list-group-item">Vardas: {account.firstName}</div>
                        <div className="list-group-item">Pavardė: {account.lastName}</div>
                        <div className="list-group-item">Sąskaitos numeris: {account.id}</div>
                        <div className="list-group-item">Account Balance: {account.accountBalance} €</div>
                        <Stack gap='2' className="mb-4">
                        <button onClick={() => setDestroyAccount(account)}>Ištrinti sąskaitą</button>
                        </Stack>
                        </div>
                        </ul>
        </>
    )
}