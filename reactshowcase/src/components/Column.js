import React from 'react';
import { connect } from 'react-redux';
import { colKey } from '../redux/reducers/column';
import {  }

const msp = (state) => {
    return({
        firstCol: state.colReducer,
    });
};


const Column = (props) => {

    const addCard = () => {
        let cardObj = {};
    }

    return(
        <div>
            Column {props.num}

            <button onClick={addCard(props.num)}>Add Card</button>
        </div>
    );
};

export default connect(msp)(Column);