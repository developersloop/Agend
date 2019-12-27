import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import Routes from './routes/index';
import { Store } from './store/index';
import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
                <Provider store={Store}>
                <BrowserRouter>
                    <Routes/>     
                </BrowserRouter>
                </Provider>    
            ,document.getElementById('root')
);


serviceWorker.unregister();
