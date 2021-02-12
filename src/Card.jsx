import React from 'react';

function Card(props) {
    return (
        <>
            
                <div className="card">
                    <img src={props.img} alt="poster" />
                    <h4>{props.title}</h4>
                    <p>{props.name}</p>
                    <br />
                    <a href={props.link} target="_blank"><button>Watch Trailer Now</button></a>
                </div>
            
        </>
    );
}

export default Card;