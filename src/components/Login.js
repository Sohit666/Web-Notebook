import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [alert, setAlert] = useState(null);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            setAlert({ type: 'success', message: 'Logged In... successful!' });
            localStorage.setItem('token', json.authtoken);
            setTimeout(() => {
                navigate("/");
            }, 2000); 
        } else {
            setAlert({ type: 'error', message: 'Invalid credentials' });
            setTimeout(() => {
                setAlert(null)
            }, 1500);
        }

       
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='container'>
             {alert && <Alert type={alert.type} message={alert.message} />} 
            <h2 className='my-4'>Login to continue</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
        </div>
    );
};

export default Login;
