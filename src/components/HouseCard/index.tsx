
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

// import BostonHouse from '../../images/download.jpg'

const PropertyCard = () => {
    return (
        <Card sx={{ maxWidth: 400, width: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="../../images/download.jpg"
            alt="boston_house"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">Boston Family House</Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Grid >
                <LocationOnIcon /> Boston 
                <RoomServiceIcon /> Bedroom 
                <CleaningServicesIcon />
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="large" color="secondary" variant='outlined'>
                View listing details
            </Button>
        </CardActions>
        </Card>
    )
}


export default PropertyCard