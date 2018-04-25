import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import StyledDrawer from './StyledDrawer';

const drawerWidth = 200;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
});

class App extends Component {    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {/* <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            Clipped drawer
                        </Typography>
                    </Toolbar>
                </AppBar>             */}
                <StyledDrawer { ...this.props } ></StyledDrawer>
            </div>
        );
    }
}

export default withStyles(styles)(App);