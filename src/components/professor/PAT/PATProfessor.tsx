import React, {useEffect, useState} from 'react';
import './patProfessor.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import {useParams} from "react-router-dom";
import {Professor} from "../../../functions/helper";
import {texts} from "../../../languages/language";

function PatProfessor() {

    const {professorId} = useParams();

    const [professorData, setProfessorData] = useState<Professor>()

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }


    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={texts[language].performanceButton1} field2={texts[language].backToDash} page1={texts[language].navBut4} page2={texts[language].navBut1} page3={texts[language].navBut2}
                             navPage1={`/Dashboard/Professor/${professorId}`}
                             navPage2={`/Professor/CourseSchedule/${professorId}`}
                             navPage3={`/Professor/ExamSchedule/${professorId}`} onClick={toggleLanguage}
                             field4={texts[language].navField2} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/Professor/${professorId}`} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Professor'}
                />

                <h1 style={{margin: "auto"}}>Ovdje ide performance analysis tool....</h1>
            </div>
        </div>
    );
}

export default PatProfessor;