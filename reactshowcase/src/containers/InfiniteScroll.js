import React, { Fragment, useState, useRef, useCallback } from 'react';
import '../css/InfScroll.css';
import PokemonImages from './PokemonImages';
import usePokeSearch from '../hooks/usePokeSearch';

const InfiniteScroll = () => { 
    const [page, setPage] = useState(1);
    
    const {
            pokes,
            hasMore,
            loading,
            error
        } = usePokeSearch(page);

    const observer = useRef();
    const lastPokemonElementRef = useCallback(node => {
        if (loading) { return; }
        if (observer.current) { observer.current.disconnect();}
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage+1);
            }
        })
        if (node) {observer.current.observe(node);}
        console.log(node);

    }, [loading, hasMore]);

    usePokeSearch(page);
    return (
        <Fragment>
            <p className="InfScroll">
                <input hidden type="text" onChange={(e)=>setPage(e.target.value)} placeholder="Type anything here" ></input>
            </p>
                <PokemonImages pokes={pokes} refcallback={lastPokemonElementRef}/>
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </Fragment>
    );
}

export default InfiniteScroll;