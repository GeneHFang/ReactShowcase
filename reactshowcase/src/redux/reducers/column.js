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
            return {...prevState, [colKey[action.key]]:action.payload};
        
        case "REMOVE_FROM_COL":
            let tempRemove = [...prevState[action.key]];
            tempRemove.splice(action.index,1);
            return {...prevState, [colKey[action.key]]:tempRemove};

        case "CHANGE_COL":
            let tempChange = [...prevState[action.removeKey]].pop();
            return {...prevState, [colKey[action.addKey]]:tempChange};

        //by default return the same state
        default:
            return prevState;
    }
}

//export the reducer
export default colReducer;