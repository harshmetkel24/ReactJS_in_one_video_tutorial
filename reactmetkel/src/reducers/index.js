// all the reducers should be imported in index file
// because we know there is one and only one root reducers

import changeNumber from './upDown';
import { combineReducers } from 'redux';

// this is the main object containing all reducer functionalities
const rootReducers = combineReducers({
    changeNumber,
});

export default rootReducers;
