const mongoose = require('mongoose')

const BusinseeStep = mongoose.Schema(
    {
        login_ID: {
            type: String,
            require: true,
        },
        company_name: {
            type: String,
            require: true,
        },
        business_category: {
            type: String,
            require: true,
        },
        company_registration_number: {
            type: String,
            require: true,
        },
        tax_identifier: {
            type: String,
            require: true,
        },
        license_Type: {
            type: String,
            require: true
        },
        company_description: {
            type: String,
            require: true,
        },
        cover_image: {
            type: String,
            require: true,
        },
        profile_image: {
            type: String,
            require: true,
        },
        docunment1_image: {
            type: String,
            require: true,
        },
        docunment2_image: {
            type: String,
            require: true,
        },
        company_location: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        phone_number: {
            type: String,
            require: true,
        },
        fax_number: {
            type: String,
            require: true,
        },
        website: {
            type: String,
            require: true
        },
        manager_fullname: {
            type: String,
            require: true
        },
        manager_designation: {
            type: String,
            require: true
        },
        manager_email: {
            type: String,
            require: true
        },
        cnic_image: {
            type: String,
            require: true,
        },
    }
)


const businesssteps = mongoose.model('businessstep', BusinseeStep)


module.exports = businesssteps
