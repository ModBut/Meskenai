import { useContext, useState } from "react"
import useBooksDropdown from "../../Hooks/useBooksDropdown";
import { Heroes } from "../../Contexts/Heroes";

const defaultInputs = {
        name: '',
        good: '',
        book_id: '',
}

export default function Create() {

    const [inputs, setInputs] = useState(defaultInputs);

    const {booksDropdown} = useBooksDropdown();

    const {setStoreHeroe} = useContext(Heroes);

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.id]: e.target.value}));
    }

    const create = () =>{
        setStoreHeroe(inputs);
        setInputs(defaultInputs);
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                <h2>Create Heroe</h2>
            </div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Name</label>
                        <input id='title' type="text" className="form-control" value={inputs.name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3" htmlFor="good">
                    <label htmlFor="good" className="form-label">Heroe is good or bad</label>
                        <select className="form-select" id="good" value={inputs.good} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="good">Good</option>
                            <option value="bad">Bad</option>
                        </select>
                    </div>
                    {
                        booksDropdown &&
                        <div className="mb-3">
                        <label htmlFor="book_id" className="form-label">Books</label>
                        <select className="form-select" id="book_id" value={inputs.book_id} onChange={handleChange}>
                            <option value="">Select book</option>
                            {
                                booksDropdown.map(book => <option key={book.id} value={book.id}>{book.title}</option>)
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