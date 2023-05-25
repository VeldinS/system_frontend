import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../../authentication/authContext";

import './forgotPassword.css'
import Navigation from "../UI Elements/navigation/Navigation";
import {texts} from "../../languages/language";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

const ForgotPassword: React.FC = () => {

    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    const [formData, setFormData] = useState({
        studentId: '',
        studentMail: '',
        securityQuestion: '',
        securityAnswer: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newRecoverRequest = {
            studentId: formData.studentId,
            studentMail: formData.studentMail,
            securityQuestion: formData.securityQuestion,
            securityAnswer: formData.securityAnswer
        }
        const response = await axios.post(`http://localhost:5000/Student/RecoverAccount`, newRecoverRequest, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(language == 'bosnian'){
            toast.success('Zahtjev je uspješno poslan u SAO!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        else if(language == 'english'){
            toast.success('Request successfully sent to SAO!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
    };

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation  onClick={toggleLanguage} field1={texts[language].languageSelect}/>
                <div className={"form-part"} style={{paddingTop: "4rem"}}   >
                    <div className="form-container">
                        <p className="title">{texts[language].accRecHeading}</p>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="input-group">
                                <label htmlFor="username">{texts[language].accRecField1}</label>
                                <input onChange={handleChange} type="text" name="studentId" id="username" placeholder=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="username">{texts[language].accRecField2}</label>
                                <input onChange={handleChange} type="text" name="studentMail" id="username" placeholder=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="username">{texts[language].accRecField3}</label>
                                <input onChange={handleChange} type="text" name="securityQuestion" id="username" placeholder=""/>
                            </div>
                            <div style={{marginBottom: "1rem"}} className="input-group">
                                <label htmlFor="username">{texts[language].accRecField4}</label>
                                <input onChange={handleChange} type="text" name="securityAnswer" id="username" placeholder=""/>
                            </div>
                            <button type={'submit'} className="sign" >{texts[language].recoverButton}</button>
                        </form>
                        <p className="signup signup2" onClick={() => navigate('/Login/Student')}>{texts[language].backToLogin}</p>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default ForgotPassword;