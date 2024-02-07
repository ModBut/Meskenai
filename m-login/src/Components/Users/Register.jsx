import { useContext, useState } from "react";
import TopNav from "../TopNav/TopNav";
import { v4 as uuidv4 } from 'uuid';
import { Users } from "../../Contexts/Users";

export default function Register() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { setCreateUser } = useContext(Users);

    const register = _ => {
        const user = {
            name,
            password,
            id: uuidv4(),
        };
        setCreateUser(user);
        window.location.href = '#login';
    }

    return (
        <div>
            <TopNav/>
            <h1>Register</h1>
            <div className="fruits-bin">
                <form className="form">
                    <div className="form-group">
                        <label>name</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} autoComplete="username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password"/>
                    </div>
                    <button type='button' className="green" onClick={register} >Register</button>
                </form>
            </div>
        </div>
    )
}