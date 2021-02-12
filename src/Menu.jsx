import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "orange", padding: "10px 0" }}>
                <div style={{ marginLeft: "10px" }}>
                    <h1>MENU..</h1>
                </div>
                <div className="menus">
                    <ul style={{ display: "flex", margin: "0 50px" }}>
                        <li style={{ margin: "0 50px 0 0" }}>
                            <NavLink exact activeClassName="active_class" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li style={{ margin: "0 50px 0 0" }}>
                            <NavLink exact activeClassName="active_class" to="/about">
                                About Us
                            </NavLink>
                        </li>
                        <li style={{ margin: "0 50px 0 0" }}>
                            <NavLink exact activeClassName="active_class" to="/user">
                                User
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active_class" to="/search">
                                Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;