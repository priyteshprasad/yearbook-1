const FETCH_USER_INFO_REQUEST = "FETCH_USER_INFO_REQUEST"
const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS"
const FETCH_USER_INFO_FAILURE = "FETCH_USER_INFO_FAILURE"

const APIKEY = "3b134c95";
const BASE_URL = `http://www.omdbapi.com/?apikey=${APIKEY}`;

export const fetchUser = (query) => async (dispatch) => { //returns async function called thunk
    dispatch({ type: FETCH_USER_INFO_REQUEST }); //update the state
    try {
      const response = await axios.get(`${BASE_URL}&s=${query}`); //make api call
      dispatch({ type: FETCH_USER_INFO_SUCCESS, payload: response.data.Search }); //upadte the state
    } catch (error) {
      dispatch({ type: FETCH_USER_INFO_FAILURE, payload: error.message }); //update state
    }
  };