import { useEffect, useState } from "react";

export default function Edit({ setUpdateData, editData, setEditData}) {

    const [accountBalance, setAccountBalance] = useState(0);
    const [sum, setSum] = useState();

    const addFunds = () => {
        setAccountBalance(sum + accountBalance);
    }

    const WithdrawFunds = () => {
        setAccountBalance(accountBalance - sum);
    }

    useEffect(() => {
        if (null === editData) {
            return;
        }
        setAccountBalance(editData.accountBalance);
    }, [editData]);

    if (null === editData) {
        return null;
    }

    const save = () => {
        setUpdateData({
        ...editData, 
        accountBalance: parseInt(accountBalance)});
        setEditData(null);
        if (null === editData) {
            return null;
        }
    }
   
    return (
        <div className="modal">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit Balance</h5>
                    <button type="button" className="btn-close" onClick={() => setEditData(null)}></button>
                </div>
                <div className="modal-body">
                <input type="number" value={sum} onChange={(e) => setSum(+e.target.value)} className="form-control"/>
                
                <button style={{marginLeft:'0'}} onClick={addFunds}>Add Funds</button>
                <button style={{marginLeft:'0'}} onClick={WithdrawFunds}>Withdraw Funds</button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="blue" onClick={save}>Save</button>
                    <button type="button" className="red" onClick={() => setEditData(null)}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
    )
}