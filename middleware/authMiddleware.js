//Middleware to ensure user is logged in
module.exports = (req, res, next) => {
    if (req.session.userId) {
        return next();
    } else {
        return res.redirect('/login');
    }
};