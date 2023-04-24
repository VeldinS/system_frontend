import React from 'react';
import Navigation from "../UI Elements/navigation/Navigation";

import './studentDashboard.css'
import Button from "../UI Elements/dashboard/Button";

function StudentDashboard() {
    return (
        <div>
            <div className={"student-dashboard-main"} style={{minHeight: "100vh"}}>
                <Navigation/>
                <div className={"dashboard-heading"}>
                    <h1>STUDENT DASHBOARD</h1>
                    <div className={"dashboard-buttons"}>
                        <div className={"button"}>
                             <Button field1={'ACADEMIC RECORD'} field2={'Check your detailed academic record!'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'COURSE SCHEDULE'} field2={'Check your course schedule!'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'EXAM SCHEDULE'} field2={'Check if there are any new exam schedules!'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'GRADE DETAILS'} field2={'Check your grade details!'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'YOUR PERFORMANCE'} field2={'Analyse and check your performance!'}/>
                        </div>
                        <div className={"button"}>
                            <Button field1={'STUDENT CERTIFICATE APPLICATION'} field2={'Request a new application document!'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;