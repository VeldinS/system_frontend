import React from 'react';
import {useNavigate} from "react-router-dom";
import './home.css'
function Home() {

    const navigate = useNavigate();

    return (
        <div className={"login-page-main"} style={{display: "flex", flexDirection: "row", height: "100vh", margin:"auto"}}>
            <div style={{margin: "auto"}}>
                <button onClick={()=> {navigate('/Login/Student')}} className="button1">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">Student</span>
                    </span>
                </button>

                <button onClick={()=> {navigate('/Login/Professor')}} className="button1">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">Professor</span>
                    </span>
                </button>

                <button onClick={()=> {navigate('/Login/SAO')}} className="button1">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">SAO</span>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Home;