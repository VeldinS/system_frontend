import React, { useEffect, useState } from "react";
import "./patStudent.css";
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import PerformanceTable from "../../UI Elements/performance-table/performance-table";
import { useParams } from "react-router-dom";
import DropdownMenuStudent from "../../UI Elements/dropdown-menu/dropdownStudent";

function PerformanceStudent() {
  const { studentId } = useParams();

  const performance: Performance[] = [];
  // const studentHeadings = ["Course Code", "Course", "Your Grade","Pass Rate", "No. of Enrollments", "Avg Grade", "Your Performance"];
  // const studentData = [
  //   ["CS103", "Intro to Programming", "A", "90%", "100", "B+", "High"],
  //   ["CS105", "Advanced Programming", "B", "80%", "75", "B-", "High"],
  //   ["MATH101", "Calculus 1", "C", "75%", "65", "C+", "Medium"],
  //   ["MATH200", "Linear Algebra", "B", "85%", "50", "B", "High"],
  //   ["CS427", "Network and Computer Security", "D", "65%", "55", "D+", "Low"],

  
  // ];

  const handleSemesterSelect = (selectedSemester: any) => {
    console.log('Selected semester:', selectedSemester);
    // Handle the selected semester here for the student file
  };

  const semesterOptions = [
    { label: 'Spring semester 2022', value: 'Spring2' },
    { label: 'Fall semester 2022', value: 'Fall2' },
    { label: 'Spring semester 2023', value: 'Spring3' },
    { label: 'Fall semester 2023', value: 'Fall3' },
  ];


  return (
    <div>
      <div className={"login-page-main"} style={{ minHeight: "100vh" }}>
        <Navigation2
          field1={"YOUR PERFORMANCE"}
          field2={"Back to Dashboard"}
          field3={"Account Settings"}
          field4={"Language"}
          field5={"Help"}
          field6={"Logout"}
          navigate1={`/Dashboard/Student/${studentId}`}
          navigate2={`/Settings/Student/${studentId}`}
          navigate3={"https://www.ius.edu.ba/en/contact"}
          navigate4={"/Login/Student"}
        />
        <DropdownMenuStudent />
      </div>
    </div>
  );
}

export default PerformanceStudent;
