import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { AppBar, Toolbar, IconButton, Typography, Button } from "material-ui";
import { Menu, MenuItem } from "material-ui";
import StyledDrawer from '../example6-sider/StyledDrawer';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
    appBar: {
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    userDiv: {
        position:'absolute',
        right:0,
    }
});
function UserMenu(props) {
    const { anchorEl, handleClose, handleMenu, handleLogin, classes } = props;
    const open = Boolean(anchorEl);
    const items = [
        {id: 1, name: 'Profile', action: handleClose},
        {id: 2, name: 'Account', action: handleClose},
        {id: 3, name: 'Log out', action: handleLogin},
    ];
    return(
        <div className={classes.userDiv}>
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
    const { anchorEl, isLoggedIn, classes, handleLogin, drawerOpen, handleDrawerClose, handleDrawerOpen } = props;
    return(
        <AppBar className={classNames(classes.appBar, drawerOpen && classes.appBarShift)}>
            <Toolbar disableGutters={!drawerOpen}>
                <IconButton 
                    className={classes.menuButton}
                    onClick={handleDrawerOpen}
                    className={classNames(classes.menuButton, drawerOpen&& classes.hide)}
                    color="inherit"
                    aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                    AppBar
                </Typography>
                { 
                    isLoggedIn ? (
                        <UserMenu {...props}>
                        </UserMenu>
                    ) : (
                        <Button className={classes.userDiv} color="inherit" onClick={handleLogin}>Login</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}
class App extends Component {
    constructor(props) {
        super(props);
        // set state
        this.state = {
            isLoggedIn: false,
            drawerOpen: false,
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

    handleDrawerOpen = () => {
        this.setState({ drawerOpen: true });
    };

    handleDrawerClose = () => {
        this.setState({ drawerOpen: false });
    };

    render() {
        const { anchorEl, isLoggedIn, drawerOpen } = this.state;
        const props = {
            isLoggedIn: isLoggedIn,
            anchorEl: anchorEl,
            drawerOpen: drawerOpen,
            handleLogin: this.handleLogin,
            handleClose: this.handleClose,
            handleMenu: this.handleMenu,
            handleDrawerClose: this.handleDrawerClose,
            handleDrawerOpen: this.handleDrawerOpen,
            classes: this.props.classes,
            theme: this.props.theme,
        };
        return(
            <div className={props.classes.root}>
                <ButtonAppBar {...props} ></ButtonAppBar>
                <StyledDrawer {...props} ></StyledDrawer>
                {/* <main className={props.classes.content}>
                    <div className={props.classes.toolbar} />
                    <Typography noWrap>{'Content! Content! Content'}</Typography>
                </main> */}
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(App);
