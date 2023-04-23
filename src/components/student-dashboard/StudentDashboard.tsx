import React from 'react';
import Navigation from "../UI Elements/navigation/Navigation";

import './studentDashboard.css'

function StudentDashboard() {
    return (
        <div>
            <div className={"student-dashboard-main"} style={{minHeight: "100vh"}}>
                <Navigation/>
                <div className={"dashboard-heading"}>
                    <h1>STUDENT DASHBOARD</h1>
                </div>
            </div>

            </div>
    );
}

export default StudentDashboard;