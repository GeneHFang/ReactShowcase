export const addToColumn = (info, colNum) => {
    return {
        type:"ADD_TO_COL",
        key: colNum,
        payload: {info:info}
    };
};


export const removeFromColumn = (colNum, index) => {
    return {
        type:"REMOVE_FROM_COL",
        key: colNum,
        index: index
    }
};

