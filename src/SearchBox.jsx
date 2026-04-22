import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5f86e4023d6b7cbc6d1e9b993e85d261";

  let getweatherInfo = async (cityName) => {
    try {
      let response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`,
      );
      let jsonResponce = await response.json();

      if (jsonResponce.cod !== 200) {
        throw new Error("City not found");
      }

      let result = {
        city: cityName,
        temp: jsonResponce.main.temp,
        tempMin: jsonResponce.main.temp_min,
        tempMax: jsonResponce.main.temp_max,
        humidity: jsonResponce.main.humidity,
        feelsLike: jsonResponce.main.feels_like,
        weather: jsonResponce.weather[0].description,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(false);

      let cityName = city; // ✅ store value first
      setCity(""); // ✅ then clear input

      let newinfo = await getweatherInfo(cityName);
      updateInfo(newinfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <h3>Search For The Weather</h3>

      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && (
          <p style={{ color: "red" }}>
            Error fetching weather data. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
