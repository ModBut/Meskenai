import { useState } from "react";
import { Button, Modal, ModalHeader, ModalTitle, Form, FormGroup, ModalBody } from "react-bootstrap";

export default function Create({setStoreAccounts, show, handleClose}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [accountBalance, setAccountBalance] = useState(0);

    const handleSubmit = () => {
        setStoreAccounts({
            firstName, 
            lastName, 
            accountBalance
        });
        setFirstName('');
        setLastName('');
        setAccountBalance(0);
        handleClose();
    }

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Form>
                <ModalHeader>
                    <ModalTitle>Create New Account</ModalTitle>
                    <button type="button" className="btn-close" onClick={() => handleClose()}></button>
                </ModalHeader>
                <ModalBody>
                <FormGroup>
                <label className="form-label">First Name</label>
                <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                <label className="form-label">First Name</label>
                <input type='text' value={lastName} onChange={e => setLastName(e.target.value)}/>
                </FormGroup>
                </ModalBody>
                <div className="modal-footer">
              <Button onClick={handleSubmit} variant="primary" type="submit">
              Add
            </Button>
          </div>
            </Form>
        </Modal>
    </>
    );
}