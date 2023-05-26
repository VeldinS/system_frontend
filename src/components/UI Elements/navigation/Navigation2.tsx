import React from 'react';
import image1 from '../../../images/logo.png'
import './navigation2.css'
import {useNavigate, useParams} from "react-router-dom";


interface NavigationProps{
    field1: string,
    field2?: string,
    field3: string,
    field4: string,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    field5: string,
    field6: string
    navigate1: string,
    navigate2: string,
    navigate3: string,
    navigate4: string,
}

function Navigation2(props: NavigationProps) {
    const {studentId} = useParams()


    const navigate = useNavigate()

    let menuOpen = false;

    function showNavbar():any {
        const navbar = document.getElementById("navbar");
        if (navbar) {
            if (menuOpen) {
                navbar.style.opacity = "0";
                navbar.style.transform = "scale(0)";
                navbar.style.transition = "0.3s"
                menuOpen = false;
            } else {
                navbar.style.opacity = "1";
                navbar.style.transform = "scale(1)";
                navbar.style.transition = "0.3s"
                menuOpen = true;
            }
        }
    }

    return (
        <div className={"navigation"}>
            <nav>
                <div className={"navigation-bar"}>
                    <div onClick={() => navigate(`/Dashboard/Student/${studentId}`)} className={"navigation-logo"}>
                        <img src={image1} alt={''}/>
                    </div>

                    <div className={"navigation2-heading"}>
                        <h1>{props.field1}</h1>
                    </div>

                    <div className={"back-to-dashboard"}>
                        <p onClick={() => navigate(props.navigate1)}>{props.field2}</p>
                    </div>
                    <div id={"menu"} className={"navigation-menu"}>
                        <input type="checkbox" id="checkbox" />
                            <label onClick={showNavbar} htmlFor="checkbox" className="toggle">
                                <div className="bars" id="bar1"></div>
                                <div className="bars" id="bar2"></div>
                                <div className="bars" id="bar3"></div>
                            </label>
                    </div>
                    <div id={"navbar"}>
                        <a onClick={() => navigate(props.navigate2)}>{props.field3}</a>
                        <hr/>
                        <a onClick={props.onClick} >{props.field4}</a>
                        <hr/>
                        <a href={props.navigate3}>{props.field5}</a>
                        <hr/>
                        <a onClick={() => navigate(props.navigate4)}>{props.field6}</a>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navigation2;