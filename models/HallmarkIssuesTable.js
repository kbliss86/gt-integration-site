//Sequelize model for HallmarkIssuesTable
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

//define HallmarkClientMappingTable model
const HallmarkIssuesTable = sequelize.define('HallmarkIssuesTable', {
status: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
integrationOrderID: {
    type: DataTypes.INTEGER,
    allowNull: true,
unique: true
},
clientid: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false
},
nursetype: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
specialty: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
date_start: {
    type: DataTypes.DATE,
    allowNull: true,
    unique: false
},
date_end: {
    type: DataTypes.DATE,
    allowNull: true,
    unique: false
},
shiftStartTime: {
    type: DataTypes.TIME,
    allowNull: true,
    unique: false
},
shiftEndTime: {
    type: DataTypes.TIME,
    allowNull: true,
    unique: false
},
orderTypeLTID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false
},
billRate: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false
},
integrationType: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
}
});

module.exports = HallmarkIssuesTable;