import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        // set state
        this.state = {
            name: '',
            todos: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({name: event.target.value});
    }
    onSubmit(e) {        
        e.preventDefault();
        this.setState({
            name: '',
            todos: [...this.state.todos, {
                'id': Date.now(),
                'name': this.state.name,
            }]
        });
    };

    render() {
        const props = this.props;
        return (
            <div>
                <h2>{props.name}</h2>
                <form onSubmit={this.onSubmit}>
                    <input value = {this.state.name} onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
                <TodoList items={this.state.todos}/>
            </div>
        )
    }
}

export default App;
