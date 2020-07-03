import { useEffect, useState }from 'react';
import axios from 'axios';

const usePokeSearch = (pageNum) => { 

    useEffect(()=>{
        let cancel;
        axios({
            method: 'GET',
            url:`https://pokeapi.co/api/v2/pokemon?offset=${10*parseInt(pageNum)-1}limit=20`,
            cancelToken: new axios.CancelToken(c=> cancel=c),
        }).then(res=> {
            console.log(res.data);
        }).catch(e=> {
            if (axios.isCancel(e)) return;
        })
        return ()=> cancel();
    }, [pageNum])

    return null; 
}


export default usePokeSearch;