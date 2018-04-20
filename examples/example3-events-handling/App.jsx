import React, { Component }from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        //set default state
        this.state = {
            toggleName: 'yes',
        };
        this.handleClick = this.handleClick.bind(this, props.name);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    // handleClick(param, e) {
    //     console.log('clicked', e);
    //     console.log('params', param);
    // }
    handleClick = (param) => (e) => {
        console.log('event', e);
        console.log('param', param);
    }
    handleMouseEnter = (e) => {
        console.log('Mouse entered!');
    }
    handleMouseLeave = (e) => {
        console.log('Mouse left!');
    }
    handleCopy = (e) => {
        console.log(e.clipboardData);
    }
    handleToggle = (e) => {
        console.log('toggle');
        if (this.state.toggleName === 'yes') {
            this.setState({toggleName: 'no'})
        } else {
            this.setState({toggleName: 'yes'})
        }
        
    }
    render() {
        const props = this.props;
        return(
            <div>
                <h2>{props.name}</h2>
                <input readOnly type="text" value = {props.name} onCopy = {this.handleCopy}/>
                <button onClick={this.handleToggle} >{this.state.toggleName}</button>
                <button onClickCapture={this.handleClick(props.name)} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >test</button>
            </div>
        );
    }
}

export default App;
