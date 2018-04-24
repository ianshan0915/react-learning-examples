import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import StyledDrawer from './StyledDrawer';

const drawerWidth = 200;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
});

class App extends Component {    
    render() {
        return (
           <StyledDrawer { ...this.props } ></StyledDrawer>
        );
    }
}

export default withStyles(styles)(App);