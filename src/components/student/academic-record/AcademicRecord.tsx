import React from 'react';
import './acadamicRecord.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import image1 from "../../../images/dummy.jpeg";
import StudentInfo from "../../UI Elements/student-info-card/StudentInfo";
import TranscriptSemester from "../../UI Elements/transcript-semester/TranscriptSemester";

function AcademicRecord() {
    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'ACADEMIC RECORD / TRANSCRIPT'} field2={'Back to Dashboard'} field3={'Account Settings'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={'/Student/Dashboard'} navigate2={'/Student/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                <div className={"transcript-page"}>
                    <div className={"student-details"}>
                        <StudentInfo image={image1} name={'Din Kulaglic'} id={190305521} status={'Active'} citizenshipId={234543234566666} registrationYear={2019}
                                     department={'FENS / Department of Engineering / Software Engineering'} regType={'Regular'} eduLevel={'I Cycle (Bachelor)'}/>
                    </div>

                    <div className={"transcript-details"}>
                        <TranscriptSemester
                            semester={'Semester 1 - 2019/20 Fall'}
                            field1_1={'CS412'} field1_2={'CS404'} field1_3={'CS103'} field1_4={'CS105'} field1_5={'MATH201'}
                            field2_1={'Web Programming'} field2_2={'Artificial Intelligence'} field2_3={'Intro to Programming'} field2_4={'Advanced Programming'} field2_5={'Calculus I'}
                            field3_1={'A'} field3_2={'B-'} field3_3={'B'} field3_4={'A-'} field3_5={'C+'}
                            field4_1={'3 | 6'} field4_2={'3 | 6'} field4_3={'3 | 6'} field4_4={'3 | 6'} field4_5={'3 | 6'}
                        />

                        <TranscriptSemester
                            semester={'Semester 2 - 2020/21 Spring'}
                            field1_1={'CS412'} field1_2={'CS404'} field1_3={'CS103'} field1_4={'CS105'} field1_5={'MATH201'}
                            field2_1={'Web Programming'} field2_2={'Artificial Intelligence'} field2_3={'Intro to Programming'} field2_4={'Advanced Programming'} field2_5={'Calculus I'}
                            field3_1={'A'} field3_2={'B-'} field3_3={'B'} field3_4={'A-'} field3_5={'C+'}
                            field4_1={'3 | 6'} field4_2={'3 | 6'} field4_3={'3 | 6'} field4_4={'3 | 6'} field4_5={'3 | 6'}
                        />

                        <TranscriptSemester
                            semester={'Semester 3 - 2020/21 Fall'}
                            field1_1={'CS412'} field1_2={'CS404'} field1_3={'CS103'} field1_4={'CS105'} field1_5={'MATH201'}
                            field2_1={'Web Programming'} field2_2={'Artificial Intelligence'} field2_3={'Intro to Programming'} field2_4={'Advanced Programming'} field2_5={'Calculus I'}
                            field3_1={'A'} field3_2={'B-'} field3_3={'B'} field3_4={'A-'} field3_5={'C+'}
                            field4_1={'3 | 6'} field4_2={'3 | 6'} field4_3={'3 | 6'} field4_4={'3 | 6'} field4_5={'3 | 6'}
                        />

                        <TranscriptSemester
                            semester={'Semester 4 - 2021/22 Spring'}
                            field1_1={'CS412'} field1_2={'CS404'} field1_3={'CS103'} field1_4={'CS105'} field1_5={'MATH201'}
                            field2_1={'Web Programming'} field2_2={'Artificial Intelligence'} field2_3={'Intro to Programming'} field2_4={'Advanced Programming'} field2_5={'Calculus I'}
                            field3_1={'A'} field3_2={'B-'} field3_3={'B'} field3_4={'A-'} field3_5={'C+'}
                            field4_1={'3 | 6'} field4_2={'3 | 6'} field4_3={'3 | 6'} field4_4={'3 | 6'} field4_5={'3 | 6'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AcademicRecord;