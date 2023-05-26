import React from 'react';

import image1 from '../../../images/logo.png'

import './navigation.css'
import {useNavigate} from "react-router-dom";


interface NavigationProps{
    field1: string,
    onClick?: React.MouseEventHandler<HTMLHeadingElement>;
}
function Navigation(props:NavigationProps) {

    const navigate = useNavigate()
    return (
        <div className={"navigation"}>
            <nav>
                <div className={"navigation-bar"}>
                    <div onClick={() => navigate('/')} className={"navigation-logo"}>
                        <img src={image1} alt={''}/>
                    </div>

                    <div className={"navigation-heading"}>
                        <h1>STUDENT INFORMATION SYSTEM</h1>
                    </div>

                    <div className={"navigation-language"}>
                        <h1 style={{letterSpacing: "5px"}} onClick={props.onClick} >{props.field1}</h1>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navigation;