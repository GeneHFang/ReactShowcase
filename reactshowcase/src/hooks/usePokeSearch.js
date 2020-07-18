import { useEffect, useState, }from 'react';
import axios from 'axios';

const usePokeSearch = (pageNum) => { 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pokes, setPokes] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    

    useEffect(()=>{
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: 'GET',
            url:`https://pokeapi.co/api/v2/pokemon?offset=${5*(parseInt(pageNum)-1)}limit=5`,
            cancelToken: new axios.CancelToken(c=> cancel=c),
        }).then(res=> {
            res.data.results.forEach(res => {
                axios({
                    method: 'GET',
                    url: res.url
                }).then( res =>
                    {
                        let pokemon = {
                            name: res.data.forms[0].name,
                            url: res.data.sprites.front_default
                        }
                        setPokes(prevPokes=> {
                            return [...prevPokes, pokemon];
                        })
                    }
                )
                
            })
            // setPokes(prevPokes => {
            //     return [...new Set([...prevPokes, ...res.data.results.map(pokeObj => pokeObj.name)])];
            // })
            setHasMore(res.data.results.length > 0);
            setLoading(false);
            // console.log(res.data);
        }).catch(e=> {
            if (axios.isCancel(e)) return;
            setError(true);
        })
        return ()=> cancel();
    }, [pageNum])

    return {
        loading, error, pokes, hasMore
    }; 
}


export default usePokeSearch;