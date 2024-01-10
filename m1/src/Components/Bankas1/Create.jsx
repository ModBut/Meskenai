import {Modal, Form, Button} from 'bootstrap';

export default function Create() {

    return (
       <Modal>
        <Form onSubmit={handleSubmit}>
            <ModalHeader closeButton>
                <ModalTittle>New Budget</ModalTittle>
            </ModalHeader>
            <ModalBody>
                <formGroup className='mb-3' controlId='firtName'>
                    <FormLabel>First Name</FormLabel>
                    <FormControl type='text' required></FormControl>
                </formGroup>
                <formGroup className='mb-3' controlId='lastName'>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl type='text' required></FormControl>
                </formGroup>
                <div className='d-flex justify-content-end'>
                    <Button variant='primary'>Add New Account</Button>
                </div>
            </ModalBody>
        </Form>
       </Modal>
    )
}