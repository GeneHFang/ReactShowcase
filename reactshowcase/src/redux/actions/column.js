/**
 * Adds a Card component with info from args to specific col
 * @param {String(for now)} info - info to be added
 * @param {Number} colNum - Column to which this component is being added to
 */
export const addToColumn = (info, colNum) => {
    return {
        type:"ADD_TO_COL",
        key: colNum,
        payload: {info:info}
    };
};

/**
 * Removes a specific card from a column
 * @param {Number} colNum - Column to which this component is being removed from
 * @param {Number} index - Current index position of the card being removed 
 */
export const removeFromColumn = (colNum, index) => {
    return {
        type:"REMOVE_FROM_COL",
        key: colNum,
        index: index
    }
};

