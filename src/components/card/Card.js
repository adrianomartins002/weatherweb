import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { WeatherService } from '../../services/Weather';


export default function CardWeather({name, latitude, longitude}) {
  const [userWeather, setUserWeather] = useState(null);

  async function getWeatherByUser(){
    const response = await WeatherService.getWeatherByLocation(latitude, longitude);
    setUserWeather(response.weather[0]);
  }

  useEffect(()=>{
    getWeatherByUser();
  },[])
  console.log("deixa ver o usuario:", userWeather);
  return (
    <Card sx={{ maxWidth: 400, margin: 4 }}>
      {userWeather?
       <CardContent>
       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Current weather:
         </Typography>
         <Typography variant="h5" component="div">
           {userWeather.main}
         </Typography>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           User name:
         </Typography>
         <Typography variant="h5" component="div">
           {name}
         </Typography>
         
       </CardContent>
      :
      null
      }
     
     
    </Card>
  );
}