const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String },
    provider: { type: String, default: 'local' },
    googleId: { type: String },
    microsoftId: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
