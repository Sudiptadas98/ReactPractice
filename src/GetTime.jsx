import React, { useState } from "react";


function GetTime() {

    const newTime = new Date().toLocaleTimeString();
    const [Ctime, setCtime] = useState(newTime);
    const [clr, setClr] = useState("white");
    const [text, setText] = useState("Click Here");

    const UpdateTime = () => {
        const newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
        setClr("#FF7F50");
        setText("Click Again");
    };
    const DblClick = () => {
        setClr("white");
        setText("Click Here");
    };

    return (
        <>
            <div style={{ textAlign: "center", padding: "30px", backgroundColor: clr }}>
                <h1>{Ctime}</h1>
                <button style={{ padding: "10px", cursor: "pointer", backgroundColor: "#9932CC" }} onClick={UpdateTime} onMouseLeave={DblClick}>{text}</button>
            </div>
        </>
    );
}

export default GetTime;
