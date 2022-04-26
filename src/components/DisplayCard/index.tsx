
import React from 'react'; 
import { Box, Card, CardActions, Typography, CardContent, CircularProgress } from "@mui/material";



// import { 
//     CardWrapper, 
//     CardBody, 
//     CardButton, 
//     CardFieldset, 
//     CardHeader, 
//     CardHeading, 
//     CardInput, 
//     CardIcon, 
//     CardLink, 
//     CardOptions, 
//     CardOptionsItem, 
//      CardOptionsNote,
//      Container, 
//      Content
// } from './styles'


type Props = {
    children?: React.ReactNode
}



  
const DisplayCard = ({ children }: Props) => {
    const [progress, setProgress] = React.useState(0);

    
    return (
        <Card sx={{ maxWidth: 345 }}>
         <CardContent>
                <Typography gutterBottom variant="h5" component="div">Todays Sales</Typography>
                <CircularProgress variant="determinate" value={75} />
                <Typography variant="body2" color="text.secondary">2,456</Typography>
            </CardContent>
        </Card>
    )
}


export default DisplayCard;