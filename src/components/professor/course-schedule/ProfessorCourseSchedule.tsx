import React from 'react';
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import Timetable, {Course} from "../../UI Elements/timetable/Timetable";

const courses:Course[] = [
    { name: "Math", day: "Monday", venue: "B.F1.22", start: 9, end: 12 },
    { name: "Physics", day: "Wednesday", venue: "A.F2.3", start: 9, end: 12 },
    { name: "Chemistry", day: "Thursday", venue: "A.F1.24", start: 12, end: 15 },
    { name: "Computer Science", day: "Monday", venue: "B.F2.10", start: 12, end: 15 },
];

function ProfessorCourseSchedule() {
    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'COURSE SCHEDULE'} field2={'Back to Dashboard'} field3={'Account Settings'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={'/Professor/Dashboard'} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Professor'}
                />
                <Timetable courses={courses}/>
            </div>
        </div>
    );
}

export default ProfessorCourseSchedule;