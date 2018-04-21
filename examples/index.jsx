import React from 'react';
import ReactDOM from 'react-dom';

// main app
// import App from './example2-states/App';
import App from './example4-styles/AppAnt';
App.defaultProps = {
    name: 'Ian Shen'
};
ReactDOM.render(<App />, document.getElementById('app'))