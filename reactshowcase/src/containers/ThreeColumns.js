import React, { Fragment } from 'react';
import Column from './Column';


//Container for X number of columns (temporarily 3)
const ThreeColumns = () => {

    //Render each column and assign it a number
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