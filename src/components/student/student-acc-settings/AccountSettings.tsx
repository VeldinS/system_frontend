import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../../../authentication/authContext";

import './accountSettings.css'

import image1 from '../../../images/dummy.jpeg'

import Navigation2 from "../../UI Elements/navigation/Navigation2";

const AccountSettings: React.FC = () => {

    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    const [formData, setFormData] = useState({username: '', password: ''})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const adminCredentials = {...formData};
        try {
            const res = await fetch(  'http://localhost:5000/Password/Forgot', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(adminCredentials)
            })
            if (res.status === 200) {
                auth.login();
                navigate('/Student/Dashboard');
            } else {
                alert('INVALID CREDENTIALS');
            }
        } catch (err) {
            console.log('invalid credentials')
        }
    };

    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'ACCOUNT SETTINGS'} field2={'Back to Dashboard'} field3={'Dashboard'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={'/Student/Dashboard'} navigate2={'/Student/Dashboard'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />
                <div className={"settings-page"}>
                    <div className={"account-details"}>
                        <div style={{textAlign: "left"}} className={"account-details-row"}>
                            <img src={image1} className={"account-details-image"}/>
                            <div className={"basic-info"}>
                                <p>Name and Surname</p>
                                <p>190302158</p>
                                <p>Status: Active</p>
                            </div>
                        </div>
                        <div className={"account-details-row"}>
                            <div className={"info-part1"}>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>Citizenship ID</p>
                                <p style={{margin: "5px"}}>2205001170013 </p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>Registration Date</p>
                                <p style={{margin: "5px"}}>30.09.2019</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>Department / Program</p>
                                <p style={{margin: "5px"}}>FENS / Department of Engineering / Software Engineering</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>Registration Type</p>
                                <p style={{margin: "5px"}}>Regular Enrollment</p>
                                <hr/>
                                <p style={{fontWeight: "bold", margin: "0"}}>Education Level</p>
                                <p style={{margin: "5px"}}>I Cycle (Bachelor)</p>
                                <hr/>
                            </div>
                        </div>
                    </div>

                    <div className={"settings-change"}>
                        <div className="form-container settings-container">
                            <p className="title">Change Your Account Settings</p>
                            <form className="form">
                                <div className="input-group">
                                    <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder="Current Password"/>
                                    <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder="New Password"/>
                                    <button style={{marginBottom: "20px"}} className="sign settings-change-button" >Update!</button>
                                </div>
                                <div className="input-group">
                                    <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder="Current Email"/>
                                    <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder="New Email"/>
                                    <button style={{marginBottom: "20px"}} className="sign settings-change-button" >Update!</button>
                                </div>
                                <div className="input-group">
                                    <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder="Current Phone Number"/>
                                    <input style={{marginBottom: "10px"}} type="text" name="username" id="username" placeholder="New Phone Number"/>
                                    <button style={{marginBottom: "20px"}} className="sign settings-change-button" >Update!</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AccountSettings;