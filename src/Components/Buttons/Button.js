import React from  'react';
import   '../../styles/button.scss';

const Button = (props) => {
    const buttonStatusClass = props.isActive ? 'active' : 'inactive';
    return (<button className={buttonStatusClass} disabled={buttonStatusClass==='inactive'}>
        Next
    </button>);
};

export default Button;
