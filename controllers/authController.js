//Handle user authentication logic here
const User = require('../models/User');
const bcrypt = require('bcrypt');

//POST /login
//logic to handle login form submission
exports.login = async (req, res) => {
    //retrieve user credentials from request body
    const { email, password } = req.body;

    try{
        //find user with matching username
        const user = await User.findOne({ where: { email } });
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        //compare password with stored hash
        const valid = await bcrypt.compare(password, user.password);
        if(!valid){
            return res.status(401).json({ message: 'Incorrect password' });
        }

        //store user session and redirect to homepage
        req.session.userId = user.id;
        req.session.userRole = user.role;
        res.redirect('/');
    } catch(err){
        res.status(500).json({ message: err.message });
    }
};

//POST /register
//Logic to hand user registration (admin only) - Double check this, I think it can be handled in a different js file
exports.register = async (req, res) => {
    //retrieve user credentials from request body
    const { email, password, role } = req.body;

    try{
        //check if user already exists
        const user = await User.findOne({ where: { email } });
        if(user){
            return res.status(400).json({ message: 'User already exists' });
        }
        //hash password
        const hash = await bcrypt.hash(password, 10);
        //create new user
        const newUser = await User.create({ email, password: hash, role: role || 'user' });
        res.status(201).json(newUser);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
};