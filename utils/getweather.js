require("dotenv").config();
const request = require('request');
const apiConstansts = require('../apiconstansts');

const getWeather = (lat, lng, callback) => {
    const weatherStackApi = apiConstansts.weatherStackApi(lat, lng)

    request({
        url: weatherStackApi,
        json: true
    }, (err, response, {
        current: {
            weather_descriptions,
            temperature,
            feelslike
        },
        error: forcastError
    }) => {
        if (err) {
            callback("Unable to reach the api", undefined)
        } else if (forcastError) {
            callback(forcastError.info, undefined);
        } else {
            callback(undefined, `${weather_descriptions[0]} It is currently ${temperature} degrees out. It is feels like ${feelslike}`)
        }
    })
}

module.exports = getWeather