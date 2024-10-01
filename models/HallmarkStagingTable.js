//Sequelize model for HallmarkStagingTable
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

//define HallmarkClientMappingTable model
const HallmarkStagingTable = sequelize.define('HallmarkStagingTable', {
jobID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
},
OrderLockedOn: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
LTANo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false
},
OrderStatus: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
JobTitle: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
Skill: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
OrderType: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
Location: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
Department: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
BillRate: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    unique: false
},
Shift: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
JobStartDate: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
JobEndDate: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
CreatedDate: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
JobDistDate: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
Positions: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false
},
ExpReq: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false
},
ContactName: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
Classification: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
AvailableStartDate: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
OfferedStartDate: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
AgencyName: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
CandidateName: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
ClockID: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
},
ExtJobID: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
}
});

module.exports = HallmarkStagingTable;