import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config();

// Simulating __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Render homepage with default empty values
app.get("/", (req, res) => {
  res.render("index", {
    city: "",
    temperature: "",
    description: "",
    humidity: "",
    windSpeed: "",
    weather: "",
    error: "",
  });
});

// Handle form submission to get weather data
app.post("/weather", async (req, res) => {
  const city = req.body.cityName;
  const apiKey = process.env.API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

  try {
    const result = await axios.get(apiUrl);
    // Pass the weather data to the view
    res.render("index", {
      city: result.data.name,
      temperature: result.data.main.temp,
      description: result.data.weather[0].description,
      humidity: result.data.main.humidity,
      windSpeed: result.data.wind.speed,
      weather: result.data.weather[0].main,
      error: "",
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
      error: "Invalid city entered. Please try again.",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
