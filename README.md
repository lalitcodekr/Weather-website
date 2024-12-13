# Weather Website

**Live Demo**: [https://weather-website-a2q0.onrender.com](https://weather-website-a2q0.onrender.com)

> **Note**: This website is hosted on a free Render platform, which may temporarily disable the link when not in use. If the website doesn’t load immediately, kindly refresh it multiple times and wait for it to reload. Additionally, after entering a city name, if the weather data doesn’t display properly, please reload the page once more.

A simple, responsive website where users can enter any city name to get real-time weather details such as temperature, humidity, and wind speed. The website dynamically updates its background image based on the temperature description.

## Features

- Get accurate temperature, humidity, and wind speed for any city.
- Displays a description of the weather.
- Automatically updates the background image based on the weather condition (e.g., sunny, cloudy, rainy).
- Fully responsive design using Tailwind CSS.

## Installation Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-website.git
    ```

2. Navigate to the project directory:
    ```bash
    cd weather-website
    ```

3. Install the required Node.js modules:
    ```bash
    npm install
    ```

4. Install and configure Tailwind CSS:
    ```bash
    npm install -D tailwindcss
    npx tailwindcss init
    ```

5. Obtain your **OpenWeather API key** by signing up at [OpenWeather](https://openweathermap.org/).

6. Replace the placeholder API key in the JavaScript file with your own:
    ```js
    const apiKey = 'your_openweather_api_key_here';
    ```

7. Start the application:
    ```bash
    npm start
    ```

## Usage

- Open the app in your browser at `http://localhost:3000`.
- Enter any city name to get real-time weather data.
- The website will display temperature, humidity, wind speed, and dynamically change the image based on weather conditions.

### Responsive Design

The website is designed using Tailwind CSS, ensuring it adapts smoothly to various screen sizes, from mobile devices to desktops.

## Technologies Used

- **JavaScript**: For handling API calls and application logic.
- **Embedded JavaScript (EJS)**: For rendering dynamic content.
- **Tailwind CSS**: For responsive, utility-first styling.
- **Node.js**: Backend environment for running the server.
- **GitHub & Render**: For version control and deployment.

## Prerequisites

- **API key**: Obtain an API key from OpenWeather.
- **VS Code**: Or any code editor.
- **Internet connection**: Required for fetching data from the OpenWeather API and deploying the site.
