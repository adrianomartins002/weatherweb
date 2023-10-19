import axios from 'axios';

export const WeatherService  = {
    getWeatherByLocation: async (latitude, longitude)=>{
        try{
            const response = await axios.get(process.env.REACT_APP_BASE_URL_WEATHER_API+'/weather',{
                params:{
                 lat: 50,
                 lon: 40,
                 appid: process.env.REACT_APP_APPID   
                }
            })
            return response.data
        }catch(err){}
    }
}