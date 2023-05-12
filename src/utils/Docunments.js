var multer = require('multer')
const path = require("path")

function generateId(length) {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsLength);
        const char = chars.charAt(randomIndex);
        result += char;
    }

    return result;
}

const id = 'image' + generateId(7); // add a prefix, like 'SDK', to the generated ID
console.log(id);
var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, path.join(__dirname, '../businessdocunment/'));
    },
    filename: function (req, file, cb) {
        // cb(null, file.originalname + id)
        const ext = path.extname(file.originalname);
        const name = file.originalname.split('.')[0];
        cb(null, `${name}-${Date.now()}${ext}`)
        // const result = name.replace(/\s+/g, '');
    }
})
module.exports = multer({ storage })

