import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import Routes from './routes/index';
// import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
                <BrowserRouter>
                    <Routes/>     
                </BrowserRouter>    
            ,document.getElementById('root')
);


serviceWorker.unregister();
