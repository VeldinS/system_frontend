import React from 'react';

import './semesterPerformance.css'

export interface SemesterPerformanceProfProps{
    courseName: string,
    passRate: string,
    passRatePoints: number,
    enrollments: string,
    enrollmentPoints: number,
    average: string,
    averagePoints: number,
    decision: string,
    decisionPoints: string
}

function SemesterPerformanceProf(props:SemesterPerformanceProfProps) {
    return (
        <div style={{width: "100%"}}>
            <div className={"performance"}>
                <p style={{margin: "0"}}>{props.courseName}</p>
                <div style={{ width: "100%", display: "flex", justifyContent:"center" }} className={"course-details-front"}>
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
                        <p>{props.decision}</p>
                        <p>{props.decisionPoints}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SemesterPerformanceProf;