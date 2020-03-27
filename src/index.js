import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import "bulma/bulma.sass";
import "./index.scss";
import App from './App';


//ReactDOM.render(<App />, document.getElementById('root'));

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
)
