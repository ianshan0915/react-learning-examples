import React from 'react';
import { Drawer, List, Divider } from "material-ui";
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const StyledDrawer = (props) => {
    const { classes } = props;
    return (
        <Drawer
            variant='permanent'
            classes = {{paper: classes.drawerPaper}}>
            <div className={classes.toolbar} ></div>
            <List>{mailFolderListItems}</List>
            <Divider />
            <List>{otherMailFolderListItems}</List>
        </Drawer>
    );
};

export default StyledDrawer;