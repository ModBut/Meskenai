import { useContext } from "react";
import { Books } from "../../Contexts/Books";

export default function Delete() {

    const { deleteBook, setDeleteBook, setDestroyBook } = useContext(Books);

    if (!deleteBook) return null;

    const closeModal = () => {
        setDeleteBook(null);
    }

    const handleDelete = () => {
        setDestroyBook(deleteBook);
        setDeleteBook(null);
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm delete</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure to delete {deleteBook.title}?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}