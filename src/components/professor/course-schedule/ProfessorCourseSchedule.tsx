import React, {useEffect, useState} from 'react';
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import Timetable, {Course} from "../../UI Elements/timetable/Timetable";
import {useParams} from "react-router-dom";
import {Professor, Student} from "../../../functions/helper";
import {texts} from "../../../languages/language";
import ExamCard from "../../UI Elements/exam-card/ExamCard";

import './courseScheduleProfessor.css'
function ProfessorCourseSchedule() {

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


    const courses: Course[] = [
        { name: professorData?.currentCourse1 + " - " + professorData?.currentCourseName1, day: professorData?.currentCourse1Day, venue: "B.F1.22", start: professorData?.currentCourse1Time, end: professorData?.currentCourse1TimeEnd },
        { name: professorData?.currentCourse2 + " - " + professorData?.currentCourseName2, day: professorData?.currentCourse2Day, venue: "A.F2.11", start: professorData?.currentCourse2Time, end: professorData?.currentCourse2TimeEnd },
        { name: professorData?.currentCourse3 + " - " + professorData?.currentCourseName3, day: professorData?.currentCourse3Day, venue: "B.F1.1", start: professorData?.currentCourse3Time, end: professorData?.currentCourse3TimeEnd },
        { name: professorData?.currentCourse4 + " - " + professorData?.currentCourseName4, day: professorData?.currentCourse4Day, venue: "A.F1.24", start: professorData?.currentCourse4Time, end: professorData?.currentCourse4TimeEnd },
        { name: professorData?.currentCourse5 + " - " + professorData?.currentCourseName5, day: professorData?.currentCourse5Day, venue: "B.F1.2", start: professorData?.currentCourse5Time, end: professorData?.currentCourse5TimeEnd },

    ];

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={texts[language].courseScheduleHeading} field2={texts[language].backToDash} page1={texts[language].navBut4} page2={texts[language].navBut2} page3={texts[language].navBut3}
                             navPage1={`/Dashboard/Professor/${professorId}`}
                             navPage2={`/Professor/ExamSchedule/${professorId}`}
                             navPage3={`/Professor/PAT/${professorId}`} onClick={toggleLanguage}
                             field4={texts[language].navField2} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/Professor/${professorId}`} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Professor'}
                />
                <Timetable courses={courses}/>
                {professorData && (
                    <div className={"exam-page-cards courseShedule-cards courseScheduleProfessor-cards"}>
                        <div className={"exam-page-card courseShedule-card"}>
                            <ExamCard course={professorData.currentCourse1 + " - " + professorData.currentCourseName1} time={professorData.currentExam1} venue={'B.F1.22'}/>
                        </div>
                        <div className={"exam-page-card courseShedule-card"}>
                            <ExamCard course={professorData.currentCourse2 + " - " + professorData.currentCourseName2} time={professorData.currentExam2} venue={'A.F2.11'}/>
                        </div>
                        <div className={"exam-page-card courseShedule-card"}>
                            <ExamCard course={professorData.currentCourse3 + " - " + professorData.currentCourseName3} time={professorData.currentExam3} venue={'B.F1.1'}/>
                        </div>
                        <div className={"exam-page-card courseShedule-card"}>
                            <ExamCard course={professorData.currentCourse4 + " - " + professorData.currentCourseName4} time={professorData.currentExam4} venue={'A.F1.24'}/>
                        </div>
                        <div className={"exam-page-card courseShedule-card"}>
                            <ExamCard course={professorData.currentCourse5 + " - " + professorData.currentCourseName5} time={professorData.currentExam5} venue={'B.F1.2'}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfessorCourseSchedule;