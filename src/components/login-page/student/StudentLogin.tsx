import React, {useContext, useState} from 'react';
import { useNavigate} from "react-router-dom";

import {AuthContext} from "../../../authentication/authContext";

import './studentLogin.css'
import Navigation from "../../UI Elements/navigation/Navigation";
import toast, {Toaster} from "react-hot-toast";
import {texts} from "../../../languages/language";


const StudentLogin: React.FC = () => {

    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

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
                if(language == 'bosnian'){
                    toast.error('Podaci za prijavi nisu validni!', {style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        }});
                }
                else if(language == 'english'){
                    toast.error('Login information not valid!', {style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        }});
                }
            }
        } catch (err) {
            console.log('invalid credentials')
        }
    };

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation onClick={toggleLanguage} field1={texts[language].languageSelect}/>
                <div className={"form-part"}>
                    <div className="form-container">
                        <p className="title">Login</p>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="username">{texts[language].mailField1}</label>
                                <input value={formData.mail} onChange={handleChange} type="text" name="mail" id="mail" placeholder=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">{texts[language].passwordField1}</label>
                                <input value={formData.password} onChange={handleChange} type="password" name="password" id="password" placeholder=""/>
                                    <div className="forgot">
                                        <a className={"signup2"} rel="noopener noreferrer" onClick={() => navigate('/Credentials/Forgot')}>{texts[language].forgotPassword}</a>
                                    </div>
                            </div>
                                <button type="submit" className="sign">Login</button>
                        </form>
                        <p className="signup ">{texts[language].registerInfoField1}
                            <br/><a rel="noopener noreferrer" className="signup2" onClick={() => navigate('/Register')}>{texts[language].registerInfoField2}</a>
                        </p>
                        <p className="signup signup2" onClick={() => navigate('/Login/SAO')}>{texts[language].adminLoginButton}</p>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default StudentLogin;