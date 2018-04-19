import React from 'react';
import ReactDOM from 'react-dom';

// main app
// import App from './example2-states/App';
import App from './example3-events-handling/App';
App.defaultProps = {
    name: 'Ian Shen'
};
ReactDOM.render(<App />, document.getElementById('app'))