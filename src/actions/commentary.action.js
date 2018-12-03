// Commentary Actions
import axios from 'axios';
import {isEmpty} from 'lodash';

export const GET_COMMENTARY = 'GET_COMMENTARY';
export const RECIEVE_COMMENTARY_SUCCESS = 'RECIEVE_COMMENTARY_SUCCESS';
export const RECIEVE_COMMENTARY_ERROR = 'RECIEVE_COMMENTARY_ERROR';
const BASEURL = 'https://livescore.sportstarlive.com/api/cricket/commentary/pakistan-v-new-zealand-test-series-in-uae-2018/44249/pakistan-vs-new-zealand'

export const getCommentaryData = () => ({
    type: GET_COMMENTARY
})
  
export const receiveCommentaryData = (data) => ({
    type: RECIEVE_COMMENTARY_SUCCESS, data
})

export const receiveCommentaryError = (error) => ({
    type: RECIEVE_COMMENTARY_ERROR, error
})
  
export const getData = () => {
    return (dispatch) => {
        axios.get(BASEURL)
        .then(res => {
            
            if (res.status && !isEmpty(res.data.commentarydetails)) {
                dispatch(receiveCommentaryData(res.data.commentarydetails));
            }
        })
        .catch(error => {
            dispatch(receiveCommentaryError(error));
        });
    }

}
