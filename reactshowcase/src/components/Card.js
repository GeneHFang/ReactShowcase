import React from 'react';


const Card = (props) => {
    return(
        <div>
            {props.info}
            <button onClick={()=>props.remove(props.col,props.index)}>Remove Card</button>
        </div>
    );
};


export default Card;