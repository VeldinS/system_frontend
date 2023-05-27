import React, {useContext, useState} from 'react';
import {AuthContext} from "../../../authentication/authContext";
import {useNavigate} from "react-router-dom";
import Navigation from "../../UI Elements/navigation/Navigation";
import {texts} from "../../../languages/language";

function ProfessorLogin() {

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

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
            const res = await fetch(  'https://sysbackend-jhed.onrender.com/Login/Admin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(adminCredentials)
            })
            if (res.status === 200) {
                auth.login();
                navigate('/Admin/Dashboard');
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
                <Navigation onClick={toggleLanguage} field1={texts[language].languageSelect}/>
                <div className={"form-part"} style={{paddingTop: "4rem"}}   >
                    <div className="form-container">
                        <p className="title">Professor Login</p>
                        <form className="form">
                            <div className="input-group">
                                <label htmlFor="username">Mail</label>
                                <input type="text" name="username" id="username" placeholder=""/>
                            </div>
                            <div style={{marginBottom: "1rem"}} className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder=""/>
                            </div>
                            <button className="sign" onClick={() => navigate('/Professor/Dashboard')}>Login</button>
                        </form>
                        <p className="signup signup2" onClick={() => navigate('/Login/Student')}>Login as student?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessorLogin;