import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import StepsContent, { ButtonsBar} from './nav-buttons';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/components/shared/store';
import OrangeMountain from '../shared/icons/orange-mountain';
import BlueMountain from '../shared/icons/blue-mountain';
import OrangeSun from '../shared/icons/orange-sun';
import WhiteBirds from '../shared/icons/birds';
import { useMediaQuery, useTheme } from "@mui/material";

const drawerWidth = 274;

const steps = [{ title: "Your info" }, { title: "Select plan" }, { title: "Add-ons" }, { title: "Summary" }, { title: "Thank you!"}];

export default function SideBar() {
  const { step } = useSelector((state: ReduxState) => state.register);
  const theme = useTheme();
  const isExtraSmallSize =  useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
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
            color: 'white',
            border: 0
          },
        }}
        variant={isExtraSmallSize?'temporary':'permanent'}
        anchor="left"
      >
        <List>
          {steps.filter((s, index) => index < 4).map(({ title }, index) => (
            <ListItem key={title} disablePadding >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor:index + 1 == step?'#BEE2FD':'#483EFF', color: index + 1 == step?'#022959':undefined, border: '1px solid lightgray'}}>
                    {index+1}
                  </Avatar>
                </ListItemAvatar>
                {!isExtraSmallSize &&
                <ListItemText primary={`STEP ${index + 1}`} secondary={title} sx={{ color: 'white' }} secondaryTypographyProps={{color: 'white'}} primaryTypographyProps={{color:'#ABBCFF'}}>
                  {title}
                </ListItemText>
                }
              </ListItemButton>
            </ListItem>
          ))}
        </List>
            <BlueMountain />
            <OrangeMountain />
            <OrangeSun />
            <WhiteBirds />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1,  p: 3 }}
      >
        <StepsContent  />
      </Box>
    </Box>
    <ButtonsBar />
    </>
  );
}
