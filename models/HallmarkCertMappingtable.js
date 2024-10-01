//Sequelize model for HallmarkCertMappingTable
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

//define HallmarkClientMappingTable model
const HallmarkCertMappingTable = sequelize.define('HallmarkCertMappingTable', {
    HCert_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    GTCert_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = HallmarkCertMappingTable;