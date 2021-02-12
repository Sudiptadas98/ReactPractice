import React from 'react';
import "./index.css";


function Heading(){

    const fname = "XYZ";
    const lname = "duhhzz";
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const heading = {
        color : 'red',
        textAlign : 'center'
        };


    return (
        <div>
            <h1 style={{textAlign : 'center'}}>Heading from components</h1>
            <h1 style={heading} className="heading">{`My name is ${fname} ${lname}`}</h1>
            <h3 className="paras">Today's date is: {date}</h3>
            <p className="paras">Time: {time}</p>
        </div>
    );
}

export default Heading;