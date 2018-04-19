import React, { Component }from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        //set default state
        this.handleClick = this.handleClick.bind(this, props.name);
    }

    // handleClick(param, e) {
    //     console.log('clicked', e);
    //     console.log('params', param);
    // }
    handleClick = (param) => (e) => {
        console.log('event', e);
        console.log('param', param);
    }

    render() {
        const props = this.props;
        return(
            <div>
                <h2>{props.name}</h2>
                <button onClick={this.handleClick(props.name)}>test</button>
            </div>
        );
    }
}

export default App;
