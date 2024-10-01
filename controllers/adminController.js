//Logic for handling admin functions like creating users
const User = require('../models/User');
const bcrypt = require('bcrypt');//May not be needed

//Get /admin/users
//Admin page logic for managing users
exports.getAdminPage = async (req, res) => {
    //fetch all users from the database
    const users = await User.findAll();
    res.rener('admin', { users });
};

//Post /admin/create-user
//Logic to handle user creation form submission
exports.createUser = async (req, res) => {
    //retrieve user credentials from request body
    const { email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    //Create new user
    try{
        await User.create({ email, password: hashedPassword, role });
        res.redirect('/admin');
    } catch(err){
        res.status(500).json({ message: err.message });
    }
};