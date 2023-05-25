import React, {useEffect, useState} from 'react';
import './courseSchedule.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import Timetable, {Course} from "../../UI Elements/timetable/Timetable";
import {useParams} from "react-router-dom";
import {Student} from "../../../functions/helper";
import {texts} from "../../../languages/language";



function CourseSchedule() {

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
        fetch(   `http://localhost:5000/Student/${studentId}`)
            .then((res) => res.json())
            .then((data) => setStudentData(data as Student))
    }, [studentId]);


    const courses: Course[] = [
        { name: studentData?.currentCourse1 + " - " + studentData?.currentCourseName1, day: studentData?.currentCourse1Day, venue: "B.F1.22", start: studentData?.currentCourse1Time, end: studentData?.currentCourse1TimeEnd },
        { name: studentData?.currentCourse2 + " - " + studentData?.currentCourseName2, day: studentData?.currentCourse2Day, venue: "B.F1.22", start: studentData?.currentCourse2Time, end: studentData?.currentCourse2TimeEnd },
        { name: studentData?.currentCourse3 + " - " + studentData?.currentCourseName3, day: studentData?.currentCourse3Day, venue: "B.F1.22", start: studentData?.currentCourse3Time, end: studentData?.currentCourse3TimeEnd },
        { name: studentData?.currentCourse4 + " - " + studentData?.currentCourseName4, day: studentData?.currentCourse4Day, venue: "B.F1.22", start: studentData?.currentCourse4Time, end: studentData?.currentCourse4TimeEnd },
        { name: studentData?.currentCourse5 + " - " + studentData?.currentCourseName5, day: studentData?.currentCourse5Day, venue: "B.F1.22", start: studentData?.currentCourse5Time, end: studentData?.currentCourse5TimeEnd },

    ];

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={texts[language].courseScheduleHeading} field2={texts[language].backToDash} field3={texts[language].dashboard}
                             field4={texts[language].navField2} onClick={toggleLanguage} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/Student/${studentId}`} navigate2={`/Dashboard/Student/${studentId}`} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                <Timetable courses={courses}/>
            </div>
        </div>
    );
}

export default CourseSchedule;