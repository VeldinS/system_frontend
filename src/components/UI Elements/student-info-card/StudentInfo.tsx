import React from 'react';
import './studentInfo.css'
interface StudentInfoProps{
    image:string,
    name: string,
    surname: string,
    id: string,
    status: string,
    citizenshipIdField?: string,
    citizenshipId: string,
    registrationYearField?: string,
    registrationYear: string,
    departmentField?: string,
    department: string,
    regTypeField?: string,
    regType: string,
    eduLevelField?: string
    eduLevel: string
}

function StudentInfo(props: StudentInfoProps) {


    return (
        <div>
            <div className={"student-details-transcript"}>
                <div style={{textAlign: "left"}} className={"student-details-row-transcript"}>
                    <img src={props.image} className={"student-details-image"}/>
                    <div>
                        <p>{props.name} {props.surname}</p>
                        <p>{props.id}</p>
                        <p>Status: {props.status}</p>
                    </div>
                </div>
                <div className={"student-details-row-transcript"}>
                    <div>
                        <hr/>
                        <p style={{fontWeight: "bold", margin: "0"}}>{props.citizenshipIdField}</p>
                        <p style={{margin: "5px"}}>{props.citizenshipId}</p>
                        <hr/>
                        <p style={{fontWeight: "bold", margin: "0"}}>{props.registrationYearField}</p>
                        <p style={{margin: "5px"}}>{props.registrationYear}</p>
                        <hr/>
                        <p style={{fontWeight: "bold", margin: "0"}}>{props.departmentField}</p>
                        <p style={{margin: "5px"}}>{props.department}</p>
                        <hr/>
                        <p style={{fontWeight: "bold", margin: "0"}}>{props.regTypeField}</p>
                        <p style={{margin: "5px"}}>{props.regType}</p>
                        <hr/>
                        <p style={{fontWeight: "bold", margin: "0"}}>{props.eduLevelField}</p>
                        <p style={{margin: "5px"}}>{props.eduLevel}</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentInfo;