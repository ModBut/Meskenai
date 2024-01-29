import { useState } from "react"
import useLogin from "../../Hooks/useLogin";

export default function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [setInputs, response] = useLogin();

    const go = () => {
        setInputs({userName, password});
    }

    return (
        <div className="login-page">
            <div className="box">
                <h1>Login</h1>
                <div className="response">
                {
                    response && !response.ok && <span>{response.message}</span>
                }
                </div>
                <form className="form">
                    <label>UserName</label>
                    <input type="text" name='name' autoComplete="username" value={userName} onChange={e => setUserName(e.target.value)}/>
                    <label>Password</label>
                    <input type='password' name='password' autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="green" onClick={go}>Login</button>
                </form>
            </div>
        </div>
    )
}