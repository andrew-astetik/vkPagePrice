import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Render = (state) => ReactDOM.render(
    <React.StrictMode>
        <App s={state}/>
    </React.StrictMode>,
    document.getElementById('root')
)

export default Render;