//import squelize library
const Sequelize = require('sequelize');

//intialize a new Sequelize instance
//Need environment variables for security (DB_NAME, DB_USER, DB_PASSWORD, DB_HOST - import from .env file)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
});

//test connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    module.exports = sequelize;