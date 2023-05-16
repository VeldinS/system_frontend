import React from 'react';
import './gradeDetails.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import image1 from "../../../images/dummy.jpg";
import StudentInfo from "../../UI Elements/student-info-card/StudentInfo";
import CourseDetails from "../../UI Elements/course-grades/CourseDetails";

function GradeDetails() {
    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'GRADE DETAILS'} field2={'Back to Dashboard'} field3={'Account Settings'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={'/Student/Dashboard'} navigate2={'/Student/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                <div className={"grades-page"}>
                    <div className={"student-details"}>
                        <StudentInfo image={image1} name={'Din'} surname={'Kulaglic'} id={'190305521'} status={'Active'} citizenshipId={'234543234566666'} registrationYear={'2019'}
                                     department={'FENS / Department of Engineering / Software Engineering'} regType={'Regular'} eduLevel={'I Cycle (Bachelor)'}/>
                    </div>
                        <div className={"student-grades"}>
                            <div className={"semester-details"}>
                                <h2>Select Semester</h2>
                                <select className={"semester-select"} name="semester">
                                    <option value=""></option>
                                    <option value={'Fall Semester - 2019'}>Fall Semester - 2019</option>
                                    <option value={'Spring Semester - 2020'}>Spring Semester - 2020</option>
                                    <option value={'Fall Semester - 2020'}>Fall Semester - 2020</option>
                                    <option value={'Spring Semester - 2021'}>Spring Semester - 2021</option>
                                </select>

                                <div className={"semester"}>
                                    <CourseDetails courseName={'CS427 - Network Programming'}
                                                   assessment1={'Quiz'} assessment1Points={55}
                                                   assessment2={'Homework'} assessment2Points={80}
                                                   assessment3={'Midterm'} assessment3Points={65}
                                                   assessment4={'Project'} assessment4Points={100}
                                                   assessment5={'Final'} assessment5Points={65}
                                                   totalPoints={75} makeupPoints={'/'}
                                                   finalGrade={75} letterGrade={'B-'} average={62}
                                    />
                                    <CourseDetails courseName={'CS404 - AI'}
                                                   assessment1={'Quiz 1'} assessment1Points={55}
                                                   assessment2={'Quiz 2'} assessment2Points={80}
                                                   assessment3={'Midterm'} assessment3Points={65}
                                                   assessment4={'Project'} assessment4Points={100}
                                                   assessment5={'Final'} assessment5Points={65}
                                                   totalPoints={75} makeupPoints={'/'}
                                                   finalGrade={75} letterGrade={'B-'} average={62}
                                    />
                                    <CourseDetails courseName={'CS103 - Intro to Programming'}
                                                   assessment1={'Quiz 1'} assessment1Points={93}
                                                   assessment2={'Quiz 2'} assessment2Points={50}
                                                   assessment3={'Midterm'} assessment3Points={42}
                                                   assessment4={'Project'} assessment4Points={40}
                                                   assessment5={'Final'} assessment5Points={55}
                                                   totalPoints={75} makeupPoints={'/'}
                                                   finalGrade={75} letterGrade={'B-'} average={62}
                                    />
                                    <CourseDetails courseName={'CS105 - Advanced Programming'}
                                                   assessment1={'Quiz 1'} assessment1Points={55}
                                                   assessment2={'Quiz 2'} assessment2Points={80}
                                                   assessment3={'Midterm'} assessment3Points={65}
                                                   assessment4={'Homework'} assessment4Points={100}
                                                   assessment5={'Final'} assessment5Points={65}
                                                   totalPoints={75} makeupPoints={'/'}
                                                   finalGrade={75} letterGrade={'B-'} average={62}
                                    />
                                    <CourseDetails courseName={'MATH101 - Calculus 1'}
                                                   assessment1={'Quiz'} assessment1Points={55}
                                                   assessment2={'Homework'} assessment2Points={80}
                                                   assessment3={'Midterm'} assessment3Points={65}
                                                   assessment4={'Project'} assessment4Points={100}
                                                   assessment5={'Final'} assessment5Points={65}
                                                   totalPoints={75} makeupPoints={'/'}
                                                   finalGrade={75} letterGrade={'B-'} average={62}
                                    />
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GradeDetails;