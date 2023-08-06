import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import {PropsWithChildren} from 'react';
import ContentSlide, { ContentSlideProps} from './content-slide';


const drawerWidth = 240;

const steps = [{ title: "Your info" }, { title: "Select plan" }, { title: "Add-ons" }, { title: "Summary" }];

export type SideBarProps = PropsWithChildren & ContentSlideProps;

export default function SideBar({children, ...props}:SideBarProps ) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {steps.map(({title}, index) => (
            <ListItem key={title} disablePadding>
              <ListItemButton>
                {index+1}
                <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
                <ListItemText primary={`STEP ${index+1}`} secondary={title} >
                  {title}
                  </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <ContentSlide {...props}>
        {children}
        </ContentSlide>
        
      </Box>
    </Box>
  );
}
