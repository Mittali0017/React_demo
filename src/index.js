import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './App';
import Side from './sidebar'
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Apps />, document.getElementById('root'));
ReactDOM.render(<Side />, document.getElementById('side'));
//registerServiceWorker();
