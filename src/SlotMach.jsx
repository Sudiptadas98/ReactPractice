import React from "react";


function SlotM(props){
    let{x,y,z} = props;

    if(x == y && y == z){
        return(
            <>
                <div className="innerslot">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1>This is a Match</h1>
                    <hr/>
                </div>
            </>
        );
    }else{
        return(
            <>
            <div className="innerslot">
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is Not a Match</h1>
                <hr/>
            </div>
        </> 
        );
    }
}

export default SlotM;