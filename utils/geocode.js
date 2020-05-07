require('dotenv').config();
const request = require('request');
const apiConstansts = require('../apiconstansts');

const geoCode = function (addr, callback) {
    const mapBoxApi = apiConstansts.maxBoxApi(addr);
    request({
        url: mapBoxApi,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to reach the api ", undefined);
        } else if (body.message) {
            callback(body.message);
        } else if (body.features.length == 0) {
            callback("Unable to fetch the coordinates for the given location");
        } else {
            const data = {
                "Latitude": body.features[0].center[1],
                "Longitude": body.features[0].center[0],
                "Location": body.features[0].place_name
            }
            callback(undefined, data);
        }
    })
}


module.exports = geoCode;