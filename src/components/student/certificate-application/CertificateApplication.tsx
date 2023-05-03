import React from 'react';
import './certificateApplication.css'
import Navigation2 from "../../UI Elements/navigation/Navigation2";

function CertificateApplication() {
    return (
        <div>
            <div className={"login-page-main"} style={{minHeight: "100vh"}}>
                <Navigation2 field1={'APPLY FOR CERTIFICATE'} field2={'Back to Dashboard'} field3={'Account Settings'}
                             field4={'Language'} field5={'Help'} field6={'Logout'}
                             navigate1={'/Student/Dashboard'} navigate2={'/Student/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/Student'}
                />

                <div className={"certificate-form-div"}>
                    <div className="form-container certificate-container">
                        <p className="title">Request a new document!</p>
                        <form  className="form">
                            <div className={"certificate-select-div"}>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", margin:"auto"}} className="input-group">
                                    <label>Select a type of document</label>
                                    <select className={"certificate-select"} name="semester">
                                        <option value=""></option>
                                        <option value={'Detailed Transcript'}>Detailed Transcript</option>
                                        <option value={'Signed Document'}>Signed Document</option>
                                    </select>
                                </div>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", margin:"auto"}} className="input-group">
                                    <label>Select document language</label>
                                    <select className={"certificate-select"} name="semester">
                                        <option value=""></option>
                                        <option value={'Detailed Transcript'}>English</option>
                                        <option value={'Signed Document'}>Bosnian</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Enter number of copies</label>
                                <input style={{marginBottom: "30px"}} type="number" name="num_of_copies" id="num_of_copies" placeholder="Number of compies"/>
                            </div>

                            <div className="input-group">
                                <label>What are you applying for?</label>
                                <input style={{marginBottom: "30px"}} type="text" name="reason" id="reason" placeholder="Reason of applying"/>
                            </div>
                            <button className="sign settings-change-button" >Submit!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CertificateApplication;