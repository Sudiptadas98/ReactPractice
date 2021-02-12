import React from 'react';
import Heading from "./Heading";
import Gallery from "./Gallery";
import Grettings from "./Grettings";
import Calc from "./Calc";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";
import SlotM from "./SlotMach";
import Slotdata from "./Slotdata";
import Ccount from "./Ccount";
import GetTime from "./GetTime";
import AutoTime from "./AutoTime";
import Form from "./Form";
import Sform from "./Sform";
import Todo from "./Todo";
import GNote from "./GNote";
import Context from "./Context";
import Poke from "./Poke";

import RoutePage from './RoutePage';


// function ncard(val) {
//     return (
//         <Card
//             img={val.img}
//             title={val.title}
//             name={val.name}
//             link={val.link}
//         />
//     );
// }

function App() {
    return (
        <>
            <nav className="nav">
                <h1>
                    List of top 5 Web Series
                </h1>
            </nav>
            {/* <Heading />
            <Grettings />
            <Gallery />
            <Calc /> */}
            <div className="cards">
                {Sdata.map((val) => {
                    return (
                        <Card
                            key={val.id}
                            img={val.img}
                            title={val.title}
                            name={val.name}
                            link={val.link}
                        />
                    );
                })}

            </div>
            <div className="slotmachine">
                {Slotdata.map((val) => {
                    return(
                        <SlotM key={val.id} x={val.x} y={val.y} z={val.z} />
                    );
                })}
            </div>
            <hr/>
            <Ccount/>
            <hr/>
            <GetTime/>
            <hr/>
            <AutoTime/>
            <hr/>
            <Form/>
            <hr/>
            <Sform/>
            <hr/>
            <Todo/>
            <hr/>
            <GNote/>
            <hr/>
            <Context/>
            <hr/>
            <Poke/>
            <hr/>
            <RoutePage/>
        </>
    );
}

export default App;