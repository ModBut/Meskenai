export default function Account({account}) {
    return (
        <div>
        <th style={{
        width: '270px',
        height: '20px'
        }}>{account.firstName}</th>
        <th>{account.lastName}</th>
        <th>{account.accountNumber}</th>
        <th>{account.amount}</th>
        </div>
    )
}