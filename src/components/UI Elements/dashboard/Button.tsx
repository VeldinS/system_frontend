import React from 'react';

import './button.css'

interface DashboardButtonProps{
    field1: string,
    field2: string
}

function Button(props: DashboardButtonProps) {
    return (
        <div>
            <div className="flip-card">
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