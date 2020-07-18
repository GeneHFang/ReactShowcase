import React, { Fragment } from 'react';
import '../css/InfScroll.css';

const PokemonImages = (props) => {
    return(
        <Fragment>
            {props.pokes.map((poke,index) => {
                if (props.pokes.length===index+1){
                    return <div className="Pokemon" key={poke.url}  ref={props.refcallback}>
                            <h3>{poke.name.toUpperCase()}</h3><img src={poke.url} alt={poke.url}/>
                            </div>
                }
                else{
                    return <div className="Pokemon"  key={poke.url}  >
                            <h3>{poke.name.toUpperCase()}</h3><img src={poke.url} alt={poke.url}/>
                          </div>
                }
            })}
        </Fragment>

    );
};

export default PokemonImages;