import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { Grid } from 'material-ui';

const styles = theme => ({
    // button: {
    //   margin: theme.spacing.unit,
    // },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        // width: 200,
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
        return(
            <Grid container justify='center' alignItems='center'>
                <FormControl onSubmit={this.handleSubmit} >
                    <TextField label={props.username} />
                    <TextField label={props.passwd} type="password" />
                    <Grid container direction='row'>
                        <Button>Login </Button>
                        <Button>Forget Password </Button>
                    </Grid>
                </FormControl>
            </Grid>
        )
    }
}

export default withStyles(styles)(App);
