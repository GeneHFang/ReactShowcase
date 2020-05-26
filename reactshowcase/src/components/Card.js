import React from 'react';

//Card component that is added to each column individually
const Card = (props) => {
    return(
        <div>
            {props.info}
            <button onClick={()=>props.remove(props.col,props.index)}>Remove Card</button>
        </div>
    );
};


export default Card;