import React, { useEffect, useState } from "react";
import "../../student/grade-details/gradeDetails.css"
import Navigation2 from "../navigation/Navigation2";
import { useParams } from "react-router-dom";
import { Student } from "../../../functions/helper";
import { texts } from "../../../languages/language";
import SemesterPerformanceStudent from "../semester-performance/semesterPerformanceStudent";

function DropdownMenuStudent() {
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
    "Fall Semester - 2021",
    "Spring Semester - 2022",
    "Fall Semester - 2022",
    "Spring Semester - 2023",
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
            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse1 + " - " + studentData.takenCourseName1
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse1Total}
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse1Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse1Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse1ClassAverage}
              yourPerformance={"Your Performance"}
              yourPerformancePoints={studentData.takenCourse1FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse2 + " - " + studentData.takenCourseName2
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse2Total}
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse2Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse2Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse2ClassAverage}
              yourPerformance={"Your Performance"}
              yourPerformancePoints={studentData.takenCourse2FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse3 + " - " + studentData.takenCourseName3
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse3Total}
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse3Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse3Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse3ClassAverage}
              yourPerformance={"Your Performance"}
              yourPerformancePoints={studentData.takenCourse3FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse4 + " - " + studentData.takenCourseName4
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse4Total}
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse4Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse4Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse4ClassAverage}
              yourPerformance={"Your Performance"}
              yourPerformancePoints={studentData.takenCourse4FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse5 + " - " + studentData.takenCourseName5
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse5Total}
              passRate={"Pass Rate"}
              passRatePoints={studentData.takenCourse5Quiz}
              enrollments={"No. of Enrollments"}
              enrollmentPoints={studentData.takenCourse5Homework}
              average={"Average"}
              averagePoints={studentData.takenCourse5ClassAverage}
              yourPerformance={"Your Performance"}
              yourPerformancePoints={studentData.takenCourse5FinalGrade}
            />
          </div>
        )}
      </div>
    );
  } else if (selectedOption === "Fall Semester - 2021") {
    content = (
      <div style={{ width: "100%", margin: "0" }}>
        {studentData && (
          <div style={{ width: "100%", margin: "0" }}>
            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse6 + " - " + studentData.takenCourseName6
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse5Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse5Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse18Homework}
              average={'Average'} averagePoints={studentData.takenCourse18ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse18FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse7 + " - " + studentData.takenCourseName7
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse6Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse6Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse6Homework}
              average={'Average'} averagePoints={studentData.takenCourse6ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse6FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse8 + " - " + studentData.takenCourseName8
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse7Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse7Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse7Homework}
              average={'Average'} averagePoints={studentData.takenCourse7ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse7FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse9 + " - " + studentData.takenCourseName9
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse8Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse8Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse8Homework}
              average={'Average'} averagePoints={studentData.takenCourse8ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse8FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse10 +
                " - " +
                studentData.takenCourseName10
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse9Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse9Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse9Homework}
              average={'Average'} averagePoints={studentData.takenCourse9ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse9FinalGrade}
            />
          </div>
        )}
      </div>
    );
  } else if (selectedOption === "Spring Semester - 2022") {
    content = (
      <div style={{ width: "100%", margin: "0" }}>
        {studentData && (
          <div style={{ width: "100%", margin: "0" }}>
            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse11 +
                " - " +
                studentData.takenCourseName11
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse10Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse10Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse10Homework}
              average={'Average'} averagePoints={studentData.takenCourse10ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse10FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse12 +
                " - " +
                studentData.takenCourseName12
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse11Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse11Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse11Homework}
              average={'Average'} averagePoints={studentData.takenCourse11ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse11FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse13 +
                " - " +
                studentData.takenCourseName13
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse18Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse12Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse12Homework}
              average={'Average'} averagePoints={studentData.takenCourse12ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse12FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse14 +
                " - " +
                studentData.takenCourseName14
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse13Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse13Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse13Homework}
              average={'Average'} averagePoints={studentData.takenCourse13ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse13FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse15 +
                " - " +
                studentData.takenCourseName15
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse14Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse14Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse14Homework}
              average={'Average'} averagePoints={studentData.takenCourse14ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse14FinalGrade}
            />
          </div>
        )}
      </div>
    );
  } else if (selectedOption === "Fall Semester - 2022") {
    content = (
      <div style={{ width: "100%", margin: "0" }}>
        {studentData && (
          <div style={{ width: "100%", margin: "0" }}>
            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse16 +
                " - " +
                studentData.takenCourseName16
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse15Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse15Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse15Homework}
              average={'Average'} averagePoints={studentData.takenCourse15ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse15FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse17 +
                " - " +
                studentData.takenCourseName17
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse18Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse16Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse16Homework}
              average={'Average'} averagePoints={studentData.takenCourse16ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse16FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse18 +
                " - " +
                studentData.takenCourseName18
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse17Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse17Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse17Homework}
              average={'Average'} averagePoints={studentData.takenCourse17ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse17FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse19 +
                " - " +
                studentData.takenCourseName19
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse18Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse18Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse18Homework}
              average={'Average'} averagePoints={studentData.takenCourse18ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse18FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.takenCourse20 +
                " - " +
                studentData.takenCourseName20
              }
              yourGrade={"Your Grade"}
              yourGradePoints={studentData.takenCourse19Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse19Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse19Homework}
              average={'Average'} averagePoints={studentData.takenCourse19ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse19FinalGrade}
            />
          </div>
        )}
      </div>
    );
  } else if (selectedOption === "Spring Semester - 2023") {
    content = (
      <div style={{ width: "100%", margin: "0" }}>
        {studentData && (
          <div style={{ width: "100%", margin: "0" }}>
            <SemesterPerformanceStudent
              courseName={
                studentData.currentCourse1 +
                " - " +
                studentData.currentCourseName1
              }
              yourGrade={'Your Grade'} yourGradePoints={studentData.takenCourse20Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse20Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse20Homework}
              average={'Average'} averagePoints={studentData.takenCourse20ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse20FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.currentCourse2 +
                " - " +
                studentData.currentCourseName2
              }
              yourGrade={'Your Grade'} yourGradePoints={studentData.takenCourse1Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse1Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse1Homework}
              average={'Average'} averagePoints={studentData.takenCourse1ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse1FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.currentCourse3 +
                " - " +
                studentData.currentCourseName3
              }
              yourGrade={'Your Grade'} yourGradePoints={studentData.takenCourse2Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse2Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse2Homework}
              average={'Average'} averagePoints={studentData.takenCourse2ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse2FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.currentCourse4 +
                " - " +
                studentData.currentCourseName4
              }
              yourGrade={'Your Grade'} yourGradePoints={studentData.takenCourse3Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse3Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse3Homework}
              average={'Average'} averagePoints={studentData.takenCourse3ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse3FinalGrade}
            />

            <SemesterPerformanceStudent
              courseName={
                studentData.currentCourse5 +
                " - " +
                studentData.currentCourseName5
              }
              yourGrade={'Your Grade'} yourGradePoints={studentData.takenCourse4Total}
              passRate={'Pass Rate'} passRatePoints={studentData.takenCourse4Quiz}
              enrollments={'No. of Enrollments'} enrollmentPoints={studentData.takenCourse4Homework}
              average={'Average'} averagePoints={studentData.takenCourse4ClassAverage}
              yourPerformance={'Your Performance'} yourPerformancePoints={studentData.takenCourse4FinalGrade}
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

export default DropdownMenuStudent;