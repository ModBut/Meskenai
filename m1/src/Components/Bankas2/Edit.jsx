import { useState } from "react";
import { ModalBody, Stack } from "react-bootstrap";
// import { Modal, ModalHeader, ModalTitle, Form, ModalBody } from "react-bootstrap";


export default function Edit({setUpdateAccount, addMessage}) {

    const [transactionAmount, setTransactionAmount] = useState(0);
    const [accountBalance, setAccountBalance] = useState(0);

   
    const addFunds = () => {
    const amount = parseFloat(transactionAmount);
      setAccountBalance(accountBalance + amount);
      if (!isNaN(amount) && amount > 0) {
        setTransactionAmount(0);
      }
      else {
        setUpdateAccount({account: transactionAmount})
      }
}


    const wthdrawFunds = () => {
    const amount = parseFloat(transactionAmount);
    if (!isNaN(amount) && amount > 0 && accountBalance >= amount) {
        setAccountBalance(accountBalance - amount);
        setTransactionAmount(0);
    }
    else {
        setUpdateAccount({account: transactionAmount})
    }
    }

    return (
        <>
        {/* <Modal show={show} onHide={handleClose}>
            <Form>
                <ModalHeader>
                    <ModalTitle>Edit Account Balance</ModalTitle>
                    <button className="btn-close" onClick={() => handleClose()}></button>
                </ModalHeader>
                <ModalBody> */}
                <ModalBody>
                <Stack>
                <div className="modal-body">
                <div className="list-group-item">
                Sąskaitos likutis: {accountBalance} €
                </div>
                <input type="number" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} className="form-control"/> 
                <button onClick={addFunds}>Pridėti</button>
                <button onClick={wthdrawFunds}>Atimti</button>
                </div>
                </Stack>
                </ModalBody>
                {/* </ModalBody>
                <div className="modal-footer">
                    <button>Save</button>
                    <button onClick={() => handleClose()}>Cancel</button>
                </div>
            </Form>
        </Modal> */}
    </>
    )
}