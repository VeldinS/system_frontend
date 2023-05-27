import React, {useState} from 'react';

import './studentDashboard.css'
import Button from "../../UI Elements/dashboard/Button";
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import {useParams} from "react-router-dom";
import {texts} from "../../../languages/language";

function StudentDashboard() {

    const {studentId} = useParams();

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    return (
        <div>
            <div className={"student-dashboard-main studentDashboard-mobile"}>
                <Navigation2 field1={texts[language].heading} field3={texts[language].navField1}
                             field4={texts[language].navField2} onClick={toggleLanguage} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={''} navigate2={`/Settings/Student/${studentId}`} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                <div style={{paddingTop: "2rem"}} className={"dashboard-heading"}>
                    <div className={"dashboard-buttons"}>
                        <div className={"button"}>
                            <Button field1={texts[language].card1} field2={texts[language].card1Details} navigate1={`/Student/Transcript/${studentId}`}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={texts[language].card2} field2={texts[language].card2Details} navigate1={`/Student/CourseSchedule/${studentId}`}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={texts[language].card3} field2={texts[language].card3Details} navigate1={`/Student/ExamSchedule/${studentId}`}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={texts[language].card4} field2={texts[language].card4Details} navigate1={`/Student/GradeDetails/${studentId}`}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={texts[language].card5} field2={texts[language].card5Details} navigate1={`/Student/Performance/${studentId}`}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={texts[language].card6} field2={texts[language].card6Details} navigate1={`/Student/SCA/${studentId}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;