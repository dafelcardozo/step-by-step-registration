import { useEffect } from 'react';
import { Stack, Avatar, ListItemText, ListItemButton, ListItem, List, ListItemAvatar, Box, Drawer, styled, Grid, Card, Paper } from '@mui/material';
import StepsContainer from './steps-container';
import { ButtonsBar } from './buttons-bar';
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

const BackgroundFigures = () => (
  <div style={{ backgroundColor: '#483EFF', position: 'absolute', zIndex: -1, width: '100vw' }} >
    <BlueCurve />
    <Circle />
    <Birds2 />
    <PinkBlob />
  </div>);

const TopStepsList = () => {
  const { step } = useSelector((state: ReduxState) => state.nav);
  return (<Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    height='100px'
  >
    <Grid item>
      <Stack direction='row' spacing={2} >
        {steps.filter((s, index) => index < 4).map((title, index) => (
          <Item key={title}>
            <Avatar style={{ backgroundColor: index + 1 == step ? '#BEE2FD' : 'unset', color: index + 1 == step ? '#022959' : undefined, border: '1px solid lightgray' }}>
              {index + 1}
            </Avatar>
          </Item>
        ))}
      </Stack>
    </Grid>
  </Grid>);
};

const StyledPaper = styled(Paper)({
  position: "relative",
  width: 274,
  flexShrink: 0,
  transition: "none !important",
  backgroundColor: '#483EFF',
  color: 'white',
  border: 0,
  // height: '580px',
  borderRadius: '16px',
})

const Sidebar = () => {
  const { step } = useSelector((state: ReduxState) => state.nav);
  return (<StyledPaper elevation={0} >
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
  </StyledPaper>);
};

const LargeScreenFrame = () => (
  <Grid container direction="column" alignItems="center" height='100vh' spacing={0} justifyContent="center">
    <Grid item xs={3}>
      <Card sx={{ p: 1, maxWidth: '900px', maxHeight: '800px', width: '900px' }} >
        <Grid container sx={{ display: 'flex' }}  >
          <Sidebar />
          <Box sx={{ flexGrow: 1, p: 3, height: '600px', width: '600px' }} id="stepsWrapper">
            <StepsContainer />
          </Box>
        </Grid>
      </Card>
    </Grid>
  </Grid>
);

const SmallScreenFrame = () => (<>
  <BackgroundFigures />
  <Grid container direction="column" height='100vh' spacing={0}>
    <Grid item>
      <TopStepsList />
    </Grid>
    <Grid item paddingLeft='20px' paddingRight='20px'>
      <Card sx={{ minHeight: '402px', p: 4 }}>
        <StepsContainer />
      </Card>
    </Grid>
    <Grid item flex='auto' display='flex' alignItems='flex-end'>
      <ButtonsBar />
    </Grid>
  </Grid>
</>
);

export default function AppFrame() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    dispatch(setExtraSmallSize(query));
  });
  const { isExtraSmallSize } = useSelector((state: ReduxState) => state.nav);
  return isExtraSmallSize ? <SmallScreenFrame /> : <LargeScreenFrame />;
}
