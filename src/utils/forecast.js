const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=82a6bff810f09b0242d40c7d48a5521e&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degree Celsius out. It feels like ' + body.current.feelslike + ' degree Celsius out. There is a ' + body.current.precip + ' % chance of rain.')
        }
    })
}
module.exports = forecast