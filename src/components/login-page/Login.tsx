import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../../authentication/authContext";

import './login.css'
import Navigation from "../UI Elements/navigation/Navigation";

const Login: React.FC = () => {

    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    const [formData, setFormData] = useState({username: '', password: ''})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const adminCredentials = {...formData};
        try {
            const res = await fetch(  'http://localhost:5000/Login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(adminCredentials)
            })
            if (res.status === 200) {
                auth.login();
                navigate('/Student/Dashboard');
            } else {
                alert('INVALID CREDENTIALS');
            }
        } catch (err) {
            console.log('invalid credentials')
        }
    };

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation/>
                <div className={"form-part"} style={{paddingTop: "4rem"}}   >
                    <div className="form-container">
                        <p className="title">Login</p>
                        <form className="form">
                            <div className="input-group">
                                <label htmlFor="username">Student Mail</label>
                                <input type="text" name="username" id="username" placeholder=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder=""/>
                                    <div className="forgot">
                                        <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                                    </div>
                            </div>
                            <button className="sign" onClick={() => navigate('/Student/Dashboard')}>Login</button>
                        </form>
                        <p className="signup">Don't have a student account jet?
                            <br/><a rel="noopener noreferrer" href="#" className="" onClick={() => navigate('/Register')}>Register!</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;