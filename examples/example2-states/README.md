# How to use props in the components
### set state in the constructor()
~~~~javascript
// name: '' added for empty the input after hit 'Enter'
constructor(props) {
    super(props);
    // set state
    this.state = {
        name: '',
        todos: [],
    };
    // bind functions
}
~~~~
### update state with setState()
```javascript
handleChange(event) {
    this.setState({name: event.target.value});
}
onSubmit(e) {        
    //e.preventDefault();
    this.setState({
        name: '',
        todos: [...this.state.todos, {
            'id': Date.now(),
            'name': this.state.name,
        }]
    });
};
```
### map and list
```javascript
const TodoList = props => (
    <ul>
      {
        props.items.map((item) => <li key={item.id}>{item.name}</li>)
      }
    </ul>
);
```
