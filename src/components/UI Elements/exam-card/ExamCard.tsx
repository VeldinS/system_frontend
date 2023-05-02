import React from 'react';

import './examCard.css'

interface ExamCardProps{
    course: string,
    time: string,
    venue: string,
}

function Button(props: ExamCardProps) {


    return (
        <div>
            <div className="exam-card">
                <div className="exam-card-inner">
                    <div className="exam-card-front">
                        <p className="exam-card-title">{props.course}</p>
                        <p className="exam-card-title">{props.time}</p>
                        <p className="exam-card-title">{props.venue}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Button;