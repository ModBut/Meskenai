import { useState } from "react";
import {ModalHeader, ModalTitle, Form, FormGroup, Modal, ModalBody } from "react-bootstrap";


export default function Edit({show, handleClose}) {

    const [transactionAmount, setTransactionAmount] = useState(0);
    const [accountBalance, setAccountBalance] = useState(0);

    const addFunds = () => {
    const amount = parseFloat(transactionAmount);
      if (!isNaN(amount) && amount > 0) {
        setAccountBalance(accountBalance + amount);
        setTransactionAmount(0);
        // setUpdateAccounts({name: transactionAmount})
      }
    }

    const wthdrawFunds = () => {
    const amount = parseFloat(transactionAmount);
    if (!isNaN(amount) && amount > 0 && accountBalance >= amount) {
        setAccountBalance(accountBalance - amount);
        setTransactionAmount(0);
    }
    }

    return (
        <>
        <div className="list-group-item"> Sąskaitos likutis: {accountBalance} €</div>
        <Modal show={show} onHide={handleClose}>
            <Form>
            <ModalHeader>
                <ModalTitle>Koreguoti sąskaitos likutį</ModalTitle>
                    <button type="button" className="btn-close" onClick={() => handleClose()}></button>
            </ModalHeader>
            <ModalBody>
            <FormGroup>
            <label className="form-label">Įvesti sumą:</label>
            <input type="number" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} className="form-control"/> 
            </FormGroup>
            </ModalBody>
            <div className="modal-footer">
            <button type="button" className='deepblue' onClick={addFunds}>Pridėti</button>
            <button type="button" className='red' onClick={wthdrawFunds}>Atimti</button>
            <button type="button" onClick={() => handleClose()}>Išsaugoti pakitimus</button>
            </div>
            </Form>
        </Modal>
        </>
    )
}