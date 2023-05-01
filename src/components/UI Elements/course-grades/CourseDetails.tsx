import React from 'react';

import './courseDetails.css'

interface CourseDetailsProps{
    courseName: string,
    assessment1: string,
    assessment1Points: number,
    assessment2: string,
    assessment2Points: number,
    assessment3: string,
    assessment3Points: number,
    assessment4: string,
    assessment4Points: number,
    assessment5: string,
    assessment5Points: number,
    totalPoints: number,
    makeupPoints: string,
    finalGrade: number,
    letterGrade: string,
    average: number
}

function CourseDetails(props:CourseDetailsProps) {
    return (
        <div style={{width: "100%"}}>
            <div className={"course"}>
                <p style={{margin: "0"}}>{props.courseName}</p>
                <div className={"course-details-front"}>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>{props.assessment1}</p>
                        <p>{props.assessment1Points}</p>
                    </div>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>{props.assessment2}</p>
                        <p>{props.assessment2Points}</p>
                    </div>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>{props.assessment3}</p>
                        <p>{props.assessment3Points}</p>
                    </div>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>{props.assessment4}</p>
                        <p>{props.assessment4Points}</p>
                    </div>
                    <div className={"assessment"}>
                        <p>{props.assessment5}</p>
                        <p>{props.assessment5Points}</p>
                    </div>
                </div>
                <div className={"course-details-back"}>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>Total</p>
                        <p>{props.totalPoints}</p>
                    </div>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>Makeup</p>
                        <p>{props.makeupPoints}</p>
                    </div>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>Final Grade</p>
                        <p>{props.finalGrade}</p>
                    </div>
                    <div style={{borderRight: "3px solid black"}} className={"assessment"}>
                        <p>Letter Grade</p>
                        <p>{props.letterGrade}</p>
                    </div>
                    <div className={"assessment"}>
                        <p>Class Average</p>
                        <p>{props.average}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;