var multer = require('multer')
const path = require("path")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../businesscnic/'));
    },
    filename: function (req, file, cb) {
        // cb(null, Math.random() * 9999 + 9999 + '.' + file.originalname.split('.').pop());
        const ext = path.extname(file.originalname);
        const name = file.originalname.split('.')[0];
        cb(null, `${name}-${Date.now()}${ext}`)
    }
})
module.exports = multer({ storage })

