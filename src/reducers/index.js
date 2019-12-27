import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { userReducer } from './userReducer';


export const Reducers = combineReducers({
       Login: loginReducer,
       user: userReducer
})