import { aLC } from "./newStore";

export function asyncAddLabourCharge(dvalue) {
    return async function (dispatch, getState){
        await new Promise(r=> setTimeout(r, 3000));
        dispatch(aLC(dvalue)); // aLC is action creater
    }
}