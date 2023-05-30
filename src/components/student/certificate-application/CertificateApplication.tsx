import React, {useEffect, useState} from 'react';
import './certificateApplication.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {texts} from "../../../languages/language";
import toast, {Toaster} from "react-hot-toast";
import {Student} from "../../../functions/helper";

function CertificateApplication() {

    const navigate = useNavigate()

    const {studentId} = useParams()

    useEffect(() => {
        fetch(   `https://sysbackend-jhed.onrender.com/Student/${studentId}`)
            .then((res) => res.json())
            .then((data) => setStudentData(data as Student))
    }, [studentId]);

    const [studentData, setStudentData] = useState<Student>()

    const [formData, setFormData] = useState({
        studentName: studentData?.name,
        studentSurname: studentData?.surname,
        docType: '',
        docLanguage: '',
        docCopies: '',
        docReason: ''
    })

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newDocument = {
            studentName: studentData?.name,
            studentSurname: studentData?.surname,
            docType: formData.docType,
            docLanguage: formData.docLanguage,
            docCopies: formData.docCopies,
            docReason: formData.docReason
        }
        const response = await axios.post(`https://sysbackend-jhed.onrender.com/Student/SCA/${studentId}`, newDocument, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(language == 'bosnian'){
            toast.success('Podaci uspješno poslani u SAO!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        else if(language == 'english'){
            toast.success('Data successfully sent to SAO!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
    };

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={texts[language].scaHeading} field2={texts[language].backToDash} field3={texts[language].dashboard}
                             field4={texts[language].navField2} onClick={toggleLanguage} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/Student/${studentId}`} navigate2={`/Dashboard/Student/${studentId}`} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />

                <div className={"certificate-form-div"}>
                    <div className="form-container certificate-container">
                        <p className="title">{texts[language].scaFormHeading}</p>
                        <form onSubmit={handleSubmit} className="form">
                            <div className={"certificate-select-div"}>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%", margin:"auto"}} className="input-group">
                                    <label>{texts[language].scaSelectField1}</label>
                                    <select value={formData.docType} onChange={handleChangeSelect} className={"certificate-select"} name="docType">
                                        <option value=""></option>
                                        <option value={'Detailed Transcript'}>{texts[language].scaSelectField1_1}</option>
                                        <option value={'Signed Document'}>{texts[language].scaSelectField1_2}</option>
                                    </select>
                                </div>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%", margin:"auto"}} className="input-group">
                                    <label>{texts[language].scaSelectField2}</label>
                                    <select className={"certificate-select"} value={formData.docLanguage} onChange={handleChangeSelect} name="docLanguage">
                                        <option value=""></option>
                                        <option value={'English'}>English</option>
                                        <option value={'Bosanski'}>Bosanski</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-group">
                                <label>{texts[language].scaInputField1}</label>
                                <input style={{marginBottom: "30px"}} type="number" value={formData.docCopies} onChange={handleChange} name="docCopies" id="docCopies" placeholder={texts[language].scaInputField1_1}/>
                            </div>

                            <div className="input-group">
                                <label>{texts[language].scaInputField2}</label>
                                <input style={{marginBottom: "30px"}} value={formData.docReason} onChange={handleChange} type="text" name="docReason" id="docReason" placeholder={texts[language].scaInputField2_1}/>
                            </div>
                            <button className="sign settings-change-button certificateApplication-button" >{texts[language].submitButton}</button>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
}

export default CertificateApplication;