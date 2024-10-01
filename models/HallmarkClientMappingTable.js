//Sequelize model for HallmarkClientMappingTable
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

//define HallmarkClientMappingTable model
const HallmarkClientMappingTable = sequelize.define('HallmarkClientMappingTable', {
    Hclient_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Hclient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    GTclient_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    GTclient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
});

module.exports = HallmarkClientMappingTable;