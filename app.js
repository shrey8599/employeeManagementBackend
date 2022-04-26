const express = require('express');
const app = express();
const serverConfig = require('./config/server.config.js');
const db = require("./models");
// used to parse body from the api request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

function init(){
    var employeeData = [
        {
            name: "Shreyansh",
            age: 22,
            department: "Development",
            position: "Software Engineer",
        },
        {
            name: "Swagat",
            age: 23,
            department: "IT",
            position: "Product Analyst",
        },
        {
            name: "Karamjeet",
            age: 23,
            department: "Operations",
            position: "Manager",
        }
    ]

    db.employee.bulkCreate(employeeData).then(()=>{
        console.log("Employee table initialised with employee data");
    }).catch((err)=>{
        console.log("Error while initialising employee table", err);
    })
}

db.sequelize.sync({force:true}).then(()=>{
    console.log("table is dropped and recreated");
    init();
})

require('./routes/employee.routes')(app);
app.listen(serverConfig.PORT,()=>{
    console.log("This server is working");
});