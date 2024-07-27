import { applyMiddleware, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";


const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)))


// const rootReducer = combineReducer({counter: counterReducer, city: cityReducer})
// store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
/**
 * const cityReducer = (state = {info: null}, action) =>{}
 * const count = useSelector((state)=>state.counter.count)
 */