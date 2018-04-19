import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './example2-states/App';
App.defaultProps = {
    name: 'Ian Shen'
};
ReactDOM.render(<App />, document.getElementById('app'))