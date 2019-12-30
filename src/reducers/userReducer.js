import { ACTION_REGISTER, BASE_URL }  from '../actions/actionsCreators';
import axios from 'axios';
const initialState = {
       user:[
        //    {
        //        id:1,
        //        name:'vitor vicente',
        //        email:'vi_dualcore@hotmail.com'
        //    }
       ]
}

export const userReducer = (state = initialState,action) => {

    const user = [];
    // console.log(action.user);
    user.push(action.user);
     switch (action.type) {
         case  ACTION_REGISTER:
             return {
                 user,
              }         
         break;
     
         default:
            return state;
         break;
     }
}
