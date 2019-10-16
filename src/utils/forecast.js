const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6dc84aa753218986b5c9be7048f8c01e/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location! ' + body.error, undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degree celcius. Today's high temperature is ${body.daily.data[0].temperatureHigh} with low temperature of ${body.daily.data[0].temperatureLow}. The chance of rain is ${body.currently.precipProbability}%.`)
        }
    })
}

module.exports = forecast;
