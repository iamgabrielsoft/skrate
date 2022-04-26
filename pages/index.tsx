
import { Box, Grid, Typography, InputBase, Container} from "@mui/material";
import type { NextPage } from "next";
import { styled, alpha } from '@mui/material/styles';
import DisplayCard from "../src/components/DisplayCard";
import HouseCard from '../src/components/HouseCard'

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import DashboardLayout from "../src/components/DashboardLayout";

import BostonHouse from '../src/static/couch.png'



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));






const Home: NextPage = () => {
    return (
        <DashboardLayout>
            <Box component="main" sx={{ flexGrow: 1, marginRight: 20}}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item lg={4} md={6} xs={12}>
                            <DisplayCard />
                        </Grid>
                        <Grid item lg={4} md={6} xs={12}>
                            <DisplayCard />
                        </Grid>
                        <Grid item lg={4}  md={6} xs={12}>
                            <DisplayCard />
                        </Grid>
                    </Grid>

                <Grid container spacing={2} sx={{ paddingTop: 5, paddingBottom: 5}}>
                    <Grid item xs={6} md={8}>
                        <Typography variant="h5" component="div">Your favourites</Typography>
                    </Grid>

                    <Grid>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                                <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                />
                        </Search>
                    </Grid>
                </Grid>

                <Grid container spacing={10} sx={{ paddingTop: 5, paddingBottom: 5}}>
                    <Grid item lg={4} md={6} xs={12}>
                        <HouseCard imageurl={require("../src/static/door-house.png")}/>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <HouseCard imageurl={require("../src/static/white.png")}/>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <HouseCard imageurl={require("../src/static/couch.png")}/>
                    </Grid>
                </Grid>
                
                <Grid container spacing={10}>
                    <Grid item lg={4} md={6} xs={12}>
                        <HouseCard imageurl={require("../src/static/swiming_pool.png")}/>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <HouseCard imageurl={require("../src/static/roof.png")}/>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <HouseCard imageurl={require("../src/static/fridge.png")}/>
                    </Grid>
                    
                </Grid>
                </Container>
            </Box>


        </DashboardLayout>
        
    )
}


export default Home ;