import React, { useContext } from "react";
import {FirstName, LastName} from "./Context";

function ConB() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return(
        <>
            <h1 style={{textAlign: "center"}}>My name is {fname} {lname}</h1>
        </>
    );
};

export default ConB;