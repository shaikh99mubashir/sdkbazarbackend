var multer = require('multer')
const path = require("path")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
module.exports = multer({ storage })