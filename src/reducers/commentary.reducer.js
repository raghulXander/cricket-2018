// Commentary Reducers

import { RECIEVE_COMMENTARY_SUCCESS, RECIEVE_COMMENTARY_ERROR, GET_COMMENTARY} from '../actions/commentary.action';

const intitalState = {
    commentary: null,
    error: null,
    loading: false
}

const commentaryReducer = (state = intitalState, action) => {
    switch (action.type) {
        case GET_COMMENTARY:
            return Object.assign({}, state, {
                loading: true
            })
        case RECIEVE_COMMENTARY_SUCCESS:
            return Object.assign({}, state, {
                commentary: action.data,
                loading: false
            })
        case RECIEVE_COMMENTARY_ERROR:
            return Object.assign({}, state, {
                error: action.error,
                loading: false
            })
        default:
            return intitalState
    }
}

export default commentaryReducer;
