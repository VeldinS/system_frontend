import React, {useContext, useState} from 'react';
import {AuthContext} from "../../../authentication/authContext";
import {useNavigate} from "react-router-dom";
import Navigation from "../../UI Elements/navigation/Navigation";
import {texts} from "../../../languages/language";
import toast from "react-hot-toast";
import Loader from "../../UI Elements/Loader";

function ProfessorLogin() {

    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);
        event.preventDefault();
        const professorCredentials = {...formData};
        try {
            const res = await fetch(  'https://sysbackend-jhed.onrender.com/Login/Professor', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(professorCredentials)
            })
            if (res.status === 200) {
                const data = await res.json();
                const professorId = data.user._id;
                auth.login();
                navigate(`/Dashboard/Professor/${professorId}`);
                setIsLoading(false);
            } else {
                setIsLoading(false);
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
                {isLoading ? (
                    <div style={{margin:"auto"}}>
                        <Loader/>
                    </div>
                ) : (
                <div className={"form-part"} style={{paddingTop: "4rem"}}   >
                    <div className="form-container">
                        <p className="title">{texts[language].loginHeading}</p>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="username">Mail</label>
                                <input value={formData.mail} onChange={handleChange} type="text" name="mail" id="username" placeholder=""/>
                            </div>
                            <div style={{marginBottom: "1rem"}} className="input-group">
                                <label htmlFor="password">{texts[language].passwordField1}</label>
                                <input value={formData.password} onChange={handleChange} type="password" name="password" id="password" placeholder=""/>
                            </div>
                            <button type={'submit'} className="sign">Login</button>
                        </form>
                        <p className="signup signup2" onClick={() => navigate('/Login/Student')}>{texts[language].loginAsStudent}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default ProfessorLogin;