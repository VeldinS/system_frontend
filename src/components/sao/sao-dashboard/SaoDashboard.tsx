import React, {useState} from 'react';
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import Button from "../../UI Elements/dashboard/Button";
import '../sao-newDocuments/saoDocuments.css'
import {useParams} from "react-router-dom";
import {texts} from "../../../languages/language";

function saoDashboard() {

    const {saoId} = useParams();

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    return (
        <div>
            <div className={"sao-dashboard-main1"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'STUDENTS AFFAIRS OFFICE'} page1={texts[language].saoNav1} page2={texts[language].saoNav2} page3={texts[language].saoNav3}
                             navPage1={`/SAO/Documents/${saoId}`}
                             navPage2={`/SAO/Register/${saoId}`}
                             navPage3={`/SAO/Recover/${saoId}`} onClick={toggleLanguage}
                             field4={texts[language].navField2} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={''} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/SAO'}
                />
                <div style={{paddingTop: "7rem"}} className={"dashboard-heading"}>
                    <div className={"dashboard-buttons dashboard-buttons-professor"}>
                        <div className={"button button-professor"}>
                            <Button field1={texts[language].saoButton1} field2={texts[language].saoButton1_1} navigate1={`/SAO/Documents/${saoId}`}/>
                        </div>
                        <div className={"button button-professor"}>
                            <Button field1={texts[language].saoButton2} field2={texts[language].saoButton2_1} navigate1={`/SAO/Register/${saoId}`}/>
                        </div>
                        <div className={"button button-professor"}>
                            <Button field1={texts[language].saoButton3} field2={texts[language].saoButton3_1} navigate1={`/SAO/Recover/${saoId}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default saoDashboard;