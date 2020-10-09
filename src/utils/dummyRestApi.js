const request = require('request-promise');

const DUMMYREST_HOST = "http://dummy.restapiexample.com";

class EmployeeApi {
    constructor() {
        this.host = DUMMYREST_HOST;

        this.request = request.defaults({
            json: true,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    }

    // /employee GET /api/v1/employees
    //	Get all employee data
    getEmployees() {
        const path = "/api/v1/employees";

        return this.request.get({
            url: `${this.host}${path}`
        })
    }

    // /create	POST /api/v1/create   Create new record in database	
    // {"name":"test","salary":"123","age":"23"}
    createNewEmployee(body) {
        const path = "/api/v1/create";

        return this.request.post({
            url: `${this.host}${path}`,
            body
        })
    }
    // /update/{id} PUT /api/v1/update/21
    updateEmployee(userId, body) {
        const path = `/api/v1/update/${userId}`

        return this.request.put({
            url: `${this.host}${path}`,
            body
        })
    }

    // /delete/{id} DELETE /api/v1/delete/2
    deleteEmployee(userId) {
        const path = `/api/v1/delete/${userId}`

        return this.request.delete({
            url: `${this.host}${path}`
        })
    }
}

module.exports = EmployeeApi;