import React, { useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {texts} from "../../../languages/language";

import './accountSettings.css'

import image1 from '../../../images/dummy.jpg'

import Navigation2 from "../../UI Elements/navigation/Navigation2";
import toast, {Toaster} from "react-hot-toast";

interface Student {
    _id: any;
    name:String,
    surname:String,
    id:String,
    image:String,
    citizenshipId:String,
    registrationYear:String,
    Department:String,
    RegistrationType:String,
    EducationLevel:String,
}

const AccountSettings: React.FC = () => {

    const {studentId} = useParams()
    const navigate = useNavigate()
    const [studentData, setStudentData] = useState<Student>()
    const [studentPassword, setStudentPassword] = useState('')
    const [studentMail, setStudentMail] = useState('')
    const [studentPhNum, setStudentPhNum] = useState<number>();

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    //FETCH STUDENT DATA
    useEffect(() => {
        fetch(   `https://sysbackend-jhed.onrender.com/Student/${studentId}`)
            .then((res) => res.json())
            .then((data) => setStudentData(data as Student))
    }, [studentId]);

    //PASSWORD CHANGE
    const handleChangePassword = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        // @ts-ignore
        await setStudentPassword({[name]: value});
    }
    const handleSubmitPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPassword = studentPassword

        const response = await axios.patch(`https://sysbackend-jhed.onrender.com/Student/UpdatePassword/${studentId}`, newPassword, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(language == 'bosnian'){
            toast.success('Lozinka uspješno ažurirana!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        else if(language == 'english'){
            toast.success('Password successfully updated!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
    };

    //MAIL CHANGE
    const handleChangeMail = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        // @ts-ignore
        await setStudentMail({[name]: value});
    }
    const handleSubmitMail = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newMail = studentMail
        const response = await axios.patch(`https://sysbackend-jhed.onrender.com/Student/UpdateMail/${studentId}`, newMail, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(language == 'bosnian'){
            toast.success('Mail uspješno ažuriran!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        else if(language == 'english'){
            toast.success('Mail successfully updated!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
    };

    //PHONE NUMBER CHANGE
    const handleChangePhNum = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        // @ts-ignore
        await setStudentPhNum({[name]: value});
    }
    const handleSubmitPhNum = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPhNum = studentPhNum
        const response = await axios.patch(`https://sysbackend-jhed.onrender.com/Student/UpdatePhNum/${studentId}`, newPhNum, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(language == 'bosnian'){
            toast.success('Broj telefona uspješno ažuriran!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        else if(language == 'english'){
            toast.success('Phone number successfully updated!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
    };

    return (
        <div>
            <div className={"login-page-main accSetPage"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={texts[language].accSetHeading} field2={texts[language].backToDash} field3={texts[language].dashboard}
                             field4={texts[language].navField2} onClick={toggleLanguage} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/Student/${studentId}`} navigate2={`/Dashboard/Student/${studentId}`} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                {studentData && (
                <div key={studentData._id} className={"settings-page"}>
                    <div className={"account-details"}>
                        <div style={{textAlign: "left"}} className={"account-details-row"}>
                            <img src={image1} className={"account-details-image"}/>
                            <div className={"basic-info"}>
                                <p>{studentData.name} {studentData.surname}</p>
                                <p>{studentData.id}</p>
                                <p>Status: {texts[language].status}</p>
                            </div>
                        </div>
                        <div className={"account-details-row"}>
                            <div className={"info-part1"}>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>{texts[language].citizenship}</p>
                                <p style={{margin: "5px"}}>{studentData.citizenshipId}</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>{texts[language].regYear}</p>
                                <p style={{margin: "5px"}}>{studentData.registrationYear}</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>{texts[language].department}</p>
                                <p style={{margin: "5px"}}>{studentData.Department}</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>{texts[language].regType}</p>
                                <p style={{margin: "5px"}}>{studentData.RegistrationType}</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>{texts[language].eduLevel}</p>
                                <p style={{margin: "5px"}}>{studentData.EducationLevel}</p>
                                <hr/>
                            </div>
                        </div>
                    </div>

                    <div className={"settings-change"}>
                        <div className="form-container settings-container">
                            <p className="title">{texts[language].accSetFormHeading}</p>
                                <form className="form" onSubmit={handleSubmitPassword}>
                                    <div className="input-group">
                                        <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder={texts[language].passField1}/>
                                        <input defaultValue={studentPassword} onChange={handleChangePassword} style={{marginBottom: "10px"}} type="text" name="password" id="password" placeholder={texts[language].passField2}/>
                                        <button type={'submit'} style={{marginBottom: "20px"}} className="sign settings-change-button" >{texts[language].updateButton}</button>
                                    </div>
                                </form>
                                <form className="form" onSubmit={handleSubmitMail}>
                                    <div className="input-group">
                                        <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder={texts[language].emailField1}/>
                                        <input defaultValue={studentMail} onChange={handleChangeMail} style={{marginBottom: "10px"}} type="text" name="mail" id="mail" placeholder={texts[language].emailField2}/>
                                        <button type={'submit'} style={{marginBottom: "20px"}} className="sign settings-change-button" >{texts[language].updateButton}</button>
                                    </div>
                                </form>
                                <form className="form" onSubmit={handleSubmitPhNum}>
                                    <div className="input-group">
                                        <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder={texts[language].phoneField1}/>
                                        <input defaultValue={studentPhNum} onChange={handleChangePhNum} style={{marginBottom: "10px"}} type="number" name="phoneNumber" id="phoneNumber" placeholder={texts[language].phoneField2}/>
                                        <button type={'submit'} style={{marginBottom: "20px"}} className="sign settings-change-button" >{texts[language].updateButton}</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <Toaster/>
        </div>
    );
};

export default AccountSettings;