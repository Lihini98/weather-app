const request = require("request");

const openWeatherMap = {
  BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
  SECRET_KEY: "9edbe081bfa204527f843976b3d74afc",
};

const weatherData = (address, callback) => {
  const url =
    openWeatherMap.BASE_URL +
    encodeURIComponent(address) +
    "&APPID=" + // Add the equal sign here
    openWeatherMap.SECRET_KEY;

  console.log(url);

  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback(true, "Unable to fetch data, please try again" + error);
    } else {
      callback(false, body); // Use body instead of data.body
    }
  });
};

module.exports = weatherData;
