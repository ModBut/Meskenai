import { useContext, useState } from "react"
import { Books } from "../../Contexts/Books";
import useAuthorsDropdown from "../../Hooks/useAuthorsDropdown";

const defaultInputs = {
        title: '',
        pages: '',
        genre: '',
        author_id: '',
}

export default function Create() {

    const [inputs, setInputs] = useState(defaultInputs);

    const { authorsDropdown } = useAuthorsDropdown();

    const {setStoreBook} = useContext(Books);

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.id]: e.target.value}));
    }

    const create = () =>{
        setStoreBook(inputs);
        setInputs(defaultInputs);
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                <h2>Create Book</h2>
            </div>
            <div className="card-body">
                <form>
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
                </form>
            </div>
            <div className="card-footer text-body-secondary">
            <button type="button" className="btn btn-primary m-2" onClick={create}>Create</button>
            </div>
        </div>
    )
}