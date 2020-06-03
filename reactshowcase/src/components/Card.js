import React from 'react';

//Card component that is added to each column individually
const Card = (props) => {
    return(
        <div>
            {props.info}
            <button onClick={()=>props.remove(props.col,props.index)}>Remove Card</button>
            <br/>
            <button disabled={props.col === 1} onChange={()=>props.change(props.col,props.col-1,props.index)} >&lt;</button>
            <button disabled={props.col === 3} onChange={()=>props.change(props.col,props.col+1,props.index)} >&gt;</button>
        </div>
    );
};


export default Card;