import { ACTION_STORE_CONTATOS, FETCH_PRODUCTS_SUCCESS }  from '../actions/actionsCreators';


const initialState = {
       contatos:[]
}

export const contatoReducer = (state = initialState,action) => {
    const contatos = action.contatos;
     switch (action.type) {
         case  ACTION_STORE_CONTATOS:
             return {
                 ...state,
                 contatos,
              }         
        case FETCH_PRODUCTS_SUCCESS:
            // console.log('ad')
            return {
                  ...state,
                  contatos:action.contatos
            }
     
         default:
            return {
                 ...state
            }
     }
}
