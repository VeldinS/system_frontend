import React, {useEffect, useState} from 'react';
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import ExamCard from "../../UI Elements/exam-card/ExamCard";
import {useParams} from "react-router-dom";
import {Professor} from "../../../functions/helper";
import {texts} from "../../../languages/language";

function ProfessorExamSchedule() {

    const {professorId} = useParams();

    const [professorData, setProfessorData] = useState<Professor>()

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    //FETCH STUDENT DATA
    useEffect(() => {
        fetch(   `https://sysbackend-jhed.onrender.com/Professor/${professorId}`)
            .then((res) => res.json())
            .then((data) => setProfessorData(data as Professor))
    }, [professorId]);


    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={texts[language].examScheduleHeading} field2={texts[language].backToDash} page1={texts[language].navBut4} page2={texts[language].navBut1} page3={texts[language].navBut3}
                             navPage1={`/Dashboard/Professor/${professorId}`}
                             navPage2={`/Professor/CourseSchedule/${professorId}`}
                             navPage3={`/Professor/PAT/${professorId}`} onClick={toggleLanguage}
                             field4={texts[language].navField2} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/Professor/${professorId}`} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Professor'}
                />
                <div style={{paddingTop: "2rem"}} className={"exam-page-heading"}>
                    {professorData && (
                    <div className={"exam-page-cards"}>
                        <div className={"exam-page-card"}>
                            <ExamCard course={professorData.currentCourse1 + " - " + professorData.currentCourseName1} time={professorData.currentExam1} venue={'Sports Hall'}/>
                        </div>
                        <div className={"exam-page-card"}>
                            <ExamCard course={professorData.currentCourse2 + " - " + professorData.currentCourseName2} time={professorData.currentExam2} venue={'Sports Hall'}/>
                        </div>
                        <div className={"exam-page-card"}>
                            <ExamCard course={professorData.currentCourse3 + " - " + professorData.currentCourseName3} time={professorData.currentExam3} venue={'Sports Hall'}/>
                        </div>
                        <div className={"exam-page-card"}>
                            <ExamCard course={professorData.currentCourse4 + " - " + professorData.currentCourseName4} time={professorData.currentExam4} venue={'Sports Hall'}/>
                        </div>
                        <div className={"exam-page-card"}>
                            <ExamCard course={professorData.currentCourse5 + " - " + professorData.currentCourseName5} time={professorData.currentExam5} venue={'Sports Hall'}/>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfessorExamSchedule;