import React, { useState } from 'react';
import { connect } from 'react-redux';
import { colKey } from '../redux/reducers/column';
import Card from './Card';
import { addToColumn, removeFromColumn } from '../redux/actions/column';

const msp = (state) => {
    return({
        threeCol: state.colReducer,
    });
};

const mdp = {
    addToColumn,
    removeFromColumn
};


const Column = (props) => {

    const [cardInfo, setCardInfo] = useState("");

    const addCard = (columnNum) => {
        props.addToColumn(cardInfo, columnNum);
    }

    const renderCards = () => {
        return props.threeCol[colKey[props.num]].map((card,index)=>{
            return <Card info={card.info} col={props.num} remove={props.removeFromColumn} index={index}/>
        });
    }

    return(
        <div>
            Column {props.num}
            {renderCards()}
            <input type="text" value={cardInfo} onChange={(e)=>setCardInfo(e.target.value)}/>
            <button onClick={()=>addCard(props.num)}>Add Card</button>
        </div>
    );
};

export default connect(msp,mdp)(Column);