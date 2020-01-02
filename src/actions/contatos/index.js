import { ACTION_STORE_CONTATOS,FETCH_PRODUCTS_SUCCESS } from '../actionsCreators';
export const storeContatos = ( name, phone ) => {

     const contatos = [{
                id:1,
                name,
                phone,
            }];

       const payload = {
               type:ACTION_STORE_CONTATOS,
               contatos,
       }

       return payload;
}

export function fetchContatos() {
        return dispatch => {
          return fetch("http://localhost:30001/api/contatos")
        //     .then(handleErrors)
            .then(res => res.json())
            .then(json => {
              dispatch(fetchProductsSuccess(json.products));
              return json.products;
            })
            .catch(error => dispatch(console.log(error)));
        };
}

// console.log(fetchContatos())
export const fetchProductsSuccess = contatos => ({
        type: FETCH_PRODUCTS_SUCCESS,
        payload:  [{contatos}]
      });
