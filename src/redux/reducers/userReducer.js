import {FETCH_USER_INFO_SUCCESS, FETCH_USER_INFO_REQUEST, FETCH_USER_INFO_FAILURE} from "./userActions"
const INITIAL_STATE = {_id: '123123123', name: "Priytesh Prasad", quote:"Stay cool keep rocking", yearbooks: [{_id:'1', name:"NITRR"},{_id:'2', name:"JNV"}], }
export default userReducer = (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        case FETCH_USER_INFO_REQUEST:
            return state
        case FETCH_USER_INFO_SUCCESS:
            return state
        case FETCH_USER_INFO_FAILURE:
            return state
        default:
            return state
    }
}