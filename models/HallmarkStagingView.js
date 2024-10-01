//Sequelize model for HallmarkStagingView
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

//define HallmarkClientMappingTable model
const HallmarkStagingView = sequelize.define('HallmarkStagingView', {
status: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
},
integrationOrderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
unique: true
},
clientid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false
},
nursetype: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
},
specialty: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
},
date_start: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false
},
date_end: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false
},
shiftStartTime: {
    type: DataTypes.TIME,
    allowNull: false,
    unique: false
},
shiftEndTime: {
    type: DataTypes.TIME,
    allowNull: false,
    unique: false
},
orderTypeLTID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false
},
billRate: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false
},
integrationType: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
}
});

module.exports = HallmarkStagingView;