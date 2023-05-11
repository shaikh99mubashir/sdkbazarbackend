const mongoose = require('mongoose')
const multer = require('multer');



const BusinseeStep01 = mongoose.Schema(
    {

        image: {
            type: String,
            filename: String,
            url: String,
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
            type: Number,
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
        }
    }
)

const businessstep01 = mongoose.model('businessstep', BusinseeStep01)

module.exports = businessstep01