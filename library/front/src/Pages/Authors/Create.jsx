import { useContext, useState } from "react"
import { Authors } from "../../Contexts/Authors";

const defaultInputs = {
        name: '',
        surname: '',
        nickname: '',
        born: '',
}

export default function Create() {

    const [inputs, setInputs] = useState(defaultInputs);

    const {setCreateAuthor} = useContext(Authors);

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.id]: e.target.value}));
    }

    const create = () =>{
        setCreateAuthor(inputs);
        setInputs(defaultInputs);
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                <h2>Create Author</h2>
            </div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input id='name' type="text" className="form-control" value={inputs.name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="surname" className="form-label">Surname</label>
                        <input id='surname' type="text" className="form-control" value={inputs.surname} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nickname" className="form-label">Nickname</label>
                        <input id='nickname' type="text" className="form-control" value={inputs.nickname} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="born" className="form-label">Born</label>
                        <input id='born' type="date" className="form-control" value={inputs.born} onChange={handleChange}/>
                    </div>
                </form>
            </div>
            <div className="card-footer text-body-secondary">
            <button type="button" className="btn btn-primary m-2" onClick={create}>Create</button>
            </div>
        </div>
    )
}