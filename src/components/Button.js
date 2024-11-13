import React from 'react';

function Button({ text, onClick, type = 'button', className = '' }) {
    return (
        <button type={type} onClick={onClick} className={`button ${className}`}>
            {text}
        </button>
    );
}

export default Button;
