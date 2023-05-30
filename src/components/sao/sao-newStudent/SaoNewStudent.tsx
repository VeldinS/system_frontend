import React, {useEffect, useState} from 'react';
import '../sao-newDocuments/saoDocuments.css'
import {useParams} from "react-router-dom";
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import {texts} from "../../../languages/language";
import {RegisterDoc} from "../../../functions/helper";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

function SaoNewStudent() {

    const {saoId} = useParams();

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    const [registerData, setRegisterData] = useState<RegisterDoc>()

    useEffect(() => {
        fetch(   `https://sysbackend-jhed.onrender.com/SAO/Register`)
            .then((res) => res.json())
            .then((data) => setRegisterData(data as RegisterDoc))
    }, []);

    const handleSubmit = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>, registerId: string) => {
        event.preventDefault();
        const response = await axios.delete(`https://sysbackend-jhed.onrender.com/SAO/Register/Delete/${registerId}`);
        // @ts-ignore
        const newData = registerData.filter((register: { _id: string; }) => register._id !== registerId);
        setRegisterData(newData);
        if(language == 'bosnian'){
            toast.success('Zahtjev za registraciju uspješno obrisan!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        else if(language == 'english'){
            toast.success('Account registration request successfully deleted!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
    };

    return (
        <div>
            <div className={"sao-dashboard-main-reg"} style={{minHeight: "160vh"}}>
                <Navigation2 field1={texts[language].saoButton2} field2={texts[language].backToDash} page1={texts[language].navBut4} page2={texts[language].saoNav1} page3={texts[language].saoNav3}
                             navPage1={`/Dashboard/SAO/${saoId}`}
                             navPage2={`/SAO/Register/${saoId}`}
                             navPage3={`/SAO/Recover/${saoId}`} onClick={toggleLanguage}
                             field4={texts[language].navField2} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/SAO/${saoId}`} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/SAO'}
                />
                <div style={{paddingTop: "7rem"}} className={"dashboard-heading"}>
                    <div className={"dashboard-sao"}>
                        {registerData && registerData.map((register: RegisterDoc) => (
                            <div className="card-sao" key={register._id}>
                                <div className="tools-sao" onClick={(event) => handleSubmit(event, register._id)}>
                                    <div className="circle-sao">
                                        <span className="red-sao box-sao"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="yellow-sao box-sao"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="green-sao box-sao"></span>
                                    </div>
                                </div>
                                <div className="card__content">
                                    <div style={{display:"flex", flexDirection:"row"}}>
                                        <h3 style={{margin: "10px", paddingBottom: "10px"}}>{register.name}</h3>
                                        <h3 style={{margin: "10px", paddingBottom: "10px"}}>{register.surname}</h3>
                                    </div>
                                    <hr/>
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                        <h4 style={{margin: "0", paddingBottom: "0"}}>{texts[language].registerField3}</h4>
                                        <h4 style={{margin: "0", paddingBottom: "10px"}}>{register.mail}</h4>
                                    </div>
                                    <hr/>
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                        <h4 style={{margin: "0", paddingBottom: "0"}}>{texts[language].registerField4}</h4>
                                        <h4 style={{margin: "0", paddingBottom: "10px"}}>{register.phone}</h4>
                                    </div>
                                    <hr/>
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                        <h4 style={{margin: "0", paddingBottom: "0"}}>{texts[language].registerField5}</h4>
                                        <h4 style={{margin: "0", paddingBottom: "10px"}}>{register.studentId}</h4>
                                    </div>
                                    <hr/>
                                    <div style={{display:"flex", flexDirection:"column"}}>
                                        <h4 style={{margin: "0", paddingBottom: "0"}}>{texts[language].registerField6}</h4>
                                        <h4 style={{margin: "0", paddingBottom: "10px"}}>{register.citizenshipId}</h4>
                                    </div>
                                    <hr/>
                                    <div style={{display:"flex", flexDirection:"column", textAlign:"left"}}>
                                        <h6 style={{margin: "0", paddingBottom: "0"}}>{texts[language].registerField8}</h6>
                                        <h6 style={{margin: "0", paddingBottom: "10px"}}>{register.securityQuestion}</h6>
                                    </div>
                                    <div style={{display:"flex", flexDirection:"column", textAlign:"left"}}>
                                        <h6 style={{margin: "0", paddingBottom: "0"}}>{texts[language].registerField9}</h6>
                                        <h6 style={{margin: "0", paddingBottom: "10px"}}>{register.securityAnswer}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
}

export default SaoNewStudent;