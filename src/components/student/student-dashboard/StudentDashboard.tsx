import React from 'react';

import './studentDashboard.css'
import Button from "../../UI Elements/dashboard/Button";
import Navigation2 from "../../UI Elements/navigation/Navigation2";

function StudentDashboard() {
    return (
        <div>
            <div className={"student-dashboard-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'STUDENT DASHBOARD'} field3={'Account Settings'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={''} navigate2={'/Student/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                <div style={{paddingTop: "2rem"}} className={"dashboard-heading"}>
                    <div className={"dashboard-buttons"}>
                        <div className={"button"}>
                            <Button field1={'ACADEMIC RECORD'} field2={'Check your detailed academic record!'} navigate1={'/Student/Transcript'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'COURSE SCHEDULE'} field2={'Check your course schedule!'} navigate1={'/Student/CourseSchedule'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'EXAM SCHEDULE'} field2={'Check if there are any new exam schedules!'} navigate1={'/Student/ExamSchedule'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'GRADE DETAILS'} field2={'Check your grade details!'} navigate1={'/Student/GradeDetails'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'YOUR PERFORMANCE'} field2={'Analyse and check your performance!'} navigate1={'/Student/Performance'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'STUDENT CERTIFICATE APPLICATION'} field2={'Request a new application document!'} navigate1={'/Student/SCA'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;