const request = require('request-promise');

// URL: https://darksky.net/forecast/42.3241,-83.7113/us12/en

const HOST = "https://darksky.net";
//const APIKEY = "";

class Api {
    constructor(host = HOST) {
        this.host = host;


        this.request = request.defaults({
            json: true,
            headers: {
                "Content-Type": 'application/json'
            },
            rejectUnauthorized: false
        });
    }

    getForecast(lat, lon) {
        const path = `/forecast/${this.lat},${this.lon}`;

        return this.request.get({
            url: `${this.host}${this.path}`
        })
    }
}

module.exports = Api;