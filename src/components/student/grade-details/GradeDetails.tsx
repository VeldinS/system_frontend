import React, {useEffect, useState} from 'react';
import './gradeDetails.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import image1 from "../../../images/dummy.jpg";
import StudentInfo from "../../UI Elements/student-info-card/StudentInfo";
import CourseDetails from "../../UI Elements/course-grades/CourseDetails";
import {useParams} from "react-router-dom";
import {Student} from "../../../functions/helper";
import {texts} from "../../../languages/language";

function GradeDetails() {

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


    const options = [
        "",
        "Fall Semester - 2021",
        "Spring Semester - 2022",
        "Fall Semester - 2022",
        "Spring Semester - 2023",
    ];

    const [selectedOption, setSelectedOption] = useState<string>(options[options.length - 1]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    let content: React.ReactNode = null;

    if (selectedOption === "Spring Semester - 2021") {
        content = (
            <div style={{width: "100%", margin:"0"}}>
                {studentData && (
                    <div style={{width: "100%", margin:"0"}}>
                        <CourseDetails courseName={studentData.takenCourse1 + ' - ' +studentData.takenCourseName1}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse1Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse1Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse1Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse1Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse1Final}
                                       totalPoints={studentData.takenCourse1Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse1FinalGrade} letterGrade={studentData.takenCourse1FinalLetterGrade} average={studentData.takenCourse1ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse2 + ' - ' +studentData.takenCourseName2}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse2Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse2Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse2Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse2Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse2Final}
                                       totalPoints={studentData.takenCourse2Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse2FinalGrade} letterGrade={studentData.takenCourse2FinalLetterGrade} average={studentData.takenCourse2ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse3 + ' - ' +studentData.takenCourseName3}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse3Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse3Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse3Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse3Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse3Final}
                                       totalPoints={studentData.takenCourse3Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse3FinalGrade} letterGrade={studentData.takenCourse3FinalLetterGrade} average={studentData.takenCourse3ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse4 + ' - ' +studentData.takenCourseName4}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse4Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse4Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse4Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse4Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse4Final}
                                       totalPoints={studentData.takenCourse4Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse4FinalGrade} letterGrade={studentData.takenCourse4FinalLetterGrade} average={studentData.takenCourse4ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse5 + ' - ' +studentData.takenCourseName5}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse5Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse5Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse5Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse5Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse5Final}
                                       totalPoints={studentData.takenCourse5Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse5FinalGrade} letterGrade={studentData.takenCourse5FinalLetterGrade} average={studentData.takenCourse5ClassAverage}
                        />
                    </div>
                )}
            </div>
        );
    }else if (selectedOption === "Fall Semester - 2021") {
        content = (
            <div style={{width: "100%", margin:"0"}}>
                {studentData && (
                    <div style={{width: "100%", margin:"0"}}>
                        <CourseDetails courseName={studentData.takenCourse6 + ' - ' +studentData.takenCourseName6}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse6Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse6Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse6Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse6Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse6Final}
                                       totalPoints={studentData.takenCourse6Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse6FinalGrade} letterGrade={studentData.takenCourse6FinalLetterGrade} average={studentData.takenCourse6ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse7 + ' - ' +studentData.takenCourseName7}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse7Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse7Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse7Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse7Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse7Final}
                                       totalPoints={studentData.takenCourse7Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse7FinalGrade} letterGrade={studentData.takenCourse7FinalLetterGrade} average={studentData.takenCourse7ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse8 + ' - ' +studentData.takenCourseName8}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse8Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse8Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse8Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse8Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse8Final}
                                       totalPoints={studentData.takenCourse8Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse8FinalGrade} letterGrade={studentData.takenCourse8FinalLetterGrade} average={studentData.takenCourse8ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse9 + ' - ' +studentData.takenCourseName9}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse9Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse9Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse9Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse9Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse9Final}
                                       totalPoints={studentData.takenCourse9Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse9FinalGrade} letterGrade={studentData.takenCourse9FinalLetterGrade} average={studentData.takenCourse9ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse10 + ' - ' +studentData.takenCourseName10}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse10Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse10Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse10Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse10Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse10Final}
                                       totalPoints={studentData.takenCourse10Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse10FinalGrade} letterGrade={studentData.takenCourse10FinalLetterGrade} average={studentData.takenCourse10ClassAverage}
                        />
                    </div>
                )}
            </div>
        );
    }
    else if (selectedOption === "Spring Semester - 2022") {
        content = (
            <div style={{width: "100%", margin:"0"}}>
                {studentData && (
                    <div style={{width: "100%", margin:"0"}}>
                        <CourseDetails courseName={studentData.takenCourse11 + ' - ' +studentData.takenCourseName11}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse11Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse11Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse11Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse11Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse11Final}
                                       totalPoints={studentData.takenCourse11Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse11FinalGrade} letterGrade={studentData.takenCourse11FinalLetterGrade} average={studentData.takenCourse11ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse12 + ' - ' +studentData.takenCourseName12}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse12Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse12Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse12Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse12Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse12Final}
                                       totalPoints={studentData.takenCourse12Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse12FinalGrade} letterGrade={studentData.takenCourse12FinalLetterGrade} average={studentData.takenCourse12ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse13 + ' - ' +studentData.takenCourseName13}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse13Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse13Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse13Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse13Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse13Final}
                                       totalPoints={studentData.takenCourse13Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse13FinalGrade} letterGrade={studentData.takenCourse13FinalLetterGrade} average={studentData.takenCourse13ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse14 + ' - ' +studentData.takenCourseName14}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse14Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse14Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse14Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse14Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse14Final}
                                       totalPoints={studentData.takenCourse14Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse14FinalGrade} letterGrade={studentData.takenCourse14FinalLetterGrade} average={studentData.takenCourse14ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse15 + ' - ' +studentData.takenCourseName15}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse15Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse15Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse15Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse15Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse15Final}
                                       totalPoints={studentData.takenCourse15Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse15FinalGrade} letterGrade={studentData.takenCourse15FinalLetterGrade} average={studentData.takenCourse15ClassAverage}
                        />
                    </div>
                )}
            </div>
        );
    } else if (selectedOption === "Fall Semester - 2022") {
        content = (
            <div style={{width: "100%", margin:"0"}}>
                {studentData && (
                    <div style={{width: "100%", margin:"0"}}>
                        <CourseDetails courseName={studentData.takenCourse16 + ' - ' +studentData.takenCourseName16}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse16Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse16Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse16Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse16Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse16Final}
                                       totalPoints={studentData.takenCourse16Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse16FinalGrade} letterGrade={studentData.takenCourse16FinalLetterGrade} average={studentData.takenCourse16ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse17 + ' - ' +studentData.takenCourseName17}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse17Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse17Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse17Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse17Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse17Final}
                                       totalPoints={studentData.takenCourse17Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse17FinalGrade} letterGrade={studentData.takenCourse17FinalLetterGrade} average={studentData.takenCourse17ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse18 + ' - ' +studentData.takenCourseName18}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse18Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse18Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse18Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse18Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse18Final}
                                       totalPoints={studentData.takenCourse18Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse18FinalGrade} letterGrade={studentData.takenCourse18FinalLetterGrade} average={studentData.takenCourse18ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse19 + ' - ' +studentData.takenCourseName19}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse19Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse19Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse19Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse19Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse19Final}
                                       totalPoints={studentData.takenCourse19Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse19FinalGrade} letterGrade={studentData.takenCourse19FinalLetterGrade} average={studentData.takenCourse19ClassAverage}
                        />

                        <CourseDetails courseName={studentData.takenCourse20 + ' - ' +studentData.takenCourseName20}
                                       assessment1={'Quiz'} assessment1Points={studentData.takenCourse20Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.takenCourse20Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.takenCourse20Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.takenCourse20Project}
                                       assessment5={'Final'} assessment5Points={studentData.takenCourse20Final}
                                       totalPoints={studentData.takenCourse20Total} makeupPoints={'/'}
                                       finalGrade={studentData.takenCourse20FinalGrade} letterGrade={studentData.takenCourse20FinalLetterGrade} average={studentData.takenCourse20ClassAverage}
                        />
                    </div>
                )}
            </div>
        );
    } else if (selectedOption === "Spring Semester - 2023") {
        content = (
            <div style={{width: "100%", margin:"0"}}>
                {studentData && (
                    <div style={{width: "100%", margin:"0"}}>
                        <CourseDetails courseName={studentData.currentCourse1 + ' - ' +studentData.currentCourseName1}
                                       assessment1={'Quiz'} assessment1Points={studentData.currentCourse1Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.currentCourse1Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.currentCourse1Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.currentCourse1Project}
                                       assessment5={'Final'} assessment5Points={studentData.currentCourse1Final}
                                       totalPoints={studentData.currentCourse1Total} makeupPoints={'/'}
                                       finalGrade={studentData.currentCourse1FinalGrade} letterGrade={studentData.currentCourse1FinalLetterGrade} average={studentData.currentCourse1ClassAverage}
                        />

                        <CourseDetails courseName={studentData.currentCourse2 + ' - ' +studentData.currentCourseName2}
                                       assessment1={'Quiz'} assessment1Points={studentData.currentCourse2Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.currentCourse2Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.currentCourse2Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.currentCourse2Project}
                                       assessment5={'Final'} assessment5Points={studentData.currentCourse2Final}
                                       totalPoints={studentData.currentCourse2Total} makeupPoints={'/'}
                                       finalGrade={studentData.currentCourse2FinalGrade} letterGrade={studentData.currentCourse2FinalLetterGrade} average={studentData.currentCourse2ClassAverage}
                        />

                        <CourseDetails courseName={studentData.currentCourse3 + ' - ' +studentData.currentCourseName3}
                                       assessment1={'Quiz'} assessment1Points={studentData.currentCourse3Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.currentCourse3Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.currentCourse3Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.currentCourse3Project}
                                       assessment5={'Final'} assessment5Points={studentData.currentCourse3Final}
                                       totalPoints={studentData.currentCourse3Total} makeupPoints={'/'}
                                       finalGrade={studentData.currentCourse3FinalGrade} letterGrade={studentData.currentCourse3FinalLetterGrade} average={studentData.currentCourse3ClassAverage}
                        />

                        <CourseDetails courseName={studentData.currentCourse4 + ' - ' +studentData.currentCourseName4}
                                       assessment1={'Quiz'} assessment1Points={studentData.currentCourse4Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.currentCourse4Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.currentCourse4Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.currentCourse4Project}
                                       assessment5={'Final'} assessment5Points={studentData.currentCourse4Final}
                                       totalPoints={studentData.currentCourse4Total} makeupPoints={'/'}
                                       finalGrade={studentData.currentCourse4FinalGrade} letterGrade={studentData.currentCourse4FinalLetterGrade} average={studentData.currentCourse4ClassAverage}
                        />

                        <CourseDetails courseName={studentData.currentCourse5 + ' - ' +studentData.currentCourseName5}
                                       assessment1={'Quiz'} assessment1Points={studentData.currentCourse5Quiz}
                                       assessment2={'Homework'} assessment2Points={studentData.currentCourse5Homework}
                                       assessment3={'Midterm'} assessment3Points={studentData.currentCourse5Midterm}
                                       assessment4={'Project'} assessment4Points={studentData.currentCourse5Project}
                                       assessment5={'Final'} assessment5Points={studentData.currentCourse5Final}
                                       totalPoints={studentData.currentCourse5Total} makeupPoints={'/'}
                                       finalGrade={studentData.currentCourse5FinalGrade} letterGrade={studentData.currentCourse5FinalLetterGrade} average={studentData.currentCourse5ClassAverage}
                        />
                    </div>
                    )}
            </div>
        );
    }

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={texts[language].gradeDetailsHeading} field2={texts[language].backToDash} field3={texts[language].dashboard}
                             field4={texts[language].navField2} onClick={toggleLanguage} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/Student/${studentId}`} navigate2={`/Dashboard/Student/${studentId}`} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                {studentData && (
                <div className={"grades-page"}>
                    <div className={"student-details"}>
                        <StudentInfo
                            image={image1} name={studentData.name} surname={studentData.surname} id={studentData.id} status={texts[language].status}
                            citizenshipIdField={texts[language].citizenship} citizenshipId={studentData.citizenshipId}
                            registrationYearField={texts[language].regYear} registrationYear={studentData.registrationYear}
                            departmentField={texts[language].department} department={studentData.Department}
                            regTypeField={texts[language].regType} regType={studentData.RegistrationType}
                            eduLevelField={texts[language].eduLevel} eduLevel={studentData.EducationLevel}/>
                    </div>
                        <div className={"student-grades"}>
                            <div className={"semester-details"}>
                                <h2>{texts[language].selectSemester}</h2>
                                <select
                                    className="semester-select"
                                    name="semester"
                                    onChange={handleSelectChange}
                                    value={selectedOption}
                                >
                                    <option value="Spring Semester - 2021">Spring Semester - 2021</option>
                                    <option value="Fall Semester - 2021">Fall Semester - 2021</option>
                                    <option value="Spring Semester - 2022">Spring Semester - 2022</option>
                                    <option value="Fall Semester - 2022">Fall Semester - 2022</option>
                                    <option value="Spring Semester - 2023">Spring Semester - 2023</option>
                                </select>

                                <div className={"semester"}>
                                    <div  style={{width: "100%"}}>{content}</div>
                                </div>
                            </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default GradeDetails;