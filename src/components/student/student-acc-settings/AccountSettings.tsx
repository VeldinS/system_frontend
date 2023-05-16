import React, { useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

import './accountSettings.css'

import image1 from '../../../images/dummy.jpg'

import Navigation2 from "../../UI Elements/navigation/Navigation2";

interface Student {
    _id: any;
    name:String,
    surname:String,
    id:String,
    image:String,
    citizenshipId:String,
    registrationYear:String,
    Department:String,
    RegistrationType:String,
    EducationLevel:String,
}

const AccountSettings: React.FC = () => {

    const {studentId} = useParams()
    const navigate = useNavigate()
    const [studentData, setStudentData] = useState<Student>()
    const [studentPassword, setStudentPassword] = useState('')
    const [studentMail, setStudentMail] = useState('')
    const [studentPhNum, setStudentPhNum] = useState<number>();
    //FETCH STUDENT DATA
    useEffect(() => {
        fetch(   `http://localhost:5000/Student/${studentId}`)
            .then((res) => res.json())
            .then((data) => setStudentData(data as Student))
    }, [studentId]);

    //PASSWORD CHANGE
    const handleChangePassword = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        // @ts-ignore
        await setStudentPassword({[name]: value});
    }
    const handleSubmitPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPassword = studentPassword

        const response = await axios.patch(`http://localhost:5000/Student/UpdatePassword/${studentId}`, newPassword, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        alert('PASSWORD SUCCESSFULLY UPDATED!')
        navigate(`/Dashboard/Student/${studentId}`);
    };

    //MAIL CHANGE
    const handleChangeMail = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        // @ts-ignore
        await setStudentMail({[name]: value});
    }
    const handleSubmitMail = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newMail = studentMail
        const response = await axios.patch(`http://localhost:5000/Student/UpdateMail/${studentId}`, newMail, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        alert('MAIL SUCCESSFULLY UPDATED!')
        navigate(`/Dashboard/Student/${studentId}`);
    };

    //PHONE NUMBER CHANGE
    const handleChangePhNum = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        // @ts-ignore
        await setStudentPhNum({[name]: value});
    }
    const handleSubmitPhNum = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPhNum = studentPhNum
        const response = await axios.patch(`http://localhost:5000/Student/UpdatePhNum/${studentId}`, newPhNum, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        alert('PHONE NUMBER SUCCESSFULLY UPDATED!')
        navigate(`/Settings/Student/${studentId}`);
    };

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'ACCOUNT SETTINGS'} field2={'Back to Dashboard'} field3={'Dashboard'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={`/Dashboard/Student/${studentId}`} navigate2={'/Student/Dashboard'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                {studentData && (
                <div key={studentData._id} className={"settings-page"}>
                    <div className={"account-details"}>
                        <div style={{textAlign: "left"}} className={"account-details-row"}>
                            <img src={image1} className={"account-details-image"}/>
                            <div className={"basic-info"}>
                                <p>{studentData.name} {studentData.surname}</p>
                                <p>{studentData.id}</p>
                                <p>Status: Active</p>
                            </div>
                        </div>
                        <div className={"account-details-row"}>
                            <div className={"info-part1"}>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>Citizenship ID</p>
                                <p style={{margin: "5px"}}>{studentData.citizenshipId}</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>Registration Year</p>
                                <p style={{margin: "5px"}}>{studentData.registrationYear}</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>Department / Program</p>
                                <p style={{margin: "5px"}}>{studentData.Department}</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>Registration Type</p>
                                <p style={{margin: "5px"}}>{studentData.RegistrationType}</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>Education Level</p>
                                <p style={{margin: "5px"}}>{studentData.EducationLevel}</p>
                                <hr/>
                            </div>
                        </div>
                    </div>

                    <div className={"settings-change"}>
                        <div className="form-container settings-container">
                            <p className="title">Change Your Account Settings</p>
                                <form className="form" onSubmit={handleSubmitPassword}>
                                    <div className="input-group">
                                        <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder="Current Password"/>
                                        <input defaultValue={studentPassword} onChange={handleChangePassword} style={{marginBottom: "10px"}} type="text" name="password" id="password" placeholder="New Password"/>
                                        <button type={'submit'} style={{marginBottom: "20px"}} className="sign settings-change-button" >Update!</button>
                                    </div>
                                </form>
                                <form className="form" onSubmit={handleSubmitMail}>
                                    <div className="input-group">
                                        <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder="Current Email"/>
                                        <input defaultValue={studentMail} onChange={handleChangeMail} style={{marginBottom: "10px"}} type="text" name="mail" id="mail" placeholder="New Email"/>
                                        <button type={'submit'} style={{marginBottom: "20px"}} className="sign settings-change-button" >Update!</button>
                                    </div>
                                </form>
                                <form className="form" onSubmit={handleSubmitPhNum}>
                                    <div className="input-group">
                                        <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder="Current Phone Number"/>
                                        <input defaultValue={studentPhNum} onChange={handleChangePhNum} style={{marginBottom: "10px"}} type="number" name="phoneNumber" id="phoneNumber" placeholder="New Phone Number"/>
                                        <button type={'submit'} style={{marginBottom: "20px"}} className="sign settings-change-button" >Update!</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default AccountSettings;