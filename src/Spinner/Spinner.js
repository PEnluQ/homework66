import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
    return <div className="Spinner">{props.kick ? 'loading' : null}</div>
};


export default Spinner;