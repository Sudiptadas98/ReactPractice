import React, { useState } from "react";

function Sform() {

    const [FullName, setFullName] = useState({
        Fname: "",
        Lname: "",
        Email: "",
        Phone: "",
    });

    const inputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFullName((preValue) => {
            console.log(preValue);
            
            return{
                ...preValue,
                [name] : value,
            };


            // if (name === "Fname") {
            //     return {
            //         Fname: value,
            //         Lname: preValue.Lname,
            //         Email: preValue.Email,
            //         Phone: preValue.Phone,
            //     };
            // } else if (name === "Lname") {
            //     return {
            //         Fname: preValue.Fname,
            //         Lname: value,
            //         Email: preValue.Email,
            //         Phone: preValue.Phone,
            //     };
            // } else if (name === "Email") {
            //     return {
            //         Fname: preValue.Fname,
            //         Lname: preValue.Lname,
            //         Email: value,
            //         Phone: preValue.Phone,
            //     };
            // } else if (name === "Phone") {
            //     return {
            //         Fname: preValue.Fname,
            //         Lname: preValue.Lname,
            //         Email: preValue.Email,
            //         Phone: value,
            //     };
            // }
        });
    };

    const clicked = (event) => {
        event.preventDefault();
        alert("form submited");
    };

    return (
        <>
            <div style={{ textAlign: "center", padding: "30px" }}>
                <form onSubmit={clicked}>
                    <h1 style={{ marginBottom: "10px" }}>Hello!! <span style={{ color: "#9932CC" }}>{FullName.Fname} {FullName.Lname}</span></h1>
                    <h3>{FullName.Email}</h3>
                    <h2>{FullName.Phone}</h2>
                    <input style={{ padding: "12px", textAlign: "center" }}
                        type="text"
                        placeholder="Enter Your First Name"
                        name="Fname"
                        autoComplete="off"
                        onChange={inputEvent}
                        value={FullName.Fname}
                    />
                    <br />
                    <br />
                    <input style={{ padding: "12px", textAlign: "center" }}
                        type="text"
                        placeholder="Enter Your Last Name"
                        name="Lname"
                        autoComplete="off"
                        onChange={inputEvent}
                        value={FullName.Lname}
                    />
                    <br />
                    <br />
                    <input style={{ padding: "12px", textAlign: "center" }}
                        type="email"
                        placeholder="Enter Your Email"
                        name="Email"
                        autoComplete="off"
                        onChange={inputEvent}
                        value={FullName.Email}
                    />
                    <br />
                    <br />
                    <input style={{ padding: "12px", textAlign: "center" }}
                        type="number"
                        placeholder="Enter Your Phone Number"
                        name="Phone"
                        autoComplete="off"
                        onChange={inputEvent}
                        value={FullName.Phone}
                    />
                    <br />
                    <br />
                    <button type="submit" style={{ padding: "10px", cursor: "pointer", backgroundColor: "#9932CC" }}>Submit</button>
                </form>
            </div>
        </>
    );
};

export default Sform;