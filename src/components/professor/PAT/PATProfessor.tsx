import React, { useEffect, useState } from "react";
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import { useParams } from "react-router-dom";
import { Professor } from "../../../functions/helper";
import { texts } from "../../../languages/language";
import PerformanceTable from "../../UI Elements/performance-table/performance-table";
import DropdownMenuProf from "../../UI Elements/dropdown-menu/dropdownProf";

function PerformanceProfessor() {
  const { professorId } = useParams();

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "bosnian"
  );
  const toggleLanguage = () => {
    const newLanguage = language === "bosnian" ? "english" : "bosnian";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const performance: Performance[] = [];
  const professorHeadings = ["Course Code","Course","Pass Rate","No. of Enrollments","Avg Grade","Decision"];
  const professorData = [
    ["CS103", "Intro to Programming", "90%", "100", "B+", "Better Performance was in 2023"],
    ["CS105", "Advanced Programming", "80%", "75", "B-", "Better Performance was in 2022"],
    ["MATH101", "Calculus 1", "75%", "65", "C+", "Better Performance was in 2023"],
    ["MATH200", "Linear Algebra", "85%", "50", "B", "Better Performance was in 2023"],
    ["CS427", "Network and Computer Security", "65%", "55", "D+", "Better Performance was in 2022"],
  ];

  const handleSemesterSelect = (selectedSemester: any) => {
    console.log('Selected semester:', selectedSemester);
    // Handle the selected semester here for the professor file
  };

  const semesterOptions = [
    { label: 'Spring semester 2022', value: 'Spring2' },
    { label: 'Spring semester 2023', value: 'Spring3' },
    { label: 'Fall semester 2022', value: 'Fall2' },
    { label: 'Fall semester 2023', value: 'Fall3' },
  ];

  return (
    <div>
      <div className={"login-page-main"} style={{ minHeight: "100vh" }}>
        <Navigation2
          field1={texts[language].performanceButton1}
          field2={texts[language].backToDash}
          page1={texts[language].navBut4}
          page2={texts[language].navBut1}
          page3={texts[language].navBut2}
          navPage1={`/Dashboard/Professor/${professorId}`}
          navPage2={`/Professor/CourseSchedule/${professorId}`}
          navPage3={`/Professor/ExamSchedule/${professorId}`}
          onClick={toggleLanguage}
          field4={texts[language].navField2}
          field5={texts[language].navField3}
          field6={texts[language].navField4}
          navigate1={`/Dashboard/Professor/${professorId}`}
          navigate2={"/Professor/Settings"}
          navigate3={"https://www.ius.edu.ba/en/contact"}
          navigate4={"/Login/Professor"}
        />
        <div style={{ marginTop: "2rem", padding: "1rem" }}>
          <PerformanceTable headings={professorHeadings} data={professorData} />
        </div>
      </div>
    </div>
  );
}

export default PerformanceProfessor;
