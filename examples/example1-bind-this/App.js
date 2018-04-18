import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
handleClick() {
    console.log('From handleClick()', this);
    this.setState({numOfClicks: this.state.numOfClicks + 1});
  }

render() {
    console.log('From render()', this);
    const { name } = this.props
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
        <p>Number of Times Clicked = {this.state.numOfClicks}</p>
      </div>
    )
  }
}
export default App;