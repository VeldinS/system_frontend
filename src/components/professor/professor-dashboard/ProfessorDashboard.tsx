import React from 'react';
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import Button from "../../UI Elements/dashboard/Button";
import './professorDashboard.css'

function ProfessorDashboard() {
    return (
        <div>
            <div className={"professor-dashboard-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'PROFESSOR DASHBOARD'} field3={'Account Settings'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={''} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Professor'}
                />
                <div style={{paddingTop: "2rem"}} className={"dashboard-heading"}>
                    <div className={"dashboard-buttons"}>
                        <div className={"button"}>
                            <Button field1={'COURSE SCHEDULE'} field2={'Check your courses and course schedule!'} navigate1={'/Professor/CourseSchedule'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'EXAM SCHEDULE'} field2={'Check your exam schedule!'} navigate1={'/Professor/ExamSchedule'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'GRADE DETAILS'} field2={'Open grade details for students!'} navigate1={'/Professor/Grades'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'PERFORMANCE ANALYSIS TOOL'} field2={'Test performance for students, courses, semesters...'} navigate1={'/Professor/PAT'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessorDashboard;