import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";
import {useState} from "react";

export default function WeatherApp() {
const [weatherInfo,setWeatherInfo]=useState({
        city:'Pune',
        feelsLike:25,
        humidity:60,
        tempMin:20,
        tempMax:30,
        weather:"Dusty",
        temp:27
});

let updateInfo=(newinfo)=>{
    setWeatherInfo(newinfo);
}
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App BY Abhi</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
};