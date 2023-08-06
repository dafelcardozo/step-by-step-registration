import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { PropsWithChildren } from 'react';
import ContentSlide, { ContentSlideProps } from './content-slide';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/components/shared/store';


const drawerWidth = 240;

const steps = [{ title: "Your info" }, { title: "Select plan" }, { title: "Add-ons" }, { title: "Summary" }];

export type SideBarProps = PropsWithChildren & ContentSlideProps;

export default function SideBar({ children, ...props }: SideBarProps) {
  const { step } = useSelector((state: ReduxState) => state.register);
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#483EFF',
            color: 'white'
          },
        }}
        variant="permanent"
        anchor="left"

      >
        <Toolbar />
        <Divider />
        <List>
          {steps.map(({ title }, index) => (
            <ListItem key={title} disablePadding style={{ backgroundColor: (index + 1 == step) ? 'red' : '' }}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>
                    {index+1}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`STEP ${index + 1}`} secondary={title} sx={{ color: 'white' }} secondaryTypographyProps={{color: 'white'}}>
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
