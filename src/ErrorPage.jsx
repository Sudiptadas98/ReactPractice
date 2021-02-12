import React from "react";
import {NavLink} from "react-router-dom";

function ErrorPage() {
    return (
        <div style={{ textAlign: "center", paddingTop: "50px", height: "60vh" }}>
            <h1>Opps!! Page not found.</h1>
            <br/>
            <NavLink to="/"><button style={{padding: "5px", cursor: "pointer"}}>Go Back</button></NavLink>
        </div>
    )
}

export default ErrorPage;