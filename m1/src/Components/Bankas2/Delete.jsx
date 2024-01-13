import { Modal, ModalHeader, ModalTitle, Form, ModalBody } from "react-bootstrap";


export default function Delete({account, show, handleClose, setDestroyAccount}) {

    return (
    <>
        <Modal show={show} onHide={handleClose}>
            <Form>
                <ModalHeader>
                    <ModalTitle>Confirm</ModalTitle>
                    <button className="btn-close" onClick={() => handleClose()}></button>
                </ModalHeader>
                <ModalBody>
                <p>Are you sure?</p>
                </ModalBody>
                <div className="modal-footer">
                    <button onClick={() => setDestroyAccount(account)}>Delete</button>
                    <button className="violet" onClick={() => handleClose()}>Cancel</button>
                </div>
            </Form>
        </Modal>
    </>
    )
}