const db = require('../models');
const Employee = db.employee;

// Finding employee based on employee id
exports.findOne = (req, res) => {
    const employeeId = req.params.id;
    Employee.findByPk(employeeId).then(response =>{
        res.status(200).send(response);
    }).catch(err =>{
        res.status(500).send({
            message: "Error occured while fetching employee based upon employee id!"
        })
    })
}

// Finding all employees present in the database
exports.findAll = (req, res) =>{
    let employeeName = req.query.name;
    let promise;
    if(employeeName){
        promise = Employee.findAll({
            where:{
                name: employeeName
            }
        })
    }
    else{
        promise = Employee.findAll();
    }

    promise.then(reponse =>{
        res.status(200).send(response);
    }).catch(err =>{
        res.status(500).send({
            message: "Error occured while fetching all employees present in db"
        })
    })
}

// Updating existing employee details
exports.update = (req, res) =>{
    // First step will be to create the employee to be updated in db
    const employee = {
        name: req.body.name,
        age: req.body.age,
        department: req.body.department,
        position: req.body.position
    }
    const employeeId = req.params.id;
    Employee.update(employee,{
        where:{id:employeeId}
    }).then(response => {
        console.log(employee, employeeId);
        res.status.send(200).send(response);
    }).catch(err =>{
        res.status(500).send({
            message: "Error occured while updating the employee data!"
        });
    });
};

// Deleting an employee from the database on the basis of employee id
exports.delete = (req, res) =>{
    const employeeId = req.params.id;
    Employee.destroy({
        where:{
            id: employeeId
        }
    }).then(response => {
        res.status(200).send(response);
    }).catch(err =>{
        res.status(500).send({
            message: "Error occured while deleting the employee"
        })
    });
}

// Inserting a new employee into the database
exports.create = (req,res) => {
    // creating employee object to be stored in the database
    const employee = {
        name: req.body.name,
        age: req.body.age,
        department: req.body.department,
        position: req.body.position
    }
    // inserting employee object in the database
    Employee.create(employee).then(response =>{
        console.log(`employee: [${response} has been inserted in db]`);
        res.status(201).send(response);
    }).catch(err =>{
        console.log(`employee: [${err} not inserted in db]`);
        res.status(500).send({
            message: "Some internal error occured while inserting employee data"
        })
    })
}

// updating an employee