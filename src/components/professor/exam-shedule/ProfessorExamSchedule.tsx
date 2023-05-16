import React from 'react';
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import ExamCard from "../../UI Elements/exam-card/ExamCard";

function ProfessorExamSchedule() {
    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'EXAM SCHEDULE'} field2={'Back to Dashboard'} field3={'Account Settings'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={'/Professor/Dashboard'} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Porfessor'}
                />
                <div style={{paddingTop: "2rem"}} className={"exam-page-heading"}>
                    <div className={"exam-page-cards"}>
                        <div className={"exam-page-card"}>
                            <ExamCard course={'CS404 - Artificial Intelligence'} time={'Tuesday - 09 : 30'} venue={'Sports Hall'}/>
                        </div>
                        <div className={"exam-page-card"}>
                            <ExamCard course={'CS103 - Intro to Programming'} time={'Tuesday - 13 : 30'} venue={'Sports Hall'}/>
                        </div>
                        <div className={"exam-page-card"}>
                            <ExamCard course={'CS105 - Advanced Programming'} time={'Wednesday - 11 : 30'} venue={'Sports Hall'}/>
                        </div>
                        <div className={"exam-page-card"}>
                            <ExamCard course={'MATH101 - Calculus I'} time={'Sunday - 15 : 30'} venue={'Sports Hall'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessorExamSchedule;