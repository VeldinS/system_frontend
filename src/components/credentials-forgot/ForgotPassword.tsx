import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../../authentication/authContext";

import './forgotPassword.css'
import Navigation from "../UI Elements/navigation/Navigation";

const ForgotPassword: React.FC = () => {

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
            const res = await fetch(  'http://localhost:5000/Password/Forgot', {
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
                        <p className="title">Recover Your Account</p>
                        <form className="form">
                            <div className="input-group">
                                <label htmlFor="username">Student ID</label>
                                <input type="text" name="username" id="username" placeholder=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="username">Student Mail</label>
                                <input type="text" name="username" id="username" placeholder=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="username">Your Security Question</label>
                                <input type="text" name="username" id="username" placeholder=""/>
                            </div>
                            <div style={{marginBottom: "1rem"}} className="input-group">
                                <label htmlFor="username">Your Security Answer</label>
                                <input type="text" name="username" id="username" placeholder=""/>
                            </div>
                            <button className="sign" onClick={() => navigate('/Student/Dashboard')}>Recover!</button>
                        </form>
                        <p className="signup signup2" onClick={() => navigate('/Login/Student')}>Back to Login?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;