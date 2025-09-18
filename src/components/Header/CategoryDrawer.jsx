import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const CategoryDrawer = ({openCtg , setOpenCtg}) => {

    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" 

      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon> */}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {/* </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon> */}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {/* </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    return (
      <div>
        <Drawer open={openCtg}   onClose={() => setOpenCtg(false)} >
          {DrawerList}
        </Drawer>
      </div>
    )
}

export default CategoryDrawer
