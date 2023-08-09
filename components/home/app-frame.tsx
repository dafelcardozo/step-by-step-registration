import { useEffect } from 'react';
import { Stack, Avatar, ListItemText, ListItemButton, ListItem, List, ListItemAvatar, Box, Drawer, styled, Grid, Card } from '@mui/material';
import StepsContainer, { ButtonsBar } from './steps-content-forms';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '@/components/shared/store';
import OrangeMountain from '../shared/icons/orange-mountain';
import BlueMountain from '../shared/icons/blue-mountain';
import OrangeSun from '../shared/icons/orange-sun';
import WhiteBirds from '../shared/icons/birds';
import { useMediaQuery, useTheme } from "@mui/material";
import Birds2 from '../shared/icons/birds2';
import Circle from '../shared/icons/circle';
import PinkBlob from '../shared/icons/pink-blob';
import BlueCurve from '../shared/icons/blue-curve';
import { setExtraSmallSize } from '@/components/shared/navigationSlice';

const steps = ["Your info", "Select plan", "Add-ons", "Summary", "Thank you!"];

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const TopStepsList = () => {
  const { step } = useSelector((state: ReduxState) => state.nav);
  return (<Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="start"
    sx={{ bgcolor: '#483EFF' }} height='200px'>
    <div>
      <BlueCurve />
      <Circle />
      <Birds2 />
      <PinkBlob />
    </div>
    <Stack direction='row' spacing={2} sx={{ paddingTop: '50px' }}>
      {steps.filter((s, index) => index < 4).map((title, index) => (
        <Item key={title}>
          <Avatar style={{ backgroundColor: index + 1 == step ? '#BEE2FD' : 'unset', color: index + 1 == step ? '#022959' : undefined, border: '1px solid lightgray' }}>
            {index + 1}
          </Avatar>
        </Item>
      ))}
    </Stack>

  </Grid>);
};

const drawerWidth = 274;


const StyledDrawer = styled(Drawer)({
  position: "relative", //imp
  width: drawerWidth, //drawer width
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth, //drawer width
    position: "absolute", //imp
    transition: "none !important",
    backgroundColor: '#483EFF',
        color: 'white',
        border: 0
  }
})

const Sidebar = () => {
  const { step } = useSelector((state: ReduxState) => state.nav);
  return (<StyledDrawer
    sx={{
      width: drawerWidth,
      
      '& .MuiDrawer-paper': {
        //width: drawerWidth,
        //boxSizing: 'border-box',
        
      },
    }}
    variant='permanent'
    anchor="left"
  >
    <List>
      {steps.filter((_, index) => index < 4).map((title, index) => (
        <ListItem key={title} disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: index + 1 == step ? '#BEE2FD' : '#483EFF', color: index + 1 == step ? '#022959' : undefined, border: '1px solid lightgray' }}>
                {index + 1}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`STEP ${index + 1}`} secondary={title} sx={{ color: 'white' }} secondaryTypographyProps={{ color: 'white' }} primaryTypographyProps={{ color: '#ABBCFF' }}>
              {title}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <BlueMountain />
    <OrangeMountain />
    <OrangeSun />
    <WhiteBirds />
  </StyledDrawer>);
};

export default function AppFrame() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    dispatch(setExtraSmallSize(query));
  });
  const { isExtraSmallSize } = useSelector((state: ReduxState) => state.nav);

  const LargeScreenFrame = () => (
    <Card sx={{  p: 0.5, maxHeight:'600px' }} >
      <Box sx={{ display: 'flex' }}  >
        <Sidebar />
        <Box sx={{ flexGrow: 1, p: 3 }} id="stepsWrapper">
          <StepsContainer />
        </Box>
      </Box>
    </Card>
);

  const SmallScreenFrame = () => (<>
    <TopStepsList />
    <Box sx={{ display: 'flex', position: 'relative', top: '-125px' }}  >
      <Box sx={{ flexGrow: 1, p: 3 }} id="stepsWrapper">
        <Card sx={{ minHeight: '402px', p: 4 }}>
          <StepsContainer />
        </Card>
      </Box>
    </Box>
    <ButtonsBar />
  </>);

  return <Grid container height='100vh'  >{isExtraSmallSize ? <SmallScreenFrame /> : <LargeScreenFrame />}</Grid>;
}
