import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { AppBar, Toolbar, IconButton, Typography, Button } from "material-ui";
import { Menu, MenuItem } from "material-ui";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
}
function UserMenu(props) {
    const { anchorEl, handleClose, handleMenu, handleLogin } = props;
    const open = Boolean(anchorEl);
    const items = [
        {id: 1, name: 'Profile', action: handleClose},
        {id: 2, name: 'Account', action: handleClose},
        {id: 3, name: 'Log out', action: handleLogin},
    ];
    return(
        <div>
            <IconButton onClick={handleMenu} color="inherit" aria-label="Menu">
                <AccountCircle />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {
                    items.map((item) => <MenuItem key={item.id} onClick={item.action}>{item.name}</MenuItem>)
                }
            </Menu>
        </div>
    )
}

function ButtonAppBar(props) {
    const { anchorEl, isLoggedIn, classes, handleLogin } = props;
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        AppBar
                    </Typography>
                    { 
                        isLoggedIn ? (
                            <UserMenu {...props}>
                            </UserMenu>
                        ) : (
                            <Button color="inherit" onClick={handleLogin}>Login</Button>
                        )
                    }
                </Toolbar>     
            </AppBar>
        </div>
    );
}
class App extends Component {
    constructor(props) {
        super(props);
        // set state
        this.state = {
            isLoggedIn: false,
            anchorEl: null,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
    }
    handleLogin = () => {
        console.log('logged in/out!!!');
        this.setState({
            isLoggedIn: !this.state.isLoggedIn,
        });
        if (this.state.anchorEl) {
            this.setState({ anchorEl: null });
        }
    };
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        const { anchorEl, isLoggedIn } = this.state;
        const props = {
            isLoggedIn: isLoggedIn,
            anchorEl: anchorEl,
            handleLogin: this.handleLogin,
            handleClose: this.handleClose,
            handleMenu: this.handleMenu,
            classes: this.props.classes,
        };
        return(
            <ButtonAppBar {...props} >
            </ButtonAppBar>
        )
    }
}

export default withStyles(styles)(App);
