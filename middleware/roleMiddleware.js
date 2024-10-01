//Middleware to ensure the user has the correct role admin/user
//this middleware will check if the logged in user has the appropriate role for the requested page

module.exports = (role) => {
    return (req, res, next) => {
        const userRole = req.session.userRole;

        //check if the user role matches the required role
        if (userRole === requiredRole || userRole === 'admin') {
            return next();
        } else {
            return res.status(403).json({ message: 'Forbidden' });
        }
    };
};