const geoCode = require("./utils/geocode");
const getWeather = require("./utils/getweather");
const location = process.argv[2];
geoCode(location, (error, {
    Latitude,
    Longitude,
    Location
}) => {
    if (error) {
        console.log(error)
    } else {
        getWeather(Latitude, Longitude, (err, response) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Location is ", Location)
                console.log(response)
            }
        })
    }
});