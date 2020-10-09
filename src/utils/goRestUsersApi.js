const request = require('request-promise');

const GOREST_HOST = "https://gorest.co.in";
const GOREST_APIKEY = '6326bc7921e16063da797f7629c535401cd77e1c9051988ebf20ad6a3c79f325';

class UsersApi {
    constructor() {
        this.host = GOREST_HOST;

        this.request = request.defaults({
            json: true,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GOREST_APIKEY}`
            } 
        })
    }

    createUser(body) {
        const path = '/public-api/users';

        return this.request.post({
            url: `${this.host}${path}`,
            // body: body
            body // Alternative way to set property to the variable with te same name
        })
    }
    // GET /public-api/users/123
    getUser(userId) {
        const path = `/public-api/users/${userId}`;

        return this.request.get({
            url: `${this.host}${path}`,
            
        })
    }
    
    // PUT /public-api/users/123
    updateUser(userId, body) {
        const path = `/public-api/users/${userId}`;

        return this.request.put({
            url: `${this.host}${path}`,
            body: body
        })
    }
    
    // DELETE /public-api/users/123
    deleteUser(userId) {
        const path = `/public-api/users/${userId}`;

        return this.request.delete({
            url: `${this.host}${path}`,
            
        })
    }
    
} 

module.exports = UsersApi;
