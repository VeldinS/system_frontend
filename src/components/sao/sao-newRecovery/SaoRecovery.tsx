import React, {useEffect, useState} from 'react';
import '../sao-newDocuments/saoDocuments.css'
import {useParams} from "react-router-dom";
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import {texts} from "../../../languages/language";
import {RecoverDoc} from "../../../functions/helper";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

function SaoRecovery() {

    const {saoId} = useParams();

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    const [recoverData, setRecoverData] = useState<RecoverDoc>()

    useEffect(() => {
        fetch(   `https://sysbackend-jhed.onrender.com/SAO/Recover`)
            .then((res) => res.json())
            .then((data) => setRecoverData(data as RecoverDoc))
    }, []);

    const handleSubmit = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>, recoverId: string) => {
        event.preventDefault();
        const response = await axios.delete(`https://sysbackend-jhed.onrender.com/SAO/Recover/Delete/${recoverId}`);
        // @ts-ignore
        const newData = recoverData.filter((recover: { _id: string; }) => recover._id !== recoverId);
        setRecoverData(newData);
        if(language == 'bosnian'){
            toast.success('Zahtjev za oporavak uspješno obrisan!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        else if(language == 'english'){
            toast.success('Account recovery request successfully deleted!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
    };

    return (
        <div>
            <div className={"sao-dashboard-main"} style={{minHeight: "160vh"}}>
                <Navigation2 field1={texts[language].saoButton3}  field2={texts[language].backToDash} page1={texts[language].navBut4} page2={texts[language].saoNav1} page3={texts[language].saoNav2}
                             navPage1={`/Dashboard/SAO/${saoId}`}
                             navPage2={`/SAO/Register/${saoId}`}
                             navPage3={`/SAO/Recover/${saoId}`} onClick={toggleLanguage}
                             field4={texts[language].navField2} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/SAO/${saoId}`} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/SAO'}
                />
                <div style={{paddingTop: "7rem"}} className={"dashboard-heading"}>
                    <div className={"dashboard-sao"}>
                        {recoverData && recoverData.map((recover: RecoverDoc) => (
                            <div className="card-sao" key={recover._id}>
                                <div className="tools-sao" onClick={(event) => handleSubmit(event, recover._id)}>
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
                                    <h6 style={{margin: "0", padding: "0"}}>{texts[language].accRecField1}</h6>
                                    <h3 style={{margin: "0", paddingBottom: "30px"}}>{recover.studentId}</h3>
                                    <h6 style={{margin: "0", padding: "0"}}>{texts[language].accRecField1}</h6>
                                    <h3 style={{margin: "0", paddingBottom: "30px"}}>{recover.studentMail}</h3>
                                    <h6 style={{margin: "0", padding: "0"}}>{texts[language].accRecField3}</h6>
                                    <h3 style={{margin: "0", paddingBottom: "30px"}}>{recover.securityQuestion}</h3>
                                    <h6 style={{margin: "0", padding: "0"}}>{texts[language].accRecField4}</h6>
                                    <h3 style={{margin: "0", paddingBottom: "30px"}}>{recover.securityAnswer}</h3>
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

export default SaoRecovery;