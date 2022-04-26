const {employee} = require("../models");

const validateEmployeeRequest = (req, res, next) =>{
    // Checking if name already exists in the db
    if(!req.body.name || !req.body.department){
        res.status(400).send({
            message: "Name or Department of the employee can't be empty"
        })
        return;
    }
    next();
}
module.exports = {validateEmployeeRequest};