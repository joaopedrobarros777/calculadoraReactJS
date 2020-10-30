import React from 'react';
import './ClearButton.css';

export const ClearButton = (props) => (
    <div className="Clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
)