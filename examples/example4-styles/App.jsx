import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Paper, Button, FormControl, TextField } from 'material-ui';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    paper: {
        height: 160,
        width: 300,
        margin: 'auto',
    },
    button: {
        marginTop: theme.spacing.unit*2,
    },
  });

class App extends Component {
    constructor(props) {
        super(props);
        //set default state
        // bind function
    }

    handleSubmit = (e) => {
        console.log(e);
        // other things
    }

    render() {
        const props = {
            username: 'Username',
            passwd: 'Password'
        };
        const { classes } = this.props;
        return(
            <Paper className={classes.paper} >
                <FormControl onSubmit={this.handleSubmit} >
                    <TextField label={props.username} />
                    <TextField label={props.passwd} type="password" />
                    <Button variant="raised" color="primary" className={classes.button}>Login </Button>
                </FormControl>
            </Paper>
        )
    }
}

const App = withStyles(styles)(App);

export default App;
