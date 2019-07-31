const jwt = require('jwt-simple');
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const config = require('../config/baseConfig');

const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {

    app.get('/', (req, res, next) => {
        res.send({ message: "HSSE API"});
    });

    app.get('/auth', requireAuth, (req, res, next) => {
        res.send({ message: 'Authenticated Route' })
    });

    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
    
    app.get('/confirmuser/:token', Authentication.confirmUser);
    app.post('/forgotpassword', Authentication.sendPasswordResetEmail);
    app.post('/resetpassword/:token', Authentication.resetPassword);

    app.get('/currentuser', Authentication.currentUser);
    app.get('/fetchuserbyemail', Authentication.fetchUserByEmail);
    app.get('/fetchallusers', Authentication.fetchAllUsers);

    app.post('/activateuser', Authentication.activateUser);
    app.post('/deactivateuser', Authentication.deactivateUser);

    app.post('/addrole', Authentication.addRole);
    app.post('/removerole', Authentication.removeRole);
    app.post('/updaterole', Authentication.updateRole);
    
};