const mongoose = require('mongoose')
const multer = require('multer');



const BusinseeStep01 = mongoose.Schema(
    {
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
    }
)


const businessstep01 = mongoose.model('businesssteps', BusinseeStep01)


module.exports = businessstep01
