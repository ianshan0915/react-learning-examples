import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

const listItems1 = [
  {id:1, name:'Inbox', icon:<InboxIcon />},
  {id:2, name:'Starred', icon:<StarIcon />},
  {id:3, name:'Send mail', icon:<SendIcon />},
  {id:4, name:'Drafts', icon:<DraftsIcon />},
];
const listItems2 = [
  {id:1, name:'Inbox', icon:<MailIcon />},
  {id:2, name:'Trash', icon:<DeleteIcon />},
  {id:3, name:'Spam', icon:<ReportIcon />},
];

export const mailFolderListItems = (
  <div>
    {
      listItems1.map((item) => 
        <ListItem key={item.id} button>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      )
    }
  </div>
);

export const otherMailFolderListItems = (
  <div>
    {
      listItems2.map((item) => 
        <ListItem key={item.id} button>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      )
    }
  </div>
);