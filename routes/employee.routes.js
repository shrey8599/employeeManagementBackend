const employeeController = require('../controllers/employee.controller');
const {requestValidator} = require('../middlewares');
module.exports = function(app){
    app.get("/bec4_26Apr/api/v1/employees/:id", employeeController.findOne)
    app.get("/bec4_26Apr/api/v1/employees", employeeController.findAll)
    app.put("/bec4_26Apr/api/v1/employees/:id",[requestValidator.validateEmployeeRequest],employeeController.update)
    app.delete("/bec4_26Apr/api/v1/employees/:id",employeeController.delete)
    app.post("/bec4_26Apr/api/v1/employees",[requestValidator.validateEmployeeRequest],employeeController.create)
}