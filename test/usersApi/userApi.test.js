const Api = require('../../src/utils/goRestUsersApi')
// const expect = require('chai').expect;
const { expect } = require('chai'); // using destructuring 

describe("GoRest Users API", async () => {
    let api;

    before(async () => {
      api = new Api();
    })
    
    describe("GoRest Create Users (POST /public-api/users)", async () => {
      
        it("Can create a new user", async () => {

        const userToBeCreated = {
            name: "Tenali Ramakishna",
            gender: "Male",
            email: "tenali.ramakishna@test.com",
            status: "Active"
        }
        const userCreateResponse = await api.createUser(userToBeCreated);
        // console.log(userCreateResponse)

        // const { data } = userCreateResponse;
        // const data = userCreateResponse.data;
  
        expect(userCreateResponse).to.have.property('code', 201)
        expect(userCreateResponse.data).to.have.property('id').to.be.a('number')
        expect(userCreateResponse.data).to.have.property('name', userToBeCreated.name)
        expect(userCreateResponse.data).to.have.property('email', userToBeCreated.email)
        expect(userCreateResponse.data).to.have.property('gender', userToBeCreated.gender)
        expect(userCreateResponse.data).to.have.property('status', userToBeCreated.status)
        expect(userCreateResponse.data).to.have.property('created_at').to.be.a('string')
        expect(userCreateResponse.data).to.have.property('updated_at').to.be.a('string')

      });
      // Passed, failed, pending
      it("Error returned when creating a user and '' is missing from the request payload", async () => {

      })
    })
    describe("GoRest Get single user (GET /public-api/users/{:id})", async () => {
    
        it("Can get single user by ID", async () => {
        const userToBeCreated = {
            name: "Tenali Ramakishna",
            gender: "Male",
            email: "tenali.ramakishna105@test.com",
            status: "Active"
        }
        const userCreateResponse = await api.createUser(userToBeCreated);
        console.log("##### Created new user: ", userCreateResponse)

        const getUserResponse = await api.getUser(userCreateResponse.data.id)
        console.log("###### Got previously create user", getUserResponse)

        // Add assertions here
        expect(getUserResponse).to.have.property('code', 200)  
        expect(getUserResponse.data).to.deep.equal(userCreateResponse.data)
    })
})
    describe("GoRest update a user", async () => {
        
        it("Can update a user", async () => {
        const userToBeCreated = {
            name: "Tenali Ramakishna",
            gender: "Male",
            email: "tenali.ramakishna105@test.com",
            status: "Active"
        }
        const userCreateResponse = await api.createUser(userToBeCreated);
        console.log(`Created user: ${userCreateResponse}`)

        const userToBeUpdated = {
            name: "Tenala Rama",
            gender: "Female",
            email: "tenala.rama105@test.com",
            status: "Inactive"
        }

        const updateUserResponse = await api.updateUserResponse(userCreateResponse.data.id, userToBeUpdated)
        // console.log(`Updated user: ${updateUserResponse}`)
        console.log(JSON.stringify(updateUserResponse));

        const { data } = updateUserResponse;
        
        // TODO: Add assertion here
        expect(data).to.have.property('name', userToBeUpdated.name)
        expect(data).to.have.property('gender', userToBeUpdated.gender)
        expect(data).to.have.property('email', userToBeUpdated.email)
        expect(data).to.have.property('status', userToBeUpdated.status)

         
    })
});  

    describe("GoRest Delete a User", async () => {  
        
        it("Can delete a user", async () => {

        const userToBeCreated = {
            name: "Tenali Ramakishna",
            gender: "Male",
            email: "tenali.ramakishna125@test.com",
            status: "Active"
        }
        const userCreateResponse = await api.createUser(userToBeCreated);
        console.log("##### Created new user: ", userCreateResponse)

        const deleteUserResponse = await api.deleteUser(userCreateResponse.data.id)
        console.log("###### Delete previously created user", deleteUserResponse)
    })
})
})