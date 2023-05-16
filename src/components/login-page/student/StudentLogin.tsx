import React, {useContext, useState} from 'react';
import { useNavigate} from "react-router-dom";

import {AuthContext} from "../../../authentication/authContext";

import './studentLogin.css'
import Navigation from "../../UI Elements/navigation/Navigation";

const StudentLogin: React.FC = () => {

    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    const [formData, setFormData] = useState({mail: '', password: ''})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const studentCredentials = {...formData};
        try {
            const res = await fetch(  'http://localhost:5000/Login/Student', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(studentCredentials)
            })
            if (res.status === 200) {
                const data = await res.json();
                const studentId = data.user._id;
                auth.login();
                navigate(`/Dashboard/Student/${studentId}`);
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
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="username">Student Mail</label>
                                <input value={formData.mail} onChange={handleChange} type="text" name="mail" id="mail" placeholder=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input value={formData.password} onChange={handleChange} type="password" name="password" id="password" placeholder=""/>
                                    <div className="forgot">
                                        <a className={"signup2"} rel="noopener noreferrer" onClick={() => navigate('/Credentials/Forgot')}>Forgot Password ?</a>
                                    </div>
                            </div>
                                <button type="submit" className="sign">Login</button>
                        </form>
                        <p className="signup ">Don't have a student account jet?
                            <br/><a rel="noopener noreferrer" className="signup2" onClick={() => navigate('/Register')}>Register!</a>
                        </p>
                        <p className="signup signup2" onClick={() => navigate('/Login/SAO')}>Login as admin?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;