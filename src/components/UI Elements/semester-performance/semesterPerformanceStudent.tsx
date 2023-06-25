import React from 'react';

import './semesterPerformance.css'

export interface SemesterPerformanceStudentProps{
    courseName: string,
    yourGrade: string,
    yourGradePoints: number,
    yourPerformance: string,
    yourPerformancePoints: number,
    passRate: string,
    passRatePoints: number,
    enrollments: string,
    enrollmentPoints: number,
    average: string,
    averagePoints: number
}

function SemesterPerformanceStudent(props:SemesterPerformanceStudentProps) {
    return (
        <div style={{width: "100%"}}>
            <div className={"performance"}>
                <p style={{margin: "0"}}>{props.courseName}</p>
                <div style={{ width: "100%", display: "flex", justifyContent:"center" }} className={"course-details-front"}>
                <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>{props.yourGrade}</p>
                        <p>{props.yourGradePoints}</p>
                    </div>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>{props.passRate}</p>
                        <p>{props.passRatePoints}</p>
                    </div>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>{props.enrollments}</p>
                        <p>{props.enrollmentPoints}</p>
                    </div>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>{props.average}</p>
                        <p>{props.averagePoints}</p>
                    </div>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>{props.yourPerformance}</p>
                        <p>{props.yourPerformancePoints}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SemesterPerformanceStudent;