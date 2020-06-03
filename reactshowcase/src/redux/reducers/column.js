//Default values
const defaultState = {
    firstCol:[],
    secondCol:[],
    thirdCol:[],
}

//keys for columns
export const colKey = {
    1:"firstCol",
    2:"secondCol",
    3:"thirdCol",
}

//Reducer for column page
const colReducer = (prevState = defaultState, action) => {
    switch(action.type){
        
        case "ADD_TO_COL":
            let copy = [...prevState[colKey[action.key]], action.payload];
            return {...prevState, [colKey[action.key]]:copy};
        
        case "REMOVE_FROM_COL":
            let tempRemove = [...prevState[colKey[action.key]]];
            tempRemove.splice(action.index,1);
            return {...prevState, [colKey[action.key]]:tempRemove};

        case "CHANGE_COL":
            console.log('here');
            let tempChange = [...prevState[colKey[action.removeKey]]];
            let temp = tempChange.splice(action.index,1);
            let newCol = [...prevState[colKey[action.addKey]]];
            newCol.push(temp);
            return {...prevState,[colKey[action.removeKey]]:tempChange, [colKey[action.addKey]]:newCol};

        //by default return the same state
        default:
            return prevState;
    }
}

//export the reducer
export default colReducer;