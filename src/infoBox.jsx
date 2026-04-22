import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';

export default function InfoBox({info}) {
    const url="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Hot_url="https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=2048x2048&w=is&k=20&c=3eIsDF7f9rRe4ZsbIGDv7268ue7fBQFA0H3-2OD0gB4=";
    const Cold_url="https://media.istockphoto.com/id/1628580367/photo/christmas-background.jpg?s=2048x2048&w=is&k=20&c=TlyftzHTRCs1vuqX98w3n--mlvhhcI_mr7-43qDNNls=";
    const Rainy_url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
    return (
        <div className="infoBox">
                <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.Humidity > 70 ? Rainy_url : info.temp > 30 ? Hot_url : Cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           
                <p>Temperature={info.temp}°C<br /></p>
                <p>Humidity={info.humidity}%<br /></p>
                <p>Min Temp={info.tempMin}°C<br /></p>
                <p>Max Temp={info.tempMax}°C<br /></p>
                <p>The weather can be describe as <b><i>{info.weather}</i></b> And Feels Like as <b><i>{info.feelsLike}°C</i></b></p>
            


        </Typography>
      </CardContent>
      
    </Card>
          </div>
          
        </div>
            );
        }   