import React from 'react';

import './button.css'
import {useNavigate} from "react-router-dom";

interface DashboardButtonProps{
    field1: string,
    field2: string,
    navigate1: string
}

function Button(props: DashboardButtonProps) {

    const navigate = useNavigate();

    return (
        <div>
            <div onClick={() => navigate(props.navigate1)} className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">{props.field1}</p>
                        <p className="subtitle">{props.field2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Button;