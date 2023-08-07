import * as React from 'react';
import { Stack, Avatar, ListItemText, ListItemButton, ListItem, List, ListItemAvatar, Box, Drawer, Paper, styled, Grid } from '@mui/material';
import StepsCard, { ButtonsBar } from './steps-content-forms';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/components/shared/store';
import OrangeMountain from '../shared/icons/orange-mountain';
import BlueMountain from '../shared/icons/blue-mountain';
import OrangeSun from '../shared/icons/orange-sun';
import WhiteBirds from '../shared/icons/birds';
import { useMediaQuery, useTheme } from "@mui/material";
import Birds2 from '../shared/icons/birds2';
import Circle from '../shared/icons/circle';

const drawerWidth = 274;

const steps = [{ title: "Your info" }, { title: "Select plan" }, { title: "Add-ons" }, { title: "Summary" }, { title: "Thank you!" }];

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));


export default function SideBar() {
  const { step } = useSelector((state: ReduxState) => state.nav);
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down("md"));

  const StepsHorizontalStack = (<Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="start"
    sx={{ bgcolor: '#483EFF' }} minHeight='200px'>
    <Stack direction='row' spacing={2} >
      {steps.filter((s, index) => index < 4).map(({ title }, index) => (
        <Item key={title}  >
          <Avatar style={{ backgroundColor: index + 1 == step ? '#BEE2FD' : 'unset', color: index + 1 == step ? '#022959' : undefined, border: '1px solid lightgray' }}>
            {index + 1}
          </Avatar>
        </Item>
      ))}
    </Stack>
    <Circle />
    <Birds2 />
  </Grid>);

  const appDrawer = (<Drawer
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
    variant={isExtraSmallSize ? 'temporary' : 'permanent'}
    anchor="left"
  >
    <List>
      {steps.filter((s, index) => index < 4).map(({ title }, index) => (
        <ListItem key={title} disablePadding >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: index + 1 == step ? '#BEE2FD' : '#483EFF', color: index + 1 == step ? '#022959' : undefined, border: '1px solid lightgray' }}>
                {index + 1}
              </Avatar>
            </ListItemAvatar>
            {!isExtraSmallSize &&
              <ListItemText primary={`STEP ${index + 1}`} secondary={title} sx={{ color: 'white' }} secondaryTypographyProps={{ color: 'white' }} primaryTypographyProps={{ color: '#ABBCFF' }}>
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
  </Drawer>);

  return (
    <>
      {isExtraSmallSize && StepsHorizontalStack}
      <Box sx={{ display: 'flex', position: isExtraSmallSize ? 'relative' : undefined, top: isExtraSmallSize ? '-150px' : undefined }} >
        {appDrawer}
        <Box
          sx={{ flexGrow: 1, p: 3 }}
        >
          <StepsCard />
        </Box>
      </Box>
      {isExtraSmallSize && <ButtonsBar />}
    </>
  );
}
