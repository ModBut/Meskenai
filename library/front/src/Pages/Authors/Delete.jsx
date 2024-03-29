import { useContext } from 'react';
import { Authors } from '../../Contexts/Authors';

export default function Delete() {

    const { deleteAuthor, setDeleteAuthor, setDestroyAuthor } = useContext(Authors);

    if (!deleteAuthor) return null;

    const closeModal = () => {
        setDeleteAuthor(null);
    };

    const handleDelete = () => {
        setDestroyAuthor(deleteAuthor);
        setDeleteAuthor(null);
    }

    return (
    
        <div className="modal" onClick={closeModal}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm delete</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={_ => setDeleteAuthor(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure to delete {deleteAuthor.name} {deleteAuthor.surname}?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        <button type="button" className="btn btn-secondary" onClick={_ => setDeleteAuthor(null)}>Cancel Delete</button>
                    </div>
                </div>
            </div>
        </div>

    )
}