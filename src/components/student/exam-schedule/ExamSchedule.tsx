import React, {useEffect, useState} from 'react';
import './examSchedule.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import Button from "../../UI Elements/dashboard/Button";
import ExamCard from "../../UI Elements/exam-card/ExamCard";
import {useParams} from "react-router-dom";
import {Student} from "../../../functions/helper";
import {texts} from "../../../languages/language";

function ExamSchedule() {

    const {studentId} = useParams()
    const [studentData, setStudentData] = useState<Student>()

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

    return (
        <div>
            <div className={"login-page-main examSchedule-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={texts[language].examScheduleHeading} field2={texts[language].backToDash} field3={texts[language].dashboard}
                             field4={texts[language].navField2} onClick={toggleLanguage} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/Student/${studentId}`} navigate2={`/Dashboard/Student/${studentId}`} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                <div style={{paddingTop: "2rem"}} className={"exam-page-heading"}>
                    {studentData && (
                        <div className={"exam-page-cards"}>
                            <div className={"exam-page-card"}>
                                <ExamCard course={studentData.currentCourse1 + " - " + studentData.currentCourseName1} time={studentData.currentExam1} venue={'Sports Hall'}/>
                            </div>
                            <div className={"exam-page-card"}>
                                <ExamCard course={studentData.currentCourse2 + " - " + studentData.currentCourseName2} time={studentData.currentExam2} venue={'Sports Hall'}/>
                            </div>
                            <div className={"exam-page-card"}>
                                <ExamCard course={studentData.currentCourse3 + " - " + studentData.currentCourseName3} time={studentData.currentExam3} venue={'Sports Hall'}/>
                            </div>
                            <div className={"exam-page-card"}>
                                <ExamCard course={studentData.currentCourse4 + " - " + studentData.currentCourseName4} time={studentData.currentExam4} venue={'Sports Hall'}/>
                            </div>
                            <div className={"exam-page-card"}>
                                <ExamCard course={studentData.currentCourse5 + " - " + studentData.currentCourseName5} time={studentData.currentExam5} venue={'Sports Hall'}/>
                            </div>
                        </div>
                      )}
                </div>
            </div>
        </div>
    );
}

export default ExamSchedule;