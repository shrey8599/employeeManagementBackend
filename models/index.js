const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.json');
const env = "development";
const dbSettings = dbConfig[env];
const sequelize = new Sequelize(
    dbSettings.database,
    dbSettings.username,
    dbSettings.password,
    dbSettings.dialectInformation
);

const db = {Sequelize, sequelize};
db.employee = require('./employee.model')(sequelize, Sequelize);

module.exports = db;