import { useContext, useState } from "react"
import { Books } from "../../Contexts/Books";
import useAuthorsDropdown from "../../Hooks/useAuthorsDropdown";

export default function Edit() {

    const { editBook, setEditBook, setUpdateBook } = useContext(Books);

    const { authorsDropdown } = useAuthorsDropdown();

    const [inputs, setInputs] = useState(editBook);

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const submit = () => {
        setUpdateBook({ ...editBook, ...inputs, old: editBook});
        setEditBook(null);
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Book</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={_ => setEditBook(null)}></button>
                    </div>
                    <div className="modal-body">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input id='title' type="text" className="form-control" value={inputs.title} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pages" className="form-label">Total Pages</label>
                        <input id='pages' type="text" className="form-control" value={inputs.pages} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <input id='genre' type="text" className="form-control" value={inputs.genre} onChange={handleChange}/>
                    </div>
                    {
                        authorsDropdown &&
                        <div className="mb-3">
                        <label htmlFor="author_id" className="form-label">Author</label>
                        <select className="form-select" id="author_id" value={inputs.author_id} onChange={handleChange}>
                            <option value="">Select author</option>
                            {
                                authorsDropdown.map(author => <option key={author.id} value={author.id}>{author.name} {author.surname}</option>)
                            }
                        </select>
                        </div>
                    }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={submit}>Save</button>
                        <button type="button" className="btn btn-secondary" onClick={_ => setEditBook(null)}>Cancel Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}