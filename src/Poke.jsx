import React, { useEffect, useState } from "react";
import axios from "axios";

function Poke() {

    const [pnum, setPnum] = useState();
    const [pname, setPname] = useState();
    const [pmoves, setPmoves] = useState();

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pnum}`);
            console.log(res);
            setPname(res.data.name);
            setPmoves(res.data.moves.length);
        }
        getData();
    })

    const changed = (event) => {
        setPnum(event.target.value);
    }

    return (
        <>
            <div style={{height: "20vh", textAlign: "center", margin: "20px" }} >
                <h1>You choose <span style={{color: "red"}}>{pnum}</span> value</h1>
                <h1>My name is <span style={{color: "red"}}>{pname}</span></h1>
                <h1>I have <span style={{color: "red"}}>{pmoves}</span> moves</h1>
                <select value={pnum} onChange={changed}>
                    <option value="1">1</option>
                    <option value="25">25</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </>
    )
}

export default Poke;