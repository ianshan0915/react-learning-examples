import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// main app
// import App from './example2-states/App';
import App from './example4-styles/App';
App.defaultProps = {
    name: 'Ian Shen'
};
ReactDOM.render(<App />, document.getElementById('app'))