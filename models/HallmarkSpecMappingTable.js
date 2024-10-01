//Sequelize model for HallmarkSpecMappingTable
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

//define HallmarkClientMappingTable model
const HallmarkSpecMappingTable = sequelize.define('HallmarkSpecMappingTable', {
    HSpec_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    GTSpec_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = HallmarkSpecMappingTable;