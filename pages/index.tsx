
import { Box, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Container from "../src/components/Container";
import DisplayCard from "../src/components/DisplayCard";
import HouseCard from '../src/components/HouseCard'


import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import DashboardLayout from "../src/components/DashboardLayout";


const Separator = () => {
    return (
        <Box sx={{}}>

        </Box>
    )
}



const Home: NextPage = () => {
    return (
        <DashboardLayout>
            <Box sx={{ flexGrow: 1 }}>
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
            </Box>


            <Typography variant="h5" component="div">Your favourites</Typography>
            <Grid container spacing={3}>
                <Grid item lg={4} md={6} xs={12}>
                    <HouseCard />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <HouseCard />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <HouseCard />
                </Grid>
                
            </Grid>
            <Separator />
            <Grid container spacing={3}>
                <Grid item lg={4} md={6} xs={12}>
                    <HouseCard />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <HouseCard />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <HouseCard />
                </Grid>
                
            </Grid>
        </DashboardLayout>
        
    )
}


export default Home ;