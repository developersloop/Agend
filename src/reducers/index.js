import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { contatoReducer } from './contatoReducer';
import { userReducer } from './userReducer';


export const Reducers = combineReducers({
       Login: loginReducer,
       contatos: contatoReducer,
       users:userReducer
})