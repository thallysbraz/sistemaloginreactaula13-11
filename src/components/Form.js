import React from 'react';

function Form({ children, onSubmit, className = '' }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(event);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`form ${className}`}>
            {children}
        </form>
    );
}

export default Form;
