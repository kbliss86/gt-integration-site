const express = require('express');
const sessions = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(sessions.Store);
const sequelize = require('./config/db');

//Initialize dotend configuration
require('./config/dotenv');

const app = express();

//Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Handlbars SetUp
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Session Handling with Sequelize
app.use(sessions({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({
        db: sequelize
    }),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } //set to true if using HTTPS
}));

//Define Routes
app.use('/', require('./routes/authRoutes'));
app.use('/admin', require('./routes/adminRoutes'));
app.use('/integration', require('./routes/integrationRoutes'));

//Start Server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});