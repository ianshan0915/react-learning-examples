## examples to demonstrate how events handling works in React
### using es6 arrow func
```javascript
// this.handleClick = this.handleClick.bind(this, props.name);
// not using arrow func
handleClick(param, e) {
    console.log('clicked', e);
    console.log('params', param);
}
//...
<button onClick={this.handleClick}>test</button>
```
```javascript
// using es6 arrow function
handleClick = (param) => (e) => {
    console.log('event', e);
    console.log('param', param);
}
//....
<button onClick={this.handleClick(props.name)}>test</button>
```

