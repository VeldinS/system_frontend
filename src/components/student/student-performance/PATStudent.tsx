import React from 'react';
import './patStudent.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import {useParams} from "react-router-dom";

function PerformanceStudent() {

    const {studentId} = useParams()

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'YOUR PERFORMANCE'} field2={'Back to Dashboard'} field3={'Account Settings'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={`/Dashboard/Student/${studentId}`} navigate2={`/Settings/Student/${studentId}`} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
            </div>
        </div>
    );
}

export default PerformanceStudent;