import { Modal, ModalHeader, ModalTitle, Form, ModalBody } from "react-bootstrap";

export default function Delete({show, handleClose, handleDestroy, account}) {
    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Form>
          <ModalHeader>
            <ModalTitle>Delete Account</ModalTitle>
            <button type="button" className="btn-close" onClick={() => handleClose()}></button>
          </ModalHeader>
          <ModalBody>
            Are you sure?
          </ModalBody>
          <div className="modal-footer">
            <button type='button' onClick={() => handleDestroy(account)} className="red">
              Delete
            </button>
          </div>
        </Form>
      </Modal>
    </>
    )
}