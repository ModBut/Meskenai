import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalTitle, Form, FormGroup, ModalBody } from "react-bootstrap";

export default function Create({ setStoreAccounts, show, handleClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    setStoreAccounts({
      firstName,
      lastName,
      accountBalance: 0,
    });
    setFirstName("");
    setLastName("");
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <ModalHeader>
            <ModalTitle>Sukurti naują sąskaitą</ModalTitle>
            <button type="button" className="btn-close" onClick={() => handleClose()}></button>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label className="form-label">Vardas</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" />
            </FormGroup>
            <FormGroup>
              <label className="form-label">Pavardė</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" />
            </FormGroup>
          </ModalBody>
          <div className="modal-footer">
            <Button onClick={handleSubmit} className="deepblue" variant="primary" type="submit">
              Pridėti
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}