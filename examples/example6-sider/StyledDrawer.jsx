import React from 'react';
import { Drawer, List, Divider, IconButton } from "material-ui";
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const StyledDrawer = (props) => {
    const { classes, theme, drawOpen, handleDrawerClose } = props;    
    return (
        <Drawer
            variant='permanent'
            classes={{
                paper: classNames(classes.drawerPaper, drawOpen && classes.drawerPaperClose),
            }}
            open={drawOpen}>
            <div className={classes.toolbar} onClick={handleDrawerClose}>
                <IconButton>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>            
            </div>
            <Divider />
            <List>{mailFolderListItems}</List>
            <Divider />
            <List>{otherMailFolderListItems}</List>
        </Drawer>
    );
};

export default StyledDrawer;