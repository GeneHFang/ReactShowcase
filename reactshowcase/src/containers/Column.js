import React, { useState } from 'react';
import { connect } from 'react-redux';
import { colKey } from '../redux/reducers/column';
import Card from '../components/Card';
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

//Container for Card Components 
const Column = (props) => {
    //Controlled form (only text input for now)
    const [cardInfo, setCardInfo] = useState("");

    //Call dispatch to add card
    const addCard = (columnNum) => {
        props.addToColumn(cardInfo, columnNum);
    }

    //Renders all Cards present in state. Passes remove function from dispatch as a prop
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