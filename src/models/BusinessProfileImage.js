const mongoose = require('mongoose');

const ProfileImage = new mongoose.Schema({
    filename: String,
    url: String,
});

const BusinessPofileImage = mongoose.model('profileImage', ProfileImage);

module.exports = BusinessPofileImage