import React from 'react';
import './patStudent.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";

function PerformanceStudent() {
    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'YOUR PERFORMANCE'} field2={'Back to Dashboard'} field3={'Account Settings'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={'/Student/Dashboard'} navigate2={'/Student/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
            </div>
        </div>
    );
}

export default PerformanceStudent;