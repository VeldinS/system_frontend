import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../../authentication/authContext";

import './register.css'
import Navigation from "../UI Elements/navigation/Navigation";
import {texts} from "../../languages/language";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

const Register: React.FC = () => {

    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        mail: '',
        phone: '',
        studentId: '',
        citizenshipId: '',
        department: '',
        securityQuestion: '',
        securityAnswer: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newRegister = {
            name: formData.name,
            surname: formData.surname,
            mail: formData.mail,
            phone: formData.phone,
            studentId: formData.studentId,
            citizenshipId: formData.citizenshipId,
            department: formData.department,
            securityQuestion: formData.securityQuestion,
            securityAnswer: formData.securityAnswer
        }
        const response = await axios.post(`https://sysbackend-jhed.onrender.com/Student/Register`, newRegister, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(language == 'bosnian'){
            toast.success('Registracija uspješno poslana u SAO!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        else if(language == 'english'){
            toast.success('Registration data successfully sent to SAO!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
    };

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation onClick={toggleLanguage} field1={texts[language].languageSelect}/>
                <div className={"form-part registration-form-part"} style={{paddingTop: "4rem"}}>
                    <form onSubmit={handleSubmit} className="register-form register-form2">
                        <p className="register-title">{texts[language].registerHeading}</p>
                        <p className="register-message">{texts[language].registerText1}</p>
                        <div className={"register-form-div"}>
                            <div className={"register-form-part1"}>
                                <div className="register-flex">
                                    <label style={{marginRight:"10px"}}>
                                        <input onChange={handleChange} name={"name"} required={true} placeholder="" type="text" className="register-input"/>
                                            <span>{texts[language].registerField1}</span>
                                    </label>

                                    <label style={{marginLeft:"10px"}}>
                                        <input onChange={handleChange} name={"surname"} required={true} placeholder="" type="text" className="register-input"/>
                                            <span>{texts[language].registerField2}</span>
                                    </label>
                                </div>

                                <label>
                                    <input onChange={handleChange} name={"mail"} required={true} placeholder="" type="email" className="register-input"/>
                                        <span>{texts[language].registerField3}</span>
                                </label>

                                <label>
                                    <input onChange={handleChange} name={"phone"} required={true} placeholder="" type="number" className="register-input"/>
                                        <span>{texts[language].registerField4}</span>
                                </label>
                                <label>
                                    <input onChange={handleChange} name={"studentId"} required={true} placeholder="" type="number" className="register-input"/>
                                        <span>{texts[language].registerField5}</span>
                                </label>
                            </div>
                            <div className={"register-form-part2"}>
                                <label>
                                    <input onChange={handleChange} name={"citizenshipId"} required={true} placeholder="" type="number" className="register-input"/>
                                    <span>{texts[language].registerField6}</span>
                                </label>

                                <label>
                                    <input onChange={handleChange} name={"department"} required={true} placeholder="" type="text" className="register-input"/>
                                    <span>{texts[language].registerField7}</span>
                                </label>

                                <label>
                                    <input onChange={handleChange} name={"securityQuestion"} required={true} placeholder="" type="text" className="register-input"/>
                                    <span>{texts[language].registerField8}</span>
                                </label>
                                <label>
                                    <input onChange={handleChange} name={"securityAnswer"} required={true} placeholder="" type="text" className="register-input"/>
                                    <span>{texts[language].registerField9}</span>
                                </label>
                            </div>
                        </div>
                        <button type={'submit'} className="register-submit">{texts[language].registerInfoField2}</button>
                        <p className="register-signin">{texts[language].registerText2}<a className={"signup2"} onClick={() => navigate('/Login/Student')}>Login!</a></p>
                    </form>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default Register;