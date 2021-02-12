import React from 'react';
import "./index.css";


function Gallery() {

    const img1 = "https://picsum.photos/200/200";
    const img2 = "https://picsum.photos/300/200";
    const img3 = "https://picsum.photos/250/200";


    return (
        <>
            <div className="images">
                <img src={img1} alt="randomimage" />
                <img src={img2} alt="randomimage" />
                <img src={img3} alt="randomimage" />
            </div>
        </>
    );
}

export default Gallery;