import React, { useState } from "react";


function SearchPage() {
    const [img, setImg] = useState("");
    const inputEvent= (event) => {
        setImg(event.target.value);
    }
    const imgsrc = `https://source.unsplash.com/400x300/?${img}`;
    return (
        <>
            <div style={{ textAlign: "center", paddingTop: "50px", height: "60vh" }}>
                <input style={{padding: "5px"}} 
                type="text" 
                placeholder="Search Anything.." 
                value={img}
                onChange={inputEvent}/>
                <br/>
                <br/>
                <br/>
                {img === "" ? null : <img src={imgsrc} alt="searchimg"/>}
            </div>
        </>
    )
}

export default SearchPage;