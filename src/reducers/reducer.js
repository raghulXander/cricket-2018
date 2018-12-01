//Reducers

import { combineReducers } from 'redux';

import commentaryReducers from './commentary.reducer';

const mainReducers = combineReducers({
    commentaryReducers
});

export default mainReducers;