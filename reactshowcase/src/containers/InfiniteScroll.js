import React, { Fragment, useState } from 'react';
import '../css/InfScroll.css';
import PokemonImages from './PokemonImages';
import usePokeSearch from '../hooks/usePokeSearch';

const InfiniteScroll = () => { 
    const [page, setPage] = useState('1');

    usePokeSearch(page);
    return (
        <Fragment>
            <p className="InfScroll">
             <input type="text" onChange={(e)=>setPage(e.target.value)}></input>
            </p>
            <PokemonImages/>
        </Fragment>
    );
}

export default InfiniteScroll;