import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button, Popover } from "antd";
import './AppAnt.css';

const { Header, Footer, Sider, Content } = Layout;

function UserMngt (props) {
    const { classes, handleClose, handleLogout } = props;
    const userItems = [
        {id:"1", name:"Profile", action:handleClose},
        {id:"2", name:"Account", action:handleClose},
        {id:"3", name:"Log out", action:handleLogout},
    ];
    const menulist = (
        userItems.map((item) => 
            <li key={item.id} onClick={item.action}><span>{item.name}</span></li>
        )
    );
    return(
        <Popover 
            content= { menulist } >
            <Button icon='user' className={classes.userIcon} ></Button> 
        </Popover>
    );
}

function StyledHeader (props) {
    const { classes, theme, mode, dfkey } = props;
    const menuItems = [
        {'id':1,'name':'Personalia'},
        {'id':2,'name':'History'},
        {'id':3,'name':'Analysis'},
        {'id':4,'name':'Reports'},
    ];
    return(
        <Header>
            <div className={classes.logo} />
            <Menu theme={theme} mode={mode} defaultSelectedKeys={dfkey} className={classes.menu} >
                { menuItems.map((item) => <Menu.Item key={item.id}>{item.name}</Menu.Item>) }
                <UserMngt {...props}></UserMngt>
            </Menu>
        </Header>
    );
}

function StyledContent (props) {
    const { classes } = props;
    const bcItems = [
        {'id':'a' ,'name':'Diseases'},
        {'id':'b','name':'Medications'},
        {'id':'c','name':'Lab tests'},
    ];
    return(
        <Content className={classes.content} >
            <Breadcrumb className={classes.bcrumb} >
                { bcItems.map((item) => <Breadcrumb.Item key={item.id} >{item.name}</Breadcrumb.Item>) }
            </Breadcrumb>
            <div className={classes.conDiv} >Content</div>
        </Content>
    );
}
function StyledFooter (props) {
    const {msg, classes} = props;
    
    return(
        <Footer className={classes.footer} >
            {msg}
        </Footer>
    );
}
class App extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        console.log('test');
    }

    render() {
        const props = {
            classes: {
                lyout: 'layout',
                logo: 'logo',
                menu: 'menu',
                userIcon: 'userIcon',
                content: 'content',
                conDiv: 'contentDiv',
                brcrumb: 'breadcrumb',
                footer: 'footer',
            },
            handleClose: this.handleClose,
            msg: 'This is a test footer!!',
            theme: 'dark',
            mode: 'horizontal',
            dfkey: ['1'],
        };

        return (
            <Layout className={props.classes.lyout} >
                <StyledHeader {...props}></StyledHeader>
                <StyledContent {...props}></StyledContent>
                <StyledFooter {...props}></StyledFooter>
            </Layout>
        );
    }
}


export default App;
