// Commentary Actions

export const GET_COMMENTARY = 'GET_COMMENTARY';
export const RECIEVE_COMMENTARY_SUCCESS = 'RECIEVE_COMMENTARY_SUCCESS';
export const RECIEVE_COMMENTARY_ERROR = 'RECIEVE_COMMENTARY_ERROR';
export const LOADING = 'LOADING';
const BASEURL = 'https://livescore.sportstarlive.com/api/cricket/commentary/pakistan-v-new-zealand-test-series-in-uae-2018/44249/pakistan-vs-new-zealand'

export const receivePlaces = (context, url) => ({
    type: RECEIVE_PLACES, context, url
})
  
export const receivePlace = (place) => ({
    type: RECEIVE_PLACE, context: place
})
  
export const updateUrl = (url) => ({
    type: UPDATE_URL, url
})