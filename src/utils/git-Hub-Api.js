const request = require('require-promise');

// URL: https://api.github.com/users/{gitUserName}

const HOST = "https://api.github.com";

class Api {
    constructor(host = HOST) {
        this.host = host;

        this.request = request.defaults({
            json: true,
            headers: {
                "Content-Type": 'application/json',
                "User-Agent": 'Awesome-Octocat-App'
            },
            rejectUnauthorized: false
        });
    }

    getUser(userName = "AlexCollaku") {
        const path = `/users/${userName}`;

        return this.request.get({
            url: `${this.host}${path}`
        })
    }
}
module.exports = Api;