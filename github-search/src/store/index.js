import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/reducers";


const store = createStore(
    userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);

export default store;
