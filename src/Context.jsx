import React, { createContext } from "react";
import ConA from "./ConA";


const FirstName = createContext();
const LastName = createContext();

function Context() {
    return(
        <>
            <FirstName.Provider value={"Sudipta"}>
                <LastName.Provider value={"Das"}>
                    <ConA/>
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
};

export default Context;
export {FirstName, LastName};