import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";


function UserPage() {

    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    const clicked = () => {
        history.goBack();
    }
    return (
        <>
            <div style={{ textAlign: "center", paddingTop: "50px", height: "60vh" }}>
                <h1>User {fname} {lname} Page</h1>
                <p>My current location is {location.pathname}</p>
                {location.pathname === `/user/xyz/das` ? <button onClick={clicked}>Click</button> : null}
            </div>
        </>
    )
}

export default UserPage;