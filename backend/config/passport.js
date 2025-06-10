const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const MicrosoftStrategy = require('passport-azure-ad').OIDCStrategy;
const User = require('../models/user.model');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (_, __, profile, done) => {
    const user = await User.findOneAndUpdate(
        { googleId: profile.id },
        { email: profile.emails[0].value, provider: 'google', googleId: profile.id },
        { upsert: true, new: true }
    );
    done(null, user);
}));



passport.use(new MicrosoftStrategy({
    identityMetadata: `https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration`,
    clientID: process.env.MICROSOFT_CLIENT_ID,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
    redirectUrl: process.env.MICROSOFT_CALLBACK_URL,
    responseType: 'code',
    responseMode: 'form_post', // <-- THIS IS REQUIRED
    scope: ['profile', 'email', 'openid'],
    allowHttpForRedirectUrl: true, // only for development
}, async (iss, sub, profile, accessToken, refreshToken, done) => {
    try {
        const user = await User.findOneAndUpdate(
            { microsoftId: profile.oid },
            {
                email: profile._json.preferred_username,
                provider: 'microsoft',
                microsoftId: profile.oid
            },
            { upsert: true, new: true }
        );
        done(null, user);
    } catch (error) {
        done(error, null);
    }
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
