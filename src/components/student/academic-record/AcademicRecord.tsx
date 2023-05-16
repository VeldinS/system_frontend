import React, {useEffect, useState} from 'react';
import './acadamicRecord.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import image1 from "../../../images/dummy.jpg";
import StudentInfo from "../../UI Elements/student-info-card/StudentInfo";
import TranscriptSemester from "../../UI Elements/transcript-semester/TranscriptSemester";
import {useNavigate, useParams} from "react-router-dom";

interface Student {
    _id: any;
    name:string,
    surname:string,
    id:string,
    image:string,
    citizenshipId:string,
    registrationYear:string,
    Department:string,
    RegistrationType:string,
    EducationLevel:string,
    takenCourse1: string,
    takenCourse2: string,
    takenCourse3: string,
    takenCourse4: string,
    takenCourse5: string,
    takenCourse6: string,
    takenCourse7: string,
    takenCourse8: string,
    takenCourse9: string,
    takenCourse10: string,
    takenCourseName1: string,
    takenCourseName2: string,
    takenCourseName3: string,
    takenCourseName4: string,
    takenCourseName5: string,
    takenCourseName6: string,
    takenCourseName7: string,
    takenCourseName8: string,
    takenCourseName9: string,
    takenCourseName10: string,
    takenCourse1FinalLetterGrade: string,
    takenCourse2FinalLetterGrade: string,
    takenCourse3FinalLetterGrade: string,
    takenCourse4FinalLetterGrade: string,
    takenCourse5FinalLetterGrade: string,
    takenCourse6FinalLetterGrade: string,
    takenCourse7FinalLetterGrade: string,
    takenCourse8FinalLetterGrade: string,
    takenCourse9FinalLetterGrade: string,
    takenCourse10FinalLetterGrade: string,
}

function AcademicRecord() {

    const {studentId} = useParams()
    const [studentData, setStudentData] = useState<Student>()

    //FETCH STUDENT DATA
    useEffect(() => {
        fetch(   `http://localhost:5000/Student/${studentId}`)
            .then((res) => res.json())
            .then((data) => setStudentData(data as Student))
    }, [studentId]);


    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'ACADEMIC RECORD / TRANSCRIPT'} field2={'Back to Dashboard'} field3={'Account Settings'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={'/Student/Dashboard'} navigate2={'/Student/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                {studentData && (
                <div key={studentData._id} className={"transcript-page"}>
                    <div className={"student-details"}>
                        <StudentInfo
                            image={image1} name={studentData.name} surname={studentData.surname} id={studentData.id} status={'Active'} citizenshipId={studentData.citizenshipId} registrationYear={studentData.registrationYear}
                            department={studentData.Department} regType={studentData.RegistrationType} eduLevel={studentData.EducationLevel}/>
                    </div>

                    <div className={"transcript-details"}>
                        <TranscriptSemester
                            semester={'Semester 1 - 2019/20 Fall'}
                            field1_1={studentData.takenCourse1} field1_2={studentData.takenCourse2} field1_3={studentData.takenCourse3} field1_4={studentData.takenCourse4} field1_5={studentData.takenCourse5}
                            field2_1={studentData.takenCourseName1} field2_2={studentData.takenCourseName2} field2_3={studentData.takenCourseName3} field2_4={studentData.takenCourseName4} field2_5={studentData.takenCourseName5}
                            field3_1={studentData.takenCourse1FinalLetterGrade} field3_2={studentData.takenCourse2FinalLetterGrade} field3_3={studentData.takenCourse3FinalLetterGrade} field3_4={studentData.takenCourse4FinalLetterGrade} field3_5={studentData.takenCourse5FinalLetterGrade}
                            field4_1={'3 | 6'} field4_2={'3 | 6'} field4_3={'3 | 6'} field4_4={'3 | 6'} field4_5={'3 | 6'}
                        />

                    </div>
                </div>
                    )}
            </div>
        </div>
    );
}

export default AcademicRecord;