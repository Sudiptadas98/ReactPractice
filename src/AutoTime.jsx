import React, { useState } from "react";


function AutoTime(){

    const newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);
    const UpTime = () => {
        const time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpTime,1000);
    return(
        <>
        <div style={{textAlign: "center", padding: "30px"}}>
            <h1>{ctime}</h1>
        </div>
    </>
    );
};

export default AutoTime;