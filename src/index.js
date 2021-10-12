import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader';
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

module.hot.accept()