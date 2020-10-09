const Api = require('../../src/utils/dummyRestApi');
const { expect } = require('chai');

describe("Dummy Employee Api", async () => {
    let api;

    before(async () => {
        api = new Api;
    })

    describe("Dummy Get Employees (GET /api/v1/employees)", async () => {
        it("Can Get all employee data", async () => {

            const getEmployeeResponse = await api.getEmployees();
            // console.log("#####Get employees: ", getEmployeeResponse);

            const { data } = getEmployeeResponse;

            expect(getEmployeeResponse).to.have.property("status", "success")
            expect(data).to.have.property('id').to.be.a('number')
            expect(data).to.have.property("employee_name", "")
            expect(data).to.have.property("employee_salary", "")
        })
    })

    describe("Dummy Create a new employee (POST /api/v1/create)", async () => {
        it("Can create a new employee", async () => {
            // {"name":"test","salary":"123","age":"23"}
            const employeeToBeCreated = {
                name: "test",
                salary: "10000",
                age: "22"
            }

            const employeeCreatedResponse = await api.createNewEmployee(employeeToBeCreated)

            const { data } = employeeCreatedResponse;

            expect(employeeCreatedResponse).to.have.property('status', 'success')
            expect(data).to.have.property('id').to.be.a('number')
            expect(data).to.have.property('name', employeeToBeCreated.name)
            expect(data).to.have.property('salary', employeeToBeCreated.salary)
            expect(data).to.have.property('age', employeeToBeCreated.age)

            // expect(employeeCreatedResponse).to.have.property('status', 'successss')
            // expect(data).to.have.property('id').to.be.a('string')
            // expect(data).to.have.property('name', 'employeeToBeCreated.name')
            // expect(data).to.have.property('salary', 'employeeToBeCreated.salary')
            // expect(data).to.have.property('age', 'employeeToBeCreated.age')
            
        })
    })

    describe("Dummy Update an employee record (PUT /api/v1/update/21)", async () => {
        it("Can update an employee record", async () => {

            const employeeToBeCreated = {
                name: "test",
                salary: "10000",
                age: "22"
            }

            const employeeCreatedResponse = await api.createNewEmployee(employeeToBeCreated)

            const employeeToBeUpdated = {
                name: "Bisha",
                salary: "20000",
                age: "32"
            }

            const employeeUpdatedResponse = await api.updateEmployee(employeeCreatedResponse.date.id, employeeToBeUpdated)
            // console.log(JSON.stringify(employeeUpdatedResponse))

            const { data } = employeeUpdatedResponse;

            expect(employeeUpdatedResponse).to.have.property('status', 'success')
            expect(data).to.have.property('id').to.be.a('number')
            expect(data).to.have.property('name', 'Bisha')
            expect(data).to.have.property('salary', '20000')
            expect(data).to.have.property('age', '32')

            // expect(employeeUpdatedResponse).to.have.property('status', 'succeess')
            // expect(data).to.have.property('id').to.be.a('string')
            // expect(data).to.have.property('name', 'Bishaa')
            // expect(data).to.have.property('salary', '10000')
            // expect(data).to.have.property('age', '22')
        })
    })

    describe("Dummy Delete an employee record (DELETE /api/v1/delete/2)", async () => {
        it("Can delete an employee record", async () => {

            const employeeToBeCreated = {
                name: "Bond",
                salary: "5000",
                age: "24"
            }
            const employeeCreatedResponse = await api.createNewEmployee(employeeToBeCreated)
            console.log("##### Created new Employee: ", employeeCreatedResponse)

            const deletedEmployeeResponse = await api.deleteEmployee(employeeCreatedResponse.data.id)
            console.log("####### Deleted previously created employee: ", deletedEmployeeResponse)
        })
    })
})
