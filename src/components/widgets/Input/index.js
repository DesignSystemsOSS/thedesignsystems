import './style.widget.input.css';
import React from 'react';

function Input(__InputProperties) {
    return (
        <input className="input" type={__InputProperties.type} id={__InputProperties.id} 
            onClick={__InputProperties.onClick} placeholder={__InputProperties.placeholder}
        />
    )
}

function TextArea(__TextAreaProperties) {
    return (
        <textarea className="textarea" id={__TextAreaProperties.id} 
            onClick={__TextAreaProperties.onClick} placeholder={__TextAreaProperties.placeholder}
        />
    )
}

export { Input, TextArea }