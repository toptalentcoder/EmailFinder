const router = require('express').Router();
const passport = require('passport');
require('../config/passport');
const authController = require('../controllers/auth.controller');
const { verifyToken } = require('../middleware/auth.middleware');

// Local auth
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/change-password', verifyToken, authController.changePassword);

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), authController.authCallback);

// Microsoft OAuth
router.get('/microsoft', passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }));
router.post('/microsoft/callback', passport.authenticate('azuread-openidconnect', { session: false }), authController.authCallback);

module.exports = router;
