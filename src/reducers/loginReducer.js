import { ACTION_LOGIN,ACTION_REGISTER }  from '../actions/actionsCreators';
const initialState = {
       user:[],
       token:'',      
}

// action.type action.nome_state

export const loginReducer = (state = initialState, action) => {
        
        switch (action.type) {
            case ACTION_LOGIN:
                 return {
                    ...state,
                     token: action.token
                 }
             break;
        
            default:
                return state;
        }

}

