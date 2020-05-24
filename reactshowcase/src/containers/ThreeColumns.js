import React, { Fragment } from 'react';
import Column from '../components/Column';



const ThreeColumns = () => {
    const renderCols = (x) => {
        let arr = [];
        for (let i = 1 ; i <= x ; i++){
            arr.push(i);
        }  
        return arr.map(i => {
            return <Column num={i} key={i}/>
        });
    };

    return(
        <Fragment>
            {renderCols(3)}
        </Fragment>
    )
};

export default ThreeColumns;