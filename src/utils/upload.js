var multer = require('multer')
const path = require("path")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: function (req, file, cb) {
        // cb(null, file.originalname)
        const ext = path.extname(file.originalname);
        const name = file.originalname.split('.')[0];
        cb(null, `${name}-${Date.now()}${ext}`)
    }
})
module.exports = multer({ storage })