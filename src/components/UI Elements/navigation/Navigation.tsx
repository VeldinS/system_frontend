import React from 'react';

import image1 from '../../../images/logo.png'

import './navigation.css'

function Navigation() {
    return (
        <div className={"navigation"}>
            <nav>
                <div className={"navigation-bar"}>
                    <div className={"navigation-logo"}>
                        <img src={image1} alt={''}/>
                    </div>

                    <div className={"navigation-heading"}>
                        <h1>STUDENT INFORMATION SYSTEM</h1>
                    </div>

                    <div className={"navigation-language"}>
                        <h1>Language</h1>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navigation;