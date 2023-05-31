import React from 'react';

import './loader.css'

function Loader() {
    return (
        <div>
            <div className="spinner-container">
                <div className="spinner">
                    <div className="spinner">
                        <div className="spinner">
                            <div className="spinner">
                                <div className="spinner">
                                    <div className="spinner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;