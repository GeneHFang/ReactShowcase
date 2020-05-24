import { createStore, combineReducers } from 'redux';


//Reducers
import colReducer from '../reducers/column';


const root = combineReducers({
    colReducer,
});


const store = createStore(root);
export default store;
