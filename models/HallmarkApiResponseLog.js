//Sequelize model for HallmarkAPIResponseLog
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

//define HallmarkClientMappingTable model
const HallmarkAPIResponseLog = sequelize.define('HallmarkAPIResponseLog', {
    API_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    API_Payload: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    API_Response: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = HallmarkAPIResponseLog;