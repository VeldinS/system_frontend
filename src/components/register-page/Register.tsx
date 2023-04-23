import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../../authentication/authContext";

import './register.css'
import Navigation from "../UI Elements/navigation/Navigation";

const Register: React.FC = () => {

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
                <div className={"form-part"} style={{paddingTop: "4rem"}}>
                    <form className="register-form">
                        <p className="register-title">Register </p>
                        <p className="register-message">Enter your information to register account!</p>
                        <div className={"register-form-div"}>
                            <div className={"register-form-part1"}>
                                <div className="register-flex">
                                    <label style={{marginRight:"10px"}}>
                                        <input required={true} placeholder="" type="text" className="register-input"/>
                                            <span>Firstname</span>
                                    </label>

                                    <label style={{marginLeft:"10px"}}>
                                        <input required={true} placeholder="" type="text" className="register-input"/>
                                            <span>Lastname</span>
                                    </label>
                                </div>

                                <label>
                                    <input required={true} placeholder="" type="email" className="register-input"/>
                                        <span>Email</span>
                                </label>

                                <label>
                                    <input required={true} placeholder="" type="number" className="register-input"/>
                                        <span>PhoneNumber</span>
                                </label>
                                <label>
                                    <input required={true} placeholder="" type="number" className="register-input"/>
                                        <span>Student ID</span>
                                </label>
                            </div>
                            <div className={"register-form-part2"}>
                                <label>
                                    <input required={true} placeholder="" type="number" className="register-input"/>
                                    <span>JMBG</span>
                                </label>

                                <label>
                                    <input required={true} placeholder="" type="text" className="register-input"/>
                                    <span>Department</span>
                                </label>

                                <label>
                                    <input required={true} placeholder="" type="text" className="register-input"/>
                                    <span>SecurityQuestion</span>
                                </label>
                                <label>
                                    <input required={true} placeholder="" type="text" className="register-input"/>
                                    <span>Security Answer</span>
                                </label>
                            </div>
                        </div>
                        <button className="register-submit" onClick={() => navigate('/Login')}>Register</button>
                        <p className="register-signin">Already have an acount ? <a href="#" onClick={() => navigate('/Login')}>Login!</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;