import React from 'react';

const Card = (props) =>{
    return (
    <div className="tc bg-light-green dib pa3 ma2 grow bw2 shadow-5">
        <div>
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robots"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    </div>
    );
    
}



export default Card;