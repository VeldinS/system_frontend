import React, { useEffect, useState } from "react";
import "../../student/grade-details/gradeDetails.css"
import Navigation2 from "../navigation/Navigation2";
import { useParams } from "react-router-dom";
import { Student } from "../../../functions/helper";
import { texts } from "../../../languages/language";
import SemesterPerformanceProf from "../semester-performance/semesterPerformanceProf";

function DropdownMenuProf() {
  const { studentId } = useParams();
  const [studentData, setStudentData] = useState<Student>();

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "bosnian"
  );
  const toggleLanguage = () => {
    const newLanguage = language === "bosnian" ? "english" : "bosnian";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  //FETCH STUDENT DATA
  useEffect(() => {
    fetch(`https://sysbackend-jhed.onrender.com/Student/${studentId}`)
      .then((res) => res.json())
      .then((data) => setStudentData(data as Student));
  }, [studentId]);

  const options = [
    "",
    "Fall Semester - 2021 and 2022",
    "Spring Semester - 2021 and 2022",
  ];

  const [selectedOption, setSelectedOption] = useState<string>(
    options[options.length - 1]
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  let content: React.ReactNode = null;

  if (selectedOption === "Spring Semester - 2021") {
    content = (
      <div style={{ width: "100%", margin: "0" }}>
        {studentData && (
          <div style={{ width: "100%", margin: "0" }}>
            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse1 + " - " + studentData.takenCourseName1
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse1Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse1Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse1ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName1}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse2 + " - " + studentData.takenCourseName2
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse2Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse2Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse2ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName2}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse3 + " - " + studentData.takenCourseName3
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse3Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse3Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse3ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName3}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse4 + " - " + studentData.takenCourseName4
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse4Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse4Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse4ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName4}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse5 + " - " + studentData.takenCourseName5
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse5Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse5Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse5ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName5}
            />
          </div>
        )}
      </div>
    );
  } else if (selectedOption === "Fall Semester - 2021 and 2022") {
    content = (
      <div style={{ width: "100%", margin: "0" }}>
        {studentData && (
          <div style={{ width: "100%", margin: "0" }}>
            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse6 + " - " + studentData.takenCourseName6
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse6Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse6Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse6ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName6}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse7 + " - " + studentData.takenCourseName7
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse7Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse7Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse7ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName7}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse8 + " - " + studentData.takenCourseName8
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse8Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse8Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse8ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName8}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse9 + " - " + studentData.takenCourseName9
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse9Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse9Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse9ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName9}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse10 +
                " - " +
                studentData.takenCourseName10
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse10Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse10Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse10ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName10}
            />
          </div>
        )}
      </div>
    );
  } else if (selectedOption === "Spring Semester - 2021 and 2022") {
    content = (
      <div style={{ width: "100%", margin: "0" }}>
        {studentData && (
          <div style={{ width: "100%", margin: "0" }}>
            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse11 +
                " - " +
                studentData.takenCourseName11
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse11Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse11Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse11ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName11}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse12 +
                " - " +
                studentData.takenCourseName12
              }
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse12Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse12Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse12ClassAverage}
              decision={"Decision"}
              decisionPoints={studentData.takenCourseName12}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse13 +
                " - " +
                studentData.takenCourseName13
              }
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse13Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse13Homework}
              average={'Average'} averagePoints={studentData.takenCourse13ClassAverage}
              decision={'Decision'} decisionPoints={studentData.takenCourseName13}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse14 +
                " - " +
                studentData.takenCourseName14
              }
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse14Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse14Homework}
              average={'Average'} averagePoints={studentData.takenCourse14ClassAverage}
              decision={'Decision'} decisionPoints={studentData.takenCourseName14}
            />

            <SemesterPerformanceProf
              courseName={
                studentData.takenCourse15 +
                " - " +
                studentData.takenCourseName15
              }
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse15Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse15Homework}
              average={'Average'} averagePoints={studentData.takenCourse15ClassAverage}
              decision={'Decision'} decisionPoints={studentData.takenCourseName15}
            />
          </div>
        )}
      </div>
    );
  } 

  return (
    <div>
      <div className={"login-page-main"} style={{ minHeight: "100vh" }}>
        {studentData && (
          <div className={"grades-page"}>
            <div className={"student-grades"}>
              <div className={"semester-details"}>
                <h2>{texts[language].selectSemester}</h2>
                <select
                  className="semester-select"
                  name="semester"
                  onChange={handleSelectChange}
                  value={selectedOption}
                >
                  <option value="Spring Semester - 2021">
                    Spring Semester - 2021
                  </option>
                  <option value="Fall Semester - 2021">
                    Fall Semester - 2021
                  </option>
                  <option value="Spring Semester - 2022">
                    Spring Semester - 2022
                  </option>
                  <option value="Fall Semester - 2022">
                    Fall Semester - 2022
                  </option>
                  <option value="Spring Semester - 2023">
                    Spring Semester - 2023
                  </option>
                </select>

                <div style={{ width: "100%", display: "flex", justifyContent:"center" }} className={"semester"}>
                  <div style={{ width: "100%", display: "flex", justifyContent:"center" }}>{content}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownMenuProf;