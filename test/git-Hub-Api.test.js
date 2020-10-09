const Api = require('../src/utils/git-Hub-Api.js');
const { expect } = require('chai');

describe('GET - Github User profile information', async () => {
    let api;

    before(async () => {
        api = new Api();
    });

    it.only('User: AlexCollaku - Verify UserName', async () => {
        const userLogin = "AlexCollaku";
        const id = 64294133;
        const type = "User";
        const name = "AlexCollaku";
        const response = await api.getUser(name);
        
        expect(response).to.have.property("login", userLogin);
        expect(response).to.have.property("id", id);
        expect(response).to.have.property("type", type);
        expect(response).to.have.property("name", name);
    })
});