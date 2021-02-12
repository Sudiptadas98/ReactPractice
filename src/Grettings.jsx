import React from 'react';


function Grettings() {

    const curdate = new Date();
    const hrs = curdate.getHours();
    let greetings = "";
    const cssStyle = {};
    if (hrs >= 5 && hrs < 12) {
        greetings = "Good Moring!!";
        cssStyle.color = "green";
    } else if (hrs >= 12 && hrs < 18) {
        greetings = "Good Afternoon!!";
        cssStyle.color = "orange";
    } else if (hrs >= 18 && hrs < 22) {
        greetings = "Good Evening!!";
        cssStyle.color = "#4B0082";
    } else {
        greetings = "Good Night!!";
        cssStyle.color = "grey";
    }


    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Hello..<span style={cssStyle}>{greetings}</span></h2>
        </>
    );
}

export default Grettings;