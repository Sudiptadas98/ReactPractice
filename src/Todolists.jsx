import React, { useState } from "react";

const Todolists = (props) => {

    const [line, setLine] = useState(false);
    const [show, setShow] = useState(false);
    const CutIt = () => {
        setLine(true);
        setShow(true);
    };

    return (
        <>

            <div className="todol_style">
                <i class="fas fa-times-circle"
                    onClick={CutIt} style={{ display: show ? "none" : "block"}}></i>
                <li style={{ marginRight: "10px", textDecoration: line ? "line-through" : "none", }}>{props.text}</li>
                <i class="fas fa-trash" onClick={() => {
                    props.onSelect(props.id);
                }} ></i>
            </div>
        </>
    );
};

export default Todolists;