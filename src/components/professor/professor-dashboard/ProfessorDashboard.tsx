import React, {useState} from 'react';
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import Button from "../../UI Elements/dashboard/Button";
import './professorDashboard.css'
import {useParams} from "react-router-dom";
import {texts} from "../../../languages/language";

function ProfessorDashboard() {

    const {professorId} = useParams();

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    return (
        <div>
            <div className={"professor-dashboard-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={texts[language].dashboardHeading} page1={texts[language].navBut1} page2={texts[language].navBut2} page3={texts[language].navBut3}
                             navPage1={`/Professor/CourseSchedule/${professorId}`}
                             navPage2={`/Professor/ExamSchedule/${professorId}`}
                             navPage3={`/Professor/PAT/${professorId}`} onClick={toggleLanguage}
                             field4={texts[language].navField2} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={''} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Professor'}
                />
                <div style={{paddingTop: "7rem"}} className={"dashboard-heading"}>
                    <div className={"dashboard-buttons dashboard-buttons-professor"}>
                        <div className={"button button-professor"}>
                            <Button field1={texts[language].card2} field2={texts[language].card2Details} navigate1={`/Professor/CourseSchedule/${professorId}`}/>
                        </div>
                        <div className={"button button-professor"}>
                            <Button field1={texts[language].card3} field2={texts[language].card3Details} navigate1={`/Professor/ExamSchedule/${professorId}`}/>
                        </div>
                        <div className={"button button-professor"}>
                            <Button field1={texts[language].performanceButton1} field2={texts[language].performanceButton} navigate1={`/Professor/PAT/${professorId}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessorDashboard;