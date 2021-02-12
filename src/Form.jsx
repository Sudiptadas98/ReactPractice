import React, { useState } from "react";



function Form() {
    const [typed, setName] = useState();
    const inputEvent = (event) => {
        setName(event.target.value);
    };
    const [typed2, setName2] = useState();
    const inputEventtwo = (event) => {
        setName2(event.target.value);
    }
    const [Fname, setFname] = useState();
    const [Lname, setLname] = useState();
    const clicked = (event) => {
        event.preventDefault();
        setFname(typed);
        setLname(typed2);
    }
    
    return (
        <>
            <div style={{ textAlign: "center", padding: "30px" }}>
                <form onSubmit={clicked}>
                <h1 style={{ marginBottom: "10px" }}>Hello!! <span style={{ color: "#9932CC"}}>{Fname} {Lname}</span></h1>
                <input style={{ padding: "12px", textAlign: "center" }}
                    type="text"
                    placeholder="Enter Your First Name"
                    autoComplete="off"
                    onChange={inputEvent}
                     />
                <br/>
                <br/>
                <input style={{ padding: "12px", textAlign: "center" }}
                    type="text"
                    placeholder="Enter Your Last Name"
                    autoComplete="off"
                    onChange={inputEventtwo}
                     />
                <br />
                <br />
                <button type="submit" style={{ padding: "10px", cursor: "pointer", backgroundColor: "#9932CC" }}>Submit</button>
                </form>
            </div>
        </>
    );
};

export default Form;