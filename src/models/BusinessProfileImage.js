const mongoose = require('mongoose');

const ProfileImage = new mongoose.Schema({
    login_ID: String,
    filename: String,
    url: String,
});

const BusinessPofileImage = mongoose.model('profileImage', ProfileImage);

module.exports = BusinessPofileImage