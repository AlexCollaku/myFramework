const Api = require('../../src/utils/dark-sky-Api.js')
// const expect = require('chai').expect;
const { expect } = require('chai'); // using destructuring 
const guard = require('../../src/utils/guard');
const { get } = require('request-promise');

describe("Dark Sky API", async () => {

    let api;

    before(async () => {
        let api = new Api();
    })

    it.only("Can get forecast info", async () => {
        // make an API call here
        
        const latitude = 42.3241;
        const longitude = -83.7113;
        const response = await api.getForecast(latitude, longitude);

        //console.log(response);
        // Add assertions for lat and long
        // expect(response.latitude, "latitude is invalid").to.equal(latitude);
        // expect(response.longitude, "longitude is invalid").to.equal(longitude); 

        expect(response).to.have.property('latitude', latitude);
        expect(response).to.have.property('longitude', longitude);
        expect(response.daily.data, 'Expected to get 8 data points for daily data').to.have.length(8);
        expect(response).to.have.property('timezone', 'America/New_York');
    })

    it.skip("Can get forecast info with lat/long flipped", async () => {

        const latitude = -83.7113;
        const longitude = 42.3241;
        const response = await api.getForecast(latitude, longitude);

        console.log(response);
    })

    it.only("Error returned when lat/long are missing from the request", async () => {
        // let statusCode;
        // try {
        //     await api.getForecast("", "");
            
        // } catch (error) {
        //     statusCode = error.statusCode;
        //     console.log(error)
        // }
        // expect(statusCode).to.equal(400)

        const getForecastError = await guard(async () => api.getForecast("", ""))
        // console.log(getForecastError);
        expect(getForecastError).to.have.property("statusCode", 400);
        expect(getForecastError).to.have.property("message", `400 - {"code":400,"error":Poorly formatted request"}`);
        
        
        
          


    })
})