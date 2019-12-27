import { ACTION_LOGIN,ACTION_REGISTER,BASE_URL } from '../actions/actionsCreators';
import axios from 'axios';

export const submitLogin = (email,password) => {
        
        Login(email,password);

        let token = localStorage.getItem('token');
        
        const payload = {
            type:ACTION_LOGIN,
            token,
        }

        return payload
}


export const registerUser = (...params) => {
     
    const user = params[0];
    const payload  = {
          type:ACTION_REGISTER,
          user,
    }

    return payload;
}

async function Login(email,password){

    localStorage.removeItem('token');

        const data = {
               email,
               password,
        }
       const response = await axios.post(BASE_URL,data,{
            headers: {
                'Content-Type': 'application/json',
            }
       });

       localStorage.setItem('token',response.data.token);
      

}