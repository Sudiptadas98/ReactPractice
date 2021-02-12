import React, { useEffect, useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';


function Ccount() {

    const [Count, setCount] = useState(0);
    // useEffect(() => {
    //     document.title = `You clicked + ${Count} times.`;
    //     alert("yo");
    // }, [Count]);
    const IncNum = () => {
        setCount(Count + 1);
    };

    const DecNum = () => {
        if (Count === 0) {
            setCount(Count);
            alert("Can't decrement from 0")
        } else if (Count > 0) {
            setCount(Count - 1);
        }
    };

    return (
        <>
            <div style={{ textAlign: "center", padding: "30px" }}>
                <div style={{ backgroundColor: " black", width: "fit-content", margin: "auto" }}>
                    <Clock />
                </div>
                <h1>{Count}</h1>
                <Tooltip title="Plus">
                    <Button variant="contained" style={{ padding: "10px", cursor: "pointer", color: "green" }} onClick={IncNum}>
                        <AddIcon />
                    </Button>
                </Tooltip>
                <br />
                <br />
                <Tooltip title="Minus">
                    <Button variant="contained" style={{ padding: "10px", cursor: "pointer", color: "red" }} onClick={DecNum}>
                        <ClearIcon />
                    </Button>
                </Tooltip>
            </div>
        </>
    );
}

export default Ccount;