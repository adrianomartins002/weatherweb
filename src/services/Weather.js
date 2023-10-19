import axios from 'axios';
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const WeatherService  = {
    getWeatherByLocation: async (latitude, longitude)=>{
        try{
            const response = await axios.get(BASE_URL+'/weather',{
                params:{
                 lat: 50,
                 lon: 40,
                 appid: "47ec3cd1bacd2d461e09c88a375e1f9d"   
                }
            })
            return response.data
        }catch(err){}
    }
}