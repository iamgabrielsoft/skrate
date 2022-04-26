
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Badge from '../../images/couch.png'
import Image from 'next/image'
import BostonHouse from '../../static/couch.png'





type Props = {
  imageurl?: string | undefined; 
}




const PropertyCard = ({ imageurl }: Props) => {

  const styles = {
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      marginTop:'30'
    }
};
    return (
        <Card sx={{ maxWidth: 400, width: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={140}
              image={imageurl}
              style={styles.media}
              title="boston_house"
              alt="boston_house"
            /> 
            
            <Image src={BostonHouse} alt="boston"/>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Boston Family House</Typography>
              <Typography variant="body2" color="text.secondary">
                Boston are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>    
              <Grid container spacing={3}>
                  <Grid item lg={4} md={6} xs={12}>
                    <LocationOnIcon /> Boston 
                  </Grid>
                  <Grid item lg={4} md={6} xs={12}>
                    <RoomServiceIcon /> Bedroom 
                  </Grid>
                  <Grid item lg={4} md={6} xs={12}>
                      <CleaningServicesIcon /> Boston 
                  </Grid>
                  
                  
                
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