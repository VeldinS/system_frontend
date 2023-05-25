import React from 'react';

interface TranscriptSemesterProps{
    semester: string,
    field1:string,
    field1_1:string,
    field1_2:string,
    field1_3:string,
    field1_4:string,
    field1_5:string,
    field2:string,
    field2_1:string,
    field2_2:string,
    field2_3:string,
    field2_4:string,
    field2_5:string,
    field3:string,
    field3_1:string,
    field3_2:string,
    field3_3:string,
    field3_4:string,
    field3_5:string,
    field4:string,
    field4_1:string,
    field4_2:string,
    field4_3:string,
    field4_4:string,
    field4_5:string,
}

function TranscriptSemester(props:TranscriptSemesterProps) {
    return (
        <div>
            <div className={"transcript-semester"}>
                <h3 style={{color: "black"}}>{props.semester}</h3>
                <div className={"semester-field1"}>
                    <div style={{borderRight: "3px solid black", width: "20%"}} className={"semester-field2"}>
                        <p style={{fontWeight: "bold", textAlign:"center"}}>{props.field1}</p>
                        <p>{props.field1_1}</p>
                        <p>{props.field1_2}</p>
                        <p>{props.field1_3}</p>
                        <p>{props.field1_4}</p>
                        <p>{props.field1_5}</p>
                    </div>
                    <div style={{borderRight: "3px solid black", width: "35%"}} className={"semester-field2"}>
                        <p style={{fontWeight: "bold", textAlign:"center"}}>{props.field2}</p>
                        <p>{props.field2_1}</p>
                        <p>{props.field2_2}</p>
                        <p>{props.field2_3}</p>
                        <p>{props.field2_4}</p>
                        <p>{props.field2_5}</p>
                    </div>
                    <div style={{borderRight: "3px solid black", width: "20%"}} className={"semester-field2"}>
                        <p style={{fontWeight: "bold", textAlign:"center"}}>{props.field3}</p>
                        <p>{props.field3_1}</p>
                        <p>{props.field3_2}</p>
                        <p>{props.field3_3}</p>
                        <p>{props.field3_4}</p>
                        <p>{props.field3_5}</p>
                    </div>
                    <div className={"semester-field2"}>
                        <p style={{fontWeight: "bold", textAlign:"center", width: "20%"}}>{props.field4}</p>
                        <p>{props.field4_1}</p>
                        <p>{props.field4_2}</p>
                        <p>{props.field4_3}</p>
                        <p>{props.field4_4}</p>
                        <p>{props.field4_5}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TranscriptSemester;