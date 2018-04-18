import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './examples/example1-bind-this/App';
App.defaultProps = {
    name: 'Ian Shen'
};
ReactDOM.render(<App />, document.getElementById('app'))