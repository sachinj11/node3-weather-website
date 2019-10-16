const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6dc84aa753218986b5c9be7048f8c01e/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location! ' + body.error, undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} Today's high temperature would be ${body.daily.data[0].temperatureHigh} and low temperature would be ${body.daily.data[0].temperatureLow}. It is currently ${body.currently.temperature} degree celcius and ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast;
