import React from 'react';

function Input({ type, name, placeholder, value, onChange, className = '' }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`input ${className}`}
        />
    );
}

export default Input;
