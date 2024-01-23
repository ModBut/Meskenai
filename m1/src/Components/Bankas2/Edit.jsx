import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalTitle, Form, FormGroup, ModalBody } from "react-bootstrap";

export default function Edit({ show, handleClose, setUpdateAccount, account, addMessage}) {
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [error, setError] = useState('');

  const addFunds = () => {
    const amount = parseFloat(transactionAmount);
    setUpdateAccount({ ...account, accountBalance: account.accountBalance + amount });
    setTransactionAmount(0);
    addMessage('success', 'Sąskaitos likutis pakoreguotas!');
  };

  const withdrawFunds = () => {
    const amount = parseFloat(transactionAmount);
    if (!isNaN(amount) && amount > 0 && account.accountBalance >= amount) {
      setUpdateAccount({ ...account, accountBalance: account.accountBalance - amount });
      setTransactionAmount(0);
      addMessage('success', 'Sąskaitos likutis pakoreguotas!');
    }
    else {
        setError('Nepakanka lėšų');
    }
  };

  useEffect(() => {
    setTransactionAmount(0); 
    setError(''); 
  }, [setTransactionAmount, setError]);


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <ModalHeader>
            <ModalTitle>Edit Account Balance</ModalTitle>
            <button type="button" className="btn-close" onClick={() => handleClose()}></button>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label className="form-label">Enter amount: <div style={{color: 'red'}}>{error}</div></label>
              <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>
              <input type="number" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} className="form-control" />
              </div>
            </FormGroup>
          </ModalBody>
          <div className="modal-footer">
            <button type="button" className="deepblue" onClick={addFunds}>
              Add Funds
            </button>
            <button type="button" className="red" onClick={withdrawFunds}>
              Withdraw Funds
            </button>
            <button type='button' onClick={() => handleClose()} className="button-lina">
              Save
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
}