const mongoose = require('mongoose')

const jobSeekerStep = mongoose.Schema(
    {
        login_ID: {
            type: String,
            require: true,
        },
        first_name: {
            type: String,
            require: true,
        },
        last_name: {
            type: String,
            require: true,
        },
        profile_picture: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        gender: {
            type: String,
            require: true,
        },
        date_of_birth: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        cnic: {
            type: String,
            require: true,
        },
        phone_number: {
            type: String,
            require: true,
        },
        country: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        profession: {
            type: String,
            require: true,
        },
        work_experience: {
            type: String,
            require: true,
        },
        level_of_education: {
            type: String,
            require: true,
        },
        cv: {
            type: String,
            require: true,
        },
    }
)

const jobSeeker = mongoose.model('jobseekerstep', jobSeekerStep)
module.exports = jobSeeker