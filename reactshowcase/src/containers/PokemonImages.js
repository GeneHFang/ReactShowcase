import React, { Fragment } from 'react'

const PokemonImages = (props) => {
    return(
        <Fragment>
            {props.pokes.map((name,index) => {
                if (props.pokes.length===index+1){
                    return <div ref={props.refcallback} key={name}>{name}</div>
                }
                else{
                    return <div key={name}>{name}</div>
                }
            })}
        </Fragment>

    );
};

export default PokemonImages;