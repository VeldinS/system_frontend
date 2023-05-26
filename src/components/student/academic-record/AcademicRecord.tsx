import React, {useEffect, useState} from 'react';
import './acadamicRecord.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import image1 from "../../../images/dummy.jpg";
import StudentInfo from "../../UI Elements/student-info-card/StudentInfo";
import TranscriptSemester from "../../UI Elements/transcript-semester/TranscriptSemester";
import {useNavigate, useParams} from "react-router-dom";
import {Student} from "../../../functions/helper";
import {texts} from "../../../languages/language";


function AcademicRecord() {

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


    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={texts[language].academicRecHeading} field2={texts[language].backToDash} field3={texts[language].dashboard}
                             field4={texts[language].navField2} onClick={toggleLanguage} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/Student/${studentId}`} navigate2={`/Dashboard/Student/${studentId}`} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                {studentData && (
                <div key={studentData._id} className={"transcript-page"}>
                    <div className={"student-details"}>
                        <StudentInfo
                            image={image1} name={studentData.name} surname={studentData.surname} id={studentData.id} status={texts[language].status}
                            citizenshipIdField={texts[language].citizenship} citizenshipId={studentData.citizenshipId}
                            registrationYearField={texts[language].regYear} registrationYear={studentData.registrationYear}
                            departmentField={texts[language].department} department={studentData.Department}
                            regTypeField={texts[language].regType} regType={studentData.RegistrationType}
                            eduLevelField={texts[language].eduLevel} eduLevel={studentData.EducationLevel}/>
                    </div>

                    <div className={"transcript-details"}>
                        <TranscriptSemester
                            semester={'Spring Semester - 2021'}
                            field1={texts[language].courseCode} field1_1={studentData.takenCourse1} field1_2={studentData.takenCourse2} field1_3={studentData.takenCourse3} field1_4={studentData.takenCourse4} field1_5={studentData.takenCourse5}
                            field2={texts[language].courseName} field2_1={studentData.takenCourseName1} field2_2={studentData.takenCourseName2} field2_3={studentData.takenCourseName3} field2_4={studentData.takenCourseName4} field2_5={studentData.takenCourseName5}
                            field3={texts[language].courseGrade} field3_1={studentData.takenCourse1FinalLetterGrade} field3_2={studentData.takenCourse2FinalLetterGrade} field3_3={studentData.takenCourse3FinalLetterGrade} field3_4={studentData.takenCourse4FinalLetterGrade} field3_5={studentData.takenCourse5FinalLetterGrade}
                            field4={texts[language].courseCredit} field4_1={'3 | 6'} field4_2={'3 | 6'} field4_3={'3 | 6'} field4_4={'3 | 6'} field4_5={'3 | 6'}
                        />

                        <TranscriptSemester
                            semester={'Fall Semester - 2021'}
                           field1={texts[language].courseCode} field1_1={studentData.takenCourse6} field1_2={studentData.takenCourse7} field1_3={studentData.takenCourse8} field1_4={studentData.takenCourse9} field1_5={studentData.takenCourse10}
                           field2={texts[language].courseName} field2_1={studentData.takenCourseName6} field2_2={studentData.takenCourseName7} field2_3={studentData.takenCourseName8} field2_4={studentData.takenCourseName9} field2_5={studentData.takenCourseName10}
                           field3={texts[language].courseGrade}field3_1={studentData.takenCourse6FinalLetterGrade} field3_2={studentData.takenCourse7FinalLetterGrade} field3_3={studentData.takenCourse8FinalLetterGrade} field3_4={studentData.takenCourse9FinalLetterGrade} field3_5={studentData.takenCourse10FinalLetterGrade}
                           field4={texts[language].courseCredit} field4_1={'3 | 6'} field4_2={'3 | 6'} field4_3={'3 | 6'} field4_4={'3 | 6'} field4_5={'3 | 6'}
                        />

                        <TranscriptSemester
                            semester={'Spring Semester - 2022'}
                            field1={texts[language].courseCode} field1_1={studentData.takenCourse11} field1_2={studentData.takenCourse12} field1_3={studentData.takenCourse13} field1_4={studentData.takenCourse14} field1_5={studentData.takenCourse15}
                            field2={texts[language].courseName} field2_1={studentData.takenCourseName11} field2_2={studentData.takenCourseName12} field2_3={studentData.takenCourseName13} field2_4={studentData.takenCourseName14} field2_5={studentData.takenCourseName15}
                            field3={texts[language].courseGrade}field3_1={studentData.takenCourse11FinalLetterGrade} field3_2={studentData.takenCourse12FinalLetterGrade} field3_3={studentData.takenCourse13FinalLetterGrade} field3_4={studentData.takenCourse14FinalLetterGrade} field3_5={studentData.takenCourse15FinalLetterGrade}
                            field4={texts[language].courseCredit} field4_1={'3 | 6'} field4_2={'3 | 6'} field4_3={'3 | 6'} field4_4={'3 | 6'} field4_5={'3 | 6'}
                        />

                        <TranscriptSemester
                            semester={'Fall Semester - 2022'}
                            field1={texts[language].courseCode} field1_1={studentData.takenCourse16} field1_2={studentData.takenCourse17} field1_3={studentData.takenCourse18} field1_4={studentData.takenCourse19} field1_5={studentData.takenCourse20}
                            field2={texts[language].courseName} field2_1={studentData.takenCourseName16} field2_2={studentData.takenCourseName17} field2_3={studentData.takenCourseName18} field2_4={studentData.takenCourseName19} field2_5={studentData.takenCourseName20}
                            field3={texts[language].courseGrade} field3_1={studentData.takenCourse16FinalLetterGrade} field3_2={studentData.takenCourse17FinalLetterGrade} field3_3={studentData.takenCourse18FinalLetterGrade} field3_4={studentData.takenCourse19FinalLetterGrade} field3_5={studentData.takenCourse20FinalLetterGrade}
                            field4={texts[language].courseCredit} field4_1={'3 | 6'} field4_2={'3 | 6'} field4_3={'3 | 6'} field4_4={'3 | 6'} field4_5={'3 | 6'}
                        />

                    </div>
                </div>
                    )}
            </div>
        </div>
    );
}

export default AcademicRecord;