import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from 'url';
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

// Simulating __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

// Render homepage with default empty values
app.get("/", (req, res) => {
  res.render("index", { 
    city: "", 
    temperature: "", 
    description: "", 
    humidity: "", 
    windSpeed: "", 
    weather: "",
    error: "" // Default error value to avoid errors in EJS
  });
});

// Handle form submission to get weather data
app.post("/weather", async (req, res) => {
  const city = req.body.cityName;
  const apikey = process.env.API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;

  try {
    const result = await axios.get(apiUrl);
    // Pass the weather data to the view
    res.render("index", {
      city: result.data.name,
      temperature: result.data.main.temp,
      description: result.data.weather[0].description,
      humidity: result.data.main.humidity,
      windSpeed: result.data.wind.speed,
      weather: result.data.weather[0].main, // Ensure weather data is passed
      error: "" // Clear any existing errors
    });
  } catch (error) {
    // Pass an error message to the view
    res.render("index", {
      city: "", 
      temperature: "", 
      description: "", 
      humidity: "", 
      windSpeed: "", 
      weather: "",
      error: "Invalid city entered. Please try again." // Error message
    });
  }
});

app.get("/weather", (req, res) => {
    res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
